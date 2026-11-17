# Lather product pair

pairs with Photo; heading and text; the two products with prices; the set price with a % off; "Add the routine" adds both; a quick-view link for the paired product.

- Category: main-product
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/main-product--product-pair.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather product pair" (id `product-pair`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/main-product--product-pair.html; Shopify bundle: sections/lather/product-pair/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-mark.png
   - `assets/blko-lv3-product-pair.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-product-pair.css
   - `assets/blko-lv3-product-pair.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-product-pair.js
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-product-pair.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/sections/blko-lv3-product-pair.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-pair/snippets/blko-lv3-product-data.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `heading_1` | inline_richtext | Heading, line 1 | Wash, then |
| `heading_2` | inline_richtext | Heading, line 2 | <em>lotion.</em> |
| `text` | textarea | Text | The Calm routine. Two fragrance-free products, one place bes |
| `image` | image_picker | Photo (demo) |  |
| `image_alt` | text | Photo alt text | Calm lotion, 250 ml oat bottle with a moss pump |
| `pct` | range | Set discount | 15 |
| `save_text` | text | Discount text | [pct]% off together |
| `button` | text | Button | Add the Calm routine, [amount] |
| `set_name` | text | Set name | Calm routine set |
| `set_note` | text | Set note in the bag (demo) | Calm wash 400 ml + Calm lotion 250 ml, 15% off |
| `set_image` | image_picker | Set image in the bag (demo) |  |
| `small_text` | text | Small print | One 400 ml wash and one 250 ml lotion. No subscription. |
| `quick_label` | text | Quick view link | Just looking for the lotion? Quick view |
| `pair_product` | product | Paired product |  |
| `pair_labels` | text | Labels | ff |
| `pair_key` | text | Demo key | lotion |
| `pair_name` | text | Demo name | Calm lotion |
| `pair_size` | text | Demo size | 250 ml |
| `pair_price` | text | Demo price in cents | 2200 |
| `pair_line` | textarea | Demo short line | Light lotion for damp skin, straight after the wash. |
| `pair_ing` | textarea | Demo ingredients | Water, glycerin, shea butter, colloidal oat, squalane, ceram |
| `main_key` | text | Key | calm |
| `main_name` | text | Demo name | Calm wash |
| `main_size` | text | Demo size | 400 ml |
| `main_price` | text | Demo price in cents | 1800 |
| `anchor` | text | Anchor id | pdp-pair |
