# Product, seasonal plan

Product, seasonal plan section from the Linen theme.

- Category: main-product
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/main-product--product-detail-27.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Product, seasonal plan" (id `product-detail-27`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/main-product--product-detail-27.html; Shopify bundle: sections/linen/product-detail-27/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-product-detail-27.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/sections/blko-product-detail-27.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-fonts-linen.liquid
   - `snippets/blko-linen-mixed.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-linen-mixed.liquid
   - `snippets/blko-linen-product-form.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-linen-product-form.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-option.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-ui-option.liquid
   - `snippets/blko-ui-quantity.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-ui-quantity.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/snippets/blko-ui-section.liquid
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-linen-product.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/assets/blko-linen-product.js
   - `assets/blko-product-detail-27.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/assets/blko-product-detail-27.css
   - `assets/blko-product-detail-27.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/assets/blko-product-detail-27.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-detail-27/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-product-detail-27.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-linen-mixed.liquid`
- `snippets/blko-linen-product-form.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-option.liquid`
- `snippets/blko-ui-quantity.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-linen-product.js`
- `assets/blko-product-detail-27.css`
- `assets/blko-product-detail-27.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `step_plan` | text | Plan heading | 1 · How often |
| `off_text` | text | Saving text | [n]% off each parcel |
| `now_word` | text | First parcel word | Now |
| `seasonal_word` | text | No colourway word | Seasonal |
| `plan_note` | textarea | Plan note | Each parcel has a prepaid bag: send the old shirt back and we mend it or spin it into new yarn. Skip or stop any time. |
| `once_note` | textarea | One-off note | One shirt, no plan. You can still send a worn one back for mending. |
| `step_size` | text | Size heading | 2 · Size |
| `size_option` | text | Size option name | Size |
| `fit_note` | textarea | Fit note | Boxy and dropped at the shoulder; take your usual size. Softens and grows about 1 cm in the first wash. |
| `cloth_word` | text | Cloth word | Cloth: |
| `cloth_text` | text | Cloth | 100% European flax linen, 185 g/m², stone-washed, coconut-shell buttons. |
| `max_qty` | range | Most per order | 4 |
| `start_label` | text | Plan button | Start plan |
| `add_label` | text | One-off button | Add to bag |
| `added_label` | text | Added label | Added |
| `added_msg` | text | Added message | [q] × size [s], [plan], added. |
| `delivery` | text | Delivery line | Carbon-neutral delivery in 3–5 days; 30-day returns on the first parcel. |
| `caption` | text | Photo caption | Shown in Natural, the May colourway. |
| `heading` | text | Title | The camp shirt, on a seasonal refresh |
| `price` | number | Price | 88 |
| `sizes` | text | Sizes | XS, S, M, L, XL |
| `size_start` | text | Size picked | M |
| `image` | image_picker | Photo |  |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-4 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |
| `care_details` | textarea | Care accordion text |  |
| `material_details` | textarea | Materials accordion text |  |
| `pairs_with` | product_list | Pairs with |  |

## Blocks

- `@app`: @app
- `plan`: Plan
- `colourway`: Colourway

## Dependencies

- Assets: `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-linen-product.js`, `blko-product-detail-27.css`, `blko-product-detail-27.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-linen-mixed.liquid`, `blko-linen-product-form.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-money.liquid`, `blko-ui-option.liquid`, `blko-ui-quantity.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.linen.care`, `blko.linen.in_stock`, `blko.linen.materials`, `blko.linen.one_time`, `blko.linen.pairs_with`, `blko.linen.purchase_option`, `blko.linen.quantity`, `blko.linen.sold_out`, `blko.linen.unavailable`, `blko.linen.variant`, `blko.product_detail_27.label`, `blko.product_detail_27.parcels`, `blko.product_detail_27.plan`, `blko.product_detail_27.size`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
