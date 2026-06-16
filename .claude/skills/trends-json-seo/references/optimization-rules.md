# JSON SEO optimization rules (post-Trends)

Apply **after** running `scripts/trends-keywords.py` and reviewing the keyword pool.

## Keyword selection from Trends output

1. **Rising queries** → new FAQ questions, `hero.subtitle`, `seo_chapter` headings.
2. **Top queries** (high volume) → `meta.title`, `hero.title`, `meta.keywords`.
3. **Suggestions** → synonyms for `app_info.alternate_name`, `features` titles.
4. Drop branded competitor names, irrelevant news spikes, and adult/off-topic terms.
5. Prefer queries with **locale-appropriate language** (geo matches `meta.geo_region`).

## Writing rules

- **One primary keyword** per page (usually matches `hero.title` intent).
- **Natural density**: primary term 3–6× across visible copy; secondary terms 1–2× each.
- **No stuffing**: if a Trends term sounds unnatural in the target language, use a close variant.
- **Search intent**: informational queries → FAQ/`seo_chapter`; transactional → hero/CTA/meta.
- **Snippets**: first sentence of FAQ answers and `entity_definition` must stand alone.
- **Brand**: keep `Video To Photo - Grab Frame` (or localized App Store name) consistent.

## Locale workflow

- Optimize **one locale at a time** unless the user requests a batch.
- Seeds for Trends must come from **that locale’s** `build/{lang}.json` (`hero.title`, first 3 `meta.keywords` terms), not English, except for `en`.
- Re-run Trends per locale when geo differs (script uses `meta.geo_region` automatically).

## Quality gates before saving

- [ ] `meta.title` ≤ 60 characters (warn if > 60).
- [ ] `meta.description` 150–160 characters (acceptable 140–165).
- [ ] Every new FAQ question appears in Trends `top` or `rising` for that geo.
- [ ] No placeholder or English left in non-`en` files.
- [ ] JSON valid; `npm run validate` passes.

## Relationship to other skills

- **app-website-translation**: use for new locales or copy that must read native; this skill adjusts SEO terms, not full re-translation.
- **seo-audit**: run after large batch changes if rankings/traffic are a concern.
- **geo-optimization**: optional pass on `entity_definition`, FAQ, stats for AI citations.
