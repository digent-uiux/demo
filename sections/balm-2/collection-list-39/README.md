# Collection list 39

Collection list 39 section from the Balm 2 theme.

- Category: collection-list
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/collection-list--collection-list-39.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection list 39" (id `collection-list-39`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/collection-list--collection-list-39.html; Shopify bundle: sections/balm-2/collection-list-39/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-collection-list-39.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/sections/blko-collection-list-39.liquid
   - `snippets/blko-collection-list-39-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/snippets/blko-collection-list-39-card.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/snippets/blko-ui-section.liquid
   - `assets/blko-collection-list-39.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/assets/blko-collection-list-39.css
   - `assets/blko-collection-list-39.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/assets/blko-collection-list-39.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/assets/blko-f-karla.woff2
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-list-39/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-collection-list-39.liquid`
- `snippets/blko-collection-list-39-card.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-collection-list-39.css`
- `assets/blko-collection-list-39.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Label | The shelves |
| `heading` | inline_richtext | Heading (italic = accent) | Four shelves, one <em>apothecary</em> |
| `text` | textarea | Text | Every formula we pour, pinned where you would look for it. Start with the oils. |
| `link_label` | text | Link label | All 53 formulas |
| `link` | url | Link |  |
| `plate_caption` | text | Focal plate caption | Plate I |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `padding_top` | range | Top padding | 128 |
| `padding_bottom` | range | Bottom padding | 128 |

## Blocks

- `collection`: Collection

## Dependencies

- Assets: `blko-collection-list-39.css`, `blko-collection-list-39.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-collection-list-39-card.liquid`, `blko-fonts-balm.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.collection_list_39.collection`, `blko.collection_list_39.formulas`, `blko.collection_list_39.label`, `blko.collection_list_39.shelf` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
