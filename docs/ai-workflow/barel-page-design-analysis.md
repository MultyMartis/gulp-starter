# Design analysis — Barel (main page)

## Page name

**Barel — long-scroll marketing landing** for wooden cedar hot tubs (*купели*). Figma document title (from packaged source metadata): **«Купели»**.

## Source files found

| Path | Role |
|------|------|
| `src/assets/design/barel/original/barel.fig` | Packaged Figma file (ZIP). Contains `canvas.fig` (binary **fig-kiwi**), `meta.json`, `thumbnail.png`, and embedded `images/*` blobs. **Primary source** for frames, components, text styles, and variants when opened in the Figma desktop app or linked file. |
| `src/assets/design/barel/exports/page-desktop.png` | Full-page raster — **desktop** composition. |
| `src/assets/design/barel/exports/page-mobile.png` | Full-page raster — **mobile** composition. |
| `src/assets/design/barel/images/` | **Created** — destination for extracted raster exports (currently `.gitkeep` only). |
| `src/assets/design/barel/icons/` | **Created** — destination for extracted SVG / simple vector UI (currently `.gitkeep` only). |
| `src/assets/design/barel/notes/` | **Created** — page-local implementation notes (currently `.gitkeep` only). |

---

## Figma source — what was technically verified (without Figma UI)

The `.fig` archive was inspected as a **ZIP** (local file format used by Figma).

### `meta.json` (verbatim fields)

- `file_name`: **«Купели»**
- `exported_at`: **2026-04-21T21:57:15.448Z**
- `client_meta.thumbnail_size`: **width 46, height 400** (tall strip thumbnail)
- `client_meta.render_coordinates`: `x: 5131, y: -6211, width: 2004, height: 17577` (editor viewport snapshot for thumbnail generation — **not** a breakpoint spec)

### Embedded payload

- **`canvas.fig`**: begins with ASCII **`fig-kiwi`** — Figma’s **binary** on-disk canvas format. **No layer names, frame order, or auto-layout metrics were machine-readable** in this environment (no fig-kiwi parser, no Figma REST API file key, no MCP bridge to the open file).
- **`images/` inside the archive**: **37** files, **JPEG** (`FF D8 FF`) and **PNG** (`89 50 4E 47`) signatures — **embedded raster resources** referenced by the document. Filenames are **content hashes**, not semantic asset names.
- **`thumbnail.png`**: micro strip preview; **not** used here to assert copy, counts, or section titles (too low resolution for literals).

### Consequence for “reconciliation”

- **Narrowed:** document title, export timestamp, proof of **single** packaged canvas, and **count / type** of embedded images.
- **Not narrowed by code:** exact **frame order in the Layers panel**, component **variant properties**, **text style names**, **precise spacing**, and **whether two visual bands are one component or two frames** — these require **Figma UI** (or API access to the same file online).

**Rule unchanged:** when this note conflicts with **Figma on screen** or a **new export**, **Figma / new export wins**.

---

## Screen types found

- **Desktop:** `page-desktop.png` — one full scroll.
- **Mobile:** `page-mobile.png` — one full scroll.
- **Tablet-only artboard:** **not** in `exports/` (may exist inside Figma only).
- **Interaction states:** partial — **mobile FAQ** narrative includes **at least one expanded accordion row**; most other states still absent from `exports/` (see **Remaining blockers**).

---

## Global layout notes

- **Desktop:** header over **full-bleed hero**; then a **two-column band** (persistent **left rail**: navigation links + checklist + compact callback capture; **right**: work gallery grid + CTA). Below that, **about** with circular metric icons, then repeating **section → grid/card → full-width** rhythm through pricing, delivery, FAQ, long copy, closing form, footer.
- **Mobile:** **single column**; **no persistent left rail** — gallery and about follow the hero as **stacked sections**. Catalog becomes **accordion category headers** (expanded state visible for at least one category). Carousels / featured product and video stacks are **narrow-column** variants.
- **Same page, responsive:** treat layout shifts as **one block with two compositions** where Figma groups them; where Figma uses **separate frames** for “Desktop” / “Mobile”, still implement **one semantic section** per block delivery, both widths together, per project pixel workflow.

---

## Typography notes

- **Raster observation only:** strong **sans-serif** hierarchy; large hero title; many **section titles in uppercase** in the mobile export description; body copy and list text at smaller sizes.
- **Authoritative specs:** text styles / font files / exact sizes → **Figma text styles** (or measurement from exports during a block). **Do not** copy approximate hex or font names from automated image descriptions into implementation.

---

## Spacing notes

- Centered main column on desktop; generous vertical section padding; rounded corners on cards, images, and inputs (exact radii: Figma).
- **Project defaults** (`AGENTS.md`): container paddings and listed breakpoints — apply **only after** matching the design file; do not override visible design padding.

---

## Assets list (semantic categories)

Until named exports land in `barel/images` and `barel/icons`, assets live **inside Figma** and in the **37** embedded binaries in `.fig` (hashed names — **do not ship as-is**).

**Raster (`barel/images/` after export):**

- Hero and other **full-bleed** backgrounds.
- **Work gallery** and **portfolio / finished works** photography.
- **Manufacturing** step photos.
- **Product / category** imagery (grid and carousel / featured card).
- **Video poster** frames.
- Closing **consultation** band imagery (desktop narrative: form + photo split).
- Any **decorative large stills** tied to content (export only if present as discrete layers).

**Vector / SVG (`barel/icons/` after export):**

- **Logo** (header + footer variant if different contrast).
- **Line icons** (about metrics, benefits, equipment rows, delivery, cooperation steps if icon-based).
- **UI chrome** not trivial in CSS: **play** circle, **slider arrows**, **stars**, **social** marks, **FAQ +/-** if not simple CSS shapes.
- **Checkmarks** only if drawn as vectors in Figma (if simple geometric marks, can remain CSS once verified).

**Remain layout/CSS (verify per node in Figma):**

- Solid **button** fills, borders, **pills**, **badges** that are primitive rectangles + type.
- **Table** grid lines / zebra if built with strokes/fills on frames, not exported bitmaps.
- **Typography** as live HTML text (no flattening).

**Manual export from Figma (required):**

- All items above with **semantic filenames** and **@1x / @2x** where raster clarity demands.
- Any **state** artboards: **hover**, **pressed**, **nav open**, **accordion expanded** (beyond the one mobile FAQ state already hinted), **form error**, **modal** if added later.

---

## Block map — reconciled (single page, top → bottom)

This is the **working document order** after cross-checking **both** `page-desktop.png` and `page-mobile.png` narratives from the latest full-page reads, plus **`meta.json`**. Items marked **[VERIFY: Figma]** cannot be settled from `canvas.fig` bytes alone.

| # | Block (semantic) | Desktop (`page-desktop.png`) | Mobile (`page-mobile.png`) | Reconciliation notes |
|---|------------------|-------------------------------|----------------------------|----------------------|
| 1 | **Site header** | Logo + inline nav + phone / callback control | Logo + **burger** | Same block; **open menu** state not in `exports/`. |
| 2 | **Hero** | Full-bleed tub scene; headline + subline; **two** CTAs | Same role; **scroll hint** control (“Листайте” / chevron) at bottom of hero | Same block; confirm whether **scroll chip** exists on **desktop** frame in Figma. |
| 3 | **Pre-catalog intro — split vs stack** | **One row:** left **rail** (category links, checklist, mini lead) + right **work gallery** + “view more” | **Gallery** section (**«Галерея работ»**) stacked **below** hero (no persistent rail) | **Same semantic phase** of the page; **not** two different pages. Implement as **one block** with breakpoint-specific layout. |
| 4 | **About company** | Follows gallery band; intro copy + **four** circular metric icons | **«О компании»** + **2×2** icon grid + “more info” link | Same block; grid density matches. |
| 5 | **Catalog — wooden tubs** | **Six-card** grid (shape / line categories) | **Accordion** headers by wood/category; **expanded** body visible for one category | **Same section**; **pattern change** grid ↔ accordion. |
| 6 | **Secondary value grid** | **«Material advantages»** — **four** dark circular benefit icons | **«Покупать у нас выгодно»** — **2×2** benefit cards with dark circular icons | **Likely one section family** (value props). **[VERIFY: Figma]** whether these are **one component** with different title copy per breakpoint or **two stacked sections**. |
| 7 | **Why choose Barel** | **Six** numbered reasons (**01–06**, 3×2) | **Seven** numbered reasons (**1–7**, vertical) | **Count mismatch** between export narratives — **[VERIFY: Figma]** (must not guess 6 vs 7). |
| 8 | **Manufacturing** | **3×2** image grid + captions | Vertical **stack** of large step images + captions | Same content; responsive reflow. |
| 9 | **Complectation / equipment** | Two columns: **standard vs optional** equipment lists | Two **cards** (e.g. standard complectation + ecological certificate list) | Same **equipment** chapter; copy framing may differ — **[VERIFY: Figma]** column titles vs mobile card titles. |
|10 | **Dimensions** | Single **table** | Tables / grids by shape family | Same block; table responsiveness from design. |
|11 | **Showcase carousel — works vs featured tub** | **«Examples of finished work»** horizontal slider with arrows | **«Выберите готовую купель»** featured product card, dots, arrows | Both are **carousel + imagery**. **[VERIFY: Figma]** whether this is **one component** with content swap, **two adjacent sections**, or **naming-only** difference. |
|12 | **Video block** | One large player + **row of smaller** thumbnails | **Two** stacked video rows (each poster + caption) | Same block family; density differs. |
|13 | **Client reviews** | **2×2** review cards before pricing | *Not listed in the latest mobile narrative sequence* | **[VERIFY: Figma + `page-mobile.png` pixels]** — confirm reviews exist on mobile and exact vertical position vs desktop. |
|14 | **Cooperation stages** | *Not explicitly named in latest desktop narrative* | **«Этапы сотрудничества»** steps **01–04** | **[VERIFY: Figma]** presence and **order** on desktop vs mobile (could sit near delivery / before pricing depending on frame). |
|15 | **Pricing** | **Three** vertical price cards (middle “popular” inverted) | **Single** dark promotional card (badge, price “от …”, checklist, CTA) | **Responsive variant** of pricing chapter — implement **one** pricing block with two layouts, once Figma confirms shared content model. |
|16 | **Delivery / service** | Three columns with icons | Three stacked icon modules on light panel | Same block. |
|17 | **FAQ** | Closed rows with trailing affordance | Accordion; **at least one expanded answer** visible | Same block; expanded desktop variant **[VERIFY: Figma]**. |
|18 | **Long-form SEO / editorial** | Two long paragraphs under thematic heading | **«Купель на заказ»** long article-style block | Treat as **long text band**; **[VERIFY: Figma]** if desktop uses **one** or **two** sequential long-text frames vs mobile. |
|19 | **Lead capture form** | Split band: fields + CTA + large photo | Card: fields include **dropdown** + disclaimer | Same conversion goal; **field parity** **[VERIFY: Figma]**. |
|20 | **Footer** | Dark multi-column | Stacked columns | Same block. |

### Reusable patterns (unchanged intent; confirm instances in Figma)

- Primary / secondary / ghost **buttons**; **badges** (“popular”, sale).
- **Section heading** cluster (title + optional subtitle).
- **Stat / metric** circles (about).
- **Icon + title + body** list rows (delivery, benefits, equipment).
- **Media tile** + optional caption.
- **Accordion** row (catalog + FAQ — anatomy may differ).
- **Data table** (dimensions).
- **Testimonial card** (if present on mobile after verification).
- **Pricing card** + **featured** variant.
- **Carousel** primitives (arrows, dots, slide container).
- **Forms**: compact rail form vs closing **large** form.

---

## Unknown states (updated)

- **fig-kiwi layer tree** not machine-readable here → frame naming / component variants **unknown** until Figma is opened.
- **Tablet** composition.
- **Header** scroll / transparency change.
- **Mobile nav** open panel.
- **Hover / focus / error** for buttons, links, inputs, slider tiles.
- **Carousel** autoplay, loop, slide count behavior.
- **Why-choose** item **count** (6 vs 7).
- **Reviews** on mobile placement / existence (narrative gap).
- **Desktop presence** of **«Этапы сотрудничества»** block.
- **Gallery vs featured carousel**: one vs two sections (naming in Figma).

---

## Asset preparation checklist (execution before HTML/CSS blocks)

1. **Open `barel.fig` in Figma**; locate the **main page frame**(s) for desktop and mobile (or responsive component set).
2. **Inventory layers** top-to-bottom; align with the **Reconciled block table**; resolve every **[VERIFY]** row.
3. **Export logo** → `src/assets/design/barel/icons/` (SVG preferred).
4. **Export UI icons** (feature, delivery, equipment, social, play, arrows if vector) → `barel/icons/` with semantic names.
5. **Export photography / posters** → `barel/images/` (`hero-*.jpg`, `gallery-*.jpg`, `process-*.jpg`, etc.).
6. **Document** in `barel/notes/` (optional): frame names ↔ filenames map (keeps block work traceable).
7. **Do not** copy the 37 **hash-named** binaries from the ZIP into the repo as final assets; use them only as evidence that rasters exist—**re-export** with correct names from Figma.
8. After exports, **measure** paddings / type sizes from Figma for each block (record in block approval notes when implementing).

---

## Block priority for implementation (future coding phase)

**Priority principle:** top-of-page → bottom; **dependencies first** (global header, design tokens from Figma); **one block per PR/step** per `AGENTS.md`.

| Priority | Block # | Rationale |
|----------|---------|------------|
| P0 | Design inventory in Figma | Resolve all **[VERIFY]** rows; export tokens / fonts. |
| P1 | 1 Header | Needed for all previews; mobile menu still state-blocked. |
| P1 | 2 Hero | Establishes global theme; requires hero raster export. |
| P2 | 3 Intro (rail + gallery / mobile gallery) | First complex layout; defines container behavior. |
| P2 | 4 About | Mostly typographic + four icons after exports. |
| P3 | 5 Catalog | High complexity; accordion + grid variants. |
| P3 | 6 Secondary value grid | Depends on Figma clarification (one vs two sections). |
| P4 | 7 Why choose | Blocked on **count** verification. |
| P4 | 8 Manufacturing | Image-heavy; export all step shots first. |
| P4 | 9 Complectation | Icon lists + two surfaces. |
| P5 |10 Dimensions | Table + responsive rules. |
| P5 |11 Showcase carousels | Blocked on one-vs-two section clarification. |
| P5 |12 Video | Posters + play overlay. |
| P6 |13 Reviews | Blocked until mobile existence confirmed. |
| P6 |14 Cooperation stages | Blocked until desktop/mobile placement confirmed. |
| P6 |15 Pricing | Needs responsive spec + asset badges. |
| P7 |16 Delivery | Lower coupling once icons exist. |
| P7 |17 FAQ | Partial state exists on mobile export. |
| P8 |18 Long SEO text | Content + typography only after layout shell stable. |
| P8 |19 Lead form | Field parity check between breakpoints. |
| P9 |20 Footer | Can move earlier if marketing wants footer-first; traditionally after main content. |

---

## Sections safe to start implementing **first** (after Figma pass + exports)

**“Safe”** means: **frame order confirmed**, **layout described in exports**, **no unresolved duplicate/missing section**, **required rasters/SVGs available** in `barel/images` and `barel/icons`.

| Ready first (typical) | Preconditions |
|----------------------|----------------|
| **20 Footer** | Logo (footer variant) + social SVGs exported; link groups copied from Figma text. |
| **18 Long SEO / editorial** | Copy pasted from Figma text layers; no icons. |
| **4 About company** | Four metric icons exported; body copy from Figma. |
| **16 Delivery** | Three icons exported; copy from Figma. |

**Not safe as first implementation block yet** (pending **[VERIFY]** or missing states): **1** (menu open), **2** (if scroll chip desktop parity unclear), **6** (possible duplicate section), **7** (count), **11** (one vs two carousels), **13** (reviews on mobile), **14** (desktop presence), **15** (dual layout + badge art), **17** (expanded desktop), **19** (field count mismatch across breakpoints).

---

## Sections still blocked by missing asset / state data

| Block | Blocker |
|-------|---------|
| 1 Header | Mobile **menu open** / focus states not in `exports/`. |
| 2 Hero | Full-bleed **hero** raster export; optional **scroll chip** on desktop unconfirmed. |
| 3 Intro | All **gallery** rasters; rail copy; mini-form behavior unspecified. |
| 5 Catalog | All **product** images; accordion **collapsed** set for every category on mobile. |
| 6 Value grid | Figma clarification **one vs two** sections; icon exports. |
| 7 Why choose | **Exact item count** and icons per item. |
| 11 Carousels | Section boundary clarification; **hover** on tiles; arrow disabled states. |
| 12 Video | **All** poster frames; optional playing state. |
| 13 Reviews | **Mobile** presence/position; **slider** controls if single-column; avatar assets if any. |
| 14 Stages | **Desktop** frame existence and assets. |
| 15 Pricing | **Three** desktop cards + **one** mobile card assets (badges, backgrounds). |
| 17 FAQ | **Desktop expanded** row design if any. |
| 19 Forms | **Validation / error**; exact field list both breakpoints; dropdown options source. |
| Global | **Typeface files** licensing + `src/fonts` plan once families are read from Figma. |

---

## Current implementation status per block

**Preparation / analysis refinement only — no HTML, SCSS, or JS has been started.** All implementation statuses remain `not started` until the first approved coding block.

---

## Changelog

| Date | Change |
|------|--------|
| Initial | Raster-only analysis + file inventory. |
| Refinement | Unzipped `barel.fig`: recorded `meta.json`, embedded image count/signatures, confirmed `canvas.fig` binary limitation; merged desktop/mobile into reconciled table; added asset checklist, priorities, safe/blocked lists; created `images/`, `icons/`, `notes/` with `.gitkeep`. |
