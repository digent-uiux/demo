# Search, ritual step chips

Search, ritual step chips section from the Balm 2 theme.

- Category: main-search
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/main-search--search-results-30.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Search, ritual step chips" (id `search-results-30`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/main-search--search-results-30.html; Shopify bundle: sections/balm-2/search-results-30/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-search-results-30.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/sections/blko-search-results-30.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/snippets/blko-fonts-balm.liquid
   - `snippets/blko-search-results-30-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/snippets/blko-search-results-30-card.liquid
   - `snippets/blko-search-results-30-row.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/snippets/blko-search-results-30-row.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/assets/blko-balm-motion.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/assets/blko-f-karla.woff2
   - `assets/blko-search-results-30.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/assets/blko-search-results-30.css
   - `assets/blko-search-results-30.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/assets/blko-search-results-30.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/search-results-30/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-search-results-30.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-search-results-30-card.liquid`
- `snippets/blko-search-results-30-row.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-balm-motion.css`
- `assets/blko-balm-motion.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-search-results-30.css`
- `assets/blko-search-results-30.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Search results |
| `field_label` | text | Field label | Search the apothecary |
| `placeholder` | text | Placeholder | An ingredient, a step, a product |
| `heading_all` | text | Heading without a query | Everything on the shelves |
| `per_page` | range | Results per page | 24 |
| `show_journal` | checkbox | Show journal results | true |
| `journal_max` | range | Journal rows | 3 |
| `empty_text` | textarea | Note | Nothing on our shelves goes by that name. Check the spelling, or try one of the ingredients we press and steep ourselves. |
| `suggest` | text | Suggested searches | rosehip, oat, calendula, squalane |
| `shelf_1` | text | Shelf 1 | Face oils |
| `shelf_1_url` | url | Shelf 1 link |  |
| `shelf_2` | text | Shelf 2 | Balms and creams |
| `shelf_2_url` | url | Shelf 2 link |  |
| `shelf_3` | text | Shelf 3 | Cleansing bars |
| `shelf_3_url` | url | Shelf 3 link |  |
| `demo_q` | text | Sample query | rosehip |
| `steps` | text | Sample chips | Cleanse, Treat, Seal, Body |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 112 |
| `padding_bottom` | range | Bottom padding | 112 |

## Blocks

- `product`: Product (sample)
- `story`: Journal story (sample)

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-search-results-30.css`, `blko-search-results-30.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-search-results-30-card.liquid`, `blko-search-results-30-row.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.search_results_30.add`, `blko.search_results_30.add_aria`, `blko.search_results_30.all`, `blko.search_results_30.clear`, `blko.search_results_30.filter`, `blko.search_results_30.in_bag`, `blko.search_results_30.index`, `blko.search_results_30.journal`, `blko.search_results_30.min`, `blko.search_results_30.next`, `blko.search_results_30.no`, `blko.search_results_30.prev`, `blko.search_results_30.remove_aria`, `blko.search_results_30.result_one`, `blko.search_results_30.result_other`, `blko.search_results_30.shown`, `blko.search_results_30.sold_out`, `blko.search_results_30.stories`, `blko.search_results_30.submit`, `blko.search_results_30.try`, `blko.search_results_30.with` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
