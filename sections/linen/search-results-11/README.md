# Search, fabric swatches

Search, fabric swatches section from the Linen theme.

- Category: main-search
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/main-search--search-results-11.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Search, fabric swatches" (id `search-results-11`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/main-search--search-results-11.html; Shopify bundle: sections/linen/search-results-11/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-search-results-11.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/sections/blko-search-results-11.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-fonts-linen.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-icon.liquid
   - `snippets/blko-pagination.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-pagination.liquid
   - `snippets/blko-search-results-11-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-search-results-11-card.liquid
   - `snippets/blko-ui-badge.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-badge.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-number.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-number.liquid
   - `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-price.liquid
   - `snippets/blko-ui-product-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-product-card.liquid
   - `snippets/blko-ui-rating.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-rating.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-section.liquid
   - `snippets/blko-ui-stars.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/snippets/blko-ui-stars.liquid
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-search-results-11.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/assets/blko-search-results-11.css
   - `assets/blko-search-results-11.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/assets/blko-search-results-11.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/search-results-11/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-search-results-11.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-pagination.liquid`
- `snippets/blko-search-results-11-card.liquid`
- `snippets/blko-ui-badge.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-number.liquid`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-product-card.liquid`
- `snippets/blko-ui-rating.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-stars.liquid`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-search-results-11.css`
- `assets/blko-search-results-11.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `choose_label` | text | Fabric row label | Choose your cloth |
| `in_word` | text | In word | in |
| `and_word` | text | And word | & |
| `every_word` | text | No fabric picked | every fibre |
| `anything_word` | text | Empty search | anything |
| `tail` | text | Result line | [n] pieces cut to keep you cool. |
| `sort_label` | text | Sort label | Sort |
| `sort_featured` | text | Sort, default | Featured |
| `sort_low` | text | Sort, low to high | Price, low to high |
| `sort_high` | text | Sort, high to low | Price, high to low |
| `badge` | text | Fibre badge | 100% [fibre] |
| `empty_text` | text | No fabric match | Pick at least one cloth to see pieces. |
| `no_results` | text | No results | Nothing matches that search yet. Try a cloth or a colour. |
| `query` | text | Demo search | summer |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `fabric`: Fabric
- `piece`: Demo piece

## Dependencies

- Assets: `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-search-results-11.css`, `blko-search-results-11.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-icon.liquid`, `blko-pagination.liquid`, `blko-search-results-11-card.liquid`, `blko-ui-badge.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-money.liquid`, `blko-ui-number.liquid`, `blko-ui-price.liquid`, `blko-ui-product-card.liquid`, `blko-ui-rating.liquid`, `blko-ui-section.liquid`, `blko-ui-stars.liquid`
- Locale keys: `blko.general.next`, `blko.general.page`, `blko.general.pagination`, `blko.general.previous`, `blko.search_results_11.filter`, `blko.search_results_11.label`, `blko.search_results_11.search`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.product.add`, `blko_ui.product.colors`, `blko_ui.product.save`, `blko_ui.rating.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
