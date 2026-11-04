# 404, quiet shelf

404, quiet shelf section from the Balm 2 theme.

- Category: 404-page
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/404-page--not-found-31.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "404, quiet shelf" (id `not-found-31`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/404-page--not-found-31.html; Shopify bundle: sections/balm-2/not-found-31/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-not-found-31.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/sections/blko-not-found-31.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/assets/blko-balm-motion.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/assets/blko-f-karla.woff2
   - `assets/blko-not-found-31.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/assets/blko-not-found-31.css
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/not-found-31/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-not-found-31.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-balm-motion.css`
- `assets/blko-balm-motion.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-not-found-31.css`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Page not found |
| `label_text` | text | Small label | Error 404 · |
| `label_accent` | text | Small label, accent | No. 000 |
| `heading` | text | Heading | This shelf is |
| `heading_em` | text | Heading, italic word | empty. |
| `text` | textarea | Text | The page you were after has been moved or was never poured. Search the apothecary, or take one of the shelves. |
| `show_search` | checkbox | Show search | true |
| `placeholder` | text | Search placeholder | Rosehip, oat, a balm… |
| `browse` | text | Links heading | Or browse |
| `link_1_label` | text | Link 1 label | Face oils |
| `link_1` | url | Link 1 |  |
| `link_2_label` | text | Link 2 label | Balms and creams |
| `link_2` | url | Link 2 |  |
| `link_3_label` | text | Link 3 label | Cleansing bars |
| `link_3` | url | Link 3 |  |
| `image` | image_picker | Still life |  |
| `caption` | text | Caption | Specimen · amber glass, 30 ml, awaiting a pour |
| `surface` | select | Colour | bg |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `padding_top` | range | Top padding | 144 |
| `padding_bottom` | range | Bottom padding | 144 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-not-found-31.css`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.not_found_31.collections`, `blko.not_found_31.search` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
