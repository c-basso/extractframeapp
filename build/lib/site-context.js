/**
 * Shared, locale-independent context for header/footer partials and landing/guides pages.
 * Single source of truth stays build/constants.js.
 */
const {
    APP_STORE_APP_URL,
    SITE_PRIVACY_URL,
    SITE_TERMS_URL,
    SUPPORT_MAILTO_URL,
    FOOTER_BLOG_URL,
    FOOTER_GUIDES_URL,
    APP_SCREENSHOTS,
    APP_PUBLISHER,
    APP_VERSION,
    APP_FILE_SIZE,
    APP_MIN_IOS,
    SCHEMA_AGGREGATE_RATING_VALUE,
    SCHEMA_AGGREGATE_RATING_COUNT,
    SCHEMA_AGGREGATE_BEST_RATING,
    SCHEMA_AGGREGATE_WORST_RATING
} = require('../constants');

function siteLinks(homeUrl = '/') {
    return {
        home_url: homeUrl,
        cta_url: APP_STORE_APP_URL,
        guides_url: FOOTER_GUIDES_URL,
        blog_url: FOOTER_BLOG_URL,
        privacy_url: SITE_PRIVACY_URL,
        terms_url: SITE_TERMS_URL,
        support_url: SUPPORT_MAILTO_URL,
        brand_short: 'Grab Frame'
    };
}

/** Screenshot objects with web paths; `texts` = optional localized [{alt,title,caption}] */
function screenshots(texts = [], appName = 'Video To Photo – Grab Frame') {
    return APP_SCREENSHOTS.map((s, i) => {
        const t = texts[i] || {};
        return {
            key: s.key,
            src_390: `/screenshots/v2/${s.key}-390.webp`,
            src_780: `/screenshots/v2/${s.key}-780.webp`,
            src_780_rel: `screenshots/v2/${s.key}-780.webp`,
            alt: t.alt || `${appName} — screenshot ${i + 1}`,
            title: t.title || '',
            caption: t.caption || ''
        };
    });
}

function schemaRating() {
    return {
        rating_value: SCHEMA_AGGREGATE_RATING_VALUE,
        rating_count: SCHEMA_AGGREGATE_RATING_COUNT,
        best_rating: SCHEMA_AGGREGATE_BEST_RATING,
        worst_rating: SCHEMA_AGGREGATE_WORST_RATING
    };
}

function appFacts() {
    return {
        publisher: APP_PUBLISHER,
        version: APP_VERSION,
        file_size: APP_FILE_SIZE,
        min_ios: APP_MIN_IOS
    };
}

module.exports = { siteLinks, screenshots, schemaRating, appFacts };
