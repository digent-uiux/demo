# Lather overlays

Lather overlays: bag drawer and quick view (popup and cookie bar: blko-lv3-popup) (markup only; behaviour in blko-lv3-store.js).

- Category: cart-drawer
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/templates/home.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather overlays" (id `overlays`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/templates/home.html; Shopify bundle: sections/lather/overlays/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-base.css
   - `assets/blko-lv3-free-gift.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-free-gift.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-overlays.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/sections/blko-lv3-overlays.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-free-gift-progress.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/snippets/blko-lv3-free-gift-progress.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/snippets/blko-lv3-product-data.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/overlays/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `bag_title` | text | Title | Your bag |
| `bag_title_n` | text | Title with items ([count]) | Your bag ([count]) |
| `ship_free_over` | text | Shipping, empty bag ([amount]) | Free shipping over [amount]. |
| `ship_left` | text | Shipping, still to go ([amount]) | [amount] away from free shipping. |
| `ship_done` | text | Shipping, reached | Free shipping unlocked. |
| `empty` | text | Empty bag ([price] = upsell price) | Nothing here yet. Most people start with the Oat bar, [price |
| `removed` | text | Removed line ([name]) | Removed [name]. |
| `undo` | text | Undo | Undo |
| `remove` | text | Remove | Remove |
| `checkout` | text | Check out | Check out |
| `checkout_total` | text | Check out with total ([amount]) | Check out, [amount] |
| `view_bag` | text | Link to the cart page | View bag |
| `drawer_note` | text | Note under the button | Skin reacted? Refund on your first bottle, used or not. |
| `close_bag` | text | Close bag label (screen readers) | Close bag |
| `upsell_key` | text | Product key | bar |
| `upsell_product` | product | Product |  |
| `upsell_name` | text | Demo name | Oat bar |
| `upsell_size` | text | Demo size | 120 g |
| `upsell_price` | text | Demo price in cents | 900 |
| `upsell_line` | text | Demo line | Oat milk soap bar for face and body. Rich lather that rinses |
| `upsell_image` | image_picker | Image (blank = product image) |  |
| `upsell` | text | Upsell text ([price]) | Add the Oat bar for face and hands, [price]. |
| `upsell_add` | text | Upsell button | Add |
| `qv_add` | text | Add button | Add to bag |
| `qv_details` | text | Product page link (real products only) |  |
| `qv_hint_before` | text | Hint | Not sure? |
| `qv_hint` | text | Hint link (adds the upsell product) | Start with the Oat bar, $9 |
| `less` | text | Less (screen readers) | Less |
| `more` | text | More (screen readers) | More |
| `close_label` | text | Close (screen readers) | Close |
| `lbl_best` | text | Best seller | Best seller |
| `lbl_ff` | text | Fragrance-free | Fragrance-free |
| `lbl_new` | text | New | New |
| `lbl_sale` | text | Sale | Sale |
| `ftr_ok` | text | Thanks | Thanks. Your 10% code is on its way. |
| `ftr_bad` | text | Invalid email | Please enter a valid email. |
| `ann_every` | range | Rotate messages every | 6 |
