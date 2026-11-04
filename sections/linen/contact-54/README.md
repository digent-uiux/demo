# Contact, shop banner

Contact, shop banner section from the Linen theme.

- Category: contact
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/contact--contact-54.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Contact, shop banner" (id `contact-54`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/contact--contact-54.html; Shopify bundle: sections/linen/contact-54/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-contact-54.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/sections/blko-contact-54.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/snippets/blko-fonts-linen.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/snippets/blko-ui-section.liquid
   - `assets/blko-contact-54.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/assets/blko-contact-54.css
   - `assets/blko-contact-54.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/assets/blko-contact-54.js
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-linen-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/assets/blko-linen-motion.css
   - `assets/blko-linen-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/assets/blko-linen-motion.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/contact-54/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-contact-54.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-contact-54.css`
- `assets/blko-contact-54.js`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-linen-motion.css`
- `assets/blko-linen-motion.js`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Index label | The fitting room / by appointment |
| `image` | image_picker | Photo |  |
| `heading` | text | Heading | Try it on at the shop, or ask us first |
| `address` | text | Address | 14 Weavers Row |
| `hours` | text | Hours | Fittings today 10:00–17:30 |
| `ask_label` | text | Ask button label | Ask about a size |
| `visit_label` | text | Visit button label | Visit |
| `visit_url` | url | Visit link |  |
| `piece_label` | text | Piece label | The piece |
| `piece_placeholder` | text | Piece placeholder | e.g. Wrap dress in clay |
| `piece_error` | text | Piece error | Name the piece, e.g. the wrap dress |
| `size_label` | text | Size label | Usual size |
| `sizes` | text | Sizes | XS, S, M, L, XL |
| `size_error` | text | Size error | Pick your usual size |
| `email_label` | text | Email label | Email |
| `email_placeholder` | text | Email placeholder | you@example.com |
| `email_error` | text | Email error | Add an email we can reply to |
| `send_label` | text | Send button label | Send |
| `close_label` | text | Close button label | Close the size question |
| `alert` | text | Error summary | Please fix the highlighted fields. |
| `success` | text | Thank-you message | Thank you. A stylist will reply about your piece within a working day. |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-4 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-contact-54.css`, `blko-contact-54.js`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-linen-motion.css`, `blko-linen-motion.js`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.contact_54.label` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
