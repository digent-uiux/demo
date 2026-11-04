# Recommendations 37

Recommendations 37 section from the Balm 2 theme.

- Category: product-recommendations
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/product-recommendations--recommendations-37.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Recommendations 37" (id `recommendations-37`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/product-recommendations--recommendations-37.html; Shopify bundle: sections/balm-2/recommendations-37/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-recommendations-37.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/sections/blko-recommendations-37.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/snippets/blko-fonts-balm.liquid
   - `snippets/blko-recommendations-37-item.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/snippets/blko-recommendations-37-item.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/snippets/blko-ui-section.liquid
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/assets/blko-f-karla.woff2
   - `assets/blko-recommendations-37.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/assets/blko-recommendations-37.css
   - `assets/blko-recommendations-37.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/assets/blko-recommendations-37.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-37/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-recommendations-37.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-recommendations-37-item.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-recommendations-37.css`
- `assets/blko-recommendations-37.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Pairs with this oil |
| `heading` | inline_richtext | Heading | Three to keep <em>beside</em> it |
| `line` | text | Line | One for before, one for during, one for after. Each made in the same workshop. |
| `plate_label` | text | Plate label | Plate III · Kept beside the oil |
| `plate_scale` | text | Plate scale | 1 : 4 |
| `products` | product_list | Products |  |
| `intent` | select | Recommendations | complementary |
| `note_field` | text | Line under the name (product metafield) | custom.routine_note |
| `show_bundle` | checkbox | Show the total and Add all | true |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 112 |
| `padding_bottom` | range | Bottom padding | 112 |

## Blocks

- `item`: Preview item

## Dependencies

- Assets: `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-recommendations-37.css`, `blko-recommendations-37.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-recommendations-37-item.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-money.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.recommendations_37.add`, `blko.recommendations_37.add_all`, `blko.recommendations_37.add_all3`, `blko.recommendations_37.added`, `blko.recommendations_37.all_added`, `blko.recommendations_37.error`, `blko.recommendations_37.fig`, `blko.recommendations_37.label`, `blko.recommendations_37.sold_out`, `blko.recommendations_37.together` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
