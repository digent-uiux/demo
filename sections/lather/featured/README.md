# Lather featured

html).

- Category: featured-collection
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/featured-collection--featured.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather featured" (id `featured`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/featured-collection--featured.html; Shopify bundle: sections/lather/featured/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-base.css
   - `assets/blko-lv3-featured.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-featured.css
   - `assets/blko-lv3-featured.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-featured.js
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-featured.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/sections/blko-lv3-featured.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-featured-card.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/snippets/blko-lv3-featured-card.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/snippets/blko-lv3-product-data.liquid
   - `snippets/blko-lv3-wishlist-heart.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/featured/snippets/blko-lv3-wishlist-heart.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `heading` | inline_richtext | Heading | Our <em>favourites.</em> |
| `sub` | text | Text | Fragrance-free unless the label says otherwise. |
| `anchor` | text | Anchor id | shop |
| `t_image` | image_picker | Photo |  |
| `t_kicker` | text | Small line | New here? |
| `t_title` | text | Title | Start with the Oat bar, $9 |
| `t_text` | textarea | Text | Oat milk soap for face and body. A rich lather that rinses s |
| `t_button` | text | Button (adds the product) | Add the Oat bar, $9 |
| `t_product` | product | Tile product |  |
| `t_key` | text | Demo key | bar |
| `t_name` | text | Demo name | Oat bar |
| `t_size` | text | Size | 120 g |
| `t_price` | text | Demo price in cents | 900 |
| `t_line` | text | Short line | Oat milk soap bar for face and body. Rich lather that rinses |
| `t_labels` | text | Labels | best,ff |
| `t_ing` | textarea | Ingredients | Sodium olivate, sodium cocoate, oat milk, colloidal oat, she |
| `t_pimage` | image_picker | Demo product image |  |
| `qv_label` | text | Quick view button | Quick view |
| `add_label` | text | Add button | Add |
| `wish_aria` | text | Wishlist heart (screen readers) | Save [name] |
| `tabs_label` | text | Tabs label (screen readers) | Product type |
| `rail_label` | text | Rail label (screen readers) | Products |
| `label_best` | text | best | Best seller |
| `label_ff` | text | ff | Fragrance-free |
| `label_new` | text | new | New |
| `label_sale` | text | sale | Sale |
