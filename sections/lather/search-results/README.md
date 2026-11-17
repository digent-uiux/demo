# Lather search results

html).

- Category: main-search
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/main-search--search-results.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather search results" (id `search-results`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/main-search--search-results.html; Shopify bundle: sections/lather/search-results/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-recent.js
   - `assets/blko-lv3-search-results.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-search-results.css
   - `assets/blko-lv3-search-results.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-search-results.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-search-results.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/sections/blko-lv3-search-results.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-card-meta.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/snippets/blko-lv3-card-meta.liquid
   - `snippets/blko-lv3-product-data.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/snippets/blko-lv3-product-data.liquid
   - `snippets/blko-lv3-search-item.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/snippets/blko-lv3-search-item.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/search-results/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `per_page` | range | Results per page | 24 |
| `collection` | collection | Products to list |  |
| `browse_limit` | range | Products to show | 12 |
| `heading_all` | text | Heading | The whole short list |
| `count_one` | text | Count, one product | [count] product |
| `count_other` | text | Count, several products | [count] products |
| `heading_results` | text | Heading | Results for “[terms]” |
| `res_one` | text | Count, one result | [count] result |
| `res_other` | text | Count, several results | [count] results |
| `pages_label` | text | Pagination label (screen readers) | Pages |
| `prev_label` | text | Previous | Previous |
| `next_label` | text | Next | Next |
| `add_label` | text | Add button | Add to bag |
| `add_aria` | text | Add button (screen readers) | Add [name] to bag |
| `sold_label` | text | Sold out button | Sold out |
| `read_label` | text | Article and page button | Read |
| `view_aria` | text | Photo link (screen readers) | View |
| `qv_aria` | text | Quick view link (screen readers) | Quick view |
| `empty_heading` | inline_richtext | Heading | Let's try something <em>simpler.</em> |
| `empty_text` | textarea | Text | We couldn't find a match. Try a product name, “oat” or “frag |
| `empty_button` | text | First button (clears the search) | Show all products |
| `empty_link_label` | text | Second button | Shop the line |
| `empty_link` | url | Second button link |  |
| `help_title` | text | Title | Not sure what your skin needs? |
| `help_text` | text | Text | Start with the differences between our washes, or ask us a q |
| `help_button` | text | Button | A little help |
| `help_link` | url | Button link |  |
| `help_aria` | text | Help box label (screen readers) | Help choosing |
| `noscript` | inline_richtext | Note without JavaScript (preview list only) | The full product list is shown above. Search needs JavaScrip |
