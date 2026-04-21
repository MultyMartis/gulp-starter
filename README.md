# Gulp Starter

Production-ready starter template for HTML, SCSS, and JavaScript using `gulp-file-include`.

## Structure

- `src/pages` - final page entry points (`index.html`, `about.html`, `service.html`)
- `src/partials/sections` - large page blocks
- `src/partials/components` - reusable UI parts
- `src/scss` - styles organized as `base`, `utils`, `layout`, `sections`, `components`
- `src/js/main.js` - all frontend logic entry point
- `dist` - generated output

## Commands

- `npm install`
- `npm run build`
- `npm run watch`

## Rules

- edit only `src` (and safe root files like `README.md`, `package.json`, `gulpfile.js`)
- `dist` is generated; do not edit `dist` manually
- `src/pages` contains only final pages; no partials, no sections, and no blocks
- naming convention: lowercase only
- naming convention: kebab-case only
- HTML and SCSS names must match (example: `hero.html` ↔ `_hero.scss`)
- avoid random names like `section1`, `new-block`, `final-block`
- layout contains only structural parts: `head`, `header`, `footer`, `scripts`
- sections are large page blocks (for example: `hero`, `contacts`)
- components are reusable small elements (for example: `button`, `modal`, `breadcrumb`)
- JS rule: `main.js` is initialization/bootstrapping only
- JS rule: `modules` contains component logic
- JS rule: `utils` contains helper functions
- page template standard: `head` → `header` → `main` (sections) → `footer` → `scripts`
- keep existing project structure; do not change architecture