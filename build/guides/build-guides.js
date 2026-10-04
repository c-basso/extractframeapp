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
/** Locales that have guide content. en = default (served at /guides/). */
const GUIDE_LOCALES = {
    en: { postsDir: path.join(__dirname, 'posts'), config: path.join(__dirname, 'guides.json'), outDir: path.join(ROOT_DIR, 'guides'), prefix: '/guides/', ogLocale: 'en_US', dateLocale: 'en-US', homeUrl: '/' },
    es: { postsDir: path.join(__dirname, 'es', 'posts'), config: path.join(__dirname, 'es', 'guides.json'), outDir: path.join(ROOT_DIR, 'es', 'guides'), prefix: '/es/guides/', ogLocale: 'es_ES', dateLocale: 'es-ES', homeUrl: '/es/' },
    fr: { postsDir: path.join(__dirname, 'fr', 'posts'), config: path.join(__dirname, 'fr', 'guides.json'), outDir: path.join(ROOT_DIR, 'fr', 'guides'), prefix: '/fr/guides/', ogLocale: 'fr_FR', dateLocale: 'fr-FR', homeUrl: '/fr/' },
    de: { postsDir: path.join(__dirname, 'de', 'posts'), config: path.join(__dirname, 'de', 'guides.json'), outDir: path.join(ROOT_DIR, 'de', 'guides'), prefix: '/de/guides/', ogLocale: 'de_DE', dateLocale: 'de-DE', homeUrl: '/de/' },
    it: { postsDir: path.join(__dirname, 'it', 'posts'), config: path.join(__dirname, 'it', 'guides.json'), outDir: path.join(ROOT_DIR, 'it', 'guides'), prefix: '/it/guides/', ogLocale: 'it_IT', dateLocale: 'it-IT', homeUrl: '/it/' },
    pt: { postsDir: path.join(__dirname, 'pt', 'posts'), config: path.join(__dirname, 'pt', 'guides.json'), outDir: path.join(ROOT_DIR, 'pt', 'guides'), prefix: '/pt/guides/', ogLocale: 'pt_BR', dateLocale: 'pt-BR', homeUrl: '/pt/' },
    ja: { postsDir: path.join(__dirname, 'ja', 'posts'), config: path.join(__dirname, 'ja', 'guides.json'), outDir: path.join(ROOT_DIR, 'ja', 'guides'), prefix: '/ja/guides/', ogLocale: 'ja_JP', dateLocale: 'ja-JP', homeUrl: '/ja/' },
    ko: { postsDir: path.join(__dirname, 'ko', 'posts'), config: path.join(__dirname, 'ko', 'guides.json'), outDir: path.join(ROOT_DIR, 'ko', 'guides'), prefix: '/ko/guides/', ogLocale: 'ko_KR', dateLocale: 'ko-KR', homeUrl: '/ko/' },
    nl: { postsDir: path.join(__dirname, 'nl', 'posts'), config: path.join(__dirname, 'nl', 'guides.json'), outDir: path.join(ROOT_DIR, 'nl', 'guides'), prefix: '/nl/guides/', ogLocale: 'nl_NL', dateLocale: 'nl-NL', homeUrl: '/nl/' },
    pl: { postsDir: path.join(__dirname, 'pl', 'posts'), config: path.join(__dirname, 'pl', 'guides.json'), outDir: path.join(ROOT_DIR, 'pl', 'guides'), prefix: '/pl/guides/', ogLocale: 'pl_PL', dateLocale: 'pl-PL', homeUrl: '/pl/' },
    ro: { postsDir: path.join(__dirname, 'ro', 'posts'), config: path.join(__dirname, 'ro', 'guides.json'), outDir: path.join(ROOT_DIR, 'ro', 'guides'), prefix: '/ro/guides/', ogLocale: 'ro_RO', dateLocale: 'ro-RO', homeUrl: '/ro/' },
    th: { postsDir: path.join(__dirname, 'th', 'posts'), config: path.join(__dirname, 'th', 'guides.json'), outDir: path.join(ROOT_DIR, 'th', 'guides'), prefix: '/th/guides/', ogLocale: 'th_TH', dateLocale: 'th-TH', homeUrl: '/th/' },
    tr: { postsDir: path.join(__dirname, 'tr', 'posts'), config: path.join(__dirname, 'tr', 'guides.json'), outDir: path.join(ROOT_DIR, 'tr', 'guides'), prefix: '/tr/guides/', ogLocale: 'tr_TR', dateLocale: 'tr-TR', homeUrl: '/tr/' },
    uk: { postsDir: path.join(__dirname, 'uk', 'posts'), config: path.join(__dirname, 'uk', 'guides.json'), outDir: path.join(ROOT_DIR, 'uk', 'guides'), prefix: '/uk/guides/', ogLocale: 'uk_UA', dateLocale: 'uk-UA', homeUrl: '/uk/' },
    vi: { postsDir: path.join(__dirname, 'vi', 'posts'), config: path.join(__dirname, 'vi', 'guides.json'), outDir: path.join(ROOT_DIR, 'vi', 'guides'), prefix: '/vi/guides/', ogLocale: 'vi_VN', dateLocale: 'vi-VN', homeUrl: '/vi/' },
    cs: { postsDir: path.join(__dirname, 'cs', 'posts'), config: path.join(__dirname, 'cs', 'guides.json'), outDir: path.join(ROOT_DIR, 'cs', 'guides'), prefix: '/cs/guides/', ogLocale: 'cs_CZ', dateLocale: 'cs-CZ', homeUrl: '/cs/' },
    zh: { postsDir: path.join(__dirname, 'zh', 'posts'), config: path.join(__dirname, 'zh', 'guides.json'), outDir: path.join(ROOT_DIR, 'zh', 'guides'), prefix: '/zh/guides/', ogLocale: 'zh_CN', dateLocale: 'zh-CN', homeUrl: '/zh/' },
    da: { postsDir: path.join(__dirname, 'da', 'posts'), config: path.join(__dirname, 'da', 'guides.json'), outDir: path.join(ROOT_DIR, 'da', 'guides'), prefix: '/da/guides/', ogLocale: 'da_DK', dateLocale: 'da-DK', homeUrl: '/da/' },
    el: { postsDir: path.join(__dirname, 'el', 'posts'), config: path.join(__dirname, 'el', 'guides.json'), outDir: path.join(ROOT_DIR, 'el', 'guides'), prefix: '/el/guides/', ogLocale: 'el_GR', dateLocale: 'el-GR', homeUrl: '/el/' },
    fi: { postsDir: path.join(__dirname, 'fi', 'posts'), config: path.join(__dirname, 'fi', 'guides.json'), outDir: path.join(ROOT_DIR, 'fi', 'guides'), prefix: '/fi/guides/', ogLocale: 'fi_FI', dateLocale: 'fi-FI', homeUrl: '/fi/' },
    fil: { postsDir: path.join(__dirname, 'fil', 'posts'), config: path.join(__dirname, 'fil', 'guides.json'), outDir: path.join(ROOT_DIR, 'fil', 'guides'), prefix: '/fil/guides/', ogLocale: 'tl_PH', dateLocale: 'fil-PH', homeUrl: '/fil/' },
    he: { postsDir: path.join(__dirname, 'he', 'posts'), config: path.join(__dirname, 'he', 'guides.json'), outDir: path.join(ROOT_DIR, 'he', 'guides'), prefix: '/he/guides/', ogLocale: 'he_IL', dateLocale: 'he-IL', homeUrl: '/he/' },
    hu: { postsDir: path.join(__dirname, 'hu', 'posts'), config: path.join(__dirname, 'hu', 'guides.json'), outDir: path.join(ROOT_DIR, 'hu', 'guides'), prefix: '/hu/guides/', ogLocale: 'hu_HU', dateLocale: 'hu-HU', homeUrl: '/hu/' },
    hr: { postsDir: path.join(__dirname, 'hr', 'posts'), config: path.join(__dirname, 'hr', 'guides.json'), outDir: path.join(ROOT_DIR, 'hr', 'guides'), prefix: '/hr/guides/', ogLocale: 'hr_HR', dateLocale: 'hr-HR', homeUrl: '/hr/' },
    hi: { postsDir: path.join(__dirname, 'hi', 'posts'), config: path.join(__dirname, 'hi', 'guides.json'), outDir: path.join(ROOT_DIR, 'hi', 'guides'), prefix: '/hi/guides/', ogLocale: 'hi_IN', dateLocale: 'hi-IN', homeUrl: '/hi/' },
    id: { postsDir: path.join(__dirname, 'id', 'posts'), config: path.join(__dirname, 'id', 'guides.json'), outDir: path.join(ROOT_DIR, 'id', 'guides'), prefix: '/id/guides/', ogLocale: 'id_ID', dateLocale: 'id-ID', homeUrl: '/id/' },
    ms: { postsDir: path.join(__dirname, 'ms', 'posts'), config: path.join(__dirname, 'ms', 'guides.json'), outDir: path.join(ROOT_DIR, 'ms', 'guides'), prefix: '/ms/guides/', ogLocale: 'ms_MY', dateLocale: 'ms-MY', homeUrl: '/ms/' },
    no: { postsDir: path.join(__dirname, 'no', 'posts'), config: path.join(__dirname, 'no', 'guides.json'), outDir: path.join(ROOT_DIR, 'no', 'guides'), prefix: '/no/guides/', ogLocale: 'nb_NO', dateLocale: 'nb-NO', homeUrl: '/no/' },
    sk: { postsDir: path.join(__dirname, 'sk', 'posts'), config: path.join(__dirname, 'sk', 'guides.json'), outDir: path.join(ROOT_DIR, 'sk', 'guides'), prefix: '/sk/guides/', ogLocale: 'sk_SK', dateLocale: 'sk-SK', homeUrl: '/sk/' },
    sv: { postsDir: path.join(__dirname, 'sv', 'posts'), config: path.join(__dirname, 'sv', 'guides.json'), outDir: path.join(ROOT_DIR, 'sv', 'guides'), prefix: '/sv/guides/', ogLocale: 'sv_SE', dateLocale: 'sv-SE', homeUrl: '/sv/' },
    bg: { postsDir: path.join(__dirname, 'bg', 'posts'), config: path.join(__dirname, 'bg', 'guides.json'), outDir: path.join(ROOT_DIR, 'bg', 'guides'), prefix: '/bg/guides/', ogLocale: 'bg_BG', dateLocale: 'bg-BG', homeUrl: '/bg/' },
    sl: { postsDir: path.join(__dirname, 'sl', 'posts'), config: path.join(__dirname, 'sl', 'guides.json'), outDir: path.join(ROOT_DIR, 'sl', 'guides'), prefix: '/sl/guides/', ogLocale: 'sl_SI', dateLocale: 'sl-SI', homeUrl: '/sl/' },
    ca: { postsDir: path.join(__dirname, 'ca', 'posts'), config: path.join(__dirname, 'ca', 'guides.json'), outDir: path.join(ROOT_DIR, 'ca', 'guides'), prefix: '/ca/guides/', ogLocale: 'ca_ES', dateLocale: 'ca-ES', homeUrl: '/ca/' },
    bn: { postsDir: path.join(__dirname, 'bn', 'posts'), config: path.join(__dirname, 'bn', 'guides.json'), outDir: path.join(ROOT_DIR, 'bn', 'guides'), prefix: '/bn/guides/', ogLocale: 'bn_IN', dateLocale: 'bn-IN', homeUrl: '/bn/' },
    ml: { postsDir: path.join(__dirname, 'ml', 'posts'), config: path.join(__dirname, 'ml', 'guides.json'), outDir: path.join(ROOT_DIR, 'ml', 'guides'), prefix: '/ml/guides/', ogLocale: 'ml_IN', dateLocale: 'ml-IN', homeUrl: '/ml/' },
    ta: { postsDir: path.join(__dirname, 'ta', 'posts'), config: path.join(__dirname, 'ta', 'guides.json'), outDir: path.join(ROOT_DIR, 'ta', 'guides'), prefix: '/ta/guides/', ogLocale: 'ta_IN', dateLocale: 'ta-IN', homeUrl: '/ta/' },
    te: { postsDir: path.join(__dirname, 'te', 'posts'), config: path.join(__dirname, 'te', 'guides.json'), outDir: path.join(ROOT_DIR, 'te', 'guides'), prefix: '/te/guides/', ogLocale: 'te_IN', dateLocale: 'te-IN', homeUrl: '/te/' },
    ru: { postsDir: path.join(__dirname, 'ru', 'posts'), config: path.join(__dirname, 'ru', 'guides.json'), outDir: path.join(ROOT_DIR, 'ru', 'guides'), prefix: '/ru/guides/', ogLocale: 'ru_RU', dateLocale: 'ru-RU', homeUrl: '/ru/' }
};
const GUIDE_TEMPLATE = path.join(__dirname, 'template-guide.html');
const INDEX_TEMPLATE = path.join(__dirname, 'template-index.html');

const REQUIRED = ['slug', 'keyword', 'title', 'description', 'h1', 'nav_title', 'card_title', 'excerpt',
    'lead', 'quick_answer', 'datePublished', 'content_intro', 'steps_title', 'steps', 'content_body', 'faq'];

function abs(rel) {
    return `${SITE_URL.replace(/\/?$/, '/')}${String(rel).replace(/^\//, '')}`;
}

function displayDate(iso, locale = 'en-US') {
    return new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
        .format(new Date(`${iso}T12:00:00Z`));
}

function loadGuides(lang = 'en') {
    const loc = GUIDE_LOCALES[lang];
    if (!loc || !fs.existsSync(loc.postsDir)) return [];
    const POSTS_DIR = loc.postsDir;
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
        g.lang = lang;
        g.url = `${loc.prefix}${g.slug}/`;
        g.canonical = abs(g.url);
        // EN guides that duplicate an older, already-ranking blog post point their canonical at the post.
        g.canonical_page = lang === 'en' && g.canonical_override ? g.canonical_override : g.canonical;
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

function sharedContext(en, config, buildTimestamp, lang) {
    const loc = GUIDE_LOCALES[lang];
    const shots = screenshots(en.screenshots && en.screenshots.items, en.app_info.name);
    return {
        meta: {
            version: buildTimestamp,
            site_name: en.meta.site_name,
            app_store_id: en.meta.app_store_id,
            lang,
            text_direction: lang === 'he' ? 'rtl' : 'ltr',
            og_locale: loc.ogLocale
        },
        site: { ...siteLinks(loc.homeUrl), guides_url: loc.prefix },
        nav: { ...en.nav, prefix: loc.homeUrl },
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

/** Blog post URL → hreflang alternates, for EN guides canonicalized to a blog post. */
const BLOG_ALTERNATES = {};
function getBlogAlternates() {
    return BLOG_ALTERNATES;
}

/** hreflang alternates: pairs guides across locales via `translation_of` (the EN slug). */
function buildAltMap(all) {
    const groups = {};
    for (const [lang, guides] of Object.entries(all)) {
        for (const g of guides) {
            const key = lang === 'en' ? g.slug : g.translation_of;
            if (!key) continue;
            (groups[key] = groups[key] || []).push({ lang, url: g.canonical_page || g.canonical });
        }
    }
    const map = {};
    for (const [, list] of Object.entries(all)) {
        for (const g of list) {
            const key = g.lang === 'en' ? g.slug : g.translation_of;
            const group = (key && groups[key]) || [{ lang: g.lang, url: g.canonical }];
            const alts = group.map((x) => ({ hreflang: x.lang, url: x.url }));
            const def = group.find((x) => x.lang === 'en') || group[0];
            alts.push({ hreflang: 'x-default', url: def.url });
            map[g.canonical] = alts;
            if (g.canonical_page && g.canonical_page !== g.canonical) BLOG_ALTERNATES[g.canonical_page] = alts;
        }
    }
    return map;
}

function hubAlternates() {
    const alts = Object.entries(GUIDE_LOCALES)
        .filter(([lang]) => loadGuides(lang).length > 0)
        .map(([lang, loc]) => ({ hreflang: lang, url: abs(loc.prefix) }));
    alts.push({ hreflang: 'x-default', url: abs(GUIDE_LOCALES.en.prefix) });
    return alts;
}

async function buildGuides({ buildTimestamp, buildDateIso, localeData }) {
    const all = {};
    for (const lang of Object.keys(GUIDE_LOCALES)) all[lang] = loadGuides(lang);
    const altMap = buildAltMap(all);
    const urls = [];
    for (const lang of Object.keys(GUIDE_LOCALES)) {
        if (all[lang].length === 0) continue;
        if (!localeData[lang]) throw new Error(`Guides for "${lang}" need build/${lang}.json data`);
        urls.push(...await buildGuidesForLocale(lang, all[lang], altMap, { buildTimestamp, buildDateIso, en: localeData[lang] }));
    }
    return urls;
}

async function buildGuidesForLocale(lang, guides, altMap, { buildTimestamp, buildDateIso, en }) {
    const loc = GUIDE_LOCALES[lang];
    const OUT_DIR = loc.outDir;
    const config = JSON.parse(fs.readFileSync(loc.config, 'utf8'));
    const guideTpl = loadTemplate(GUIDE_TEMPLATE);
    const indexTpl = loadTemplate(INDEX_TEMPLATE);
    const cards = guideCards(guides);
    const bySlug = Object.fromEntries(cards.map((c) => [c.slug, c]));
    const base = sharedContext(en, config, buildTimestamp, lang);
    const ogImage = `${SITE_URL}site_preview.png`;
    const homeUrl = abs(loc.homeUrl);
    const hubUrl = abs(loc.prefix);

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
        // CJK text has no spaces: estimate by characters (~500 chars/min) instead of words.
        const cjk = ['ja', 'zh', 'ko', 'th'].includes(lang);
        const plain = stripHtml(`${g.lead} ${g.quick_answer} ${g.content_intro} ${steps.map((s) => s.text).join(' ')} ${g.content_body}`);
        const readingMinutes = Math.max(2, Math.round(cjk ? plain.replace(/\s+/g, '').length / 500 : words / 220));

        const seo = {
            article: {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: g.h1,
                description: g.description,
                image: [ogImage, ...steps.map((s) => s.image_abs)],
                datePublished: `${g.datePublished}T09:00:00+00:00`,
                dateModified: `${dateModified}T09:00:00+00:00`,
                inLanguage: lang,
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
                canonical: g.canonical_page || g.canonical,
                alternates: altMap[g.canonical],
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
                date_modified_display: displayDate(dateModified, loc.dateLocale),
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
        console.log(`✅ Successfully built ${path.relative(ROOT_DIR, dir)}/index.html`);
    }

    const hubCtx = {
        ...base,
        meta: {
            ...base.meta,
            title: config.hub.title,
            description: config.hub.description,
            canonical: hubUrl,
            alternates: hubAlternates(),
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
                inLanguage: lang,
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
    console.log(`✅ Successfully built ${path.relative(ROOT_DIR, OUT_DIR)}/index.html`);

    return [hubUrl, ...guides.filter((g) => g.canonical_page === g.canonical).map((g) => g.canonical)];
}

function getGuideUrls() {
    const urls = [];
    for (const [lang, loc] of Object.entries(GUIDE_LOCALES)) {
        const guides = loadGuides(lang);
        if (guides.length === 0) continue;
        urls.push(abs(loc.prefix), ...guides.filter((g) => g.canonical_page === g.canonical).map((g) => g.canonical));
    }
    return urls;
}

module.exports = { buildGuides, loadGuides, guideCards, getGuideUrls, getBlogAlternates, GUIDE_LOCALES };
