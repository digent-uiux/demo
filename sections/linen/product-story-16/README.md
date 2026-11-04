# Mill story, sample card

Mill story, sample card section from the Linen theme.

- Category: image-with-text
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/image-with-text--product-story-16.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Mill story, sample card" (id `product-story-16`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/image-with-text--product-story-16.html; Shopify bundle: sections/linen/product-story-16/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-product-story-16.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/sections/blko-product-story-16.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/snippets/blko-fonts-linen.liquid
   - `snippets/blko-ui-arrow-link.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/snippets/blko-ui-arrow-link.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-media.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/snippets/blko-ui-media.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/snippets/blko-ui-section.liquid
   - `snippets/blko-ui-tabs.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/snippets/blko-ui-tabs.liquid
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-product-story-16.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/assets/blko-product-story-16.css
   - `assets/blko-product-story-16.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/assets/blko-product-story-16.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/product-story-16/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-product-story-16.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-ui-arrow-link.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-media.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-tabs.liquid`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-product-story-16.css`
- `assets/blko-product-story-16.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Main photo |  |
| `image_2` | image_picker | Close-up photo |  |
| `tag_title` | text | Photo tag | Loom room |
| `tag_text` | text | Photo tag line | Six shuttle looms, since 1962 |
| `heading` | text | Heading | Woven slowly, <em>by the river</em> |
| `text` | richtext | Text | <p>Our cloth comes from one family mill two hours inland. The flax is retted in the field, spun nearby and woven on old shuttle looms that run at half the speed of new ones. Slower looms leave a softer, tighter edge and a cloth that gets better with every wash.</p><p>We buy whole bolts each spring and cut only what you order, so nothing sits in a warehouse.</p> |
| `card_label` | text | Card label | Sample No. 14 · Washed linen |
| `card_title` | text | Card title | The cloth, in numbers |
| `unit_a` | text | First unit tab | Metric |
| `unit_b` | text | Second unit tab | Imperial |
| `pieces_label` | text | Pieces label | This bolt became |
| `link_label` | text | Link label | Shop washed linen |
| `link` | url | Link | /collections/all |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-1 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `number`: Cloth number
- `piece`: Piece

## Dependencies

- Assets: `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-product-story-16.css`, `blko-product-story-16.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-ui-arrow-link.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-media.liquid`, `blko-ui-section.liquid`, `blko-ui-tabs.liquid`
- Locale keys: `blko.product_story_16.card`, `blko.product_story_16.units` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
