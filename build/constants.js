const SITE_URL = "https://extractframeapp.com/";
const DEFAULT_LANGUAGE = 'en';

const LANGUAGES = [
    DEFAULT_LANGUAGE,
    'ru',
    'es',
    'fr',
    'de',
    'it',
    'pt',
    'ja',
    'ko',
    // 'nl',
    // 'pl',
    // 'ro',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'cs',
    // 'zh',
    // 'da',
    // 'el',
    // 'fi',
    // 'fil',
    // 'he',
    // 'hr',
    // 'hu',
    // 'id',
    // 'ms',
    // 'no',
    // 'sk',
    // 'sv',
    // 'bg',
    // 'sl',
    // 'ca',
    // 'hi',
    // 'bn',
    // 'ta',
    // 'te',
    // 'ml'
];

const URLS = LANGUAGES.map((lang) => {
    const entry = {
        lang,
        url: lang === DEFAULT_LANGUAGE ? SITE_URL : `${SITE_URL}${lang}/`
    };
    // Single URL for Chinese; search engines get both script variants via hreflang.
    if (lang === 'zh') {
        entry.hreflangs = ['zh-Hans', 'zh-Hant'];
    }
    entry.link_label = lang === 'zh' ? '中文' : lang;
    return entry;
});

const ADDITIONAL_URLS = [
    `${SITE_URL}llms.txt`
];

// Expected JSON-LD types that should be present on each generated page.
// Keep this list in sync with `build/template.html` structured data scripts.
const EXPECTED_JSON_LD_TYPES = [
    'SoftwareApplication',
    'Organization',
    'WebSite',
    'HowTo',
    'FAQPage',
    'BreadcrumbList'
];

const INDEX_NOW_KEY = 'HdTK4Y2gn9Tp9o6kXOQU';

// https://www.indexnow.org/searchengines.json
const INDEX_NOW_ENGINES = [
    'indexnow.yep.com',
    'search.seznam.cz',
    'searchadvisor.naver.com',
    'indexnow.amazonbot.amazon',
    'api.indexnow.org',
    'yandex.com',
    'bing.com'
];

/** Single App Store product URL for all locales (same app id). */
const APP_STORE_APP_URL = 'https://apps.apple.com/app/id6743497797';

const SITE_PRIVACY_URL = 'https://extractframeapp.com/privacy.html';
const SITE_TERMS_URL = 'https://extractframeapp.com/terms.html';
const SUPPORT_MAILTO_URL = 'mailto:c-basso@ya.ru';

const APP_PUBLISHER = 'c-basso';
const APP_VERSION = '1.1.13';
const APP_FILE_SIZE = '42 MB';

/** JSON-LD AggregateRating — держите в соответствии с данными в App Store Connect. */
const SCHEMA_AGGREGATE_RATING_VALUE = 4.8;
const SCHEMA_AGGREGATE_RATING_COUNT = 259;
const SCHEMA_AGGREGATE_BEST_RATING = 5;
const SCHEMA_AGGREGATE_WORST_RATING = 1;

/**
 * ISO 4217 for JSON-LD Offer.priceCurrency — primary market per locale page.
 * Aligned with typical App Store storefronts for that language.
 */
const PRICE_CURRENCY_BY_LANG = {
    en: 'USD',
    ru: 'RUB',
    es: 'EUR',
    fr: 'EUR',
    de: 'EUR',
    it: 'EUR',
    pt: 'EUR',
    ja: 'JPY',
    ko: 'KRW',
    nl: 'EUR',
    pl: 'PLN',
    ro: 'RON',
    th: 'THB',
    tr: 'TRY',
    uk: 'UAH',
    vi: 'VND',
    cs: 'CZK',
    zh: 'CNY',
    da: 'DKK',
    el: 'EUR',
    fi: 'EUR',
    fil: 'PHP',
    he: 'ILS',
    hr: 'EUR',
    hu: 'HUF',
    id: 'IDR',
    ms: 'MYR',
    no: 'NOK',
    sk: 'EUR',
    sv: 'SEK',
    bg: 'BGN',
    sl: 'EUR',
    ca: 'EUR',
    hi: 'INR',
    bn: 'INR',
    ta: 'INR',
    te: 'INR',
    ml: 'INR'
};

module.exports = {
    SITE_URL,
    URLS,
    DEFAULT_LANGUAGE,
    LANGUAGES,
    EXPECTED_JSON_LD_TYPES,
    INDEX_NOW_KEY,
    INDEX_NOW_ENGINES,
    ADDITIONAL_URLS,
    APP_STORE_APP_URL,
    SITE_PRIVACY_URL,
    SITE_TERMS_URL,
    SUPPORT_MAILTO_URL,
    APP_PUBLISHER,
    APP_VERSION,
    APP_FILE_SIZE,
    PRICE_CURRENCY_BY_LANG,
    SCHEMA_AGGREGATE_RATING_VALUE,
    SCHEMA_AGGREGATE_RATING_COUNT,
    SCHEMA_AGGREGATE_BEST_RATING,
    SCHEMA_AGGREGATE_WORST_RATING
};