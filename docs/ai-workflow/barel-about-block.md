# Block: About company — Barel main page

## Design source

- Analysis: `docs/ai-workflow/barel-page-design-analysis.md` (block #4)
- Exports: `src/assets/design/barel/exports/page-desktop.png`, `page-mobile.png`
- Icons: `src/assets/design/barel/icons/about-icon-1.svg` … `about-icon-4.svg` (109×109, raster-in-SVG)

## Confirmed structure

1. Section heading: **«О компании»** (`<h2>`; page-level `<h1>` reserved for the full landing when implemented).
2. Intro copy: three paragraphs (mobile export wording; emphasis on cedar phrases via `.about__emphasis`).
3. Four features: one real SVG asset per item, caption under each icon.
4. **«Подробнее»** link → `about.html` (starter internal page).
5. Responsive: **desktop (≥1025px)** — white background, four columns in one row; **mobile/tablet (≤1024px)** — warm off-white `#FCF9F6`, **2×2** grid, bottom border separator.

## Files to modify (this block)

| File | Role |
|------|------|
| `src/partials/sections/about-company.html` | Section markup |
| `src/scss/sections/_about-company.scss` | Scoped styles |
| `src/scss/style.scss` | Import section partial SCSS |
| `gulpfile.js` | Copy `src/assets/design/barel/**` → `dist/assets/design/barel/` so icon URLs resolve |
| `src/pages/barel.html` | Preview page: layout + About block only |

## Assets used

- `src/assets/design/barel/icons/about-icon-1.svg`
- `src/assets/design/barel/icons/about-icon-2.svg`
- `src/assets/design/barel/icons/about-icon-3.svg`
- `src/assets/design/barel/icons/about-icon-4.svg`

Runtime path in HTML: `assets/design/barel/icons/about-icon-*.svg` (relative to page in `dist/`).

## Responsive notes

- Breakpoint **1025px** aligns with project rule (desktop ≥1025, mobile/tablet ≤1024).
- Desktop: `grid-template-columns: repeat(4, minmax(0, 1fr))`, horizontal padding on the block container **50px** (per project container guidance for this section).
- Mobile: `repeat(2, 1fr)`; section background **#FCF9F6**; slightly tighter title and vertical rhythm than desktop.
- Captions: `text-transform: uppercase` + letter-spacing for line-art label stack under circles.

## Typography / color (from exports; refine against Figma when available)

- Title: dark `#1A1A1A`, bold.
- Body: `#2B2B2B`, 16px mobile / 17px desktop.
- Accent link and emphasis: orange `#FF7A00`.
- Section border: light neutral `#E8E4DF` (mobile) / `#E5E5E5` (desktop).

## Implementation status

- **Status:** implemented (first safe block).
- **Pending Figma verification:** exact vertical spacing, font family/size tokens, optional small title icon (not present in `icons/` export set).

## Approval checklist (pixel-perfect workflow)

- [x] Build passes (`npm run build`).
- [x] No placeholder assets; all four icons from `barel/icons/`.
- [x] Scoped BEM-style classes (`about__*`), no inline styles.
- [x] Desktop row of four + mobile 2×2 without extra JS.
- [ ] Designer sign-off vs Figma (spacing, type scale, optional desktop-only title glyph).
