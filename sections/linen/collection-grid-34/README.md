# Collection, shelf

Collection, shelf section from the Linen theme.

- Category: main-collection-product-grid
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/main-collection-product-grid--collection-grid-34.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Collection, shelf" (id `collection-grid-34`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/main-collection-product-grid--collection-grid-34.html; Shopify bundle: sections/linen/collection-grid-34/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-collection-grid-34.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/sections/blko-collection-grid-34.liquid
   - `snippets/blko-collection-grid-34-piece.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-collection-grid-34-piece.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-fonts-linen.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-icon.liquid
   - `snippets/blko-linen-facets.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-linen-facets.liquid
   - `snippets/blko-linen-filter-heading.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-linen-filter-heading.liquid
   - `snippets/blko-linen-mixed.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-linen-mixed.liquid
   - `snippets/blko-pagination.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-pagination.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/snippets/blko-ui-section.liquid
   - `assets/blko-collection-grid-34.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/assets/blko-collection-grid-34.css
   - `assets/blko-collection-grid-34.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/assets/blko-collection-grid-34.js
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-grid-34/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-collection-grid-34.liquid`
- `snippets/blko-collection-grid-34-piece.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-linen-facets.liquid`
- `snippets/blko-linen-filter-heading.liquid`
- `snippets/blko-linen-mixed.liquid`
- `snippets/blko-pagination.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-collection-grid-34.css`
- `assets/blko-collection-grid-34.js`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `heading` | text | Heading | Folded, hung and ready to travel |
| `show_heading` | checkbox | Show heading | true |
| `count_text` | text | Count text | on the shelves |
| `in_word` | text | In word | in |
| `bag_text` | text | Bag text | in your bag |
| `size_option` | text | Size option name | Size |
| `sizes` | text | Size run | XS, S, M, L, XL |
| `size_label` | text | My size label | My size |
| `all_label` | text | All label | All |
| `sort_shelf` | text | Sort, default | As folded |
| `sort_low` | text | Sort, low to high | Price, low to high |
| `sort_high` | text | Sort, high to low | Price, high to low |
| `sold_word` | text | Sold out word | sold out |
| `left_aria` | text | Stock, screen readers | [n] left |
| `left_few` | text | Last pieces | Only [n] left in [s] |
| `on_shelf` | text | In stock | [s] is on the shelf |
| `sizes_left` | text | Sizes left | [k] of [n] sizes left |
| `add_label` | text | Add label | Add [s] |
| `pick_label` | text | Pick label | Pick a size |
| `add_plain` | text | Add, no sizes | Add to bag |
| `first_count` | range | Pieces at first | 6 |
| `step` | range | Pieces per shelf | 3 |
| `out_text` | text | Shown count | [n] of [total] pieces out |
| `more_label` | text | More label | Open the next shelf |
| `bare_all` | text | Bare, all | The shelves are bare in [s]. |
| `bare_one` | text | Bare, one cloth | The [cloth] shelf is bare in [s]. |
| `restock` | text | Restock note | We restock most pieces in six weeks. |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-7 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `collection_menu` | link_list | Subcollection navigation |  |
| `editorial_image` | image_picker | Editorial image in wardrobe grid |  |
| `editorial_caption` | text | Editorial image caption |  |

## Blocks

- `piece`: Demo piece

## Dependencies

- Assets: `blko-collection-grid-34.css`, `blko-collection-grid-34.js`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`
- Snippets: `blko-collection-grid-34-piece.liquid`, `blko-fonts-linen.liquid`, `blko-icon.liquid`, `blko-linen-facets.liquid`, `blko-linen-filter-heading.liquid`, `blko-linen-mixed.liquid`, `blko-pagination.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-money.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.collection.apply`, `blko.collection.clear_all`, `blko.collection.price_from`, `blko.collection.price_to`, `blko.collection_grid_34.cloth`, `blko.collection_grid_34.label`, `blko.collection_grid_34.size_for`, `blko.collection_grid_34.sort`, `blko.general.next`, `blko.general.page`, `blko.general.pagination`, `blko.general.previous`, `blko.linen.cart_error`, `blko.linen.choose_options`, `blko.linen.close`, `blko.linen.collection_empty`, `blko.linen.collections`, `blko.linen.filter_eyebrow`, `blko.linen.filter_heading`, `blko.linen.filter_intro`, `blko.linen.filter_sort`, `blko.linen.grid_compact`, `blko.linen.grid_density`, `blko.linen.grid_spacious`, `blko.linen.in_stock`, `blko.products.sold_out`, `blko_ui.product.add` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
