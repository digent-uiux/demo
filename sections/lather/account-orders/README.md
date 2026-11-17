# Lather account and orders

html, signed-in state) for customers/account and customers/order.

- Category: customer-account
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/templates/account.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather account and orders" (id `account-orders`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/templates/account.html; Shopify bundle: sections/lather/account-orders/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-account-access.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-account-access.css
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-account-orders.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/sections/blko-lv3-account-orders.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-account-intro.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/snippets/blko-lv3-account-intro.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-orders/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-3 |
| `view` | select | View | auto |
| `eyebrow` | text | Small label | Your account |
| `heading_1` | inline_richtext | Heading, line 1 | A little less |
| `heading_2` | inline_richtext | Heading, line 2 | to <em>remember.</em> |
| `text` | textarea | Text | Your orders, your details, and an easier way back to the for |
| `help_label` | text | Help link | Need help with an order? |
| `help_link` | url | Help link URL |  |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image description | Soft wash on warm stone with leaf shadows |
| `welcome` | text | Greeting | Welcome back. |
| `hello` | text | Greeting with name | Hello, [name]. |
| `orders_heading` | text | Orders heading | Your orders |
| `order_heading` | text | Order title | Order [number] |
| `no_orders` | text | No orders yet | No orders yet. Your first one will show here. |
| `cta_label` | text | Button | Shop Calm wash |
| `cta_product` | product | Button product |  |
| `cta_link` | url | Button URL |  |
| `logout_label` | text | Log out link | Log out |
| `pages_label` | text | Pagination label (screen readers) | More orders |
| `prev_label` | text | Newer orders | Newer orders |
| `next_label` | text | Older orders | Older orders |
| `qty_label` | text | Quantity | Quantity |
| `subtotal_label` | text | Subtotal | Subtotal |
| `shipping_label` | text | Shipping | Shipping |
| `tax_label` | text | Tax | Tax |
| `total_label` | text | Total | Total |
| `ship_to_label` | text | Shipping address | Shipping to |
| `cancelled_label` | text | Cancelled | cancelled |
| `back_account_label` | text | Back link | Back to your account |
| `demo_image` | image_picker | Image |  |
| `demo_number` | text | Number | Order #1042 |
| `demo_line` | text | Line | Calm wash, 400 ml |
| `demo_status` | text | Status | Delivered October 28 |
| `demo_total` | text | Total | $18 |
