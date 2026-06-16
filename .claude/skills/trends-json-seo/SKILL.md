---
name: trends-json-seo
description: SEO-оптимизация текстов в build/*.json на основе пула поисковых запросов из Google Trends по теме и локалям. Использует Python (pytrends) для сбора related/rising queries и suggestions, затем правит meta, hero, FAQ и контентные блоки JSON. Триггеры: Google Trends, SEO JSON, оптимизация переводов, keywords по локалям, trends-json-seo, пул запросов, meta title/description, build/*.json SEO.
metadata:
  version: 1.0.0
  tags: ["seo", "google-trends", "json", "i18n", "keywords", "pytrends"]
---

# Trends → JSON SEO

Оптимизирует маркетинговые тексты в `build/{lang}.json` под реальные поисковые запросы: сначала собирает пул ключей через **Google Trends (Python / pytrends)** по теме и гео каждой локали, затем точечно обновляет SEO-поля и пересобирает сайт.

## Когда использовать

- Нужно усилить `meta.title`, `meta.description`, `hero`, FAQ под локальный спрос.
- Есть тема продукта (например, «извлечение кадра из видео на iPhone») и список локалей.
- Пользователь просит SEO для JSON / мультиязычного лендинга с опорой на Trends.

## Жёсткие правила

1. **Сначала Trends, потом правки** — не менять JSON «на глаз» без отчёта `trends-keywords.py`.
2. **Одна локаль за раз** (если пользователь не просит пакет).
3. **Не трогать** `index.html` и `*/index.html` — только `build/{lang}.json`, затем `npm run build`.
4. **Не выдумывать факты** (рейтинги, размер приложения) — только формулировки и ключи.
5. После правок: `npm run build` и `npm run validate`.

## Быстрый старт

### 1. Установить зависимости (один раз)

На macOS используйте venv внутри скилла:

```bash
cd .claude/skills/trends-json-seo/scripts
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
```

Дальше вызывайте скрипт через `.venv/bin/python trends-keywords.py` (или `source .venv/bin/activate`).

### 2. Собрать пул запросов

Из корня репозитория (`TRENDS_PY` — путь к Python в venv):

```bash
TRENDS_PY=.claude/skills/trends-json-seo/scripts/.venv/bin/python
TRENDS_SCRIPT=.claude/skills/trends-json-seo/scripts/trends-keywords.py

# Одна локаль, семена из build/en.json (hero + keywords)
$TRENDS_PY $TRENDS_SCRIPT \
  --lang en \
  --project-root . \
  -o /tmp/trends-en.json

# Несколько локалей, явная тема (семена на англ.; geo из meta.geo_region)
$TRENDS_PY $TRENDS_SCRIPT \
  --langs en,de,ru \
  --seeds "extract frame from video,video frame extractor" \
  --project-root . \
  -o /tmp/trends-batch.json

# Все языки проекта, семена из каждого JSON
$TRENDS_PY $TRENDS_SCRIPT \
  --all-langs \
  --project-root . \
  -o /tmp/trends-all.json
```

Скрипт для каждой локали:

- берёт `geo` из `build/{lang}.json` → `meta.geo_region`;
- берёт `hl` по коду языка;
- по каждому seed возвращает **top**, **rising** related queries и **suggestions**;
- формирует `pooled_keywords` и `global_pooled_keywords`.

При ошибке 429 от Google скрипт делает до 3 повторов с backoff; при необходимости увеличить `--delay 6` и повторить только проблемные локали. Не запускать `--all-langs` подряд без пауз — Google легко режет по IP.

### 3. Проанализировать отчёт

| Источник в JSON отчёта | Куда в `build/{lang}.json` |
|------------------------|----------------------------|
| `rising` | новые/обновлённые `faq.items[].question`, подзаголовки |
| `top` | `meta.title`, `hero.title`, `meta.keywords` |
| `suggestions` | `app_info.alternate_name`, синонимы в `features` |
| `pooled_keywords` | сверка покрытия; что ещё не использовано |

Подробная карта полей: [references/seo-json-fields.md](references/seo-json-fields.md).

### 4. Оптимизировать JSON

Следовать [references/optimization-rules.md](references/optimization-rules.md):

1. Открыть `build/{lang}.json`.
2. Сверить текущие `meta` / `hero` / `faq` с пулом Trends.
3. Внести правки (сохранить плейсхолдеры и бренд).
4. Кратко задокументировать в ответе: какие запросы из Trends куда легли.

Для неродных локалей при сомнении в формулировке — свериться со скиллом `app-website-translation` (терминология Apple / естественность).

### 5. Сборка и проверка

```bash
npm run build
npm run validate
```

## Workflow (полный)

```
Пользователь: тема + локаль(и)
        ↓
[Pre-flight] тема, lang(s), путь к build/*.json
        ↓
pip install + trends-keywords.py → отчёт JSON
        ↓
Аудит текущего build/{lang}.json vs pooled_keywords
        ↓
Правки по seo-json-fields + optimization-rules
        ↓
npm run build && npm run validate
        ↓
Сводка: ключи Trends → изменённые поля
```

## Pre-flight (спросить, если неясно)

- **Тема / seed-запросы** (или «взять из en.json»).
- **Локали**: одна (`de`) или список / `--all-langs`.
- **Глубина**: только `meta` или полный проход (hero + FAQ + seo_chapter).

## Формат ответа после оптимизации

```markdown
## Trends SEO — {lang}

**Geo:** {geo} | **Seeds:** …

### Top opportunities from Trends
- rising: …
- top: …

### Changes
| Field | Before (short) | After (short) | Trend query |
|-------|----------------|---------------|-------------|

### Build
- `npm run build` — OK
- `npm run validate` — OK
```

## Альтернатива: MCP Google News Trends

Если Python недоступен, для разовой разведки можно вызвать MCP `user-google-news-trends` → `get_trending_terms` с `geo` из `meta.geo_region`. Это **не заменяет** related/rising queries по теме — для SEO-правок JSON предпочтителен `trends-keywords.py`.

## Файлы скилла

| Путь | Назначение |
|------|------------|
| `scripts/trends-keywords.py` | Пул запросов Google Trends по локалям |
| `scripts/requirements.txt` | `pytrends`, `pandas` |
| `references/seo-json-fields.md` | Какие ключи JSON править |
| `references/optimization-rules.md` | Правила отбора и вписывания ключей |

## Связанные скиллы

- `app-website-translation` — качество и глоссарий перевода
- `seo-audit` — технический и контентный аудит после крупных изменений
- `geo-optimization` — цитаты в AI-поиске (entity_definition, FAQ)
