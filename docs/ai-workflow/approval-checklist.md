# Block approval checklist

Use before marking a block done or asking for review.

- [ ] Spacing matches design
- [ ] Typography matches design
- [ ] Asset is real (not an unapproved placeholder)
- [ ] Alignment matches design
- [ ] Changes limited to current block only
- [ ] No unrelated file or section changes
- [ ] Preview checked at relevant widths
- [ ] Awaiting explicit approval before next block

## Interaction and robustness (when this block has JS / motion / gallery / accordion)

- [ ] **Progressive enhancement:** meaningful content visible without JS; JS does not solely gate critical copy or structure
- [ ] **Gallery:** Swiper handles slide UX only; Fancybox handles lightbox only; no redundant bridge logic; no Swiper + `scrollBy` mix in one block
- [ ] **Critical gallery path:** no fragile-only dynamic `import()` chain unless justified; critical UI has a verifiable load/init path
- [ ] **Reveal / animation:** essential content does not disappear if JS fails; `prefers-reduced-motion` respected; lightweight props (transform/opacity) preferred
- [ ] **FAQ-style accordion:** one item open per group (unless design differs); reopening active item closes it; buttons + `aria-expanded`/`aria-controls`
- [ ] **Interaction CSS:** hover and `:focus-visible` aligned where appropriate; no `transition: all`; no unintended layout shift on hover/active; styles scoped to block
- [ ] **If something failed during build:** checked execution → globals → selectors → block root → CSS hit targets → then logic (see `AGENTS.md`)

## Anti-patterns avoided

- [ ] **No mixed interaction strategies** — one clear owner per block (e.g. not Swiper + manual `scrollBy` for the same motion)
- [ ] **No blind patching** — execution path verified (loaded → init ran → selectors match DOM) before repeated changes
- [ ] **No silent async-chain dependency for critical UI** — critical paths are verifiable; fragile-only dynamic `import()` chains justified or avoided
- [ ] **No unnecessary markup rewrites** — init, selectors, and CSS checked before restructuring stable HTML
