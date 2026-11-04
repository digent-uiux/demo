# Dispensary slips

Dispensary slips section from the Balm 2 theme.

- Category: contact
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/contact--contact-38.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Dispensary slips" (id `contact-38`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/contact--contact-38.html; Shopify bundle: sections/balm-2/contact-38/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-contact-38.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/sections/blko-contact-38.liquid
   - `snippets/blko-contact-38-slip.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/snippets/blko-contact-38-slip.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/assets/blko-balm-motion.js
   - `assets/blko-contact-38.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/assets/blko-contact-38.css
   - `assets/blko-contact-38.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/assets/blko-contact-38.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/assets/blko-f-karla.woff2
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-38/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-contact-38.liquid`
- `snippets/blko-contact-38-slip.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-balm-motion.css`
- `assets/blko-balm-motion.js`
- `assets/blko-contact-38.css`
- `assets/blko-contact-38.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Still have a question |
| `eyebrow` | text | Label | Still unsure |
| `heading` | text | Heading | Take a slip to the |
| `heading_em` | text | Heading, italic word | counter |
| `text` | textarea | Text | Three ways to ask the people who make the balms. Pick the slip that suits the question; none of them reaches a bot. |
| `pad` | text | Pad name | The still-room · Dispensary |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 112 |
| `padding_bottom` | range | Bottom padding | 112 |

## Blocks

- `route`: Route

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-contact-38.css`, `blko-contact-38.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-contact-38-slip.liquid`, `blko-fonts-balm.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.contact_38.call_aria`, `blko.contact_38.closed`, `blko.contact_38.closed_weekdays`, `blko.contact_38.email_ph`, `blko.contact_38.err_body`, `blko.contact_38.err_email`, `blko.contact_38.no`, `blko.contact_38.open`, `blko.contact_38.received`, `blko.contact_38.received_text` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
