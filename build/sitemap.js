const fs = require('fs');
const path = require('path');

const { SITE_URL, URLS, ADDITIONAL_URLS, SITE_PRIVACY_URL, SITE_TERMS_URL, BLOG_POSTS_PER_PAGE } = require('./constants');
const { loadPosts, collectBlogUrls } = require('./blog/build-blog');

function getBlogSitemapUrls(siteOrigin) {
    try {
        const posts = loadPosts();
        if (posts.length === 0) {
            return [];
        }
        const totalPages = Math.max(1, Math.ceil(posts.length / BLOG_POSTS_PER_PAGE));
        return collectBlogUrls(posts.map((post) => ({
            ...post,
            canonical: `${siteOrigin}/blog/${post.slug}/`
        })), totalPages);
    } catch (error) {
        console.warn(`Warning: blog URLs omitted from sitemap (${error.message})`);
        return [];
    }
}

(function main() {
  const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
  const robotsPath = path.join(__dirname, '..', 'robots.txt');

  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>');
  lines.push('<urlset ');
  lines.push('  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
  lines.push('  xmlns:xhtml="http://www.w3.org/1999/xhtml">');
  lines.push('  ');
  const lastmod = new Date().toISOString().split('T')[0];
  const legalUrls = [SITE_PRIVACY_URL, SITE_TERMS_URL];
  const siteOrigin = SITE_URL.replace(/\/$/, '');
  const blogUrls = getBlogSitemapUrls(siteOrigin);

  for (const { url } of URLS) {
    lines.push('  <url>');
    lines.push(`    <loc>${url}</loc>`);
    for (const alt of URLS) {
      const alternateUrl = alt.url;
      if (alt.hreflangs) {
        for (const hl of alt.hreflangs) {
          lines.push(`    <xhtml:link rel="alternate" hreflang="${hl}" href="${alternateUrl}" />`);
        }
      } else {
        lines.push(`    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alternateUrl}" />`);
      }
    }
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}" />`);
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push(url === SITE_URL ? '    <priority>1.0</priority>' : '    <priority>0.9</priority>');
    lines.push('  </url>');
    lines.push('');
  }

  for (const legalUrl of legalUrls) {
    lines.push('  <url>');
    lines.push(`    <loc>${legalUrl}</loc>`);
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${legalUrl}" />`);
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push('    <priority>0.3</priority>');
    lines.push('  </url>');
    lines.push('');
  }

  for (const extraUrl of ADDITIONAL_URLS) {
    lines.push('  <url>');
    lines.push(`    <loc>${extraUrl}</loc>`);
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push('    <priority>0.5</priority>');
    lines.push('  </url>');
    lines.push('');
  }

  for (const loc of blogUrls) {
    const isFeed = loc.endsWith('feed.xml');
    lines.push('  <url>');
    lines.push(`    <loc>${loc}</loc>`);
    lines.push(`    <lastmod>${lastmod}</lastmod>`);
    lines.push(`    <priority>${isFeed ? '0.4' : '0.8'}</priority>`);
    lines.push('  </url>');
    lines.push('');
  }

  lines.push('</urlset>');

  fs.writeFileSync(sitemapPath, lines.join('\n') + '\n', 'utf8');
  console.log(`✅ Successfully built sitemap.xml`);
  console.log(`📁 Output saved to: ${sitemapPath}`);
  if (blogUrls.length > 0) {
    console.log(`📰 Sitemap includes ${blogUrls.length} blog URL(s)`);
  }
  console.log()

  const robots = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}sitemap.xml 
  `;
  fs.writeFileSync(robotsPath, robots.trim() + '\n', 'utf8');
  console.log(`✅ Successfully built robots.txt`);
  console.log(`📁 Output saved to: ${robotsPath}`);
  console.log()

})();

module.exports = {
  getBlogSitemapUrls
};
