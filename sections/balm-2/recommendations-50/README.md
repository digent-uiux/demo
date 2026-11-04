# Recommendations 50

Recommendations 50 section from the Balm 2 theme.

- Category: product-recommendations
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/product-recommendations--recommendations-50.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Recommendations 50" (id `recommendations-50`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/product-recommendations--recommendations-50.html; Shopify bundle: sections/balm-2/recommendations-50/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-recommendations-50.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/sections/blko-recommendations-50.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/snippets/blko-fonts-balm.liquid
   - `snippets/blko-recommendations-50-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/snippets/blko-recommendations-50-card.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/snippets/blko-ui-section.liquid
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/assets/blko-f-karla.woff2
   - `assets/blko-recommendations-50.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/assets/blko-recommendations-50.css
   - `assets/blko-recommendations-50.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/assets/blko-recommendations-50.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/recommendations-50/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-recommendations-50.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-recommendations-50-card.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-recommendations-50.css`
- `assets/blko-recommendations-50.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | Samples · from the same shelf |
| `heading` | inline_richtext | Heading (italic = accent) | Try it <em>small</em> first |
| `line` | text | Line | Deluxe sizes of what people pair with a bag like yours. Pick up to three; each is enough for a fair trial. |
| `slots` | range | Pouch slots | 3 |
| `status_idle` | text | Status line | Ships in the same parcel, in recycled card |
| `status_tail` | text | Status after adding | ships in the same parcel |
| `products` | product_list | Samples |  |
| `intent` | select | Recommendations | complementary |
| `limit` | range | Samples shown | 4 |
| `size_field` | text | Size label (product metafield) | custom.sample_size |
| `lasts_field` | text | How long it lasts (product metafield) | custom.lasts |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-7 |
| `padding_top` | range | Top padding | 112 |
| `padding_bottom` | range | Bottom padding | 112 |

## Blocks

- `item`: Preview item

## Dependencies

- Assets: `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-recommendations-50.css`, `blko-recommendations-50.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-recommendations-50-card.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-money.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.recommendations_50.add`, `blko.recommendations_50.added`, `blko.recommendations_50.adding`, `blko.recommendations_50.empty`, `blko.recommendations_50.error`, `blko.recommendations_50.full`, `blko.recommendations_50.label`, `blko.recommendations_50.of`, `blko.recommendations_50.pouch`, `blko.recommendations_50.remove`, `blko.recommendations_50.removing`, `blko.recommendations_50.shelf`, `blko.recommendations_50.sold_out` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
