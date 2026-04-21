# Gulp Starter

Production-ready starter template for static HTML, SCSS, and JavaScript using `gulp-file-include`.
Built for multipage static sites, landing pages, and internal pages without CMS, PHP, or database.

## Structure

- `src/pages` - final page entry points (`index.html`, `about.html`, `service.html`)
- `src/partials/sections` - large page blocks
- `src/partials/components` - reusable UI parts
- `src/scss` - styles organized as `base`, `utils`, `layout`, `sections`, `components`
- `src/js/main.js` - initialization entry point
- `src/js/modules` - feature/component and plugin logic (when required)
- `src/js/utils` - shared helpers only when needed
- `dist` - generated output

## Commands

- `npm install`
- `npm run build`
- `npm run watch`

## Starter scope

- static HTML workflow only
- no CMS logic
- no PHP templates/routing
- no database/backend dependencies
- generic reusable template content (not a real client website by default)

## Frontend library integration

When a task requires Swiper, Fancybox, Inputmask, or similar plugins:

- add a plugin only when it is actually needed
- keep plugin markup valid according to plugin requirements
- keep plugin logic in `src/js/modules`
- initialize plugins from `src/js/main.js`
- avoid inline scripts and plugin logic in HTML
- use stable data-* attributes as primary JS hooks where practical
- keep styling classes separate from JS behavior hooks
- keep integration minimal and architecture-safe

Examples of stable hooks: `data-modal`, `data-modal-open`, `data-modal-close`, `data-slider`, `data-fancybox`, `data-mask="phone"`.

## Rules

- edit only `src`
- `dist` is generated; do not edit `dist` manually
- `src/pages` contains only final pages; no partials, no sections, and no blocks
- naming convention: lowercase only
- naming convention: kebab-case only
- HTML and SCSS names must match (example: `hero.html` ↔ `_hero.scss`)
- avoid random names like `section1`, `new-block`, `final-block`
- layout contains only structural parts: `head`, `header`, `footer`, `scripts`
- sections are large page blocks (for example: `hero`, `contacts`)
- components are reusable small elements (for example: `button`, `modal`, `breadcrumb`)
- JS rule: `src/js/main.js` is initialization/bootstrapping only
- JS rule: `src/js/modules` contains component or block logic
- JS rule: `src/js/utils` is optional and used only for shared helpers
- JS hook rule: prefer data-* selectors over presentational class selectors for behavior
- script order rule: when module scripts are included before `main.js`, load order matters
- SEO rule: only one `h1` per page
- SEO rule: keep heading hierarchy `h1` → `h2` → `h3`
- SEO rule: use semantic tags (`header`, `main`, `section`, `nav`, `footer`)
- SEO rule: breadcrumbs are required before main page section on internal pages
- SEO rule: page title in `head` must match page meaning
- homepage/special pattern (pattern A): `head` → `header` → `hero` → content sections → `footer` → `scripts`
- internal page pattern (pattern B): `head` → `header` → `breadcrumb` → `page-intro` (main section with `h1` + intro text) → optional supporting sections → `footer` → `scripts`
- hero rule: use `hero` only on homepage or landing-style pages
- keep existing project structure; do not change architecture