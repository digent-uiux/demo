# Lather catalogue

html): filter sidebar, count and sort, product grid with quick view and quick add, an editorial tile, empty state, pagination and a closing line.

- Category: main-collection-product-grid
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/main-collection-product-grid--collection-catalogue.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather catalogue" (id `collection-catalogue`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/main-collection-product-grid--collection-catalogue.html; Shopify bundle: sections/lather/collection-catalogue/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-base.css
   - `assets/blko-lv3-collection-catalogue.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-collection-catalogue.css
   - `assets/blko-lv3-collection-catalogue.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-collection-catalogue.js
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-collection-catalogue.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/sections/blko-lv3-collection-catalogue.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-collection-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/snippets/blko-lv3-collection-card.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/snippets/blko-lv3-product-data.liquid
   - `snippets/blko-lv3-wishlist-heart.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/collection-catalogue/snippets/blko-lv3-wishlist-heart.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `label` | text | Section label (screen readers) | Shop all products |
| `per_page` | range | Products per page | 24 |
| `filter_title` | text | Filter title | Filter products |
| `reset_label` | text | Clear button | Clear filters |
| `price_from` | text | Price filter, from | From |
| `price_to` | text | Price filter, to | To |
| `active_label` | text | Active filters label (screen readers) | Active filters |
| `remove_label` | text | Remove filter label (screen readers) | Remove filter: |
| `count_one` | text | Count, one product | [count] product |
| `count_other` | text | Count, several products | [count] products |
| `sort_label` | text | Sort label | Sort by |
| `sort_aria` | text | Sort label (screen readers) | Sort products |
| `sort_featured` | text | Featured | Featured |
| `sort_price_low` | text | Price, low to high | Price, low to high |
| `sort_price_high` | text | Price, high to low | Price, high to low |
| `sort_name` | text | Name, A to Z | Name, A to Z |
| `qv_label` | text | Quick view | Quick view |
| `add_label` | text | Add button | Add to bag |
| `add_aria` | text | Add button (screen readers) | Add [name] to bag |
| `sold_label` | text | Sold out button | Sold out |
| `wish_aria` | text | Wishlist heart (screen readers) | Save [name] |
| `label_best` | text | Label best | Best seller |
| `label_new` | text | Label new | New |
| `label_sale` | text | Label sale | Sale |
| `empty_heading` | inline_richtext | Heading | A little too <em>specific?</em> |
| `empty_text` | textarea | Text | No products match these filters together. Try removing one,  |
| `empty_button` | text | Button | Show all products |
| `pages_label` | text | Pagination label (screen readers) | Pages |
| `prev_label` | text | Previous | Previous |
| `next_label` | text | Next | Next |
| `footer_text` | text | Closing line | All [count] products. No endless scroll. |
| `footer_link_label` | text | Link text | Ask about your skin |
| `footer_link` | url | Link |  |
| `footer_after` | text | After the link | if you need a hand. |
