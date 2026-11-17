# Lather reviews

html).

- Category: reviews
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/reviews--reviews.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather reviews" (id `reviews`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/reviews--reviews.html; Shopify bundle: sections/lather/reviews/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-recent.js
   - `assets/blko-lv3-reviews.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-reviews.css
   - `assets/blko-lv3-reviews.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-reviews.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-reviews.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/sections/blko-lv3-reviews.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/reviews/snippets/blko-lv3-product-data.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `heading_1` | inline_richtext | Heading, line 1 | From skin |
| `heading_2` | inline_richtext | Heading, line 2 | like <em>yours.</em> |
| `rating` | text | Average rating | 4.7 |
| `count_text` | text | Review count | from 1,240 reviews |
| `add_label` | text | Add button | Add |
| `stars_label` | text | Stars (screen readers) | [n] out of 5 stars |
| `tabs_label` | text | Faces label (screen readers) | Choose a review |
| `prev_label` | text | Previous button (screen readers) | Previous review |
| `next_label` | text | Next button (screen readers) | Next review |
| `label` | text | Section label (screen readers) | Reviews |
| `anchor` | text | Anchor id | reviews |
