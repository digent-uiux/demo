# Journal strip, topics

Journal strip, topics section from the Balm 2 theme.

- Category: collection-banner
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/collection-banner--collection-banner-42.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Journal strip, topics" (id `collection-banner-42`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/collection-banner--collection-banner-42.html; Shopify bundle: sections/balm-2/collection-banner-42/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-collection-banner-42.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/sections/blko-collection-banner-42.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/assets/blko-balm-motion.js
   - `assets/blko-collection-banner-42.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/assets/blko-collection-banner-42.css
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/assets/blko-f-karla.woff2
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/collection-banner-42/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-collection-banner-42.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-balm-motion.css`
- `assets/blko-balm-motion.js`
- `assets/blko-collection-banner-42.css`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | The journal |
| `eyebrow` | text | Label | The journal |
| `heading` | text | Heading | Notes on |
| `heading_em` | text | Heading, italic word | slow |
| `heading_after` | text | Heading, after | skin, from the apothecary |
| `text` | textarea | Text | How we press, blend and use what goes in the jar. Read one with the kettle on. |
| `blog` | blog | Blog |  |
| `max_tags` | range | Topics shown | 6 |
| `all_link` | url | "All" link (preview) |  |
| `image` | image_picker | Plate photo |  |
| `caption` | text | Plate caption | Plate 12 · The oil hour |
| `surface` | select | Colour | alt |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 96 |
| `padding_bottom` | range | Bottom padding | 96 |

## Blocks

- `topic`: Topic (preview)

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-collection-banner-42.css`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.collection_banner_42.all`, `blko.collection_banner_42.count`, `blko.collection_banner_42.count_tag`, `blko.collection_banner_42.topics` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
