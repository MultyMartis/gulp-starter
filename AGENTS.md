# AGENTS.md

## Project role
This repository is the canonical gulp starter template for static HTML projects.
It is not a client website.

## Core rule
Preserve the starter architecture.
Do not redesign, reinterpret, or expand the architecture unless explicitly requested.

## Project structure
- src/pages — only final ready-to-build pages
- src/partials/layout — layout files only
- src/partials/sections — large page sections
- src/partials/components — small reusable UI parts
- src/scss mirrors the HTML structure
- src/scss/base — reset, base, typography
- src/scss/utils — vars, mixins, functions
- src/scss/layout — layout styles
- src/scss/sections — section styles
- src/scss/components — component styles
- src/js/main.js — initialization only
- src/js/modules — feature/component logic only when needed
- src/js/utils — generic helpers only when needed
- src/img — raster images
- src/svg — svg files and sprite sources
- src/fonts — fonts
- src/favicon — favicon source files
- dist is build output and must never be edited manually

## Hard restrictions
- Do not edit dist
- Do not restructure folders
- Do not move files between directories
- Do not rename existing files unless explicitly requested
- Do not create unnecessary files
- Do not add frameworks unless explicitly requested
- Do not add libraries unless explicitly required by the task
- Do not create JS unless the task really requires JS
- Do not refactor unrelated files
- Do not modify unrelated pages or sections
- Do not generate real client pages inside the starter template unless explicitly requested
- Starter is a template, not a real client project

## Starter vs real project rule
Inside gulp-starter:
- keep pages generic
- keep content reusable
- do not create real SEO/business/service pages
- do not turn starter pages into client pages

Inside a copied real project:
- real business content is allowed
- internal service pages and landing pages may be created as requested

## Workflow rule
All multi-file operations must be executed as one coherent Codex task.
Do not suggest manual step-by-step editing by default for:
- project structure
- page generation
- multi-file section/component creation
- mass changes

Default workflow:
1. Understand the task
2. Apply the required file changes directly
3. Report created and modified files
4. Run build validation
5. Fix build errors if any
6. Return final status

## Page rules
- One page = one H1
- Use semantic HTML
- Keep markup clean and production-ready
- Avoid meaningless wrapper nesting
- Avoid placeholder/fake/demo content unless explicitly requested
- Internal pages must not use hero unless explicitly requested
- Homepage and special landing pages may use hero
- Internal page default structure:
  1. breadcrumb
  2. page-intro or main content block
  3. supporting sections below

## Include rules
- Use valid gulp-file-include syntax
- Include paths must be correct
- Parameters for includes must be valid JSON in one line
- Reuse existing includes before creating new ones
- Do not duplicate layout logic across pages if reusable includes are appropriate

## Naming rules
- Use lowercase
- Use kebab-case for file names, class names, section names, and component names
- Use descriptive practical names
- Do not use vague names like block, temp, test, new-section, item2

## Section rules
- Large standalone blocks belong in src/partials/sections
- A section should be reusable where reasonable
- Do not hardcode page-specific content into a reusable section unless explicitly requested
- Each new section must have matching SCSS in src/scss/sections if styling is needed

## Component rules
- Small reusable UI parts belong in src/partials/components
- Components must remain generic and reusable
- Each new component must have matching SCSS in src/scss/components if styling is needed

## SCSS rules
- SCSS structure must mirror HTML structure
- Add styles only to the proper layer: base / utils / layout / sections / components
- Connect new SCSS files in src/scss/style.scss
- Do not duplicate imports
- Do not break existing import order
- Do not place section styles in component files or vice versa
- Keep styles scoped, clean, and production-ready
- Avoid global leakage
- Avoid unnecessary visual overdesign
- Build responsive structure by default

## JS rules
- Use JS only if really needed
- Put initialization in src/js/main.js
- Put feature logic in src/js/modules
- Put generic helpers in src/js/utils
- Use explicit import/export pattern
- No global registry
- No inline scripts
- No inline handlers

## JS hook rules
- Prefer data-* attributes for JS hooks and initialization
- Do not use presentational CSS classes as the primary JS selector when data-* is more appropriate
- Keep styling classes and JS hooks separated
- Use stable patterns such as:
  - data-modal
  - data-modal-open
  - data-modal-close
  - data-tabs
  - data-tab
  - data-tab-panel
  - data-accordion
  - data-accordion-button
  - data-accordion-panel
  - data-slider
  - data-fancybox
  - data-mask

## Library integration rules
When the task requires Swiper, Fancybox, Inputmask, or a similar plugin:
- first check whether the library is already used in the project
- connect it only if the task actually requires it
- prefer CDN by default unless local hosting is explicitly requested
- keep plugin markup valid
- keep plugin logic in src/js/modules
- initialize plugins from src/js/main.js
- do not place plugin logic inside HTML
- do not create inline scripts
- use stable data-* hooks where practical

## Head rules
Every real project page must support:
- unique title
- meta description
- viewport
- charset
- robots when relevant
- Open Graph tags
- Twitter/social tags when relevant
- favicon links

Do not add fake verification tags.
Do not invent fake production URLs or fake image URLs.

## Favicon rules
- Favicon source files belong in src/favicon
- Reuse existing favicon markup in layout/head
- Do not invent nonexistent favicon filenames

## Content rules
For generated real project pages:
- write realistic production-ready content
- no lorem ipsum
- no filler text
- no generic AI fluff
- keep text practical, structured, and commercially useful when needed
- avoid keyword stuffing
- keep headings meaningful

For starter template files:
- keep content neutral, generic, reusable
- do not insert client-specific sales copy unless explicitly requested

## Build validation rule
After changes:
1. Provide a short report:
   - created files
   - modified files
   - connected imports/includes/modules
2. Run:
   npm run build
3. If build fails, fix the errors
4. Final output must be:
   - Build succeeded
   or
   - a short concrete list of remaining errors

## Priority order
When in doubt:
1. preserve architecture
2. avoid touching starter template content unnecessarily
3. reuse existing project patterns
4. keep output minimal, clean, and build-safe
5. add libraries only when required
6. keep head/meta/favicon complete for real pages
7. do not make broad assumptions beyond the task

## Pixel-Perfect Frontend Workflow

### Source of truth
Design source is the only visual source of truth.
Starter template is only a technical base:
- structure
- includes
- build system
- architecture

AI must not reinterpret, simplify, restyle, or approximate a design.

### Priority of design sources
1. Figma (preferred)
2. PNG export
3. PDF export

If Figma is available, it must be used as the primary reference.

### Global workflow
Every page must be implemented using this sequence:

1. Full design analysis
2. Page split into exact visual blocks
3. Asset extraction plan
4. One-block implementation
5. Local preview
6. Pause for approval
7. Continue only after approval

### Block-by-block rule
- Only ONE block can be implemented at a time
- AI must not implement multiple sections in one step
- AI must not skip blocks
- AI must stop after each block

### Visual accuracy rule
AI must strictly reproduce:
- layout
- spacing
- typography
- proportions
- alignment
- visual hierarchy

AI must NOT:
- normalize spacing
- adjust typography “for better look”
- simplify compositions
- replace real assets with placeholders
- invent missing visual parts

### Asset rule
If the design contains:
- images
- icons
- logos
- decorative elements

AI must:
- use real assets
- or recreate them accurately

Placeholders are forbidden unless explicitly allowed.

### Responsive rule
Responsive behavior must follow the design.

If some breakpoint is not provided:
- preserve the logic of the closest available layout
- do not invent complex alternative layouts

### Isolation rule
While implementing a block:
- do not modify other blocks
- do not refactor unrelated files
- do not change approved sections

### Approval rule
After each block:
AI must:
1. ensure build works
2. update preview
3. report status
4. STOP

AI must wait for:
- approved
- continue
- fix this block

### Correction rule
If a block is not pixel-perfect:
- fix ONLY that block
- do not change page structure
- do not modify other sections
