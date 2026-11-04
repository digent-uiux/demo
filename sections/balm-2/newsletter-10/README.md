# Newsletter, Sunday post

Newsletter, Sunday post section from the Balm 2 theme.

- Category: newsletter
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/newsletter--newsletter-10.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Newsletter, Sunday post" (id `newsletter-10`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/newsletter--newsletter-10.html; Shopify bundle: sections/balm-2/newsletter-10/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-newsletter-10.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/sections/blko-newsletter-10.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/assets/blko-balm-motion.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/assets/blko-f-karla.woff2
   - `assets/blko-newsletter-10.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/assets/blko-newsletter-10.css
   - `assets/blko-newsletter-10.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/assets/blko-newsletter-10.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/newsletter-10/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-newsletter-10.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-balm-motion.css`
- `assets/blko-balm-motion.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-newsletter-10.css`
- `assets/blko-newsletter-10.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `image` | image_picker | Image |  |
| `caption` | text | Caption | The Sunday bath |
| `caption_right` | text | Caption (right) | Amber glass, stone |
| `sender` | text | Sender | From the still-room |
| `sender_line` | text | Sender, second line | Workshop 4, Mill Lane |
| `issue` | text | Stamp number | 42 |
| `postmark` | text | Postmark line | Every other Sunday |
| `heading` | inline_richtext | Heading | Calm skin, <em>every other Sunday</em> |
| `text` | textarea | Text | New formulas, small batches and the routines that work, in one short letter. No sales in between. |
| `placeholder` | text | Placeholder | Your email address |
| `button` | text | Button | Subscribe |
| `consent` | richtext | Consent line | <p>By subscribing you agree to receive the letter and to our <a href="/policies/privacy-policy">privacy policy</a>. Unsubscribe any time.</p> |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-8 |
| `padding_top` | range | Top padding | 128 |
| `padding_bottom` | range | Bottom padding | 128 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-newsletter-10.css`, `blko-newsletter-10.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.newsletter_10.email`, `blko.newsletter_10.label`, `blko.newsletter_10.letter`, `blko.newsletter_10.posted`, `blko.newsletter_10.thanks`, `blko.newsletter_10.to` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
