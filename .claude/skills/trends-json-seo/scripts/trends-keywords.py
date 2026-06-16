#!/usr/bin/env python3
"""
Fetch Google Trends keyword pools (related + rising queries) by topic and locale.

Uses pytrends (unofficial Google Trends API). Reads geo/hl from project build/*.json
when --project-root points at the extractframeapp repo.

Examples:
    pip install -r requirements.txt

    # Single locale, explicit seeds
    python3 trends-keywords.py --lang en --seeds "extract frame from video,video to photo"

    # All project locales, seeds from each JSON file
    python3 trends-keywords.py --all-langs --project-root ../../../..

    # Topic shorthand (English seeds applied to each locale's geo)
    python3 trends-keywords.py --topic "video frame extractor" --langs en,de,ru
"""

from __future__ import annotations

import argparse
import json
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

try:
    from pytrends.request import TrendReq
except ImportError:
    print(
        "Missing dependency: pip install -r requirements.txt",
        file=sys.stderr,
    )
    sys.exit(1)

# ISO 639-1 lang -> Google Trends hl (interface language)
HL_BY_LANG: dict[str, str] = {
    "en": "en-US",
    "ru": "ru-RU",
    "es": "es-ES",
    "fr": "fr-FR",
    "de": "de-DE",
    "it": "it-IT",
    "pt": "pt-PT",
    "ja": "ja-JP",
    "ko": "ko-KR",
    "nl": "nl-NL",
    "pl": "pl-PL",
    "ro": "ro-RO",
    "th": "th-TH",
    "tr": "tr-TR",
    "uk": "uk-UA",
    "vi": "vi-VN",
    "cs": "cs-CZ",
    "zh": "zh-CN",
    "da": "da-DK",
    "el": "el-GR",
    "fi": "fi-FI",
    "fil": "fil-PH",
    "he": "iw-IL",
    "hr": "hr-HR",
    "hu": "hu-HU",
    "id": "id-ID",
    "ms": "ms-MY",
    "no": "nb-NO",
    "sk": "sk-SK",
    "sv": "sv-SE",
    "bg": "bg-BG",
    "sl": "sl-SI",
    "ca": "ca-ES",
    "hi": "hi-IN",
    "bn": "bn-IN",
    "ta": "ta-IN",
    "te": "te-IN",
    "ml": "ml-IN",
}

DEFAULT_EN_SEEDS = [
    "extract frame from video",
    "video to photo",
    "video frame extractor",
]

REQUEST_DELAY_SEC = 4.0
MAX_RETRIES = 3
RETRY_BACKOFF_SEC = 8.0

# Drop obvious noise from Trends suggestions (books, unrelated apps)
SUGGESTION_NOISE = (
    "for dummies",
    "guide to digital",
    "david busch",
    "nikon ",
    "gopro hero",
    "essential field guide",
)


def find_project_root(explicit: Path | None) -> Path | None:
    if explicit is not None:
        root = explicit.resolve()
        if (root / "build" / "constants.js").is_file():
            return root
        print(f"Warning: {root} has no build/constants.js", file=sys.stderr)
        return root
    here = Path(__file__).resolve()
    for parent in here.parents:
        if (parent / "build" / "constants.js").is_file():
            return parent
    return None


def load_languages(project_root: Path | None) -> list[str]:
    if project_root is None:
        return ["en"]
    constants = project_root / "build" / "constants.js"
    text = constants.read_text(encoding="utf-8")
    # Minimal parse: LANGUAGES = [ 'en', 'ru', ... ];
    start = text.find("const LANGUAGES = [")
    if start == -1:
        return ["en"]
    end = text.find("];", start)
    block = text[start:end]
    langs: list[str] = []
    for part in block.split("'"):
        token = part.strip().strip(",").strip()
        if len(token) == 2 or token in ("fil",):
            langs.append(token)
    return langs or ["en"]


def load_locale_meta(project_root: Path, lang: str) -> dict:
    path = project_root / "build" / f"{lang}.json"
    if not path.is_file():
        return {"geo": "", "hl": HL_BY_LANG.get(lang, "en-US"), "seeds": []}
    data = json.loads(path.read_text(encoding="utf-8"))
    meta = data.get("meta", {})
    hero = data.get("hero", {})
    keywords = [
        k.strip() for k in meta.get("keywords", "").split(",") if k.strip()
    ]
    seeds: list[str] = []
    if hero.get("title"):
        seeds.append(hero["title"])
    seeds.extend(keywords[:3])
    # dedupe preserving order
    seen: set[str] = set()
    unique_seeds: list[str] = []
    for s in seeds:
        key = s.lower()
        if key not in seen:
            seen.add(key)
            unique_seeds.append(s)
    return {
        "geo": meta.get("geo_region", ""),
        "hl": HL_BY_LANG.get(lang, meta.get("og_locale", "en-US").replace("_", "-")),
        "seeds": unique_seeds,
        "geo_placename": meta.get("geo_placename", ""),
    }


def dataframe_to_rows(df, limit: int) -> list[dict]:
    if df is None or df.empty:
        return []
    rows: list[dict] = []
    for _, row in df.head(limit).iterrows():
        item = {"query": str(row["query"])}
        if "value" in row:
            val = row["value"]
            item["value"] = int(val) if str(val).isdigit() else str(val)
        rows.append(item)
    return rows


def is_relevant_suggestion(title: str, seeds: list[str]) -> bool:
    lower = title.lower()
    if any(noise in lower for noise in SUGGESTION_NOISE):
        return False
    if len(title) > 80:
        return False
    seed_tokens = {
        tok
        for seed in seeds
        for tok in seed.lower().replace("-", " ").split()
        if len(tok) > 3
    }
    if not seed_tokens:
        return True
    return any(tok in lower for tok in seed_tokens)


def fetch_for_seed(
    pytrends: TrendReq,
    seed: str,
    geo: str,
    top_n: int,
    delay: float,
) -> dict:
    last_error: str | None = None
    for attempt in range(MAX_RETRIES):
        try:
            pytrends.build_payload(
                kw_list=[seed],
                cat=0,
                timeframe="today 12-m",
                geo=geo or "",
                gprop="",
            )
            related = pytrends.related_queries()
            bucket = related.get(seed) or {}
            return {
                "top": dataframe_to_rows(bucket.get("top"), top_n),
                "rising": dataframe_to_rows(bucket.get("rising"), top_n),
            }
        except Exception as exc:
            last_error = str(exc)
            if "429" in last_error and attempt < MAX_RETRIES - 1:
                wait = RETRY_BACKOFF_SEC * (attempt + 1)
                print(
                    f"  Rate limited on '{seed}', retry in {wait:.0f}s...",
                    file=sys.stderr,
                )
                time.sleep(wait)
                continue
            break
    return {"error": last_error or "unknown", "top": [], "rising": []}


def fetch_suggestions(pytrends: TrendReq, seed: str, seeds: list[str]) -> list[str]:
    try:
        raw = pytrends.suggestions(keyword=seed)
        titles = [item.get("title", "") for item in raw if item.get("title")]
        return [t for t in titles if is_relevant_suggestion(t, seeds)]
    except Exception:
        return []


def pool_keywords(locale_result: dict) -> list[str]:
    pooled: list[str] = []
    seen: set[str] = set()
    for seed_data in locale_result.get("queries", {}).values():
        for group in ("top", "rising"):
            for row in seed_data.get(group, []):
                q = row.get("query", "").strip()
                if q and q.lower() not in seen:
                    seen.add(q.lower())
                    pooled.append(q)
    for s in locale_result.get("suggestions", []):
        if s and s.lower() not in seen:
            seen.add(s.lower())
            pooled.append(s)
    return pooled


def process_locale(
    lang: str,
    seeds: list[str],
    geo: str,
    hl: str,
    top_n: int,
    delay: float,
) -> dict:
    pytrends = TrendReq(hl=hl, tz=360, timeout=(10, 25))
    result: dict = {
        "lang": lang,
        "geo": geo,
        "hl": hl,
        "seeds": seeds,
        "queries": {},
        "suggestions": [],
    }
    for seed in seeds:
        time.sleep(delay)
        result["queries"][seed] = fetch_for_seed(
            pytrends, seed, geo, top_n, delay
        )
        time.sleep(delay)
        try:
            result["suggestions"].extend(
                fetch_suggestions(pytrends, seed, seeds)
            )
        except Exception:
            pass
    # dedupe suggestions
    seen: set[str] = set()
    deduped: list[str] = []
    for s in result["suggestions"]:
        if s.lower() not in seen:
            seen.add(s.lower())
            deduped.append(s)
    result["suggestions"] = deduped[: top_n * 2]
    result["pooled_keywords"] = pool_keywords(result)
    return result


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Google Trends keyword pool by topic and locale (pytrends)."
    )
    parser.add_argument(
        "--project-root",
        type=Path,
        default=None,
        help="Repo root with build/*.json (auto-detected if omitted)",
    )
    parser.add_argument(
        "--lang",
        "--locale",
        dest="lang",
        help="Single language code (e.g. en, de, ru)",
    )
    parser.add_argument(
        "--langs",
        help="Comma-separated language codes",
    )
    parser.add_argument(
        "--all-langs",
        action="store_true",
        help="All languages from build/constants.js",
    )
    parser.add_argument(
        "--topic",
        help="Single English seed keyword (shorthand for --seeds)",
    )
    parser.add_argument(
        "--seeds",
        help="Comma-separated seed keywords (overrides JSON-derived seeds)",
    )
    parser.add_argument(
        "--geo",
        help="Override Google Trends geo (ISO country code, e.g. US, DE)",
    )
    parser.add_argument(
        "--top-n",
        type=int,
        default=15,
        help="Max related queries per seed (default: 15)",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=REQUEST_DELAY_SEC,
        help="Seconds between Trends requests (default: 2)",
    )
    parser.add_argument(
        "--output",
        "-o",
        type=Path,
        help="Write JSON report to file (default: stdout)",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    project_root = find_project_root(args.project_root)

    if args.all_langs:
        langs = load_languages(project_root)
    elif args.langs:
        langs = [x.strip() for x in args.langs.split(",") if x.strip()]
    elif args.lang:
        langs = [args.lang]
    else:
        langs = ["en"]

    explicit_seeds: list[str] | None = None
    if args.topic:
        explicit_seeds = [args.topic.strip()]
    elif args.seeds:
        explicit_seeds = [s.strip() for s in args.seeds.split(",") if s.strip()]

    report: dict = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "topic": args.topic or (explicit_seeds[0] if explicit_seeds else None),
        "project_root": str(project_root) if project_root else None,
        "locales": {},
        "global_pooled_keywords": [],
    }

    global_seen: set[str] = set()

    for lang in langs:
        geo = args.geo or ""
        hl = HL_BY_LANG.get(lang, "en-US")
        seeds = explicit_seeds or DEFAULT_EN_SEEDS.copy()

        if project_root is not None:
            meta = load_locale_meta(project_root, lang)
            if not args.geo:
                geo = meta["geo"]
            hl = meta["hl"]
            if explicit_seeds is None and meta["seeds"]:
                seeds = meta["seeds"][:3]

        print(f"Fetching Trends for {lang} (geo={geo or 'worldwide'})...", file=sys.stderr)
        locale_result = process_locale(lang, seeds, geo, hl, args.top_n, args.delay)
        report["locales"][lang] = locale_result
        for kw in locale_result.get("pooled_keywords", []):
            if kw.lower() not in global_seen:
                global_seen.add(kw.lower())
                report["global_pooled_keywords"].append(kw)

    output = json.dumps(report, ensure_ascii=False, indent=2)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(output + "\n", encoding="utf-8")
        print(f"Wrote {args.output}", file=sys.stderr)
    else:
        print(output)
    return 0


if __name__ == "__main__":
    sys.exit(main())
