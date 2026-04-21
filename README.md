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
- pages live in `src/pages`
- sections are large content blocks in `src/partials/sections`
- components are reusable parts in `src/partials/components`
- SCSS mirrors HTML structure (`layout`, `sections`, `components`)
- keep existing project structure; do not change architecture