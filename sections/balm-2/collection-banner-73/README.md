# Collection banner 73

Collection banner 73 section from the Balm 2 theme.

- Category: collection-banner
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/collection-banner--collection-banner-73.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection banner 73" (id `collection-banner-73`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/collection-banner--collection-banner-73.html; Shopify bundle: sections/balm-2/collection-banner-73/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-collection-banner-73.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/sections/blko-collection-banner-73.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-arrow-link.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/snippets/blko-ui-arrow-link.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/snippets/blko-ui-section.liquid
   - `assets/blko-collection-banner-73.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/assets/blko-collection-banner-73.css
   - `assets/blko-collection-banner-73.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/assets/blko-collection-banner-73.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/assets/blko-f-karla.woff2
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-73/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-collection-banner-73.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-arrow-link.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-collection-banner-73.css`
- `assets/blko-collection-banner-73.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `collection` | collection | Collection |  |
| `number` | text | Label number | No. 01 |
| `label` | text | Label | Collection |
| `show_name` | checkbox | Show collection name on the label | true |
| `count_label` | text | Count label | formulas |
| `preview_count` | number | Count shown without a collection | 12 |
| `kicker` | text | Kicker | Small batch, since the kitchen table |
| `heading` | inline_richtext | Heading | The apothecary <em>shelf</em> |
| `text` | textarea | Text | Oils, serums, balms and bars, each with one clear job, mixed by hand and bottled in amber glass. |
| `ledger` | textarea | Ledger lines | Glass: Amber, UV-filtering Shelves: 05 |
| `link_label` | text | Link label | Browse the shelf |
| `link` | url | Link |  |
| `image` | image_picker | Front image (in focus) |  |
| `image_back` | image_picker | Back image (soft) |  |
| `caption` | text | Caption | Pictured · amber glass, 30 ml |
| `menu` | link_list | Sub-collection menu |  |
| `nav_label` | text | Row label | Shop by shelf |
| `show_count` | checkbox | Show product counts | true |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 128 |
| `padding_bottom` | range | Bottom padding | 128 |

## Blocks

- `sub`: Sub-collection

## Dependencies

- Assets: `blko-collection-banner-73.css`, `blko-collection-banner-73.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-arrow-link.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.collection_banner_73.back`, `blko.collection_banner_73.contents`, `blko.collection_banner_73.focus`, `blko.collection_banner_73.front`, `blko.collection_banner_73.label`, `blko.collection_banner_73.products`, `blko.collection_banner_73.subnav` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
