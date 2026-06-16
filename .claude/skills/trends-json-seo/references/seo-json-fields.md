# SEO-relevant fields in `build/*.json`

Optimize these keys per locale file (`build/{lang}.json`). Do **not** change structure, placeholders (`{{app_info.name}}`, `{year}`), URLs, IDs, or factual App Store stats unless the user asks.

## Priority 1 — meta (SERP + social)

| Key | Limits / notes |
|-----|----------------|
| `meta.title` | ~50–60 chars; primary keyword near start; brand at end if space |
| `meta.description` | 150–160 chars; keyword + benefit + soft CTA |
| `meta.keywords` | Comma-separated; 8–15 terms from Trends pool; no stuffing |
| `meta.og_title` | Can be shorter than `title`; share-friendly |
| `meta.og_description` | ~120–200 chars; benefit-led |
| `meta.twitter_title` | Align with `og_title` |
| `meta.twitter_description` | Align with `og_description` |

## Priority 2 — hero + above-the-fold

| Key | Notes |
|-----|-------|
| `hero.title` | H1 equivalent; primary keyword, natural phrasing |
| `hero.subtitle` | Secondary keyword or intent variant |
| `hero.entity_definition` | Definition snippet (40–60 words); include entity name + category |
| `hero.subheadline` | Supporting keywords; user benefit |
| `hero.phone_text`, `hero.qr_text` | Light keyword touch if natural |

## Priority 3 — FAQ + long-tail

| Key | Notes |
|-----|-------|
| `faq.title` | Question-style or topic cluster heading |
| `faq.items[].question` | Match real search queries from Trends (especially **rising**) |
| `faq.items[].answer` | Direct answer in first sentence (40–80 words); keyword once |

Add FAQ items only when Trends shows sustained demand; cap ~8–10 per locale.

## Priority 4 — content blocks

| Key | Notes |
|-----|-------|
| `features.title`, `features.items[].title` | Feature keywords users search |
| `features.items[].description` | One secondary term per item max |
| `seo_chapter.title`, `seo_chapter.subtitle`, `seo_chapter.intro` | Pillar content; primary + 2–3 related terms |
| `seo_chapter.sections[].heading`, `body` | H2/H3 keyword variants |
| `seo_chapter.bullets[]` | Use-case long-tail phrases |
| `demo.title`, `howto_steps.items[].name` | How-to / instructional queries |
| `comparison.title`, `comparison.intro` | “vs” / alternative intent |
| `floating_cta.text`, `footer.cta_text` | Short CTA; avoid keyword spam |

## Priority 5 — app_info (schema-facing)

| Key | Notes |
|-----|-------|
| `app_info.alternate_name` | Common synonym from Trends top queries |

## Do not auto-edit

- `meta.canonical`, `meta.og_url`, `meta.lang`, `meta.geo_*`, `app_store_id`
- `by_the_numbers`, `stats`, `testimonials` (factual)
- `last_updated.text` (update date only when content actually changes)

## After edits

1. Run `npm run build` from repo root.
2. Run `npm run validate`.
3. Spot-check title/description length per locale.
