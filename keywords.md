# Keyword research — extractframeapp.com

_Researched 2026-09-28 · Market: US English · Target: iPhone users who want a still photo out of a video_

## Method & honesty note

- **Demand signals:** Google Autocomplete (US, `hl=en`) pulled for ~50 seed phrases; SERP composition checked for the head questions; App Store search results for "video to photo" reviewed for competitors.
- **No paid-tool volumes.** Google Trends rate-limited us (HTTP 429) and there's no Keyword Planner/Ahrefs access from here, so demand is given as **tiers** inferred from autocomplete depth (e.g. a query that autocompletes with *iphone 13/14/15/16/17* variants has real, sustained volume). Before investing further, confirm with Google Search Console → Performance and Keyword Planner.
- **Conversion lens:** every keyword was scored on _"will the searcher install an iPhone app to solve this?"_ Android/Windows/Premiere/CapCut/DaVinci variants were dropped — they rank but never convert for an iOS-only app.

Legend — **Demand**: ●●● high · ●● medium · ● niche. **Buy intent**: how likely the searcher installs an iPhone app. **KD**: our estimate of ranking difficulty from the SERP (Apple Community, big tech blogs, App Store pages).

---

## 1. Primary keywords (homepage)

The homepage should own the *product/category* terms. Title, H1, first paragraph, and App schema already align with these.

| Keyword | Demand | Buy intent | KD | Notes |
|---|---|---|---|---|
| **video to photo** | ●●● | High | High | Head term; autocomplete → *converter, iphone, app, frame grabber*. Matches app name. |
| **video to photo iphone** / **video to photo app** | ●● | Very high | Med | Direct product search. |
| **extract frame from video iphone** | ●● | Very high | Med | Autocompletes: *export / capture / get frame*, *one frame*, *all frames*, *app to …*. |
| **frame grabber app** / **frame grabber iphone** | ●● | Very high | Low–Med | "free frame grabber app iphone" also autocompletes. |
| **video frame extractor** | ●● | Medium | Med | Mixed with online tools; keep as secondary on homepage. |
| **photo from video** / **picture from video** | ●●● | High | High | Captured through the how-to guides (question form dominates). |

**Recommended homepage title (≤60):** `Video to Photo for iPhone – Extract Frames in HD | Grab Frame` → we use a shorter validated variant in `build/en.json`.

---

## 2. Long-tail keywords → one guide page each

Each guide lives at `/guides/<slug>/`, targets **one primary long-tail**, answers the question in the first 2 sentences (featured-snippet format), then shows the in-app workflow. FAQ items on the homepage link to these pages ("Learn more").

| # | Guide URL slug | Primary keyword | Supporting long-tails (same intent) | Demand | Buy intent | Why it converts |
|---|---|---|---|---|---|---|
| 1 | `how-to-get-a-picture-from-a-video-on-iphone` | **how to get a picture from a video on iphone** | how to take a picture from a video on iphone · how to pull a picture from a video on iphone · how to make a video into a picture on iphone · can you take a picture from a video on iphone · how to get a still from a video on iphone · extract photo from video iphone | ●●● | High | iOS Photos has **no** save-frame button, so the answer *is* an app. Top autocomplete for the whole "picture from a video" family. |
| 2 | `screenshot-video-iphone-without-losing-quality` | **how to screenshot a video on iphone without losing quality** | how to screenshot a video on iphone · how to turn a video into a photo on iphone without screenshot · high quality screenshot from video iphone · how to get a picture from a video without screenshotting | ●●● | High | Autocompletes with every iPhone model (11–17) → huge base; pain = blurry, UI-covered screenshots. |
| 3 | `save-frame-from-video-iphone` | **how to save a frame from a video on iphone** | save frame from video iphone · export frame from video iphone · how to save a still image from a video on iphone · how to save a single frame from a video on iphone · save frame from video as photo iphone | ●● | Very high | "Save/export frame" wording = user already knows what a frame is → ready to install a tool. |
| 4 | `frame-grabber-app-iphone` | **frame grabber app for iphone** | free frame grabber app iphone · best app to get pictures from video · app to extract frame from video iphone · video to photo app | ●● | Very high | Commercial comparison intent; page explains what to look for and why this app fits. |
| 5 | `extract-multiple-frames-from-video` | **how to extract multiple frames from a video** | how to extract all frames from a video · how to get all frames from a video · extract all frames from video iphone · extract images from video frame by frame | ●● | High | Batch export + ZIP is a differentiator; desktop answers (ffmpeg/VLC) are hard for phone users. |
| 6 | `frame-by-frame-video-iphone` | **how to go frame by frame on iphone video** | frame by frame video iphone · how to see frame by frame iphone video · play frame by frame iphone video · can you go frame by frame on iphone video | ●● | Medium | Photos app can't step single frames precisely; people want to *find* the moment → then grab it. |
| 7 | `clear-high-quality-picture-from-video` | **how to get a clear picture from a video** | how to get a high quality picture from a video · high quality frame from video · extract high quality image from video · how to get a good photo from a video iphone | ●● | High | Quality intent; tips on motion blur / 4K / 60 fps + native-resolution export. |
| 8 | `video-to-jpg-png-heic-iphone` | **video to jpg converter high quality** | video to jpg · video to png · video to png frames · video to heic · convert video to image iphone · video to image converter app | ●● | Medium–High | Format intent; the app exports all three natively. Explains which to pick. |
| 9 | `video-frames-to-pdf` | **video frames to pdf** | video to pdf · convert video frames to pdf · video to pdf converter free · make stills from video · storyboard from video | ● | High | Low competition; PDF export is rare → easy win, strong match for teachers / storyboarders. |
| 10 | `make-thumbnail-from-video-iphone` | **how to make a thumbnail from a video on iphone** | thumbnail from video · get thumbnail from video · youtube thumbnail from video iphone · best frame from video | ●● | High | Creator audience; ties into existing blog post on thumbnails (cross-linked). |

### Cannibalization guard

Existing blog posts target overlapping intents. Mapping so pages support rather than compete:

| Blog post | Owns | Guide that links to it |
|---|---|---|
| `/blog/extract-frame-from-video-iphone/` | *extract frame from video iphone* (informational, generic) | #3 save-frame, #1 |
| `/blog/save-still-image-from-video/` | *save still image from video* (cross-device) | #1 |
| `/blog/create-thumbnails-from-videos/` | *create thumbnails from videos* (generic) | #10 |
| `/blog/heic-vs-jpg-exporting-frames/` | *heic vs jpg* | #8 |
| `/blog/convert-live-photos-to-still-images/` | *live photo to still* | #1 |
| `/blog/best-apps-extract-frames-from-video/` | *best apps extract frames* (listicle) | #4 |

Guides are the **iPhone-specific, action pages**; blog posts are broader explainers. Each guide links up to the homepage with exact-match anchor and sideways to 2–3 sibling guides.

---

## 3. Keywords deliberately not targeted

| Keyword family | Reason |
|---|---|
| *… android / samsung / pixel / google photos* | Wrong platform, zero conversion. |
| *… premiere pro / davinci / capcut / vlc / ffmpeg / windows* | Desktop-software intent. |
| *video to photo ai*, *best frame to video ai* | Different product (generative AI). |
| *extract frame from video online*, *video frame extractor from url/youtube* | Want a browser tool / URL input. Mentioned only as a comparison inside guides. |
| *video to live photo* | Opposite direction (photo → video). |

---

## 4. On-page implementation checklist (done in this build)

- Homepage `<title>` + meta description updated for *video to photo iphone* / *extract frames*.
- H1 contains the primary keyword; H2s use secondary terms naturally.
- 10 FAQ Q&As (one per guide) with FAQPage JSON-LD + "Learn more" internal links.
- Each guide: unique title (50–60 chars), meta description (150–160), H1 = primary keyword phrasing, answer-first intro, numbered HowTo with `HowTo` + `FAQPage` + `BreadcrumbList` + `Article` JSON-LD, screenshot images with descriptive alt, App Store CTA above the fold and at the end.
- `/guides/` hub page (CollectionPage) linked from homepage + footer; all guides in `sitemap.xml`.

## 5. ASO follow-ups (App Store, outside this repo)

- Subtitle "Extract stills, save offline" spends 30 chars on low-volume words; consider **"Extract HD Stills & Frames"** or **"Frame Grabber: Save Stills"** (adds *frame grabber*, *HD*).
- Keyword field candidates (don't repeat title/subtitle words): `grabber,extractor,capture,still,picture,pic,image,screenshot,snapshot,jpg,png,heic,hd,4k,thumbnail,convert,converter,pdf,zip,clip,moment`
- Rating count (12) is the biggest conversion drag vs competitors (400–2.1K). Add `SKStoreReviewController` prompt after a successful export.
