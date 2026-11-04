# Scroll images, pinned

Pinned zoom story.

- Category: scroll-images
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/scroll-images--scroll-images-09.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Scroll images, pinned" (id `scroll-images-09`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/scroll-images--scroll-images-09.html; Shopify bundle: sections/linen/scroll-images-09/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-scroll-images-09.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/sections/blko-scroll-images-09.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/snippets/blko-fonts-linen.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/snippets/blko-ui-icon.liquid
   - `assets/blko-cine.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/assets/blko-cine.css
   - `assets/blko-cine.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/assets/blko-cine.js
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-scroll-images-09.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/assets/blko-scroll-images-09.css
   - `assets/blko-scroll-images-09.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/assets/blko-scroll-images-09.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/scroll-images-09/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. No locale keys to merge.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-scroll-images-09.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-cine.css`
- `assets/blko-cine.js`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-scroll-images-09.css`
- `assets/blko-scroll-images-09.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Photo |  |
| `eyebrow` | text | Eyebrow | From flax to the shore |
| `plate` | text | Plate caption | Plate 04 · The shore, late June |
| `step_1_label` | text | Label | Grown |
| `step_1_heading` | text | Heading | Flax from the coast fields |
| `step_1_text` | textarea | Text | Sown in March a few miles from the sea, pulled by hand in July and left to ret in the dew. |
| `step_2_label` | text | Label | Washed |
| `step_2_heading` | text | Heading | Softened three times |
| `step_2_text` | textarea | Text | Woven loose, then washed with river stones so it feels lived-in before you ever wear it. |
| `step_3_label` | text | Label | Worn |
| `step_3_heading` | text | Heading | Made for twenty summers |
| `step_3_text` | textarea | Text | A shirt that creases, breathes and fades well. Wear it to the shore, then wear it again. |
| `button_label` | text | Button label | Shop linen shirts |
| `button_link` | url | Button link | /collections/all |
| `length` | range | Pin length | 300 |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-cine.css`, `blko-cine.js`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-scroll-images-09.css`, `blko-scroll-images-09.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-linen.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`
- Locale keys: none
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
