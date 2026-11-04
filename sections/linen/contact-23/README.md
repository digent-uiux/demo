# Contact, alterations

Contact, alterations section from the Linen theme.

- Category: contact
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/contact--contact-23.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Contact, alterations" (id `contact-23`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/contact--contact-23.html; Shopify bundle: sections/linen/contact-23/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-contact-23.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/sections/blko-contact-23.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/snippets/blko-fonts-linen.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-field.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/snippets/blko-ui-field.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-input.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/snippets/blko-ui-input.liquid
   - `snippets/blko-ui-option.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/snippets/blko-ui-option.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/snippets/blko-ui-section.liquid
   - `assets/blko-contact-23.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/assets/blko-contact-23.css
   - `assets/blko-contact-23.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/assets/blko-contact-23.js
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-23/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-contact-23.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-field.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-input.liquid`
- `snippets/blko-ui-option.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-contact-23.css`
- `assets/blko-contact-23.js`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `heading` | text | Heading | Make it fit, keep it longer |
| `note` | text | Note | Free on pieces bought here |
| `step_1` | text | Step 1 | 1 · The piece |
| `step_2` | text | Step 2 | 2 · The change |
| `step_3` | text | Step 3 | 3 · Measurements |
| `measure_hint` | text | Measuring hint | Measure flat, seam to seam. |
| `now_label` | text | Now label | Now |
| `want_label` | text | Wanted label | Wanted |
| `diff_label` | text | Difference label | Difference |
| `step_4` | text | Step 4 | 4 · Getting it to us |
| `method_a` | text | First option | Drop at the workshop |
| `method_a_note` | text | First option note | No booking needed |
| `method_b` | text | Second option | Post it in |
| `method_b_note` | text | Second option note | Prepaid label by email |
| `email_label` | text | Email label | Email for your ticket |
| `button_label` | text | Button label | Request alteration |
| `err_jobs` | text | Error: no change | Choose at least one change. |
| `err_want` | text | Error: length | Enter the length you want, in [unit]. |
| `err_email` | text | Error: email | Enter an email like you@example.com. |
| `done_kicker` | text | Small line | Request received |
| `done_heading` | text | Heading | We'll take it from here |
| `done_text` | textarea | Text | Bring it to the workshop, or watch your inbox for a prepaid postage label. Most pieces are back in 7 to 10 days. |
| `again_label` | text | Button label | Add another piece |
| `image` | image_picker | Photo |  |
| `shop_kicker` | text | Small line | The workshop |
| `shop_title` | text | Title | Two tailors, one long table |
| `address` | text | Address | Unit 4, Ropewalk Yard, 18 Harbour Road |
| `hours` | text | Hours | Wed – Sat, 10:00 – 17:00 |
| `prices` | textarea | Prices | Hems \| from $18 Waist \| from $26 Sleeves \| from $24 Mending \| from $12 |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-2 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `piece`: Piece

## Dependencies

- Assets: `blko-contact-23.css`, `blko-contact-23.js`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-ui-button.liquid`, `blko-ui-field.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-input.liquid`, `blko-ui-option.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.contact_23.label`, `blko.contact_23.unit`, `blko_ui.field.optional` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
