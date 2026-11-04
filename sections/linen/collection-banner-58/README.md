# Blog opener, oval label

Blog opener, oval label section from the Linen theme.

- Category: collection-banner
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/collection-banner--collection-banner-58.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Blog opener, oval label" (id `collection-banner-58`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/collection-banner--collection-banner-58.html; Shopify bundle: sections/linen/collection-banner-58/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-collection-banner-58.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/sections/blko-collection-banner-58.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/snippets/blko-fonts-linen.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/snippets/blko-ui-section.liquid
   - `assets/blko-collection-banner-58.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/assets/blko-collection-banner-58.css
   - `assets/blko-collection-banner-58.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/assets/blko-collection-banner-58.js
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/collection-banner-58/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-collection-banner-58.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-collection-banner-58.css`
- `assets/blko-collection-banner-58.js`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `use_blog` | checkbox | Use the blog title and tags | true |
| `kicker` | text | Small line | No. 14 · The fabric notes |
| `heading` | text | Heading | Linen, worn slowly and kept for years |
| `text` | textarea | Text | How flax is grown, woven and washed, and how to wear it from the beach to a city dinner. |
| `est` | text | Est. line | Est. 2014 |
| `lot_word` | text | Topic line word | Lot |
| `all_label` | text | All topics label | All notes |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-4 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `topic`: Topic

## Dependencies

- Assets: `blko-collection-banner-58.css`, `blko-collection-banner-58.js`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.collection_banner_58.notes.one`, `blko.collection_banner_58.notes.other`, `blko.collection_banner_58.topics` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
