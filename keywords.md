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

---

## 6. Russian (ru) — `/ru/` and `/ru/guides/`

_Researched 2026-09-30 via Google Autocomplete (hl=ru, gl=ru). Same method and caveats as above; confirm with Yandex Wordstat before scaling._

Russian searchers say **«айфон»** far more than «iPhone», use **«фото из видео» / «кадр из видео»** rather than "frame", and add **«без потери качества» / «в хорошем качестве»** a lot. **CapCut** and **Android** variants were dropped (wrong product).

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/ru/guides/kak-sdelat-foto-iz-video-na-iphone/` | как сделать фото из видео на айфоне | как вырезать / достать / вытащить фото из видео на айфоне | picture from a video |
| 2 | `/ru/guides/skrinshot-video-iphone-bez-poteri-kachestva/` | скриншот видео на айфоне без потери качества | как сделать скриншот видео на айфоне (11–17), фото из видео без потери качества | screenshot |
| 3 | `/ru/guides/sohranit-kadr-iz-video-iphone/` | как сохранить кадр из видео на айфоне | …как фото, стоп кадр из видео на айфоне, извлечь кадр из видео айфон | save frame |
| 4 | `/ru/guides/prilozhenie-foto-iz-video/` | приложение фото из видео | приложение сделать / вырезать фото из видео | frame grabber app |
| 5 | `/ru/guides/vse-kadry-iz-video/` | извлечь все кадры из видео | как сохранить все кадры из видео, видео в фото по кадрам | multiple frames |
| 6 | `/ru/guides/pokadrovo-video-iphone/` | как покадрово посмотреть видео на айфоне | — | frame by frame |
| 7 | `/ru/guides/foto-iz-video-v-horoshem-kachestve/` | как сделать фото из видео в хорошем качестве | кадр из видео без потери качества | clear picture |
| 8 | `/ru/guides/video-v-jpg-png-heic/` | конвертировать видео в jpg | видео в jpg, конвертер видео в jpg, видео в фото конвертер | JPG/PNG/HEIC |
| 9 | `/ru/guides/raskadrovka-video-v-pdf/` | раскадровка видео | раскадровка видео по кадрам, видео в pdf | frames to PDF |
| 10 | `/ru/guides/oblozhka-iz-video-iphone/` | как сделать обложку видео на айфоне | обложка видео в тг / вк, превью из видео | thumbnail |

EN and RU guides are paired with `hreflang` via `translation_of` in each RU guide JSON.

---

## 7. Spanish (es) — `/es/` and `/es/guides/`

_Researched 2026-09-30 via Google Autocomplete (hl=es; gl=es and gl=mx gave near-identical results, so one neutral-Spanish page serves Spain + LatAm)._

Spanish searchers say **«sacar una foto de un video»**, **«fotograma»** (Spain) and **«frame»** (LatAm), and add **«sin perder calidad»** often. Pages use «video» (without accent) — dominant spelling in search. CapCut/Android/Premiere variants dropped.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/es/guides/como-sacar-una-foto-de-un-video-en-iphone/` | sacar una foto de un video en iPhone | como sacar una foto de un video en iphone, sacar fotos de un video iphone, como pasar un video a foto en iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/es/guides/captura-de-video-iphone-sin-perder-calidad/` | captura de un video en iPhone sin perder calidad | como hacer captura de un video en iphone, sacar fotos de un video sin perder calidad, como sacar un frame de un video sin perder calidad | screenshot-video-iphone-without-losing-quality |
| 3 | `/es/guides/guardar-fotograma-de-un-video-iphone/` | guardar un fotograma de un video en iPhone | como guardar un fotograma de un video iphone, sacar un frame de un video iphone, como pasar un video a foto en iphone | save-frame-from-video-iphone |
| 4 | `/es/guides/app-para-sacar-fotos-de-videos/` | app para sacar fotos de videos | app para sacar fotos de videos iphone, aplicacion para sacar fotos de un video, mejor app para sacar fotogramas de un video | frame-grabber-app-iphone |
| 5 | `/es/guides/extraer-fotogramas-de-un-video/` | extraer fotogramas de un video | extraer todos los fotogramas de un video, extraer fotogramas de un video iphone, extraer imagenes de un video | extract-multiple-frames-from-video |
| 6 | `/es/guides/video-fotograma-a-fotograma-iphone/` | video fotograma a fotograma en iPhone | ver video fotograma a fotograma iphone, ver todos los fotogramas de un video, avanzar video por fotogramas iphone | frame-by-frame-video-iphone |
| 7 | `/es/guides/foto-de-un-video-en-buena-calidad/` | foto de un video en buena calidad | como sacar una foto de buena calidad de un video, sacar fotos de un video sin perder calidad, extraer fotogramas de un video alta calidad | clear-high-quality-picture-from-video |
| 8 | `/es/guides/convertir-video-a-jpg-png/` | convertir video a JPG | video a jpg, convertidor video a jpg, convertir video a imagen png | video-to-jpg-png-heic-iphone |
| 9 | `/es/guides/video-a-pdf/` | convertir video a PDF | video a pdf, convertir video a pdf gratis, fotogramas de un video a pdf | video-frames-to-pdf |
| 10 | `/es/guides/portada-miniatura-de-un-video-iphone/` | portada o miniatura de un video en iPhone | como hacer una portada de un video, como hacer portada de video para youtube, hacer miniatura de un video | make-thumbnail-from-video-iphone |

---

## 8. French (fr) — `/fr/` and `/fr/guides/`

_Researched 2026-09-30 via Google Autocomplete (hl=fr, gl=fr)._

French searchers say **« extraire une photo d'une vidéo »**, **« capture d'écran vidéo iPhone »** (with iPhone model suffixes = strong volume), **« image »** rather than « frame ». CapCut/Windows/Samsung/VLC variants dropped.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/fr/guides/extraire-une-photo-d-une-video-iphone/` | extraire une photo d'une vidéo iPhone | comment extraire une photo d'une vidéo iphone, prendre une photo d'une vidéo iphone, sortir une photo d'une vidéo iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/fr/guides/capture-ecran-video-iphone-sans-perte/` | capture d'écran vidéo iPhone sans perte de qualité | capture d'écran vidéo iphone, capture d'écran vidéo iphone 15, capturer une image d'une vidéo iphone | screenshot-video-iphone-without-losing-quality |
| 3 | `/fr/guides/enregistrer-une-image-d-une-video-iphone/` | enregistrer une image d'une vidéo iPhone | enregistrer une image d une video iphone, capturer une image d'une vidéo iphone, arrêt sur image vidéo iphone | save-frame-from-video-iphone |
| 4 | `/fr/guides/application-extraire-photo-video/` | application pour extraire une photo d'une vidéo | application pour extraire photo d une video, app extraire image video iphone, meilleure application vidéo en photo | frame-grabber-app-iphone |
| 5 | `/fr/guides/extraire-toutes-les-images-d-une-video/` | extraire les images d'une vidéo | extraire toutes les images d une vidéo, extraire les photos d une vidéo, extraire image vidéo iphone | extract-multiple-frames-from-video |
| 6 | `/fr/guides/video-image-par-image-iphone/` | vidéo image par image sur iPhone | arrêt sur image vidéo iphone, lire une vidéo image par image iphone, avancer image par image iphone | frame-by-frame-video-iphone |
| 7 | `/fr/guides/photo-de-qualite-depuis-une-video/` | photo de bonne qualité à partir d'une vidéo | extraire une photo d'une vidéo sans perte de qualité, photo nette à partir d'une vidéo, vidéo en photo hd | clear-high-quality-picture-from-video |
| 8 | `/fr/guides/convertir-video-en-jpg-png/` | convertir une vidéo en JPG | vidéo en jpg, convertir vidéo en image, convertisseur vidéo en image | video-to-jpg-png-heic-iphone |
| 9 | `/fr/guides/video-en-pdf/` | vidéo en PDF | convertir vidéo en pdf, vidéo en pdf gratuit, images d'une vidéo en pdf | video-frames-to-pdf |
| 10 | `/fr/guides/miniature-video-youtube-iphone/` | miniature vidéo YouTube sur iPhone | miniature vidéo youtube, couverture vidéo youtube, créer une miniature à partir d'une vidéo | make-thumbnail-from-video-iphone |

---

## 9. German (de) — `/de/` and `/de/guides/`

_Researched 2026-09-30 via Google Autocomplete (hl=de, gl=de)._

German searchers use **„Foto aus Video iPhone“** (with iPhone 11–17 suffixes = strong volume), **„Bild aus Video extrahieren“**, **„Standbild“ / „Einzelbild“** and **„Screenshot von Video iPhone“**. Copy uses informal „du“. CapCut/Windows/Android/VLC/DaVinci variants dropped.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/de/guides/foto-aus-video-iphone/` | Foto aus Video iPhone | foto aus video machen iphone, bild aus video iphone, foto aus video extrahieren iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/de/guides/screenshot-video-iphone-ohne-qualitaetsverlust/` | Screenshot von Video iPhone ohne Qualitätsverlust | screenshot von video iphone, screenshot video iphone 16, aus video ganzes bild speichern iphone | screenshot-video-iphone-without-losing-quality |
| 3 | `/de/guides/standbild-aus-video-speichern-iphone/` | Standbild aus Video speichern iPhone | einzelbild aus video speichern iphone, bild aus video speichern iphone, standbild aus video erstellen iphone | save-frame-from-video-iphone |
| 4 | `/de/guides/app-foto-aus-video/` | App Foto aus Video | bilder aus video extrahieren app, app foto aus video iphone, beste app foto aus video | frame-grabber-app-iphone |
| 5 | `/de/guides/bilder-aus-video-extrahieren/` | Bilder aus Video extrahieren | bilder aus video extrahieren iphone, alle frames aus video extrahieren, frame aus video extrahieren iphone | extract-multiple-frames-from-video |
| 6 | `/de/guides/video-bild-fuer-bild-iphone/` | Video Bild für Bild ansehen iPhone | iphone video bild für bild, video bild für bild ansehen iphone, video einzelbild weiterschalten iphone | frame-by-frame-video-iphone |
| 7 | `/de/guides/foto-aus-video-gute-qualitaet/` | Foto aus Video in guter Qualität | foto aus video gute qualität, scharfes bild aus video, standbild aus video hd | clear-high-quality-picture-from-video |
| 8 | `/de/guides/video-in-jpg-umwandeln/` | Video in JPG umwandeln | video in jpg umwandeln iphone, video in bild umwandeln, video in jpg umwandeln app | video-to-jpg-png-heic-iphone |
| 9 | `/de/guides/video-in-pdf-umwandeln/` | Video in PDF umwandeln | video in pdf, video in pdf umwandeln kostenlos, video in pdf umwandeln iphone | video-frames-to-pdf |
| 10 | `/de/guides/thumbnail-aus-video-erstellen/` | Thumbnail aus Video erstellen | thumbnail aus video erstellen, thumbnail video iphone, youtube thumbnail aus video | make-thumbnail-from-video-iphone |

---

## 10. Italian (it) — `/it/` and `/it/guides/`

_Researched 2026-09-30 via Google Autocomplete (hl=it, gl=it)._

Italian searchers use **«estrarre foto da video»**, **«foto da video iPhone»**, **«fotogramma»** and **«screenshot video iPhone»** (with iPhone 11–17 suffixes). Copy uses informal «tu». CapCut/Android/VLC variants dropped.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/it/guides/estrarre-foto-da-video-iphone/` | estrarre foto da video iPhone | come estrarre una foto da un video iphone, come fare una foto da un video iphone, foto da video iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/it/guides/screenshot-video-iphone-senza-perdere-qualita/` | screenshot video iPhone senza perdere qualità | screenshot video iphone, screenshot video iphone 16, foto da video senza perdere qualità | screenshot-video-iphone-without-losing-quality |
| 3 | `/it/guides/salvare-fotogramma-video-iphone/` | salvare fotogramma video iPhone | salvare fotogramma da video iphone, fotogramma da video iphone, fermo immagine da video iphone | save-frame-from-video-iphone |
| 4 | `/it/guides/app-per-estrarre-foto-da-video/` | app per estrarre foto da video | app per estrarre foto da video iphone, foto da video app, migliore app foto da video | frame-grabber-app-iphone |
| 5 | `/it/guides/estrarre-fotogrammi-da-video/` | estrarre fotogrammi da video | estrarre fotogrammi da video iphone, convertire video in immagini, video in fotogrammi | extract-multiple-frames-from-video |
| 6 | `/it/guides/video-fotogramma-per-fotogramma-iphone/` | video fotogramma per fotogramma su iPhone | vedere video fotogramma per fotogramma iphone, fermo immagine video iphone, avanzare video fotogramma iphone | frame-by-frame-video-iphone |
| 7 | `/it/guides/foto-da-video-alta-qualita/` | foto da video in alta qualità | estrarre foto da video senza perdere qualità, foto nitida da video, fotogramma da video hd | clear-high-quality-picture-from-video |
| 8 | `/it/guides/convertire-video-in-jpg/` | convertire video in JPG | video in jpg, converti video in jpg, convertire video in immagini | video-to-jpg-png-heic-iphone |
| 9 | `/it/guides/video-in-pdf/` | video in PDF | convertire video in pdf, fotogrammi video in pdf, storyboard da video | video-frames-to-pdf |
| 10 | `/it/guides/miniatura-copertina-video-youtube/` | miniatura video YouTube da iPhone | miniatura video youtube, copertina video youtube, copertina video instagram | make-thumbnail-from-video-iphone |

---

## 11. Portuguese (pt) — `/pt/` and `/pt/guides/`

_Researched 2026-09-30 via Google Autocomplete (hl=pt-BR/gl=br and hl=pt-PT/gl=pt — results nearly identical)._

**Switched `/pt/` from European to Brazilian Portuguese** (og:locale `pt_BR`, geo BR, schema currency BRL): Brazil is by far the larger market and searchers in both countries use Brazilian phrasing — **«tirar foto de vídeo»**, **«print de vídeo»**, **«frame»**. CapCut/Samsung/PC variants dropped.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/pt/guides/como-tirar-foto-de-video-no-iphone/` | tirar foto de vídeo no iPhone | como tirar foto de um vídeo no iphone, como extrair foto de video iphone, tem como tirar foto de um video no iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/pt/guides/print-de-video-iphone-sem-perder-qualidade/` | print de vídeo no iPhone sem perder qualidade | print de video iphone, como tirar print de vídeo no iphone sem perder qualidade, tirar foto de video sem perder qualidade | screenshot-video-iphone-without-losing-quality |
| 3 | `/pt/guides/salvar-frame-de-video-iphone/` | salvar frame de vídeo no iPhone | salvar frame de video como foto iphone, exportar fotograma de video iphone, como salvar uma foto de um video no iphone | save-frame-from-video-iphone |
| 4 | `/pt/guides/app-para-tirar-foto-de-video/` | app para tirar foto de vídeo | app para tirar foto de video iphone, aplicativo para tirar foto de video, melhor app para extrair foto de video | frame-grabber-app-iphone |
| 5 | `/pt/guides/extrair-frames-de-video/` | extrair frames de vídeo | extrair todos os frames de video, extrair frames de video iphone, extrair imagens de video | extract-multiple-frames-from-video |
| 6 | `/pt/guides/video-frame-a-frame-iphone/` | vídeo frame a frame no iPhone | ver video frame a frame iphone, como ver todos os frames de video, passar video quadro a quadro iphone | frame-by-frame-video-iphone |
| 7 | `/pt/guides/tirar-foto-de-video-com-qualidade/` | tirar foto de vídeo com qualidade | tirar foto de video sem perder qualidade, como extrair foto de video sem perder qualidade, foto nítida de vídeo | clear-high-quality-picture-from-video |
| 8 | `/pt/guides/converter-video-para-jpg/` | converter vídeo para JPG | video para jpg, converter video em imagem, converter video em imagem png | video-to-jpg-png-heic-iphone |
| 9 | `/pt/guides/video-para-pdf/` | vídeo para PDF | converter video para pdf, passar video para pdf, video para pdf gratis | video-frames-to-pdf |
| 10 | `/pt/guides/capa-thumbnail-de-video-youtube/` | capa de vídeo para YouTube no iPhone | capa de video youtube, thumbnail de video, capa de video tiktok | make-thumbnail-from-video-iphone |

---

## 12. Japanese (ja) — `/ja/` and `/ja/guides/`

_Researched 2026-09-30 via Google Autocomplete (hl=ja, gl=jp). Yahoo! JAPAN uses Google's index, so the same terms apply._

Japanese searchers use **「動画から写真」「動画から静止画」「動画 切り出し 写真」**, and strongly signal the screenshot pain: **「動画 スクショ 画質落ちる」「スクショ以外」**. 「長押し」 also appears (iOS subject lift) — covered in guide #1. URL slugs are romaji. Reading time is estimated by characters (~500/min) for CJK.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/ja/guides/iphone-douga-kara-shashin/` | 動画から写真 iPhone | iphone 動画から写真, 動画から写真を切り取る方法 iphone, iphone 動画 切り出し 写真 | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/ja/guides/douga-sukusho-kougashitsu/` | 動画 スクショ 画質 | 動画 スクショ 画質落ちる, 動画 スクショ iphone, iphone 動画から写真 スクショ以外 | screenshot-video-iphone-without-losing-quality |
| 3 | `/ja/guides/douga-seishiga-hozon-iphone/` | iPhone 動画 静止画 保存 | iphone 動画 静止画 保存, iphone 動画 静止画 切り出し, 動画から静止画切り出し | save-frame-from-video-iphone |
| 4 | `/ja/guides/douga-kara-shashin-app/` | 動画から写真 アプリ | iphone 動画から写真 アプリ おすすめ, 動画 静止画 切り出し アプリ, 動画から写真 アプリ 無料 | frame-grabber-app-iphone |
| 5 | `/ja/guides/douga-frame-chushutsu/` | 動画 フレーム 抽出 | 動画 フレーム 抽出 アプリ, 動画 全 フレーム 抽出 スマホ, 動画から画像 切り出し | extract-multiple-frames-from-video |
| 6 | `/ja/guides/douga-komaokuri-iphone/` | 動画 コマ送り iPhone | iphone 動画 コマ送り 再生, iphone 動画 コマ送り アプリ, iphone 動画 コマ送り できない | frame-by-frame-video-iphone |
| 7 | `/ja/guides/douga-kara-shashin-kougashitsu/` | 動画から写真 高画質 | 動画から静止画を切り出す 高画質, iphone 動画から写真 高画質, 動画 静止画 切り出し 高画質 アプリ | clear-high-quality-picture-from-video |
| 8 | `/ja/guides/douga-jpg-henkan/` | 動画 JPG 変換 | iphone 動画 jpg 変換, 動画 を 画像 に 変換 iphone, スマホ 動画 jpg 変換 | video-to-jpg-png-heic-iphone |
| 9 | `/ja/guides/douga-pdf-henkan/` | 動画 PDF 変換 | 動画 を pdf に 変換, 動画 pdf 変換 iphone, 動画 pdf 変換 無料 | video-frames-to-pdf |
| 10 | `/ja/guides/youtube-thumbnail-douga-kara/` | サムネイル 動画から | youtube サムネイル 動画から, 動画から サムネイル 作成, youtube サムネイル 動画から選択 | make-thumbnail-from-video-iphone |

## 13. Korean (ko) — `/ko/` and `/ko/guides/`

_Researched 2026-09-30 via Google Autocomplete (hl=ko, gl=kr). Naver autocomplete not checked; Naver weighs its own Blog/Cafe content, so these pages mainly target Google._

Korean searchers say **「동영상 사진 추출」「동영상에서 사진 추출 아이폰」「아이폰 동영상 사진으로 저장」**. Screenshot pain uses the colloquial spelling **캡쳐** (not 캡처): 「동영상 캡쳐 화질」「아이폰 동영상 캡쳐 화질」, plus 「아이폰 동영상 캡쳐 어두워짐」 (HDR video → darker screenshot), covered in guide #2. 「동영상 프레임 추출」 is a strong head term (with 사이트/앱/프로그램 modifiers). Galaxy variants (갤럭시 동영상 사진 추출) exist but are out of scope for an iPhone app. URL slugs are romanized.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/ko/guides/iphone-dongyeongsang-sajin-chuchul/` | 아이폰 동영상 사진 추출 | 동영상에서 사진 추출 아이폰, 아이폰 동영상 사진으로 저장, 아이폰 동영상 사진으로 변환 | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/ko/guides/dongyeongsang-kaepcheo-hwajil/` | 동영상 캡쳐 화질 | 아이폰 동영상 캡쳐 화질, 동영상 캡쳐 고화질, 아이폰 동영상 캡쳐 어두워짐 | screenshot-video-iphone-without-losing-quality |
| 3 | `/ko/guides/dongyeongsang-sajin-jeojang-iphone/` | 아이폰 동영상 사진으로 저장 | 아이폰 동영상 사진으로 저장, 아이폰 영상 사진 저장, 동영상 정지화면 저장 아이폰 | save-frame-from-video-iphone |
| 4 | `/ko/guides/dongyeongsang-sajin-chuchul-app/` | 동영상 사진 추출 앱 | 아이폰 동영상 캡쳐 어플, 동영상 프레임 추출 앱, 동영상 사진 추출 어플 무료 | frame-grabber-app-iphone |
| 5 | `/ko/guides/dongyeongsang-frame-chuchul/` | 동영상 프레임 추출 | 아이폰 동영상 프레임 추출, 동영상 프레임 사진 추출, 동영상 프레임 추출기 | extract-multiple-frames-from-video |
| 6 | `/ko/guides/dongyeongsang-han-frame-ssik-iphone/` | 아이폰 동영상 프레임 단위 재생 | 아이폰 동영상 한 프레임씩, 아이폰 동영상 프레임 넘기기, 동영상 프레임 단위 이동 | frame-by-frame-video-iphone |
| 7 | `/ko/guides/dongyeongsang-sajin-gohwajil/` | 동영상 사진 추출 고화질 | 아이폰 동영상 고화질 캡쳐, 동영상 캡쳐 고화질, 동영상에서 선명한 사진 | clear-high-quality-picture-from-video |
| 8 | `/ko/guides/dongyeongsang-jpg-byeonhwan/` | 동영상 jpg 변환 | 아이폰 동영상 사진으로 변환, 동영상 png 변환, 동영상 이미지 변환 아이폰 | video-to-jpg-png-heic-iphone |
| 9 | `/ko/guides/dongyeongsang-pdf-byeonhwan/` | 동영상 pdf 변환 | 동영상 pdf 변환 아이폰, 동영상 캡쳐 pdf, 동영상 콘티 만들기 | video-frames-to-pdf |
| 10 | `/ko/guides/youtube-thumbnail-mandeulgi/` | 유튜브 썸네일 만들기 | 유튜브 썸네일 만들기 어플, 동영상 썸네일 추출, 유튜브 썸네일 만들기 무료 | make-thumbnail-from-video-iphone |

## 14. Dutch (nl) — `/nl/` and `/nl/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=nl, gl=nl); same terms work for Belgium (nl-BE)._

The Dutch head term is **"foto uit video halen"** (the verb *halen* dominates), almost always with **iphone** appended; also "foto maken/knippen/opslaan uit video iphone". **"still uit video halen"** and **"frame uit video halen"** are strong secondary terms. Screenshot searches are mostly model-specific ("screenshot video iphone 16") plus "iphone video screenshot dark" (HDR), which guide #2 covers. Conversion searches use English ("video jpg converter", "video pdf"), so the guides use "video naar JPG/PDF". Android/Samsung/Windows variants are out of scope.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/nl/guides/foto-uit-video-halen-iphone/` | foto uit video halen iPhone | foto uit video iphone, foto maken uit video iphone, foto knippen uit video iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/nl/guides/screenshot-video-iphone-zonder-kwaliteitsverlies/` | screenshot video iPhone | screenshot video iphone, iphone video screenshot donker, screenshot video iphone wazig | screenshot-video-iphone-without-losing-quality |
| 3 | `/nl/guides/still-uit-video-opslaan-iphone/` | still uit video halen iPhone | still uit video halen, stilstaand beeld uit video iphone, frame uit video halen iphone | save-frame-from-video-iphone |
| 4 | `/nl/guides/app-foto-uit-video-halen/` | app foto uit video halen | app foto uit video halen iphone, beste app foto uit video, gratis app foto uit video | frame-grabber-app-iphone |
| 5 | `/nl/guides/frames-uit-video-halen/` | frames uit video halen | frame uit video halen, frame uit video halen iphone, afbeeldingen uit video halen | extract-multiple-frames-from-video |
| 6 | `/nl/guides/video-frame-voor-frame-iphone/` | video frame voor frame iPhone | video frame by frame iphone, video beeld voor beeld afspelen iphone, iphone video vertragen frame | frame-by-frame-video-iphone |
| 7 | `/nl/guides/scherpe-foto-uit-video/` | scherpe foto uit video | foto uit video wazig, foto uit video hoge kwaliteit, goede kwaliteit foto uit video iphone | clear-high-quality-picture-from-video |
| 8 | `/nl/guides/video-naar-jpg-png/` | video naar JPG | video naar jpg iphone, video naar png, video omzetten naar foto | video-to-jpg-png-heic-iphone |
| 9 | `/nl/guides/video-naar-pdf/` | video naar PDF | video omzetten naar pdf, video naar pdf iphone, storyboard van video maken | video-frames-to-pdf |
| 10 | `/nl/guides/thumbnail-maken-van-video/` | thumbnail maken van video | thumbnail maken youtube, thumbnail maken gratis, youtube thumbnail maken iphone | make-thumbnail-from-video-iphone |

## 15. Polish (pl) — `/pl/` and `/pl/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=pl, gl=pl)._

Polish searchers phrase it as a question: **"jak zrobić zdjęcie z filmu iphone"**. The iPhone suggestions are unusually rich: "jak wyciągnąć / wyciąć / wyodrębnić / zapisać zdjęcie z filmu iphone" and "czy da się zrobić zdjęcie z filmu iphone". A second cluster uses *klatka*: **"klatka z filmu jako zdjęcie iphone"**, "jak zapisać klatkę z filmu jako zdjęcie iphone", "stopklatka z filmu iphone", "wycinanie klatki z filmu iphone". "zdjęcie z filmu" alone is noisy (crossword and movie-still searches), so titles always add iPhone. "miniatura youtube wymiary" is the top thumbnail query and is answered in guide #10's FAQ.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/pl/guides/jak-zrobic-zdjecie-z-filmu-iphone/` | jak zrobić zdjęcie z filmu iPhone | zdjęcie z filmu iphone, jak wyciągnąć zdjęcie z filmu iphone, jak zapisać zdjęcie z filmu iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/pl/guides/zrzut-ekranu-z-filmu-iphone-bez-utraty-jakosci/` | zrzut ekranu z filmu iPhone | zrzut ekranu z filmu, jak zrobić zrzut ekranu z filmu, zrzut ekranu filmu ciemny iphone | screenshot-video-iphone-without-losing-quality |
| 3 | `/pl/guides/zapisac-klatke-z-filmu-iphone/` | jak zapisać klatkę z filmu iPhone | jak zapisać klatkę z filmu jako zdjęcie iphone, klatka z filmu jako zdjęcie iphone, stopklatka z filmu iphone | save-frame-from-video-iphone |
| 4 | `/pl/guides/aplikacja-zdjecie-z-filmu/` | aplikacja zdjęcie z filmu | aplikacja do wycinania klatek z filmu, aplikacja zdjęcie z filmu iphone, darmowa aplikacja zdjęcie z filmu | frame-grabber-app-iphone |
| 5 | `/pl/guides/wycinanie-klatek-z-filmu/` | wycinanie klatek z filmu | wycinanie klatki z filmu iphone, klatki z filmu, eksport klatki z filmu | extract-multiple-frames-from-video |
| 6 | `/pl/guides/film-klatka-po-klatce-iphone/` | film klatka po klatce iPhone | odtwarzanie klatka po klatce iphone, przewijanie filmu klatka po klatce, stopklatka iphone | frame-by-frame-video-iphone |
| 7 | `/pl/guides/ostre-zdjecie-z-filmu/` | ostre zdjęcie z filmu | zdjęcie z filmu rozmazane, zdjęcie z filmu dobra jakość, zdjęcie z filmu wysoka jakość iphone | clear-high-quality-picture-from-video |
| 8 | `/pl/guides/film-na-jpg-png/` | film na JPG | jak zmienić film na jpg, film na jpg iphone, film na png | video-to-jpg-png-heic-iphone |
| 9 | `/pl/guides/film-do-pdf/` | film do PDF | jak zamienić film na pdf, film do pdf iphone, storyboard z filmu | video-frames-to-pdf |
| 10 | `/pl/guides/miniatura-youtube-z-filmu/` | miniatura YouTube z filmu | miniatura youtube, miniatura youtube wymiary, miniatura youtube shorts | make-thumbnail-from-video-iphone |

## 16. Romanian (ro) — `/ro/` and `/ro/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=ro, gl=ro)._

Romanian search volume is thin. Most Romanian how-to phrases ("cum fac poza din video", "extrage poze din video") return **no** autocomplete suggestions. Romanians often search **without diacritics** and **in English**. The confirmed terms are:

- **"poza din video iphone"**
- **"screenshot video iphone"** (plus model variants and "dark")
- **"captura video iphone"** and "captura foto de video iphone"
- **"video in jpg"** and "convertire video in jpg gratis"
- **"video in pdf"**
- "thumbnail youtube (size)" and "miniatura youtube"

Slugs are ASCII (no diacritics) to match those searches, while the body text uses correct diacritics. Titles lean on the English-loan terms (screenshot, thumbnail) that Romanians actually type.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/ro/guides/poza-din-video-iphone/` | poză din video iPhone | poza din video iphone, cum faci o poză dintr-un video pe iPhone, captura foto de video iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/ro/guides/screenshot-video-iphone-fara-pierderea-calitatii/` | screenshot video iPhone | screenshot video iphone, captura video iphone, captura de ecran video iphone | screenshot-video-iphone-without-losing-quality |
| 3 | `/ro/guides/salvare-cadru-din-video-iphone/` | salvare cadru din video iPhone | cum salvezi un cadru din video iphone, cadru din video ca poză, imagine statică din video iphone | save-frame-from-video-iphone |
| 4 | `/ro/guides/aplicatie-poza-din-video/` | aplicație poză din video | aplicatie poza din video iphone, aplicație extragere cadre video, aplicație gratuită poză din video | frame-grabber-app-iphone |
| 5 | `/ro/guides/extragere-cadre-din-video/` | extragere cadre din video | cadre din video, extrage poze din video, video în poze | extract-multiple-frames-from-video |
| 6 | `/ro/guides/video-cadru-cu-cadru-iphone/` | video cadru cu cadru iPhone | video frame by frame iphone, redare cadru cu cadru iphone, oprire pe cadru video iphone | frame-by-frame-video-iphone |
| 7 | `/ro/guides/poza-clara-din-video/` | poză clară din video | poză din video neclară, poză din video calitate bună, poză din video HD iphone | clear-high-quality-picture-from-video |
| 8 | `/ro/guides/video-in-jpg-png/` | video în JPG | video in jpg, convertire video in jpg gratis, video in jpg iphone | video-to-jpg-png-heic-iphone |
| 9 | `/ro/guides/video-in-pdf/` | video în PDF | video in pdf, video in pdf gratis, storyboard din video | video-frames-to-pdf |
| 10 | `/ro/guides/thumbnail-youtube-din-video/` | thumbnail YouTube din video | thumbnail youtube, thumbnail youtube size, miniatura youtube | make-thumbnail-from-video-iphone |

## 17. Thai (th) — `/th/` and `/th/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=th, gl=th)._

Thai searchers use the English loanword **แคป** ("cap", from capture/screenshot). The head term is **"แคปรูปจากวิดีโอ"** (screenshot a picture from a video), almost always followed by **iphone** / ไอโฟน. Strong modifiers are:

- **ให้ชัด** ("make it sharp"): "แคปรูปจากวิดีโอให้ชัด", "วิธีแคปภาพจากวิดีโอให้ชัด"
- **แล้วมืด** ("comes out dark"): "แคปรูปจากวิดีโอ iphone แล้วมืด", which is the HDR issue covered in guide #2

Other terms that appear:

- "แปลงวิดีโอเป็นรูป(ภาพ ออนไลน์)" (convert video to pictures, online)
- a large **"แปลง วิดีโอ เป็น pdf"** cluster (convert video to PDF)
- "ทําปกยูทูป" (make a YouTube cover)
- "เซฟภาพจากวิดีโอ iphone" (save a picture from an iPhone video)

LINE replaces WhatsApp in the copy. Slugs are romanized Thai. Reading time is estimated from character count, because Thai text has no spaces between words.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/th/guides/cap-roop-jak-video-iphone/` | แคปรูปจากวิดีโอ iPhone | แคปรูปจากวิดีโอ iphone, แคปรูปจากวิดีโอไอโฟน, แคปภาพจากวิดีโอ iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/th/guides/cap-na-jor-video-iphone/` | แคปหน้าจอวิดีโอ iPhone | แคปหน้าจอวิดีโอ ไอโฟน, แคปรูปจากวิดีโอ iphone แล้วมืด, แคปภาพจากวิดีโอ iphone | screenshot-video-iphone-without-losing-quality |
| 3 | `/th/guides/save-phap-jak-video-iphone/` | เซฟภาพจากวิดีโอ iPhone | เซฟภาพจากวิดีโอ iphone, บันทึกเฟรมจากวิดีโอเป็นรูป, ภาพนิ่งจากวิดีโอ iphone | save-frame-from-video-iphone |
| 4 | `/th/guides/app-cap-roop-jak-video/` | แอพแคปรูปจากวิดีโอ | แอปดึงภาพจากวิดีโอ, แอพแคปรูปจากวิดีโอ iphone, แอปดึงเฟรมจากวิดีโอ ฟรี | frame-grabber-app-iphone |
| 5 | `/th/guides/dueng-frame-jak-video/` | ดึงภาพจากวิดีโอ | ดึงเฟรมจากวิดีโอ, ตัดภาพจากวิดีโอ, แปลงวิดีโอเป็นรูปภาพ | extract-multiple-frames-from-video |
| 6 | `/th/guides/video-tee-la-frame-iphone/` | ดูวิดีโอทีละเฟรม iPhone | เลื่อนวิดีโอทีละเฟรม iphone, หยุดภาพวิดีโอ iphone, video frame by frame iphone | frame-by-frame-video-iphone |
| 7 | `/th/guides/cap-roop-jak-video-hai-chad/` | แคปรูปจากวิดีโอให้ชัด | แคปภาพจากวิดีโอให้ชัด, วิธีแคปภาพจากวิดีโอให้ชัด, แคปรูปจากวิดีโอ iphone ให้ชัด | clear-high-quality-picture-from-video |
| 8 | `/th/guides/plaeng-video-pen-jpg/` | แปลงวิดีโอเป็นรูป | แปลงวิดีโอเป็นรูป, แปลง วิดีโอ เป็น jpg, แปลงวิดีโอเป็นรูปภาพ ออนไลน์ | video-to-jpg-png-heic-iphone |
| 9 | `/th/guides/plaeng-video-pen-pdf/` | แปลงวิดีโอเป็น PDF | วิดีโอเป็น pdf, แปลง วิดีโอ เป็น pdf ฟรี, ทํา วิดีโอ เป็น pdf | video-frames-to-pdf |
| 10 | `/th/guides/tham-pok-youtube-jak-video/` | ทำปกยูทูป | ทําปกยูทูป, ทำปกคลิปจากวิดีโอ, thumbnail youtube ขนาด | make-thumbnail-from-video-iphone |

## 18. Turkish (tr) — `/tr/` and `/tr/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=tr, gl=tr)._

Turkish is a rich market. The head term is **"videodan fotoğraf alma"** (taking a photo from a video), with variants "çıkarma" (extracting), "çekme" (taking), "nasıl alınır" (how to take) and "karesi alma" (taking a frame). It is very often followed by **iphone** and a model number ("iphone 16 videodan fotoğraf alma"). There is also a quality cluster: **"videodan kaliteli fotoğraf alma iphone"** (high-quality photo from video on iPhone) and "videodan kaliteli ekran görüntüsü alma" (high-quality screenshot from video).

Other strong terms:

- "videodan ekran görüntüsü alma (iphone)" (screenshot from video)
- "videodan kare alma" (frame from video)
- "videoyu fotoğrafa çevirme" (turn video into photo)
- "video jpg çevirme / dönüştürücü" (video to JPG, converter)
- "video pdf dönüştürme" (video to PDF), plus the question "video pdf olur mu" (can a video become a PDF?), answered in guide #9
- "youtube kapak fotoğrafı yapma / boyutu" (making a YouTube thumbnail, its size)

Slugs are ASCII-folded Turkish.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/tr/guides/videodan-fotograf-alma-iphone/` | videodan fotoğraf alma iPhone | videodan fotoğraf alma iphone, iphone videodan fotoğraf çıkarma, videodan fotoğraf nasıl alınır | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/tr/guides/videodan-ekran-goruntusu-alma-iphone/` | videodan ekran görüntüsü alma iPhone | videodan ekran görüntüsü alma iphone, iphone video ekran görüntüsü alma, videodan kaliteli ekran görüntüsü alma | screenshot-video-iphone-without-losing-quality |
| 3 | `/tr/guides/videodan-kare-alma-iphone/` | iPhone videodan kare alma | iphone videodan kare alma, videodan fotoğraf karesi alma, iphone videodan fotoğraf karesi alma | save-frame-from-video-iphone |
| 4 | `/tr/guides/videodan-fotograf-alma-uygulamasi/` | videodan fotoğraf alma uygulaması | videodan fotoğraf alma programı, videodan resim alma programı, ücretsiz videodan fotoğraf alma uygulaması | frame-grabber-app-iphone |
| 5 | `/tr/guides/videodan-fotograf-cikarma/` | videodan fotoğraf çıkarma | iphone videodan fotoğraf çıkarma, videodan kare kare fotoğraf alma, videodan resim alma | extract-multiple-frames-from-video |
| 6 | `/tr/guides/video-kare-kare-izleme-iphone/` | iPhone video kare kare izleme | videodan kare kare fotoğraf alma, iphone video kare kare ilerletme, video frame by frame iphone | frame-by-frame-video-iphone |
| 7 | `/tr/guides/videodan-kaliteli-fotograf-alma/` | videodan kaliteli fotoğraf alma | videodan kaliteli fotoğraf alma iphone, videodan net fotoğraf yakalama, videodan kaliteli ekran görüntüsü alma | clear-high-quality-picture-from-video |
| 8 | `/tr/guides/video-jpg-cevirme/` | video JPG çevirme | video jpg çevirme, video jpg dönüştürücü, videoyu fotoğrafa çevirme | video-to-jpg-png-heic-iphone |
| 9 | `/tr/guides/video-pdf-donusturme/` | video PDF dönüştürme | video pdf dönüştürücü, video pdf olur mu, videodan storyboard yapma | video-frames-to-pdf |
| 10 | `/tr/guides/youtube-kapak-fotografi-yapma/` | YouTube kapak fotoğrafı yapma | youtube kapak fotoğrafı yapma, youtube kapak fotoğrafı boyutu, youtube kapak fotoğrafı nasıl yapılır | make-thumbnail-from-video-iphone |

## 19. Ukrainian (uk) — `/uk/` and `/uk/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=uk, gl=ua)._

Ukrainian searchers use the transliterated brand word **"айфон"**. The top queries are:

- **"як зробити фото з відео на айфоні"** (how to make a photo from a video on iPhone)
- "як зберегти кадр з відео на айфоні" (how to save a frame from a video on iPhone)
- "як вирізати фото з відео на айфоні" (how to cut a photo out of a video on iPhone)
- a "кадр з відео" (frame from video) cluster: "вирізати / витягнути / стоп кадр з відео" (cut / pull / freeze frame from video)
- **"розкадровка відео на фото"** (splitting a video into photos)
- "обкладинка youtube розмір" (YouTube thumbnail size)

Part of the audience searches in Russian ("скриншот видео айфон", "видео в jpg"). Those queries are served by the `/ru/` pages, which carry reciprocal hreflang. The copy uses Telegram and Viber as the messengers. Slugs are Ukrainian transliteration.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/uk/guides/yak-zrobyty-foto-z-video-na-aifoni/` | як зробити фото з відео на айфоні | як зробити фото з відео на айфоні, фото з відео айфон, як вирізати фото з відео на айфоні | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/uk/guides/skrinshot-video-iphone-bez-vtraty-yakosti/` | скріншот відео iPhone | скріншот відео айфон, скріншот відео без втрати якості, скріншот відео темний айфон | screenshot-video-iphone-without-losing-quality |
| 3 | `/uk/guides/zberehty-kadr-z-video-iphone/` | як зберегти кадр з відео на айфоні | як зберегти кадр з відео на айфоні, зберегти кадр з відео, стоп кадр з відео | save-frame-from-video-iphone |
| 4 | `/uk/guides/prohrama-foto-z-video/` | програма щоб зробити фото з відео | програма щоб зробити фото з відео, застосунок фото з відео iphone, безкоштовний застосунок фото з відео | frame-grabber-app-iphone |
| 5 | `/uk/guides/rozkadrovka-video-na-foto/` | розкадровка відео на фото | розкадровка відео, вирізати кадр з відео, витягнути кадр з відео | extract-multiple-frames-from-video |
| 6 | `/uk/guides/video-pokadrovo-iphone/` | відео покадрово iPhone | перегляд відео покадрово iphone, стоп кадр з відео, video frame by frame iphone | frame-by-frame-video-iphone |
| 7 | `/uk/guides/yakisne-foto-z-video/` | якісне фото з відео | фото з відео в хорошій якості, фото з відео розмите, чітке фото з відео iphone | clear-high-quality-picture-from-video |
| 8 | `/uk/guides/video-v-jpg-png/` | відео в JPG | відео в jpg, конвертувати відео в jpg, mp4 в jpg | video-to-jpg-png-heic-iphone |
| 9 | `/uk/guides/video-v-pdf/` | відео в PDF | відео в pdf, розкадровка відео на фото, конвертувати відео в pdf | video-frames-to-pdf |
| 10 | `/uk/guides/obkladynka-youtube-z-video/` | обкладинка для YouTube | обкладинка для youtube, обкладинка youtube розмір, обкладинка для reels з відео | make-thumbnail-from-video-iphone |

## 20. Vietnamese (vi) — `/vi/` and `/vi/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=vi, gl=vn)._

Vietnamese has four parallel head terms, each paired with **trên iphone** (on iPhone):

- **"cắt ảnh từ video"** (cut a photo from a video)
- "chụp ảnh từ video" (take a photo from a video)
- "lấy ảnh từ video" (get a photo from a video)
- "tách ảnh từ video" (separate a photo from a video)

CapCut appears very often in the suggestions, because people currently use a video editor for this. Other strong terms:

- a quality cluster: "cắt ảnh từ video nét" (sharp) and "cách cắt ảnh từ video nét trên iphone" (how to cut a sharp photo from a video on iPhone), plus "chất lượng cao" (high quality)
- **"app cắt ảnh từ video (iphone / grabber)"** (an app for cutting photos from video)
- "chuyển video thành ảnh / sang jpg / png" (convert video to images, to JPG or PNG)
- "video sang pdf" (video to PDF), plus the question "video có chuyển sang pdf được không" (can a video be converted to PDF?), answered in guide #9
- "làm thumbnail youtube (bằng điện thoại)" (make a YouTube thumbnail, on a phone)

Zalo and Messenger are the messengers in the copy. Slugs drop the diacritics.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/vi/guides/cat-anh-tu-video-tren-iphone/` | cắt ảnh từ video trên iPhone | cắt ảnh từ video trên iphone, chụp ảnh từ video iphone, lấy ảnh từ video trên iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/vi/guides/chup-man-hinh-video-iphone/` | chụp màn hình video trên iPhone | chụp màn hình video trên iphone, chụp màn hình video bị mờ, chụp màn hình video iphone bị tối | screenshot-video-iphone-without-losing-quality |
| 3 | `/vi/guides/chup-anh-tu-video-iphone/` | chụp ảnh từ video trên iPhone | chụp ảnh từ video trên iphone, chụp ảnh từ video iphone, lưu khung hình video thành ảnh | save-frame-from-video-iphone |
| 4 | `/vi/guides/app-cat-anh-tu-video/` | app cắt ảnh từ video | app cắt ảnh từ video iphone, app cắt ảnh từ video trên điện thoại, app cắt ảnh từ video miễn phí | frame-grabber-app-iphone |
| 5 | `/vi/guides/tach-anh-tu-video/` | tách ảnh từ video | tách ảnh từ video trên iphone, trích xuất khung hình từ video, lấy ảnh từ video | extract-multiple-frames-from-video |
| 6 | `/vi/guides/xem-video-tung-khung-hinh-iphone/` | xem video từng khung hình trên iPhone | tua video từng khung hình iphone, dừng khung hình video iphone, video frame by frame iphone | frame-by-frame-video-iphone |
| 7 | `/vi/guides/cat-anh-tu-video-net/` | cắt ảnh từ video nét | cách cắt ảnh từ video nét trên iphone, cắt ảnh từ video chất lượng cao, ảnh từ video bị mờ | clear-high-quality-picture-from-video |
| 8 | `/vi/guides/chuyen-video-sang-jpg/` | chuyển video sang JPG | chuyển video sang jpg, chuyển video thành ảnh, chuyển video thành ảnh png | video-to-jpg-png-heic-iphone |
| 9 | `/vi/guides/chuyen-video-sang-pdf/` | chuyển video sang PDF | đổi video sang pdf, video có chuyển sang pdf được không, chuyển video mp4 sang pdf | video-frames-to-pdf |
| 10 | `/vi/guides/lam-thumbnail-youtube/` | làm thumbnail YouTube | cách làm thumbnail youtube, làm thumbnail youtube bằng điện thoại, làm thumbnail youtube short | make-thumbnail-from-video-iphone |

## 21. Czech (cs) — `/cs/` and `/cs/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=cs, gl=cz)._

Czech search volume is modest. The confirmed terms are:

- **"fotka z videa (iphone)"** (photo from video, iPhone)
- **"jak udělat fotku z videa"** (how to make a photo from a video), plus "na mobilu" (on a phone)
- "jak vytáhnout fotku z videa" (how to pull a photo out of a video)
- "snímek z videa" (frame from video)
- "obrázek z videa" (image from video)
- "náhledový obrázek youtube (velikost)" (YouTube thumbnail, size)

Conversion searches use English terms ("video jpg converter"). Many long-tail searches, such as "uložit snímek z videa" (save a frame from a video) and "snímek po snímku" (frame by frame), return no suggestions. Those guides target the head terms plus natural phrasing. Slugs are ASCII-folded Czech.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/cs/guides/jak-udelat-fotku-z-videa-iphone/` | jak udělat fotku z videa na iPhonu | fotka z videa iphone, jak udělat fotku z videa, jak vytáhnout fotku z videa | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/cs/guides/screenshot-videa-iphone-bez-ztraty-kvality/` | screenshot videa iPhone | snímek obrazovky videa iphone, screenshot z videa rozmazaný, screenshot videa tmavý iphone | screenshot-video-iphone-without-losing-quality |
| 3 | `/cs/guides/ulozit-snimek-z-videa-iphone/` | uložit snímek z videa iPhone | snímek z videa, uložit snímek z videa jako fotku, obrázek z videa iphone | save-frame-from-video-iphone |
| 4 | `/cs/guides/aplikace-fotka-z-videa/` | aplikace fotka z videa | aplikace na fotky z videa iphone, aplikace snímek z videa, aplikace fotka z videa zdarma | frame-grabber-app-iphone |
| 5 | `/cs/guides/snimky-z-videa/` | snímky z videa | snímek z videa, obrázek z videa, jak vytáhnout fotku z videa | extract-multiple-frames-from-video |
| 6 | `/cs/guides/video-snimek-po-snimku-iphone/` | video snímek po snímku iPhone | přehrávání videa po snímcích iphone, video frame by frame iphone, zastavit video na snímku iphone | frame-by-frame-video-iphone |
| 7 | `/cs/guides/kvalitni-fotka-z-videa/` | kvalitní fotka z videa | ostrá fotka z videa, fotka z videa rozmazaná, fotka z videa v dobré kvalitě | clear-high-quality-picture-from-video |
| 8 | `/cs/guides/video-na-jpg-png/` | video na JPG | video na jpg, převod videa na jpg, video na png | video-to-jpg-png-heic-iphone |
| 9 | `/cs/guides/video-do-pdf/` | video do PDF | video do pdf, převod videa do pdf, storyboard z videa | video-frames-to-pdf |
| 10 | `/cs/guides/nahledovy-obrazek-youtube/` | náhledový obrázek YouTube | náhledový obrázek youtube, youtube náhledový obrázek velikost, obálka reels z videa | make-thumbnail-from-video-iphone |

## 22. Chinese, Simplified (zh) — `/zh/` and `/zh/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=zh-CN)._

Google is blocked in mainland China, so these suggestions mostly reflect overseas Chinese-speaking users. Baidu (百度) was not researched and would be the next step for mainland ranking. Confirmed terms:

- **"视频截图"** (video screenshot), including "iphone 视频截图"
- "视频截取照片 / 图片" (capture a photo / picture from a video), including "iphone 视频 截取 照片"
- **"视频提取图片"** (extract images from a video), plus 软件 / 在线 (software / online)
- "视频提取帧" (extract frames from a video)
- **"视频转图片"** (convert video to images), plus 帧 / 工具 (frames / tool)
- "视频逐帧提取图片 / 播放" (frame-by-frame extraction / playback)
- "视频转pdf" (video to PDF)
- **"视频封面制作 / 提取"** (making / extracting a video cover)

Copy uses WeChat (微信), QQ and Xiaohongshu (小红书) as share targets. Cover sizes include Douyin (抖音), Bilibili (B 站) and Xiaohongshu. Slugs are pinyin. Titles and descriptions are short because CJK SERP snippets are about 30 and 80 characters.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/zh/guides/iphone-shipin-jiequ-zhaopian/` | iPhone 视频截取照片 | iphone 视频 截取 照片, 苹果手机视频截取照片, 视频截取图片 | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/zh/guides/iphone-shipin-jietu/` | iPhone 视频截图 | iphone 视频截图, 苹果手机视频截图模糊, 视频截图变暗 | screenshot-video-iphone-without-losing-quality |
| 3 | `/zh/guides/shipin-baocun-zhen-iphone/` | iPhone 视频保存某一帧 | 苹果视频保存帧为照片, 视频截取图片, iphone 视频 截取 照片 | save-frame-from-video-iphone |
| 4 | `/zh/guides/shipin-tiqu-tupian-app/` | 视频提取图片软件 | 视频提取图片软件, 视频截图软件, 视频转图片工具 | frame-grabber-app-iphone |
| 5 | `/zh/guides/shipin-tiqu-zhen/` | 视频提取帧 | 视频提取帧, 视频逐帧提取图片, 视频转图片帧 | extract-multiple-frames-from-video |
| 6 | `/zh/guides/shipin-zhuzhen-iphone/` | iPhone 视频逐帧播放 | 视频逐帧播放, 视频逐帧提取图片, iphone 视频 一帧一帧 | frame-by-frame-video-iphone |
| 7 | `/zh/guides/shipin-tiqu-gaoqing-tupian/` | 视频截图高清 | 视频截图 高清, 视频提取高清图片, 视频截图模糊怎么办 | clear-high-quality-picture-from-video |
| 8 | `/zh/guides/shipin-zhuan-tupian/` | 视频转图片 | 视频转图片, 视频转 jpg, 视频转图片工具 | video-to-jpg-png-heic-iphone |
| 9 | `/zh/guides/shipin-zhuan-pdf/` | 视频转 PDF | 视频转pdf, 视频截图做成 pdf, 视频分镜 pdf | video-frames-to-pdf |
| 10 | `/zh/guides/shipin-fengmian-zhizuo/` | 视频封面制作 | 视频封面制作, 视频封面提取, YouTube 封面尺寸 | make-thumbnail-from-video-iphone |

## 23. Danish (da) — `/da/` and `/da/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=da, gl=dk)._

The core Danish cluster is **"billede fra video (iphone)"** (picture from video), with the verbs **"gem"** (save) and **"tag"** (take): "gem billede fra video iphone", "tag billede fra video iphone". Other terms that appear:

- "hvordan tager man et billede fra en video" (how do you take a picture from a video)
- "klip billede ud af video" (cut a picture out of a video)
- "billeder fra video" (pictures from video) / "video til billeder" (video to pictures)

Conversion and thumbnail searches are in English ("video jpg converter", "video pdf", "youtube thumbnail size"), so those guides keep English loanwords. The Files app is called "Arkiver" in Danish iOS. Slugs are ASCII-folded (æ becomes ae).

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/da/guides/billede-fra-video-iphone/` | billede fra video iPhone | billede fra video iphone, tag billede fra video iphone, hvordan tager man et billede fra en video | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/da/guides/skaermbillede-af-video-iphone/` | skærmbillede af video iPhone | skærmbillede af video iphone, skærmbillede af video sløret, iphone video skærmbillede mørkt | screenshot-video-iphone-without-losing-quality |
| 3 | `/da/guides/gem-billede-fra-video-iphone/` | gem billede fra video iPhone | gem billede fra video iphone, gem billede fra video, stillbillede fra video iphone | save-frame-from-video-iphone |
| 4 | `/da/guides/app-billede-fra-video/` | app billede fra video | app til billeder fra video iphone, gratis app billede fra video, frame grabber app | frame-grabber-app-iphone |
| 5 | `/da/guides/billeder-fra-video/` | billeder fra video | tag billeder fra video, video til billeder, lave video om til billeder | extract-multiple-frames-from-video |
| 6 | `/da/guides/video-billede-for-billede-iphone/` | video billede for billede iPhone | afspil video billede for billede iphone, video frame by frame iphone, stop video på bestemt billede | frame-by-frame-video-iphone |
| 7 | `/da/guides/skarpt-billede-fra-video/` | skarpt billede fra video | billede fra video sløret, billede fra video i god kvalitet, skarpt billede fra video iphone | clear-high-quality-picture-from-video |
| 8 | `/da/guides/video-til-jpg-png/` | video til JPG | video til jpg, video til billeder, video jpg converter | video-to-jpg-png-heic-iphone |
| 9 | `/da/guides/video-til-pdf/` | video til PDF | video til pdf, video pdf converter, storyboard fra video | video-frames-to-pdf |
| 10 | `/da/guides/youtube-thumbnail-fra-video/` | YouTube thumbnail fra video | youtube thumbnail, youtube thumbnail size, youtube thumbnail maker | make-thumbnail-from-video-iphone |

## 24. Greek (el) — `/el/` and `/el/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=el, gl=gr)._

Greek search volume is thin, and Greeks usually type **without accents**, sometimes with a final σ instead of ς. The only confirmed native queries are:

- **"πωσ βγαζω φωτογραφια απο βιντεο (iphone)"** (how do I take a photo from a video, iPhone)
- "φωτογραφια απο βιντεο iphone" (photo from video iPhone)
- "μετατροπη βιντεο σε jpg" (convert video to JPG)

Thumbnail and PDF searches use English ("thumbnail youtube size", "video pdf converter"). Accented and unaccented Greek match the same queries in Google, so the copy uses proper accented Greek. Viber and Messenger are the messengers in the copy. Slugs are greeklish.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/el/guides/fotografia-apo-video-iphone/` | φωτογραφία από βίντεο iPhone | πώς βγάζω φωτογραφία από βίντεο iphone, φωτογραφια απο βιντεο iphone, πωσ βγαζω φωτογραφια απο βιντεο | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/el/guides/screenshot-video-iphone-xoris-apoleia-poiotitas/` | στιγμιότυπο οθόνης βίντεο iPhone | screenshot βίντεο iphone, στιγμιότυπο βίντεο θολό, screenshot βίντεο σκοτεινό iphone | screenshot-video-iphone-without-losing-quality |
| 3 | `/el/guides/apothikeusi-kare-apo-video-iphone/` | αποθήκευση καρέ από βίντεο iPhone | καρέ από βίντεο ως φωτογραφία, στιγμιότυπο από βίντεο iphone, εικόνα από βίντεο iphone | save-frame-from-video-iphone |
| 4 | `/el/guides/efarmogi-fotografia-apo-video/` | εφαρμογή φωτογραφία από βίντεο | εφαρμογή για φωτογραφίες από βίντεο iphone, δωρεάν εφαρμογή φωτογραφία από βίντεο, frame grabber app | frame-grabber-app-iphone |
| 5 | `/el/guides/kare-apo-video/` | καρέ από βίντεο | εξαγωγή καρέ από βίντεο, βίντεο σε φωτογραφίες, πολλές φωτογραφίες από βίντεο | extract-multiple-frames-from-video |
| 6 | `/el/guides/video-kare-kare-iphone/` | βίντεο καρέ-καρέ iPhone | αναπαραγωγή βίντεο καρέ καρέ iphone, video frame by frame iphone, παύση βίντεο σε συγκεκριμένο καρέ | frame-by-frame-video-iphone |
| 7 | `/el/guides/kathari-fotografia-apo-video/` | καθαρή φωτογραφία από βίντεο | φωτογραφία από βίντεο θολή, φωτογραφία από βίντεο καλή ποιότητα, καθαρή φωτογραφία από βίντεο iphone | clear-high-quality-picture-from-video |
| 8 | `/el/guides/metatropi-video-se-jpg/` | μετατροπή βίντεο σε JPG | μετατροπη βιντεο σε jpg, βίντεο σε φωτογραφίες, βίντεο σε png | video-to-jpg-png-heic-iphone |
| 9 | `/el/guides/video-se-pdf/` | βίντεο σε PDF | μετατροπή βίντεο σε pdf, video pdf converter, storyboard από βίντεο | video-frames-to-pdf |
| 10 | `/el/guides/youtube-thumbnail-apo-video/` | YouTube thumbnail από βίντεο | thumbnail youtube, thumbnail youtube size, thumbnail youtube maker | make-thumbnail-from-video-iphone |

## 25. Finnish (fi) — `/fi/` and `/fi/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=fi, gl=fi)._

The Finnish head term is **"kuva videosta (iphone)"** (picture from video). The other confirmed searches are:

- **"still kuva videosta iphone"** (still image from video, iPhone)
- "miten ottaa kuva videosta" (how to take a picture from a video)
- "miten videosta saa kuvan iphone" (how do you get a picture from a video on iPhone)
- "kuvan ottaminen videosta" (taking a picture from a video)

Searches for a screenshot of a video ("näyttökuva videosta") and for saving a frame return no suggestions. Conversion and thumbnail searches are in English. Slugs are ASCII-folded (ä becomes a).

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/fi/guides/kuva-videosta-iphone/` | kuva videosta iPhone | kuva videosta iphone, miten ottaa kuva videosta, miten videosta saa kuvan iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/fi/guides/nayttokuva-videosta-iphone/` | näyttökuva videosta iPhone | näyttökuva videosta iphone, kuvakaappaus videosta epätarkka, iphone video näyttökuva tumma | screenshot-video-iphone-without-losing-quality |
| 3 | `/fi/guides/still-kuva-videosta-iphone/` | still kuva videosta iPhone | still kuva videosta iphone, still kuva videosta, tallenna ruutu videosta kuvana | save-frame-from-video-iphone |
| 4 | `/fi/guides/sovellus-kuva-videosta/` | sovellus kuva videosta | sovellus kuvien ottamiseen videosta, ilmainen sovellus kuva videosta, frame grabber app | frame-grabber-app-iphone |
| 5 | `/fi/guides/kuvia-videosta/` | kuvia videosta | kuvia videosta, monta kuvaa videosta, ruudut videosta kuviksi | extract-multiple-frames-from-video |
| 6 | `/fi/guides/video-kuva-kuvalta-iphone/` | video ruutu ruudulta iPhone | video kuva kuvalta iphone, video frame by frame iphone, pysäytä video tiettyyn ruutuun | frame-by-frame-video-iphone |
| 7 | `/fi/guides/tarkka-kuva-videosta/` | tarkka kuva videosta | kuva videosta epätarkka, hyvälaatuinen kuva videosta, tarkka kuva videosta iphone | clear-high-quality-picture-from-video |
| 8 | `/fi/guides/video-jpg-png/` | video JPG-kuviksi | video jpg converter, video kuviksi, video png | video-to-jpg-png-heic-iphone |
| 9 | `/fi/guides/video-pdf/` | video PDF:ksi | video pdf converter, video pdf, kuvakäsikirjoitus videosta | video-frames-to-pdf |
| 10 | `/fi/guides/youtube-thumbnail-videosta/` | YouTube-pikkukuva videosta | youtube thumbnail, youtube thumbnail size, youtube thumbnail maker | make-thumbnail-from-video-iphone |

## 26. Filipino (fil) — `/fil/` and `/fil/guides/`

_Researched 2026-10-01 via Google Autocomplete (hl=fil, gl=ph)._

Filipinos search mostly in **English** or **Taglish**. Pure-Tagalog queries such as "kuha ng litrato sa video" (taking a photo from a video) return nothing. Strong terms:

- **"how to get picture from video iphone"**, including the clear, still and high-quality variants
- **"video to picture"**, plus converter, frame by frame, HD, app and iphone variants
- **"paano mag screenshot sa iphone"** (how to screenshot on iPhone), plus model numbers
- "video to jpg converter high quality"
- "video to pdf converter"
- "youtube thumbnail size"

The copy is natural Taglish: Tagalog grammar with English tech terms (picture, frame, screenshot, i-save, i-export). The iOS UI names stay in English because most Filipino iPhones run in English. Messenger and Viber are the messengers. og:locale is tl_PH, the Tagalog locale for Philippine Open Graph. Guide titles and secondary keywords target the English queries.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/fil/guides/paano-kumuha-ng-picture-sa-video-iphone/` | paano kumuha ng picture sa video iPhone | how to get picture from video iphone, video to picture iphone, picture sa video | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/fil/guides/paano-mag-screenshot-ng-video-sa-iphone/` | paano mag screenshot ng video sa iPhone | paano mag screenshot sa iphone, screenshot video iphone, screenshot video malabo | screenshot-video-iphone-without-losing-quality |
| 3 | `/fil/guides/i-save-ang-frame-ng-video-iphone/` | i-save ang frame ng video sa iPhone | how to capture picture from video iphone, how to get still picture from iphone video, still picture mula sa video | save-frame-from-video-iphone |
| 4 | `/fil/guides/app-para-kumuha-ng-picture-sa-video/` | app para kumuha ng picture sa video | video to picture app, video to picture converter, frame grabber app iphone | frame-grabber-app-iphone |
| 5 | `/fil/guides/maraming-frame-mula-sa-video/` | video to picture frames | video to pictures, video to picture frame by frame, kumuha ng maraming picture sa video | extract-multiple-frames-from-video |
| 6 | `/fil/guides/video-frame-by-frame-iphone/` | video frame by frame iPhone | video to picture frame by frame, paano i-play ang video frame by frame sa iphone, i-pause ang video sa eksaktong frame | frame-by-frame-video-iphone |
| 7 | `/fil/guides/malinaw-na-picture-mula-sa-video/` | malinaw na picture mula sa video | how to get clear picture from video iphone, how to get high quality picture from video iphone, video to picture hd | clear-high-quality-picture-from-video |
| 8 | `/fil/guides/video-to-jpg-png/` | video to JPG | video to jpg converter high quality, video to picture converter, video to jpg high quality | video-to-jpg-png-heic-iphone |
| 9 | `/fil/guides/video-to-pdf/` | video to PDF | video to pdf converter, video to pdf converter free, storyboard mula sa video | video-frames-to-pdf |
| 10 | `/fil/guides/youtube-thumbnail-mula-sa-video/` | YouTube thumbnail mula sa video | youtube thumbnail size, youtube thumbnail creator, youtube thumbnail | make-thumbnail-from-video-iphone |

## 27. Hebrew (he) — `/he/` and `/he/guides/` (RTL)

_Researched 2026-10-01 via Google Autocomplete (hl=iw, gl=il)._

Hebrew searchers phrase it as a how-to question. The core term is **"תמונה מסרטון"** (picture from video). Strong variants:

- **"איך להוציא / לקחת תמונה מסרטון (באייפון)"** (how to get / take a picture from a video, on iPhone)
- "הוצאת / חילוץ / לכידת / חיתוך תמונה מסרטון" (getting / extracting / capturing / cutting a picture from a video)
- "צילום מסך מסרטון באייפון" (screenshot from a video on iPhone)
- **"פירוק / הפיכת / המרת סרטון לתמונות"** (splitting / turning / converting a video into pictures)
- "המרת וידאו ל pdf" (convert video to PDF)

WhatsApp is the messenger in the copy. Slugs are transliterated Hebrew.

**RTL support added:**

- The guide templates now take `dir` from `meta.text_direction`.
- `style.css` was converted to logical properties: margin-inline, padding-inline, inset-inline-end, text-align: start, border-inline-start.
- Letter-spacing is removed under `[dir=rtl]`.
- The desktop sticky CTA is mirrored.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/he/guides/eich-lehotzi-tmuna-mesirton-iphone/` | איך להוציא תמונה מסרטון באייפון | איך להוציא תמונה מסרטון אייפון, איך לקחת תמונה מסרטון באייפון, הוצאת תמונה מסרטון | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/he/guides/tzilum-masach-mesirton-iphone/` | צילום מסך מסרטון באייפון | צילום מסך מסרטון, איך עושים צילום מסך מסרטון באייפון, צילום מסך מסרטון מטושטש | screenshot-video-iphone-without-losing-quality |
| 3 | `/he/guides/shmirat-frame-mesirton-iphone/` | שמירת פריים מסרטון באייפון | לכידת תמונה מסרטון, איך לקחת תמונה מסרטון, תמונת סטילס מסרטון אייפון | save-frame-from-video-iphone |
| 4 | `/he/guides/aplikatzia-tmuna-mesirton/` | אפליקציה להוצאת תמונה מסרטון | אפליקציה תמונה מסרטון אייפון, אפליקציה חינמית להוצאת תמונה מסרטון, frame grabber app | frame-grabber-app-iphone |
| 5 | `/he/guides/pirok-sirton-letmunot/` | פירוק סרטון לתמונות | הפיכת סרטון לתמונות, המרת סרטון לתמונות, איך הופכים סרטון לתמונות | extract-multiple-frames-from-video |
| 6 | `/he/guides/sirton-frame-frame-iphone/` | סרטון פריים אחר פריים באייפון | ניגון סרטון פריים פריים אייפון, video frame by frame iphone, עצירת סרטון בפריים מסוים | frame-by-frame-video-iphone |
| 7 | `/he/guides/tmuna-chada-mesirton/` | תמונה חדה מסרטון | תמונה מסרטון מטושטשת, תמונה באיכות גבוהה מסרטון, לכידת תמונה מסרטון באיכות גבוהה | clear-high-quality-picture-from-video |
| 8 | `/he/guides/hamarat-video-le-jpg/` | המרת וידאו ל-JPG | המרת סרטון לתמונות, סרטון לתמונה, video to jpg | video-to-jpg-png-heic-iphone |
| 9 | `/he/guides/hamarat-video-le-pdf/` | המרת וידאו ל-PDF | המרת וידאו ל pdf, סטוריבורד מסרטון, video to pdf | video-frames-to-pdf |
| 10 | `/he/guides/thumbnail-youtube-mesirton/` | תמונה ממוזערת ליוטיוב מסרטון | youtube thumbnail, youtube thumbnail size, תמונת קאבר לסרטון | make-thumbnail-from-video-iphone |


## 28. Hungarian (hu) — `/hu/` and `/hu/guides/`

Research used Google autocomplete with hl=hu and gl=HU. The highest-demand phrases are:

- **"kép kivágása videóból (iphone)"** (cutting a picture out of a video)
- **"videóból kép (mentése / készítése / iphone)"** (picture from a video)
- "videóból fotó kivágás iphone"
- "képkocka kivágása videóból" (cutting a frame out of a video)
- "kép mentése videóból" (saving a picture from a video)
- "youtube bélyegkép" (YouTube thumbnail)

Conversion and PDF searches are mostly in English ("video to jpg", "video to pdf"). Messenger and Viber are the messengers in the copy. Slugs are unaccented Hungarian.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/hu/guides/kep-kivagasa-videobol-iphone/` | kép kivágása videóból iPhone | kép kivágása videóból iphone, videóból kép iphone, videóból fotó kivágás iphone, videóból kép készítése | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/hu/guides/kepernyokep-videorol-iphone/` | képernyőkép videóról iPhone | képernyőkép videóról, videó képernyőkép homályos, iphone videó képernyőkép sötét | screenshot-video-iphone-without-losing-quality |
| 3 | `/hu/guides/kep-mentese-videobol-iphone/` | kép mentése videóból iPhone | kép mentése videóból, videóból kép mentése, képkocka kivágása videóból, állókép videóból iphone | save-frame-from-video-iphone |
| 4 | `/hu/guides/alkalmazas-kep-videobol/` | alkalmazás kép kivágása videóból | app kép videóból iphone, ingyenes app kép videóból, frame grabber app | frame-grabber-app-iphone |
| 5 | `/hu/guides/kepkockak-videobol/` | képkockák videóból | képkocka kivágása videóból, videóból fotó készítés, több kép videóból | extract-multiple-frames-from-video |
| 6 | `/hu/guides/video-kepkockankent-iphone/` | videó képkockánként iPhone | videó léptetése képkockánként iphone, video frame by frame iphone, videó megállítása adott kockánál | frame-by-frame-video-iphone |
| 7 | `/hu/guides/eles-kep-videobol/` | éles kép videóból | jó minőségű kép videóból, kép videóból elmosódott, hdr videó sötét kép | clear-high-quality-picture-from-video |
| 8 | `/hu/guides/video-jpg-png/` | video to jpg iphone | videó jpg-be, video to png, video to heic, videó konvertálása képpé | video-to-jpg-png-heic-iphone |
| 9 | `/hu/guides/video-pdf/` | video to pdf | videó pdf-be, képkockák pdf-be, storyboard videóból | video-frames-to-pdf |
| 10 | `/hu/guides/youtube-belyegkep-videobol/` | youtube bélyegkép | bélyegkép videóból, borítókép videóból, youtube thumbnail iphone | make-thumbnail-from-video-iphone |


## 29. Croatian (hr) — `/hr/` and `/hr/guides/`

Research used Google autocomplete with hl=hr and gl=HR. The highest-demand phrases are:

- **"kako iz videa izvuci sliku (iphone)"** (how to get a picture out of a video)
- **"kako od videa napraviti sliku"** (how to make a picture from a video)
- "kako video pretvoriti u slike" / "kako izvuci slike iz videa" (video into pictures)
- "screenshot videa", "kako slikati ekran na iphone" (screenshot)
- "video u pdf"

Conversion, PDF and thumbnail searches are mostly in English ("video to jpg", "video to pdf", "youtube thumbnail size"). The Photos app is called "Foto" in Croatian iOS (confirmed on Apple Support hr-hr). WhatsApp and Viber are the messengers in the copy. Slugs are unaccented Croatian.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/hr/guides/kako-izvuci-sliku-iz-videa-iphone/` | kako iz videa izvući sliku iphone | kako izvući sliku iz videa, slika iz videa, kako od videa napraviti sliku | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/hr/guides/snimka-zaslona-videa-iphone/` | screenshot videa | snimka zaslona videa iphone, kako slikati ekran na iphone, screenshot videa mutan | screenshot-video-iphone-without-losing-quality |
| 3 | `/hr/guides/spremiti-sliku-iz-videa-iphone/` | kako od videa napraviti sliku | spremiti sliku iz videa, kako napraviti sliku iz videa, fotografija iz videa | save-frame-from-video-iphone |
| 4 | `/hr/guides/aplikacija-slika-iz-videa/` | aplikacija za slike iz videa | aplikacija slika iz videa iphone, besplatna aplikacija slika iz videa, frame grabber app | frame-grabber-app-iphone |
| 5 | `/hr/guides/video-u-slike/` | kako video pretvoriti u slike | kako izvući slike iz videa, video u slike, više slika iz videa | extract-multiple-frames-from-video |
| 6 | `/hr/guides/video-frame-po-frame-iphone/` | video frame by frame iphone | video frame po frame, zaustaviti video na kadru, kadar po kadar iphone | frame-by-frame-video-iphone |
| 7 | `/hr/guides/kvalitetna-slika-iz-videa/` | kvalitetna slika iz videa | oštra slika iz videa, slika iz videa mutna, hdr video tamna slika | clear-high-quality-picture-from-video |
| 8 | `/hr/guides/video-u-jpg-png/` | video to jpg | video u jpg, video to png, video to heic, video to jpg converter | video-to-jpg-png-heic-iphone |
| 9 | `/hr/guides/video-u-pdf/` | video to pdf | video u pdf, kadrovi u pdf, storyboard iz videa | video-frames-to-pdf |
| 10 | `/hr/guides/youtube-thumbnail-iz-videa/` | youtube thumbnail | youtube thumbnail size, thumbnail iz videa, naslovna slika videa | make-thumbnail-from-video-iphone |


## 30. Hindi (hi) — `/hi/` and `/hi/guides/`

Research used Google autocomplete with hl=hi and gl=IN. Most searches are in Hinglish (romanized Hindi), not Devanagari. The highest-demand phrases are:

- **"video se photo kaise nikale"** (+ online free, app, iphone me)
- **"video se photo kaise banaye"** / "वीडियो से फोटो कैसे बनाएं"
- **"video se photo nikalne wala app"** / "video se photo banane wala app"
- "video ka screenshot kaise le" / "वीडियो का स्क्रीनशॉट कैसे ले"
- "video se image kaise nikale"
- English: "video to photo converter hd", "video to jpg converter", "video to pdf converter", "youtube thumbnail size"

Copy is written in Devanagari, with the Hinglish keyword placed in `keyword`/meta keywords and English terms used in titles where search demand is in English. Slugs are Hinglish. The Photos app is called "तस्वीरें" in the copy (Hindi iOS label not verified). WhatsApp and Instagram are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/hi/guides/video-se-photo-kaise-nikale-iphone/` | video se photo kaise nikale | वीडियो से फोटो कैसे निकाले, iphone me video se photo kaise nikale, video se image kaise nikale | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/hi/guides/video-ka-screenshot-iphone/` | video ka screenshot kaise le | वीडियो का स्क्रीनशॉट कैसे ले, video screenshot iphone, video ka screenshot blur | screenshot-video-iphone-without-losing-quality |
| 3 | `/hi/guides/video-se-photo-save-kare/` | video se photo kaise banaye | वीडियो से फोटो कैसे बनाएं, video se photo convert, video to photo | save-frame-from-video-iphone |
| 4 | `/hi/guides/video-se-photo-nikalne-wala-app/` | video se photo nikalne wala app | वीडियो से फोटो बनाने वाला ऐप, video se photo banane wala app, frame grabber app | frame-grabber-app-iphone |
| 5 | `/hi/guides/video-se-image-frames/` | video se image kaise nikale | video se photo convert, वीडियो से कई फोटो, video image extractor | extract-multiple-frames-from-video |
| 6 | `/hi/guides/frame-by-frame-video-iphone/` | frame by frame video iphone | play frame by frame iphone video, वीडियो फ्रेम दर फ्रेम, सही फ्रेम पर वीडियो रोकें | frame-by-frame-video-iphone |
| 7 | `/hi/guides/video-se-hd-photo/` | video to photo hd quality | वीडियो से HD फोटो, video se photo clear, video ka photo blur kyon | clear-high-quality-picture-from-video |
| 8 | `/hi/guides/video-to-jpg-png/` | video to jpg converter | video to jpg, video to png, video to heic, video to jpg converter high quality | video-to-jpg-png-heic-iphone |
| 9 | `/hi/guides/video-to-pdf/` | video to pdf converter | video to pdf, video to pdf notes, वीडियो से PDF | video-frames-to-pdf |
| 10 | `/hi/guides/youtube-thumbnail-video-se/` | youtube thumbnail size | youtube thumbnail, youtube thumbnail ratio, वीडियो से थंबनेल | make-thumbnail-from-video-iphone |


## 31. Indonesian (id) — `/id/` and `/id/guides/`

Research used Google autocomplete with hl=id and gl=ID. The highest-demand phrases are:

- **"cara mengambil foto dari video"** (+ di iphone, di hp, tanpa screenshot, di capcut)
- **"cara screenshot video"** (+ di iphone, iphone 13/15/16)
- **"mengubah video menjadi foto"** (+ hd, di iphone)
- "cara menyimpan foto dari video di iphone"
- "capture video jadi foto (di iphone)", "ambil gambar dari video"
- "aplikasi mengambil foto dari video"
- English: "video to jpg (hd)", "video to pdf (gratis)", "thumbnail youtube ukuran berapa"

CapCut appears often in autocomplete; the copy does not target it. The Photos app is called "Foto", with Bagikan for Share, File for Files, and Pengaturan → Kamera → Rekam Video → Video HDR. These iOS labels are not verified on an Indonesian iPhone. WhatsApp and Instagram are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/id/guides/cara-mengambil-foto-dari-video-iphone/` | cara mengambil foto dari video di iphone | cara mengambil foto dari video, cara mengambil gambar dari video, ambil foto dari video, cara mengambil foto dari video tanpa screenshot | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/id/guides/cara-screenshot-video-iphone/` | cara screenshot video di iphone | cara screenshot video, cara capture video jadi foto di iphone, screenshot video buram | screenshot-video-iphone-without-losing-quality |
| 3 | `/id/guides/cara-menyimpan-foto-dari-video-iphone/` | cara menyimpan foto dari video di iphone | cara menyimpan foto dari video, capture video jadi foto, buat foto dari video | save-frame-from-video-iphone |
| 4 | `/id/guides/aplikasi-mengambil-foto-dari-video/` | aplikasi mengambil foto dari video | aplikasi foto dari video iphone, aplikasi gratis ambil foto dari video, frame grabber app | frame-grabber-app-iphone |
| 5 | `/id/guides/mengubah-video-menjadi-foto/` | mengubah video menjadi foto | cara mengubah video menjadi foto, mengubah video menjadi foto di iphone, video ke foto | extract-multiple-frames-from-video |
| 6 | `/id/guides/video-frame-by-frame-iphone/` | video frame by frame iphone | play video frame by frame iphone, jeda video di frame tertentu, frame demi frame iphone | frame-by-frame-video-iphone |
| 7 | `/id/guides/foto-hd-dari-video/` | mengubah video menjadi foto hd | foto hd dari video, foto dari video jernih, foto dari video buram | clear-high-quality-picture-from-video |
| 8 | `/id/guides/video-ke-jpg-png/` | video to jpg | video to jpg hd, video ke jpg, video to png, video to heic | video-to-jpg-png-heic-iphone |
| 9 | `/id/guides/video-ke-pdf/` | video to pdf | video to pdf gratis, video ke pdf, storyboard dari video | video-frames-to-pdf |
| 10 | `/id/guides/thumbnail-youtube-dari-video/` | thumbnail youtube ukuran berapa | thumbnail youtube, thumbnail youtube size, cara membuat thumbnail dari video | make-thumbnail-from-video-iphone |


## 32. Malay (ms) — `/ms/` and `/ms/guides/`

Research used Google autocomplete with hl=ms and gl=MY. Malaysian queries overlap heavily with Indonesian ("cara ambil foto dari video"), but "gambar" and "tukar" are the Malaysian words. The highest-demand phrases are:

- **"cara ambil gambar dari video (iphone)"** and "cara ambil foto dari video (iphone, tanpa screenshot)"
- **"cara screenshot video (di iphone)"**
- **"video ke gambar (hd)"**, "cara tukar video ke gambar", "ubah / convert video ke gambar"
- "capture / tangkap gambar dari video", "aplikasi ambil gambar dari video"
- "cara buat thumbnail youtube (menarik)"
- English: "video to jpg (converter)", "video to pdf (converter)"

The copy uses Malaysian vocabulary (apl, bingkai, kongsi, ketik, kualiti, muat turun, percuma, papan cerita). The iOS labels used are Foto, Kongsi, Fail, Terkini, and Seting → Kamera → Rakam Video → Video HDR; they are not verified on a Malay iPhone. WhatsApp and Telegram are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/ms/guides/cara-ambil-gambar-dari-video-iphone/` | cara ambil gambar dari video iphone | cara ambil gambar dari video, cara ambil foto dari video iphone, ambil gambar dari video, cara ambil foto dari video tanpa screenshot | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/ms/guides/cara-screenshot-video-iphone/` | cara screenshot video di iphone | cara screenshot video, tangkapan skrin video iphone, screenshot video kabur | screenshot-video-iphone-without-losing-quality |
| 3 | `/ms/guides/cara-simpan-gambar-dari-video-iphone/` | cara simpan gambar dari video | capture gambar dari video, tangkap gambar dari video, buat gambar dari video | save-frame-from-video-iphone |
| 4 | `/ms/guides/aplikasi-ambil-gambar-dari-video/` | aplikasi ambil gambar dari video | apl gambar dari video iphone, apl percuma ambil gambar dari video, frame grabber app | frame-grabber-app-iphone |
| 5 | `/ms/guides/tukar-video-ke-gambar/` | cara tukar video ke gambar | video ke gambar, ubah video ke gambar, convert video ke gambar | extract-multiple-frames-from-video |
| 6 | `/ms/guides/video-frame-demi-frame-iphone/` | video frame by frame iphone | main video bingkai demi bingkai iphone, jeda video pada bingkai tertentu, frame demi frame iphone | frame-by-frame-video-iphone |
| 7 | `/ms/guides/gambar-hd-dari-video/` | video ke gambar hd | gambar hd dari video, gambar jelas dari video, gambar dari video kabur | clear-high-quality-picture-from-video |
| 8 | `/ms/guides/video-ke-jpg-png/` | video to jpg | video to jpg converter, video ke jpg, video to png, video to heic | video-to-jpg-png-heic-iphone |
| 9 | `/ms/guides/video-ke-pdf/` | video to pdf | video to pdf converter, video ke pdf, papan cerita dari video | video-frames-to-pdf |
| 10 | `/ms/guides/thumbnail-youtube-dari-video/` | cara buat thumbnail youtube | thumbnail youtube, thumbnail youtube size, cara buat thumbnail youtube menarik | make-thumbnail-from-video-iphone |


## 33. Norwegian Bokmål (no) — `/no/` and `/no/guides/`

Research used Google autocomplete with hl=no and gl=NO. Search volume is small, and the iPhone-specific phrases dominate:

- **"bilde fra video iphone"**, **"ta bilde fra video (iphone)"**, "ta ut bilde fra video iphone"
- **"lagre bilde fra video iphone"**
- "hvordan ta bilde av video (iphone)"
- "skjermbilde video (iphone)"
- "stillbilde fra video (iphone)", "video til bilde (iphone)"
- English: "video jpg converter", "video to pdf (converter)", "youtube thumbnail size"

The copy uses the iOS labels Bilder (Photos), Del (Share), Filer (Files), and Innstillinger → Kamera → Ta opp video → HDR-video; these are not verified on a Norwegian iPhone. Messenger and Snapchat are the messengers in the copy. The page language stays `no` (hreflang `no`), with og_locale nb_NO.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/no/guides/ta-bilde-fra-video-iphone/` | ta bilde fra video iphone | bilde fra video iphone, hvordan ta bilde av video iphone, ta ut bilde fra video iphone, stillbilde fra video iphone | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/no/guides/skjermbilde-video-iphone/` | skjermbilde video iphone | skjermbilde av video, skjermbilde video, skjermbilde video uskarpt | screenshot-video-iphone-without-losing-quality |
| 3 | `/no/guides/lagre-bilde-fra-video-iphone/` | lagre bilde fra video iphone | lagre bilde fra video, stillbilde fra video, hente bilde fra video | save-frame-from-video-iphone |
| 4 | `/no/guides/app-bilde-fra-video/` | app bilde fra video | app for å ta bilde fra video, gratis app bilde fra video, frame grabber app | frame-grabber-app-iphone |
| 5 | `/no/guides/video-til-bilder/` | video til bilde iphone | video til bilde, flere bilder fra video, video til bilder | extract-multiple-frames-from-video |
| 6 | `/no/guides/video-bilde-for-bilde-iphone/` | video bilde for bilde iphone | frame by frame iphone, stoppe video på riktig bilde, spole bilde for bilde | frame-by-frame-video-iphone |
| 7 | `/no/guides/skarpt-bilde-fra-video/` | skarpt bilde fra video | bilde fra video uskarpt, bilde fra video høy kvalitet, hdr-video mørkt bilde | clear-high-quality-picture-from-video |
| 8 | `/no/guides/video-til-jpg-png/` | video jpg converter | video til jpg, video to png, video to heic, video jpg | video-to-jpg-png-heic-iphone |
| 9 | `/no/guides/video-til-pdf/` | video to pdf | video til pdf, bilder fra video til pdf, storyboard fra video | video-frames-to-pdf |
| 10 | `/no/guides/youtube-thumbnail-fra-video/` | youtube thumbnail size | youtube thumbnail, thumbnail fra video, miniatyrbilde youtube | make-thumbnail-from-video-iphone |


## 34. Slovak (sk) — `/sk/` and `/sk/guides/`

Research used Google autocomplete with hl=sk and gl=SK. Search volume is small; most Slovak users also see Czech results. The phrases that do appear are:

- **"fotka z videa"** (+ iphone, android, online)
- **"ako urobiť / ako spraviť fotku z videa"**
- "screenshot z videa"
- "video fotky"
- English: "video to jpg (converter)", "video to pdf (converter)", "youtube thumbnail size"

The copy uses the iOS labels Fotky (Photos), Zdieľať (Share), Súbory (Files), Nedávne, and Nastavenia → Fotoaparát → Nahrávanie videa → HDR video; these are not verified on a Slovak iPhone. Messenger and WhatsApp are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/sk/guides/fotka-z-videa-iphone/` | fotka z videa iphone | fotka z videa, ako urobiť fotku z videa iphone, vytiahnuť fotku z videa | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/sk/guides/screenshot-z-videa-iphone/` | screenshot z videa | snímka obrazovky z videa iphone, screenshot videa iphone, screenshot z videa rozmazaný | screenshot-video-iphone-without-losing-quality |
| 3 | `/sk/guides/ako-ulozit-fotku-z-videa/` | ako spraviť fotku z videa | ako urobiť fotku z videa, ako uložiť fotku z videa, snímka z videa | save-frame-from-video-iphone |
| 4 | `/sk/guides/aplikacia-fotka-z-videa/` | aplikácia fotka z videa | aplikácia na fotky z videa iphone, bezplatná aplikácia fotka z videa, frame grabber app | frame-grabber-app-iphone |
| 5 | `/sk/guides/video-na-fotky/` | video na fotky | viac fotiek z videa, rozložiť video na fotky, video fotky | extract-multiple-frames-from-video |
| 6 | `/sk/guides/video-snimku-po-snimke-iphone/` | video snímku po snímke iphone | frame by frame iphone, zastaviť video na presnej snímke, prehrávanie po snímkach | frame-by-frame-video-iphone |
| 7 | `/sk/guides/ostra-fotka-z-videa/` | ostrá fotka z videa | fotka z videa v kvalite, rozmazaná fotka z videa, hdr video tmavá fotka | clear-high-quality-picture-from-video |
| 8 | `/sk/guides/video-do-jpg-png/` | video to jpg | video do jpg, video to png, video to heic, video to jpg converter | video-to-jpg-png-heic-iphone |
| 9 | `/sk/guides/video-do-pdf/` | video to pdf | video do pdf, snímky z videa do pdf, storyboard z videa | video-frames-to-pdf |
| 10 | `/sk/guides/youtube-thumbnail-z-videa/` | youtube thumbnail size | youtube thumbnail, náhľad na youtube z videa, miniatúra youtube | make-thumbnail-from-video-iphone |


## 35. Swedish (sv) — `/sv/` and `/sv/guides/`

Research used Google autocomplete with hl=sv and gl=SE. The iPhone-specific phrases dominate:

- **"bild från video iphone"**, **"ta bild från video (iphone)"**, "ta foto från video"
- **"spara bild från video (iphone)"**
- "stillbild från video iphone", "ta (ut) stillbilder från video(klipp)", "ta ut bilder från video iphone"
- "hur tar man en bild från en video (iphone)"
- "skärmdump video (iphone)", "printscreen video iphone", "skärmdump film iphone"
- English: "video jpg converter", "video to pdf (converter)", "youtube thumbnail size"

The copy uses the iOS labels Bilder (Photos), Dela (Share), Filer (Files), Senaste, and Inställningar → Kamera → Spela in video → HDR-video; these are not verified on a Swedish iPhone. Messenger and Snapchat are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/sv/guides/ta-bild-fran-video-iphone/` | ta bild från video iphone | bild från video iphone, hur tar man en bild från en video iphone, stillbild från video iphone, ta foto från video | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/sv/guides/skarmdump-video-iphone/` | skärmdump video iphone | skärmdump video, printscreen video iphone, skärmdump film iphone | screenshot-video-iphone-without-losing-quality |
| 3 | `/sv/guides/spara-bild-fran-video-iphone/` | spara bild från video iphone | spara bild från video, stillbild från video, ta stillbild från video | save-frame-from-video-iphone |
| 4 | `/sv/guides/app-bild-fran-video/` | app bild från video | app för att ta bild från video, gratis app bild från video, frame grabber app | frame-grabber-app-iphone |
| 5 | `/sv/guides/ta-ut-bilder-fran-video/` | ta ut bilder från video iphone | ta stillbilder från video iphone, ta ut stillbilder från videoklipp, flera bilder från video | extract-multiple-frames-from-video |
| 6 | `/sv/guides/video-bildruta-for-bildruta-iphone/` | video bildruta för bildruta iphone | frame by frame iphone, pausa video på rätt bildruta, stega bildruta för bildruta | frame-by-frame-video-iphone |
| 7 | `/sv/guides/skarp-bild-fran-video/` | skarp bild från video | bild från video suddig, bild från video hög kvalitet, hdr-video mörk bild | clear-high-quality-picture-from-video |
| 8 | `/sv/guides/video-till-jpg-png/` | video jpg converter | video till jpg, video to png, video to heic, video jpg hd | video-to-jpg-png-heic-iphone |
| 9 | `/sv/guides/video-till-pdf/` | video to pdf | video till pdf, bildrutor till pdf, storyboard från video | video-frames-to-pdf |
| 10 | `/sv/guides/youtube-thumbnail-fran-video/` | youtube thumbnail size | youtube thumbnail, thumbnail från video, miniatyrbild youtube | make-thumbnail-from-video-iphone |


## 36. Bulgarian (bg) — `/bg/` and `/bg/guides/`

Research used Google autocomplete with hl=bg and gl=BG. Volume is low, and Bulgarians often say "клип" (clip) for a video. The phrases that do appear are:

- **"как да направя снимка от видео(клип)"**, "снимка от видео", "снимка от видеоклип"
- **"снимка от клип"**, "как се прави снимка от клип", "изрязване на снимка от клип", "снимки от клип"
- Screenshot searches are in English ("screenshot video iphone")
- English: "video to jpg (converter)", "video to pdf (converter)", "youtube thumbnail size"

"снимка от видеозон" (ultrasound) dominates "снимка от видео" autocomplete and is unrelated. The copy uses the iOS labels Снимки (Photos), Сподели (Share), Файлове (Files), Скорошни, and Настройки → Камера → Записване на видео → HDR видео; these are not verified on a Bulgarian iPhone. Viber (very popular in Bulgaria) and Messenger are the messengers in the copy. Slugs are transliterated Bulgarian.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/bg/guides/snimka-ot-video-iphone/` | как да направя снимка от видео | снимка от видео, снимка от видео iphone, как да направя снимка от видеоклип, снимка от видеоклип | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/bg/guides/skrijnshot-na-video-iphone/` | screenshot video iphone | скрийншот на видео, скрийншот на видео iphone, размазан скрийншот от видео | screenshot-video-iphone-without-losing-quality |
| 3 | `/bg/guides/zapazvane-na-snimka-ot-video/` | как се прави снимка от клип | снимка от клип, как да направя снимка от клип, изрязване на снимка от клип, как да запазя снимка от видео | save-frame-from-video-iphone |
| 4 | `/bg/guides/prilozhenie-snimka-ot-video/` | приложение за снимки от видео | приложение снимка от видео iphone, безплатно приложение снимка от видео, frame grabber app | frame-grabber-app-iphone |
| 5 | `/bg/guides/video-v-snimki/` | снимки от клип | видео в снимки, извличане на кадри от видео, много снимки от видео | extract-multiple-frames-from-video |
| 6 | `/bg/guides/video-kadar-po-kadar-iphone/` | видео кадър по кадър iphone | frame by frame iphone, пауза на точен кадър, кадър по кадър | frame-by-frame-video-iphone |
| 7 | `/bg/guides/kachestvena-snimka-ot-video/` | качествена снимка от видео | остра снимка от видео, размазана снимка от видео, hdr видео тъмна снимка | clear-high-quality-picture-from-video |
| 8 | `/bg/guides/video-v-jpg-png/` | video to jpg | video to jpg converter, видео в jpg, video to png, video to heic | video-to-jpg-png-heic-iphone |
| 9 | `/bg/guides/video-v-pdf/` | video to pdf | video to pdf converter, видео в pdf, сториборд от видео | video-frames-to-pdf |
| 10 | `/bg/guides/youtube-thumbnail-ot-video/` | youtube thumbnail size | youtube thumbnail, thumbnail от видео, корица за видео | make-thumbnail-from-video-iphone |


## 37. Slovenian (sl) — `/sl/` and `/sl/guides/`

Research used Google autocomplete with hl=sl and gl=SI. Volume is very low: only **"slika iz videa"** appears as a Slovenian suggestion. Screenshot, JPG, PDF and thumbnail searches are in English ("screenshot video", "video to jpg (converter)", "video to pdf", "youtube thumbnail size"). The Slovenian guides therefore target the core phrase plus natural long-tails (kako narediti / shraniti sliko iz videa, posnetek zaslona videa, ostra slika iz videa, video v slike).

The copy uses "sličica" for frame and the iOS labels Fotografije (Photos), Deli (Share), Datoteke (Files), Nedavno, and Nastavitve → Kamera → Snemanje videoposnetkov → HDR-video; these are not verified on a Slovenian iPhone. Viber and WhatsApp are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/sl/guides/slika-iz-videa-iphone/` | slika iz videa | slika iz videa iphone, kako narediti sliko iz videa, fotografija iz videa | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/sl/guides/posnetek-zaslona-videa-iphone/` | screenshot video | posnetek zaslona videa, screenshot videa iphone, zamegljen posnetek zaslona videa | screenshot-video-iphone-without-losing-quality |
| 3 | `/sl/guides/shraniti-sliko-iz-videa/` | kako shraniti sliko iz videa | shraniti sliko iz videa, zajem slike iz videa, sličica iz videa | save-frame-from-video-iphone |
| 4 | `/sl/guides/aplikacija-slika-iz-videa/` | aplikacija slika iz videa | aplikacija za slike iz videa iphone, brezplačna aplikacija slika iz videa, frame grabber app | frame-grabber-app-iphone |
| 5 | `/sl/guides/video-v-slike/` | video v slike | več slik iz videa, video slike, razdeliti video na slike | extract-multiple-frames-from-video |
| 6 | `/sl/guides/video-slicica-za-slicico-iphone/` | video sličica za sličico iphone | frame by frame iphone, ustaviti video na točni sličici, predvajanje po sličicah | frame-by-frame-video-iphone |
| 7 | `/sl/guides/ostra-slika-iz-videa/` | ostra slika iz videa | kakovostna slika iz videa, zamegljena slika iz videa, hdr-video temna slika | clear-high-quality-picture-from-video |
| 8 | `/sl/guides/video-v-jpg-png/` | video to jpg | video v jpg, video to png, video to heic, video to jpg converter | video-to-jpg-png-heic-iphone |
| 9 | `/sl/guides/video-v-pdf/` | video to pdf | video v pdf, sličice v pdf, snemalna knjiga iz videa | video-frames-to-pdf |
| 10 | `/sl/guides/youtube-thumbnail-iz-videa/` | youtube thumbnail size | youtube thumbnail, naslovna slika videa, thumbnail iz videa | make-thumbnail-from-video-iphone |


## 38. Catalan (ca) — `/ca/` and `/ca/guides/`

Research used Google autocomplete with hl=ca and gl=ES. Catalan speakers mostly search this topic in Spanish (already covered by `/es/`: "sacar foto de un video (iphone)", "hacer / guardar / extraer foto de un video iphone"). Catalan-language suggestions are almost absent; only "captura de pantalla en vídeo / vídeo iphone" and "vídeo a foto" appear. Conversion, PDF and thumbnail searches are in English.

The Catalan guides therefore target natural Catalan phrasing (com treure una foto d'un vídeo, desar / guardar foto d'un vídeo, fotograma d'un vídeo, vídeo a fotogrames, foto nítida d'un vídeo) plus the English terms. Copy uses the informal "tu", as Apple's Catalan UI does. The iOS labels used are Fotos (Photos), Comparteix (Share), Fitxers (Files), Recents, and Configuració → Càmera → Gravació de vídeo → Vídeo HDR; these are not verified on a Catalan iPhone. WhatsApp and Telegram are the messengers in the copy. geo_region is ES-CT.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/ca/guides/treure-foto-dun-video-iphone/` | com treure una foto d'un vídeo | foto d'un vídeo iphone, treure foto d'un vídeo, com fer una foto d'un vídeo | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/ca/guides/captura-pantalla-video-iphone/` | captura de pantalla vídeo iphone | captura de pantalla en vídeo, captura de pantalla vídeo, captura borrosa d'un vídeo | screenshot-video-iphone-without-losing-quality |
| 3 | `/ca/guides/desar-foto-dun-video/` | guardar foto d'un vídeo | desar foto d'un vídeo, fotograma d'un vídeo, imatge d'un vídeo | save-frame-from-video-iphone |
| 4 | `/ca/guides/app-foto-dun-video/` | aplicació per treure fotos d'un vídeo | app foto d'un vídeo iphone, app gratuïta foto d'un vídeo, frame grabber app | frame-grabber-app-iphone |
| 5 | `/ca/guides/video-a-fotogrames/` | vídeo a fotogrames | extreure fotogrames d'un vídeo, vídeo a fotos, diverses fotos d'un vídeo | extract-multiple-frames-from-video |
| 6 | `/ca/guides/video-fotograma-a-fotograma-iphone/` | vídeo fotograma a fotograma iphone | frame by frame iphone, pausar un vídeo al fotograma exacte, fotograma a fotograma | frame-by-frame-video-iphone |
| 7 | `/ca/guides/foto-nitida-dun-video/` | foto nítida d'un vídeo | foto de qualitat d'un vídeo, foto borrosa d'un vídeo, vídeo hdr foto fosca | clear-high-quality-picture-from-video |
| 8 | `/ca/guides/video-a-jpg-png/` | video to jpg | vídeo a jpg, video to png, video to heic, video to jpg converter | video-to-jpg-png-heic-iphone |
| 9 | `/ca/guides/video-a-pdf/` | video to pdf | vídeo a pdf, fotogrames a pdf, storyboard d'un vídeo | video-frames-to-pdf |
| 10 | `/ca/guides/miniatura-youtube-dun-video/` | youtube thumbnail size | youtube thumbnail, miniatura de youtube, portada d'un vídeo | make-thumbnail-from-video-iphone |


## 39. Bengali (bn) — `/bn/` and `/bn/guides/`

Research used Google autocomplete with hl=bn and gl=BD. Volume is low and mixes Bangla script with romanized Bangla ("video theke chobi / photo"). The phrases that appear are:

- **"ভিডিও থেকে ছবি"**, "video theke chobi", "ভিডিও থেকে ফটো", "video theke photo"
- **"ভিডিও থেকে ছবি তোলার নিয়ম"** (the rule/method for taking a photo from a video)
- "ভিডিও স্ক্রিনশট", "স্ক্রিনশট ভিডিও কিভাবে করে"
- English: "video to photo (converter, frame capture, hd)", "video to jpg converter", "video to pdf (converter, notes)", "youtube thumbnail (size, design)"

The copy is in Bangla script, with the romanized phrases in `secondary_keywords`/meta keywords and English terms in titles where search demand is in English. Slugs are romanized. The locale stays bn_IN (as configured in build.js). The iOS labels used are ফটো (Photos), শেয়ার (Share), ফাইল (Files), সাম্প্রতিক, and সেটিংস → ক্যামেরা → ভিডিও রেকর্ড করুন → HDR ভিডিও; these are not verified on a Bengali iPhone. WhatsApp and Messenger are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/bn/guides/video-theke-chobi-iphone/` | ভিডিও থেকে ছবি | video theke chobi, ভিডিও থেকে ফটো, video theke photo, iphone ভিডিও থেকে ছবি | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/bn/guides/video-screenshot-iphone/` | ভিডিও স্ক্রিনশট | video screenshot, স্ক্রিনশট ভিডিও কিভাবে করে, video screenshot iphone | screenshot-video-iphone-without-losing-quality |
| 3 | `/bn/guides/video-theke-chobi-tolar-niyom/` | ভিডিও থেকে ছবি তোলার নিয়ম | ভিডিও থেকে ছবি সেভ, ভিডিও থেকে ফটো, video theke photo | save-frame-from-video-iphone |
| 4 | `/bn/guides/video-theke-chobi-app/` | ভিডিও থেকে ছবি তোলার অ্যাপ | video theke photo ber korar app, video to photo converter, frame grabber app | frame-grabber-app-iphone |
| 5 | `/bn/guides/video-theke-onek-chobi/` | ভিডিও থেকে অনেক ছবি | video to photo frame capture, ভিডিও থেকে ফ্রেম, video theke photo | extract-multiple-frames-from-video |
| 6 | `/bn/guides/frame-by-frame-video-iphone/` | frame by frame video iphone | ফ্রেম বাই ফ্রেম ভিডিও, সঠিক ফ্রেমে ভিডিও থামানো, play frame by frame iphone | frame-by-frame-video-iphone |
| 7 | `/bn/guides/video-theke-hd-chobi/` | ভিডিও থেকে HD ছবি | video to photo hd, ভিডিও থেকে পরিষ্কার ছবি, ঝাপসা ছবি ভিডিও থেকে | clear-high-quality-picture-from-video |
| 8 | `/bn/guides/video-to-jpg-png/` | video to jpg converter | video to jpg, video to png, video to heic, ভিডিও থেকে JPG | video-to-jpg-png-heic-iphone |
| 9 | `/bn/guides/video-to-pdf/` | video to pdf converter | video to pdf, video to pdf notes, ভিডিও থেকে PDF | video-frames-to-pdf |
| 10 | `/bn/guides/youtube-thumbnail-video-theke/` | youtube thumbnail size | youtube thumbnail, youtube thumbnail design, ভিডিও থেকে থাম্বনেইল | make-thumbnail-from-video-iphone |


## 40. Malayalam (ml) — `/ml/` and `/ml/guides/`

Research used Google autocomplete with hl=ml and gl=IN. Neither Malayalam script ("വീഡിയോയിൽ നിന്ന് ഫോട്ടോ") nor Manglish ("video il ninnu photo") returns suggestions; Malayalam speakers search this topic in English. The phrases that appear are:

- **"iphone video to photo"** (+ converter, app, frame to photo)
- **"video frame to photo (iphone)"**, "ios video frame to photo", "video to photo frame capture"
- "video to photo converter hd / hd quality"
- "video screenshot"
- "video to jpg converter", "video to pdf (converter, notes)", "youtube thumbnail size"

So the Malayalam guides target English keywords in titles and slugs (English slugs), with the body copy in Malayalam. The iOS labels used are ഫോട്ടോകൾ (Photos), പങ്കിടുക (Share), ഫയലുകൾ (Files), and ക്രമീകരണം → ക്യാമറ → വീഡിയോ റെക്കോർഡ് ചെയ്യുക → HDR വീഡിയോ; these are not verified on a Malayalam iPhone. WhatsApp and Instagram are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/ml/guides/iphone-video-to-photo/` | iphone video to photo | വീഡിയോയിൽ നിന്ന് ഫോട്ടോ, video il ninnu photo, video to photo | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/ml/guides/video-screenshot-iphone/` | video screenshot | വീഡിയോ സ്ക്രീൻഷോട്ട്, video screenshot iphone, video screenshot blur | screenshot-video-iphone-without-losing-quality |
| 3 | `/ml/guides/video-frame-to-photo-iphone/` | video frame to photo iphone | video frame to photo, ios video frame to photo, വീഡിയോ ഫ്രെയിം ഫോട്ടോ ആക്കാൻ | save-frame-from-video-iphone |
| 4 | `/ml/guides/video-to-photo-app/` | iphone video to photo app | video to photo app, video to photo converter, frame grabber app | frame-grabber-app-iphone |
| 5 | `/ml/guides/video-to-photo-frame-capture/` | video to photo frame capture | video to photo frame converter, വീഡിയോയിൽ നിന്ന് ഒരുപാട് ഫോട്ടോ, video frames to photos | extract-multiple-frames-from-video |
| 6 | `/ml/guides/frame-by-frame-video-iphone/` | frame by frame video iphone | ഫ്രെയിം ബൈ ഫ്രെയിം വീഡിയോ, play video frame by frame iphone, കൃത്യമായ ഫ്രെയിമിൽ വീഡിയോ നിർത്താൻ | frame-by-frame-video-iphone |
| 7 | `/ml/guides/video-to-photo-hd/` | video to photo converter hd | video to photo hd quality, വീഡിയോയിൽ നിന്ന് HD ഫോട്ടോ, മങ്ങിയ ഫോട്ടോ വീഡിയോയിൽ നിന്ന് | clear-high-quality-picture-from-video |
| 8 | `/ml/guides/video-to-jpg-png/` | video to jpg converter | video to jpg, video to png, video to heic, video to jpg converter high quality | video-to-jpg-png-heic-iphone |
| 9 | `/ml/guides/video-to-pdf/` | video to pdf converter | video to pdf, video to pdf notes, വീഡിയോയിൽ നിന്ന് PDF | video-frames-to-pdf |
| 10 | `/ml/guides/youtube-thumbnail-from-video/` | youtube thumbnail size | youtube thumbnail, youtube thumbnail maker, വീഡിയോയിൽ നിന്ന് തംബ്നെയിൽ | make-thumbnail-from-video-iphone |


## 41. Tamil (ta) — `/ta/` and `/ta/guides/`

Research used Google autocomplete with hl=ta and gl=IN. Tamil-script queries return almost nothing ("வீடியோ போட்டோ" only surfaces editing apps; "வீடியோ ஸ்கிரீன்ஷாட்" redirects to English "video screenshot"), and Tanglish ("video la irunthu photo") returns nothing. Tamil speakers search this in English:

- **"iphone video to photo"** (+ converter, app, convert video to photo, frame to photo)
- **"video frame to photo (iphone)"**, "ios video frame to photo", "video to photo frame capture"
- "video to photo converter hd", "hd video screenshot", "video screenshot app"
- "video to jpg converter", "video to pdf (converter, notes)", "youtube thumbnail size"

So, as with Malayalam, titles and slugs use English keywords (same English slugs as `/ml/`), and the body copy is Tamil. The iOS labels used are புகைப்படங்கள் (Photos), பகிர் (Share), கோப்புகள் (Files), சமீபத்தியவை, and அமைப்புகள் → கேமரா → வீடியோ பதிவுசெய் → HDR வீடியோ; these are not verified on a Tamil iPhone. WhatsApp and Instagram are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/ta/guides/iphone-video-to-photo/` | iphone video to photo | வீடியோவில் இருந்து போட்டோ, வீடியோ போட்டோ, iphone convert video to photo | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/ta/guides/video-screenshot-iphone/` | video screenshot | வீடியோ ஸ்கிரீன்ஷாட், hd video screenshot, video screenshot app | screenshot-video-iphone-without-losing-quality |
| 3 | `/ta/guides/video-frame-to-photo-iphone/` | video frame to photo iphone | video frame to photo, iphone video frame to photo, ios video frame to photo | save-frame-from-video-iphone |
| 4 | `/ta/guides/video-to-photo-app/` | iphone video to photo app | video to photo app, iphone video to photo converter, frame grabber app | frame-grabber-app-iphone |
| 5 | `/ta/guides/video-to-photo-frame-capture/` | video to photo frame capture | video frames to photos, வீடியோவிலிருந்து பல போட்டோக்கள், video to photo converter | extract-multiple-frames-from-video |
| 6 | `/ta/guides/frame-by-frame-video-iphone/` | frame by frame video iphone | ஃப்ரேம் பை ஃப்ரேம் வீடியோ, play video frame by frame iphone, சரியான ஃப்ரேமில் வீடியோவை நிறுத்த | frame-by-frame-video-iphone |
| 7 | `/ta/guides/video-to-photo-hd/` | video to photo converter hd | hd video screenshot, வீடியோவிலிருந்து HD போட்டோ, மங்கலான போட்டோ வீடியோவிலிருந்து | clear-high-quality-picture-from-video |
| 8 | `/ta/guides/video-to-jpg-png/` | video to jpg converter | video to jpg, video to png, video to heic, video to jpg converter high quality | video-to-jpg-png-heic-iphone |
| 9 | `/ta/guides/video-to-pdf/` | video to pdf converter | video to pdf, video to pdf notes, வீடியோவிலிருந்து PDF | video-frames-to-pdf |
| 10 | `/ta/guides/youtube-thumbnail-from-video/` | youtube thumbnail size | youtube thumbnail, youtube thumbnail maker, வீடியோவிலிருந்து தம்ப்நெயில் | make-thumbnail-from-video-iphone |


## 42. Telugu (te) — `/te/` and `/te/guides/`

Research used Google autocomplete with hl=te and gl=IN. As with Malayalam and Tamil, neither Telugu script ("వీడియో నుండి ఫోటో") nor romanized Telugu ("video nundi photo") returns suggestions; "వీడియో స్క్రీన్‌షాట్" redirects to English ("screenshot from video", "video screenshot hd"). Telugu speakers search in English:

- **"iphone video to photo"** (+ converter, app, frame to photo)
- **"video frame to photo (iphone)"**, "video to photo frame capture / grabber"
- "video to photo converter hd", "video screenshot (hd)"
- "video to jpg converter", "video to pdf (converter, notes)", "youtube thumbnail size"

Titles and slugs use English keywords (same English slugs as `/ml/` and `/ta/`); body copy is Telugu. The iOS labels used are ఫోటోలు (Photos), షేర్ (Share), ఫైల్స్ (Files), ఇటీవలివి, and సెట్టింగ్‌లు → కెమెరా → వీడియో రికార్డ్ చేయండి → HDR వీడియో; these are not verified on a Telugu iPhone. WhatsApp and Instagram are the messengers in the copy.

| # | URL | Primary keyword | Supporting long-tails | EN pair |
|---|---|---|---|---|
| 1 | `/te/guides/iphone-video-to-photo/` | iphone video to photo | వీడియో నుండి ఫోటో, వీడియో ఫోటో, iphone video frame to photo | how-to-get-a-picture-from-a-video-on-iphone |
| 2 | `/te/guides/video-screenshot-iphone/` | video screenshot | screenshot from video, video screenshot hd, వీడియో స్క్రీన్‌షాట్ | screenshot-video-iphone-without-losing-quality |
| 3 | `/te/guides/video-frame-to-photo-iphone/` | video frame to photo iphone | video frame to photo, iphone video frame to photo, video to photo frame grabber | save-frame-from-video-iphone |
| 4 | `/te/guides/video-to-photo-app/` | iphone video to photo app | video to photo app, video to photo frame grabber, frame grabber app | frame-grabber-app-iphone |
| 5 | `/te/guides/video-to-photo-frame-capture/` | video to photo frame capture | video to photo frame capture apk, వీడియో నుండి అనేక ఫోటోలు, video frames to photos | extract-multiple-frames-from-video |
| 6 | `/te/guides/frame-by-frame-video-iphone/` | frame by frame video iphone | ఫ్రేమ్ బై ఫ్రేమ్ వీడియో, play video frame by frame iphone, సరైన ఫ్రేమ్ వద్ద వీడియో ఆపడం | frame-by-frame-video-iphone |
| 7 | `/te/guides/video-to-photo-hd/` | video to photo converter hd | video screenshot hd, వీడియో నుండి HD ఫోటో, మసకబారిన ఫోటో వీడియో నుండి | clear-high-quality-picture-from-video |
| 8 | `/te/guides/video-to-jpg-png/` | video to jpg converter | video to jpg, video to png, video to heic, video to jpg converter high quality | video-to-jpg-png-heic-iphone |
| 9 | `/te/guides/video-to-pdf/` | video to pdf converter | video to pdf, video to pdf notes, వీడియో నుండి PDF | video-frames-to-pdf |
| 10 | `/te/guides/youtube-thumbnail-from-video/` | youtube thumbnail size | youtube thumbnail, youtube thumbnail maker, వీడియో నుండి థంబ్‌నెయిల్ | make-thumbnail-from-video-iphone |
