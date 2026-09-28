const fs = require('fs');
const path = require('path');

const PARTIALS_DIR = path.join(__dirname, '..', 'partials');

/**
 * Inline `{{> name}}` partials from build/partials/<name>.html (one level, recursive-safe up to 5).
 */
function inlinePartials(template, depth = 0) {
    if (depth > 5) return template;
    const out = template.replace(/\{\{>\s*([\w-]+)\s*\}\}/g, (m, name) => {
        const file = path.join(PARTIALS_DIR, `${name}.html`);
        if (!fs.existsSync(file)) {
            throw new Error(`Missing partial "${name}" (${file})`);
        }
        return fs.readFileSync(file, 'utf8');
    });
    return out === template ? out : inlinePartials(out, depth + 1);
}

function loadTemplate(file) {
    return inlinePartials(fs.readFileSync(file, 'utf8'));
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

module.exports = { inlinePartials, loadTemplate, escapeHtml };
