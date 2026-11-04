# Text scroll, ink

Statement ink.

- Category: text-scroll
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/text-scroll--text-scroll-13.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Text scroll, ink" (id `text-scroll-13`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/text-scroll--text-scroll-13.html; Shopify bundle: sections/linen/text-scroll-13/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-text-scroll-13.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/sections/blko-text-scroll-13.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/snippets/blko-fonts-linen.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/snippets/blko-ui-section.liquid
   - `assets/blko-cine.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/assets/blko-cine.css
   - `assets/blko-cine.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/assets/blko-cine.js
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-text-scroll-13.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/assets/blko-text-scroll-13.css
   - `assets/blko-text-scroll-13.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/assets/blko-text-scroll-13.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/text-scroll-13/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. No locale keys to merge.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-text-scroll-13.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-cine.css`
- `assets/blko-cine.js`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-text-scroll-13.css`
- `assets/blko-text-scroll-13.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | Why we go slow |
| `note` | text | Note | Field notes · No. 03 |
| `statement` | textarea | Statement | We grow our flax by the sea[1] wash it soft with river stones,[2] cut each piece slowly, so the dress you buy this June[3] still feels like yours after *twenty summers.* |
| `chip_1` | image_picker | Photo chip 1 |  |
| `chip_2` | image_picker | Photo chip 2 |  |
| `chip_3` | image_picker | Photo chip 3 |  |
| `signoff` | text | Sign-off | Ines & Joa, founders |
| `since` | text | Sign-off note | Weaving in small runs since 2014 |
| `link_label` | text | Link label | Read the field notes |
| `link` | url | Link | /blogs/news |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `padding_top` | range | Top padding | 128 |
| `padding_bottom` | range | Bottom padding | 128 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-cine.css`, `blko-cine.js`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-text-scroll-13.css`, `blko-text-scroll-13.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-linen.liquid`, `blko-ui-section.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
