# Ingredients 01

Ingredients 01 section from the Balm 2 theme.

- Category: ingredients
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/ingredients--ingredients-01.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Ingredients 01" (id `ingredients-01`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/ingredients--ingredients-01.html; Shopify bundle: sections/balm-2/ingredients-01/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-ingredients-01.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/sections/blko-ingredients-01.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/snippets/blko-ui-section.liquid
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/assets/blko-f-karla.woff2
   - `assets/blko-ingredients-01.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/assets/blko-ingredients-01.css
   - `assets/blko-ingredients-01.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/assets/blko-ingredients-01.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/ingredients-01/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-ingredients-01.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-ingredients-01.css`
- `assets/blko-ingredients-01.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `eyebrow` | text | Eyebrow | In every jar |
| `heading` | inline_richtext | Heading (italic = accent) | Four ingredients doing the <em>heavy</em> lifting |
| `lead` | textarea | Lead | Each one is listed with its concentration. No fillers, no synthetic fragrance, nothing hidden behind “parfum”. |
| `inci_title` | text | Ingredient list title | Full ingredient list |
| `inci` | textarea | Full ingredient list (INCI) | Aloe Barbadensis Leaf Juice, Aqua, Glycerin, Avena Sativa Kernel Flour, Squalane, Citrus Aurantium Dulcis Peel Oil, Niacinamide, Sodium Hyaluronate, Lavandula Angustifolia Oil, Xanthan Gum, Tocopherol, Citric Acid, Linalool. |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 128 |
| `padding_bottom` | range | Bottom padding | 128 |

## Blocks

- `ingredient`: Ingredient

## Dependencies

- Assets: `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-ingredients-01.css`, `blko-ingredients-01.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.ingredients_01.label` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
