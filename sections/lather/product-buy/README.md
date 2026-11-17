# Lather product buy box

buy box Breadcrumb, gallery with thumbnails and caption, labels, title, rating link, short line, fact blocks, price + unit price, variant radios, quantity stepper, add to bag (product form), reassuran

- Category: main-product
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/main-product--product-buy.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather product buy box" (id `product-buy`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/main-product--product-buy.html; Shopify bundle: sections/lather/product-buy/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-mark.png
   - `assets/blko-lv3-product-buy.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-product-buy.css
   - `assets/blko-lv3-product-buy.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-product-buy.js
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-product-buy.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/sections/blko-lv3-product-buy.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/snippets/blko-lv3-product-data.liquid
   - `snippets/blko-lv3-wishlist-heart.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-buy/snippets/blko-lv3-wishlist-heart.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `key` | text | Product key | calm |
| `crumb_home` | text | Home link label | Home |
| `crumb_label` | text | Collection label | Body wash |
| `crumb_link` | url | Collection link |  |
| `crumb_aria` | text | Breadcrumb label (screen readers) | Breadcrumb |
| `show_caption` | checkbox | Show the caption on the photo | True |
| `thumb_labels` | checkbox | Label thumbnails with the alt text (product media) | True |
| `thumbs_aria` | text | Thumbnails label (screen readers) | Choose product image |
| `rating_label` | text | Reviews link label | Read the skin notes |
| `rating_link` | text | Reviews link | #pdp-reviews |
| `unit_tpl` | text | Unit price text (product) | [amount] per [unit] |
| `max_qty` | range | Most per order | 20 |
| `qty_label` | text | Quantity label (screen readers) | Quantity |
| `less_aria` | text | Minus button label | Decrease quantity |
| `more_aria` | text | Plus button label | Increase quantity |
| `add_label` | text | Add button | Add to bag, [amount] |
| `sold_out` | text | Sold out text | Sold out |
| `qty_note` | text | Note for more than one | [n] bottles, [amount] total. |
| `mobile_bar` | checkbox | Sticky add bar on phones | True |
| `mobile_add` | text | Sticky bar button | Add to bag |
| `jump_aria` | text | Jump links label (screen readers) | Product details |
| `name` | text | Name | Calm wash |
| `size` | text | Size | 400 ml |
| `price` | text | Price in cents | 1800 |
| `compare` | text | Compare-at price in cents |  |
| `labels` | text | Labels | best,ff |
| `line` | textarea | Short line | A soft, everyday body wash for dry, tight skin. Colloidal oa |
| `ing` | textarea | Ingredients | Water, glycerin, coco-glucoside, decyl glucoside, colloidal  |
| `unit_text` | text | Unit price | $4.50 per 100 ml |
| `option_legend` | text | Option name | Size |
| `option_label` | text | Option value | 400 ml bottle |
| `option2_label` | text | Second option value | 1 L refill |
| `option2_price` | text | Second option price in cents | 3600 |
| `option2_unit` | text | Second option unit price | $3.60 per 100 ml |
| `option2_available` | checkbox | Second option in stock | False |
