# Lather bag

the bag Real store: the cart object is rendered inside {% form 'cart', cart %} (updates[], note, remove links, checkout button name="checkout"), so the page works without JS.

- Category: cart
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/cart--cart-bag.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather bag" (id `cart-bag`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/cart--cart-bag.html; Shopify bundle: sections/lather/cart-bag/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-base.css
   - `assets/blko-lv3-cart-bag.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-cart-bag.css
   - `assets/blko-lv3-cart-bag.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-cart-bag.js
   - `assets/blko-lv3-free-gift.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-free-gift.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-cart-bag.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/sections/blko-lv3-cart-bag.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-free-gift-progress.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/cart-bag/snippets/blko-lv3-free-gift-progress.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `heading` | inline_richtext | Heading | Your <em>bag.</em> |
| `keep_label` | text | Keep browsing link | Keep browsing |
| `keep_link` | url | Keep browsing URL |  |
| `empty_heading` | text | Heading | Room for a softer routine. |
| `empty_text` | textarea | Text | Start with a wash, or keep it small with the Oat bar for fac |
| `empty_button` | text | Button | Find your formula |
| `empty_link` | url | Button URL |  |
| `remove_label` | text | Remove | Remove |
| `undo_label` | text | Undo | Undo |
| `removed_line` | text | Removed line | [name] removed. |
| `fewer_label` | text | One fewer (screen readers) | One fewer [name] |
| `more_label` | text | One more (screen readers) | One more [name] |
| `qty_label` | text | Quantity (screen readers) | Quantity |
| `update_label` | text | Update button (shown only without JavaScript) | Update bag |
| `note_label` | text | Label | Anything we should know? |
| `note_placeholder` | text | Placeholder | An order note, if you need one. |
| `note_hint` | text | Hint | Saved on this device with your bag. |
| `summary_heading` | text | Heading | Your order |
| `summary_label` | text | Summary label (screen readers) | Order summary |
| `free_ship` | range | Free shipping from | 40 |
| `ship_free_over` | text | Shipping, empty bag | Free shipping over [amount]. |
| `ship_left` | text | Shipping, not there yet | [amount] away from free shipping. |
| `ship_done` | text | Shipping, unlocked | Free shipping unlocked. |
| `progress_label` | text | Progress bar (screen readers) | Progress toward free shipping |
| `subtotal_label` | text | Subtotal | Subtotal |
| `shipping_label` | text | Shipping | Shipping |
| `shipping_calc` | text | Shipping, not free | Calculated at checkout |
| `shipping_free` | text | Shipping, free | Free |
| `total_label` | text | Total | Total before shipping & tax |
| `checkout_label` | text | Check out button | Check out, [amount] |
| `extras` | inline_richtext | Note under the button | Skin reacted? Your first bottle of any formula is refundable |
| `st_removed` | text | Removed | [name] removed. You can undo this change. |
| `st_updated` | text | Quantity updated | [name] quantity updated. |
| `st_restored` | text | Restored | [name] restored. |
| `st_thanks` | text | Demo check out | Thank you. Your order has been placed. |
