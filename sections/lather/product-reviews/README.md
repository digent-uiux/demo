# Lather product reviews

reviews Heading; average rating and count from the product's standard review metafields (reviews.rating, reviews.rating_count), with section settings as the fallback; skin-type chips with counts; revi

- Category: main-product
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/main-product--product-reviews.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather product reviews" (id `product-reviews`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/main-product--product-reviews.html; Shopify bundle: sections/lather/product-reviews/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-mark.png
   - `assets/blko-lv3-product-reviews.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-product-reviews.css
   - `assets/blko-lv3-product-reviews.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-product-reviews.js
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-product-reviews.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/sections/blko-lv3-product-reviews.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/product-reviews/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `heading_1` | inline_richtext | Heading, line 1 | The feel, in |
| `heading_2` | inline_richtext | Heading, line 2 | your <em>words.</em> |
| `show_summary` | checkbox | Show average rating | True |
| `rating_fallback` | text | Average rating (fallback) | 4.6 |
| `count_fallback` | number | Number of reviews (fallback) | 318 |
| `count_text` | text | Count text | [count] reviews of [product] |
| `product_fallback` | text | Product name (fallback) | Calm wash |
| `stars_aria` | text | Stars label (screen readers) | [n] out of 5 stars |
| `show_filter` | checkbox | Show filter | True |
| `filter_label` | text | Filter label | Skin type |
| `label_all` | text | All | All |
| `label_eczema` | text | Skin type 1 | Eczema-prone |
| `label_dry` | text | Skin type 2 | Very dry |
| `label_sensitive` | text | Skin type 3 | Sensitive |
| `label_little` | text | Skin type 4 | Little ones |
| `page_size` | range | Reviews shown before "Show more" | 5 |
| `more_label` | text | Show more label | Show more reviews |
| `shown_text` | text | Shown count | Showing [shown] of [total] |
| `show_write` | checkbox | Show "Write a review" | True |
| `write_label` | text | Button label | Write a review |
| `app_selector` | text | Reviews app write button (CSS selector) |  |
| `review_tag` | text | Contact form tag | review |
| `help_text` | text | Help text | Not sure it suits your skin? |
| `help_link_label` | text | Help link label | Ask us first |
| `help_link` | url | Help link |  |
| `anchor` | text | Anchor id | pdp-reviews |
