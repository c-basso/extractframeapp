/**
 * Builds keyword-targeted guide pages:  /guides/<slug>/index.html  +  /guides/index.html (hub)
 * Source: build/guides/posts/*.json, config: build/guides/guides.json
 * No image processing here (screenshots are pre-sized in screenshots/v2/), so no sharp dependency.
 */
const fs = require('fs');
const path = require('path');

const { renderTemplate, stripHtml } = require('../template-engine');
const { loadTemplate } = require('../lib/partials');
const { siteLinks, screenshots, schemaRating, appFacts } = require('../lib/site-context');
const { SITE_URL, AUTHOR_URL, DEFAULT_OG_LOGO } = require('../constants');

const ROOT_DIR = path.join(__dirname, '..', '..');
const POSTS_DIR = path.join(__dirname, 'posts');
const OUT_DIR = path.join(ROOT_DIR, 'guides');
const CONFIG_PATH = path.join(__dirname, 'guides.json');
const GUIDE_TEMPLATE = path.join(__dirname, 'template-guide.html');
const INDEX_TEMPLATE = path.join(__dirname, 'template-index.html');

const REQUIRED = ['slug', 'keyword', 'title', 'description', 'h1', 'nav_title', 'card_title', 'excerpt',
    'lead', 'quick_answer', 'datePublished', 'content_intro', 'steps_title', 'steps', 'content_body', 'faq'];

function abs(rel) {
    return `${SITE_URL.replace(/\/?$/, '/')}${String(rel).replace(/^\//, '')}`;
}

function displayDate(iso) {
    return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
        .format(new Date(`${iso}T12:00:00Z`));
}

function loadGuides() {
    if (!fs.existsSync(POSTS_DIR)) return [];
    const guides = fs.readdirSync(POSTS_DIR)
        .filter((f) => f.endsWith('.json'))
        .map((f) => {
            const g = JSON.parse(fs.readFileSync(path.join(POSTS_DIR, f), 'utf8'));
            for (const k of REQUIRED) {
                if (g[k] === undefined || g[k] === '' || (Array.isArray(g[k]) && g[k].length === 0)) {
                    throw new Error(`Guide ${f} is missing "${k}"`);
                }
            }
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(g.slug)) throw new Error(`Guide ${f}: bad slug ${g.slug}`);
            if (`${g.slug}.json` !== f) throw new Error(`Guide ${f}: file name must equal slug`);
            return g;
        })
        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || a.slug.localeCompare(b.slug));
    const seen = new Set();
    for (const g of guides) {
        if (seen.has(g.slug)) throw new Error(`Duplicate guide slug ${g.slug}`);
        seen.add(g.slug);
        g.url = `/guides/${g.slug}/`;
        g.canonical = abs(`guides/${g.slug}/`);
    }
    return guides;
}

/** Cards for homepage / hub / related lists. */
function guideCards(guides) {
    return guides.map((g) => ({
        slug: g.slug, url: g.url, keyword: g.keyword, card_title: g.card_title,
        nav_title: g.nav_title, excerpt: g.excerpt
    }));
}

function breadcrumb(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.url }))
    };
}

function sharedContext(en, config, buildTimestamp) {
    const shots = screenshots(en.screenshots && en.screenshots.items, en.app_info.name);
    return {
        meta: {
            version: buildTimestamp,
            site_name: en.meta.site_name,
            app_store_id: en.meta.app_store_id
        },
        site: siteLinks('/'),
        nav: { ...en.nav, prefix: '/' },
        labels: { ...en.labels, ...config.labels },
        hero: { download_alt: en.hero.download_alt, logo_alt: en.hero.logo_alt },
        app_info: { ...en.app_info, ...appFacts() },
        schema_rating: schemaRating(),
        footer: en.footer,
        sticky: en.sticky,
        footer_languages: [],
        show_languages: false,
        shots
    };
}

async function buildGuides({ buildTimestamp, buildDateIso, en }) {
    const guides = loadGuides();
    if (guides.length === 0) {
        console.log('ℹ️  No guides found — skipping guides build');
        return [];
    }
    const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    const guideTpl = loadTemplate(GUIDE_TEMPLATE);
    const indexTpl = loadTemplate(INDEX_TEMPLATE);
    const cards = guideCards(guides);
    const bySlug = Object.fromEntries(cards.map((c) => [c.slug, c]));
    const base = sharedContext(en, config, buildTimestamp);
    const ogImage = `${SITE_URL}site_preview.png`;
    const homeUrl = SITE_URL;
    const hubUrl = abs('guides/');

    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

    for (const g of guides) {
        const dateModified = g.dateModified || g.datePublished;
        const steps = g.steps.map((s) => {
            const shot = base.shots[s.shot ?? 1] || base.shots[1];
            return { ...s, image: shot.src_390, image_abs: abs(shot.src_780_rel), image_alt: s.image_alt || shot.alt };
        });
        const related = (g.related || []).map((slug) => {
            if (!bySlug[slug]) throw new Error(`Guide ${g.slug}: related slug "${slug}" not found`);
            return bySlug[slug];
        });
        const words = stripHtml(`${g.lead} ${g.quick_answer} ${g.content_intro} ${steps.map((s) => s.text).join(' ')} ${g.content_body}`)
            .split(/\s+/).filter(Boolean).length;
        const readingMinutes = Math.max(2, Math.round(words / 220));

        const seo = {
            article: {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: g.h1,
                description: g.description,
                image: [ogImage, ...steps.map((s) => s.image_abs)],
                datePublished: `${g.datePublished}T09:00:00+00:00`,
                dateModified: `${dateModified}T09:00:00+00:00`,
                inLanguage: 'en',
                author: { '@type': 'Person', name: g.author || 'Vladimir Ivakhnenko', url: AUTHOR_URL },
                publisher: { '@type': 'Organization', name: en.app_info.publisher || 'c-basso', logo: { '@type': 'ImageObject', url: DEFAULT_OG_LOGO } },
                mainEntityOfPage: { '@type': 'WebPage', '@id': g.canonical },
                about: { '@type': 'SoftwareApplication', name: en.app_info.name, operatingSystem: 'iOS', applicationCategory: 'PhotoApplication', url: SITE_URL },
                keywords: [g.keyword, ...(g.secondary_keywords || [])].join(', '),
                wordCount: words
            },
            howto: {
                '@context': 'https://schema.org',
                '@type': 'HowTo',
                name: g.steps_title,
                description: g.quick_answer,
                totalTime: g.total_time || 'PT1M',
                tool: [{ '@type': 'HowToTool', name: en.app_info.name }],
                step: steps.map((s, i) => ({
                    '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text, image: s.image_abs,
                    url: `${g.canonical}#steps`
                }))
            },
            faq: {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: g.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
            },
            breadcrumb: breadcrumb([
                { name: config.labels.home, url: homeUrl },
                { name: config.labels.guides, url: hubUrl },
                { name: g.nav_title, url: g.canonical }
            ])
        };

        const ctx = {
            ...base,
            meta: {
                ...base.meta,
                title: g.title,
                og_title: g.og_title || g.h1,
                description: g.description,
                canonical: g.canonical,
                og_image: ogImage,
                og_image_width: '1200',
                og_image_height: '630'
            },
            guide: {
                ...g,
                author: g.author || 'Vladimir Ivakhnenko',
                steps,
                dateModified,
                date_published_iso: seo.article.datePublished,
                date_modified_iso: seo.article.dateModified,
                date_modified_display: displayDate(dateModified),
                reading_minutes: readingMinutes,
                cta_text: g.cta_text || config.labels.inline_cta,
                related_items: related
            },
            footer_guides: cards.filter((c) => c.slug !== g.slug).slice(0, 6),
            seo
        };

        const html = renderTemplate(guideTpl, ctx, 'guides', { eachFirst: true });
        const dir = path.join(OUT_DIR, g.slug);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
        console.log(`✅ Successfully built guides/${g.slug}/index.html`);
    }

    const hubCtx = {
        ...base,
        meta: {
            ...base.meta,
            title: config.hub.title,
            description: config.hub.description,
            canonical: hubUrl,
            og_image: ogImage,
            og_image_width: '1200',
            og_image_height: '630'
        },
        hub: config.hub,
        guides: cards,
        footer_guides: cards.slice(0, 6),
        seo: {
            collection: {
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: config.hub.h1,
                description: config.hub.description,
                url: hubUrl,
                inLanguage: 'en',
                dateModified: buildDateIso,
                mainEntity: {
                    '@type': 'ItemList',
                    itemListElement: guides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, url: g.canonical, name: g.h1 }))
                }
            },
            breadcrumb: breadcrumb([
                { name: config.labels.home, url: homeUrl },
                { name: config.labels.guides, url: hubUrl }
            ])
        }
    };
    fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderTemplate(indexTpl, hubCtx, 'guides', { eachFirst: true }), 'utf8');
    console.log('✅ Successfully built guides/index.html');

    return [hubUrl, ...guides.map((g) => g.canonical)];
}

function getGuideUrls() {
    const guides = loadGuides();
    if (guides.length === 0) return [];
    return [abs('guides/'), ...guides.map((g) => g.canonical)];
}

module.exports = { buildGuides, loadGuides, guideCards, getGuideUrls };
