# Lather search overlay

html).

- Category: search-overlay
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/templates/home.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather search overlay" (id `search-overlay`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/templates/home.html; Shopify bundle: sections/lather/search-overlay/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-recent.js
   - `assets/blko-lv3-search-overlay.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-search-overlay.css
   - `assets/blko-lv3-search-overlay.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-search-overlay.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-search-overlay.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/sections/blko-lv3-search-overlay.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/snippets/blko-lv3-product-data.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-overlay/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `live` | checkbox | Use Shopify predictive search | True |
| `types` | select | Search page shows | product,article |
| `show_articles` | checkbox | Suggest journal articles | True |
| `limit` | range | Products shown | 4 |
| `dialog_label` | text | Overlay name (screen readers) | Search the shop |
| `input_label` | text | Field label (screen readers) | Search |
| `placeholder` | text | Placeholder | Search washes, lotions or ingredients |
| `close_label` | text | Close button (screen readers) | Close search |
| `popular_title` | text | Popular searches heading | Popular searches |
| `popular` | textarea | Popular searches (one per line) | Fragrance-free Oat Dry skin Body wash Lotion |
| `suggest_title` | text | Suggestions heading | Suggestions |
| `suggest` | textarea | Demo search suggestions (one per line) | oat oat bar fragrance-free body wash body lotion body milk d |
| `journal_title` | text | Journal heading | From the journal |
| `loved` | text | Heading before typing | Most loved |
| `results` | text | Heading while typing | Products |
| `loading` | text | Loading | Searching |
| `count_one` | text | Count, one ([count], [q]) | [count] product for “[q]” |
| `count_many` | text | Count, many ([count], [q]) | [count] products for “[q]” |
| `see_all` | text | See all link ([q]) | See all results for “[q]” |
| `empty` | text | No results ([q]) | No match for “[q]” yet. Try oat, fragrance-free or lotion. |
