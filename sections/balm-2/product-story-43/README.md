# Founder's letter

Founder's letter section from the Balm 2 theme.

- Category: image-with-text
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/image-with-text--product-story-43.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Founder's letter" (id `product-story-43`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/image-with-text--product-story-43.html; Shopify bundle: sections/balm-2/product-story-43/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-product-story-43.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/sections/blko-product-story-43.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-arrow-link.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/snippets/blko-ui-arrow-link.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/assets/blko-balm-motion.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/assets/blko-f-karla.woff2
   - `assets/blko-product-story-43.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/assets/blko-product-story-43.css
   - `assets/blko-product-story-43.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/assets/blko-product-story-43.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/product-story-43/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-product-story-43.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-arrow-link.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-balm-motion.css`
- `assets/blko-balm-motion.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-product-story-43.css`
- `assets/blko-product-story-43.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | A letter from our founder |
| `from` | text | Date line, left | From the garden room |
| `date` | text | Date line, right | Spring, 2026 |
| `heading` | text | Subject | Why we still grow our own calendula. |
| `greeting` | text | Greeting | Dear reader, |
| `letter` | richtext | Letter | <p>Twelve years ago I had eczema on both hands and a cupboard of creams that stung. I started infusing calendula petals in sunflower oil on my kitchen table, because it was the one thing my grandmother swore by. It worked well enough that friends began to ask for jars.</p><p>We are fourteen people now, with a small lab and a half-acre walled garden. From June to September we pick the calendula every third morning, when the heads are fully open, and steep them for six weeks before a single gram goes into a formula.</p> |
| `letter_more` | richtext | Rest of the letter | <p>It would be cheaper to buy the extract. We tried it once, side by side, and the bought oil was paler and smelled of nothing. So the garden stays, and so does the rule that every batch, never more than 400 jars, is dated by hand and tested on our own skin first.</p><p>Thank you for reading this far, and for trusting a slow way of making things. If anything we make does not suit you, write to me. The letters still come to my desk.</p> |
| `closing` | text | Closing | With care, |
| `signature` | image_picker | Signature image |  |
| `signer` | text | Name | Margot |
| `signer_role` | text | Role | Founder and head formulator |
| `ps` | textarea | P.S. | The calendula balm from this summer's harvest is batch 26-07. It's the one I keep by the sink. |
| `link_label` | text | Link | Shop the garden balms |
| `link` | url | Link URL |  |
| `enclosed` | text | Enclosures label | Enclosed |
| `surface` | select | Colour | alt |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 128 |
| `padding_bottom` | range | Bottom padding | 128 |

## Blocks

- `enclosure`: Enclosure

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-product-story-43.css`, `blko-product-story-43.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-arrow-link.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.product_story_43.enc`, `blko.product_story_43.fold`, `blko.product_story_43.ps`, `blko.product_story_43.read`, `blko.product_story_43.signature` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
