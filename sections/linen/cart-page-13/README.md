# Cart, size swap

Cart, size swap section from the Linen theme.

- Category: cart
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/cart--cart-page-13.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Cart, size swap" (id `cart-page-13`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/cart--cart-page-13.html; Shopify bundle: sections/linen/cart-page-13/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-cart-page-13.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/sections/blko-cart-page-13.liquid
   - `snippets/blko-cart-page-13-line.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-cart-page-13-line.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-fonts-linen.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-field.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-field.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-input.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-input.liquid
   - `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-money.liquid
   - `snippets/blko-ui-option.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-option.liquid
   - `snippets/blko-ui-payment-marks.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-payment-marks.liquid
   - `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-price.liquid
   - `snippets/blko-ui-quantity.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-quantity.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-section.liquid
   - `snippets/blko-ui-textarea.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/snippets/blko-ui-textarea.liquid
   - `assets/blko-cart-page-13.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/assets/blko-cart-page-13.css
   - `assets/blko-cart-page-13.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/assets/blko-cart-page-13.js
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/cart-page-13/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-cart-page-13.liquid`
- `snippets/blko-cart-page-13-line.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-field.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-input.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-option.liquid`
- `snippets/blko-ui-payment-marks.liquid`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-quantity.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-textarea.liquid`
- `assets/blko-cart-page-13.css`
- `assets/blko-cart-page-13.js`
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
| `count_label` | text | Count label | Bag |
| `piece_one` | text | One piece | piece |
| `piece_many` | text | Several pieces | pieces |
| `heading` | text | Heading | Your bag, ready for the warm months |
| `text` | text | Text | Not sure of a size? Change it here. Every piece is cut to order within three days. |
| `size_option` | text | Size option name | Size |
| `size_label` | text | Size heading | Change size |
| `fit_word` | text | Fit word | Fit |
| `fit_default` | text | Default fit note | True to size. |
| `remove_label` | text | Remove label | Remove |
| `empty_heading` | text | Empty bag heading | Your bag is empty. |
| `empty_link` | text | Empty bag link | Back to the summer edit |
| `empty_url` | url | Empty bag link URL |  |
| `wrap_heading` | text | Heading | Wrap it in cloth |
| `wrap_text` | text | Text | A linen square tied with a knot. They keep it, we skip the paper. |
| `note_label` | text | Note label | Note on the tag |
| `subtotal_label` | text | Subtotal label | Subtotal |
| `wrap_label` | text | Wrap label | Cloth wrap |
| `shipping_label` | text | Shipping label | Shipping |
| `free_word` | text | Free word | Free |
| `none_word` | text | None word | None |
| `ship_later` | text | Shipping, not free yet | At checkout |
| `free_over` | number | Free shipping from | 150 |
| `ship_done` | text | Free shipping reached | Shipping is on us. |
| `ship_more` | text | Free shipping gap | Add [amount] more for free shipping. |
| `checkout_label` | text | Checkout label | Checkout |
| `exchange_text` | text | Exchange note | Free size exchanges for 30 days |
| `show_payment` | checkbox | Show payment methods | true |
| `sizes` | text | Demo sizes | XS, S, M, L, XL |
| `ship_cost` | number | Demo shipping cost | 9 |
| `note_default` | text | Demo note | For the long summer, love M |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `line`: Demo line
- `wrap`: Cloth wrap

## Dependencies

- Assets: `blko-cart-page-13.css`, `blko-cart-page-13.js`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`
- Snippets: `blko-cart-page-13-line.liquid`, `blko-fonts-linen.liquid`, `blko-ui-button.liquid`, `blko-ui-field.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-input.liquid`, `blko-ui-money.liquid`, `blko-ui-option.liquid`, `blko-ui-payment-marks.liquid`, `blko-ui-price.liquid`, `blko-ui-quantity.liquid`, `blko-ui-section.liquid`, `blko-ui-textarea.liquid`
- Locale keys: `blko.cart.note`, `blko.cart.update`, `blko.cart_page_13.aside`, `blko.cart_page_13.label`, `blko.cart_page_13.photo_alt`, `blko.cart_page_13.quantity`, `blko.cart_page_13.size_word`, `blko.cart_page_13.sold_out`, `blko.linen.cart_error`, `blko.linen.view_bag`, `blko_ui.field.optional`, `blko_ui.payment.bank`, `blko_ui.payment.card`, `blko_ui.payment.gift_card`, `blko_ui.payment.label`, `blko_ui.payment.pay_later`, `blko_ui.payment.wallet`, `blko_ui.price.from`, `blko_ui.price.save`, `blko_ui.price.was`, `blko_ui.quantity.decrease`, `blko_ui.quantity.increase`, `blko_ui.quantity.label` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
