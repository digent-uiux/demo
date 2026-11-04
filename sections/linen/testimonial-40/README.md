# Reviews, face cards

Reviews, face cards section from the Linen theme.

- Category: testimonials
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/testimonials--testimonial-40.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Reviews, face cards" (id `testimonial-40`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/testimonials--testimonial-40.html; Shopify bundle: sections/linen/testimonial-40/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-testimonial-40.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/sections/blko-testimonial-40.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/snippets/blko-fonts-linen.liquid
   - `snippets/blko-testimonial-40-stars.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/snippets/blko-testimonial-40-stars.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/snippets/blko-ui-section.liquid
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-linen-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/assets/blko-linen-motion.css
   - `assets/blko-linen-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/assets/blko-linen-motion.js
   - `assets/blko-testimonial-40.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/assets/blko-testimonial-40.css
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/testimonial-40/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-testimonial-40.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-testimonial-40-stars.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-linen-motion.css`
- `assets/blko-linen-motion.js`
- `assets/blko-testimonial-40.css`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `index_label` | text | Note index label | Field note |
| `heading` | text | Heading | Worn all summer |
| `text` | text | Text | Notes from people who wear our linen every day. |
| `button_label` | text | Button label | Read all reviews |
| `button_link` | url | Button link |  |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-2 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `note`: Review

## Dependencies

- Assets: `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-linen-motion.css`, `blko-linen-motion.js`, `blko-testimonial-40.css`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-testimonial-40-stars.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.testimonial_40.stars` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
