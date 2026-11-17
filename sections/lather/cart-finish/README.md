# Lather bag add-on

the add-on under the bag One product: a picked product wins (title, price, image, variant: Add posts to /cart/add.js through window.LATHER); blank, the demo values (key 'bar') keep it working as in th

- Category: cart
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/cart--cart-finish.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather bag add-on" (id `cart-finish`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/cart--cart-finish.html; Shopify bundle: sections/lather/cart-finish/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-base.css
   - `assets/blko-lv3-cart-finish.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-cart-finish.css
   - `assets/blko-lv3-cart-finish.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-cart-finish.js
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-cart-finish.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/sections/blko-lv3-cart-finish.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-finish/snippets/blko-lv3-product-data.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `heading` | text | Heading | For the sink, too. |
| `text` | textarea | Text | Oat bar for face and body. A simple addition, 120 g. |
| `button` | text | Button | Add Oat bar |
| `sold_out` | text | Button, sold out | Sold out |
| `image` | image_picker | Image |  |
| `product` | product | Product |  |
| `key` | text | Product key | bar |
| `name` | text | Demo name | Oat bar |
| `size` | text | Demo size | 120 g |
| `price` | text | Demo price, in cents | 900 |
| `line` | textarea | Demo line | Oat milk soap bar for face and body. Rich lather that rinses |
