# Journal letter

Animated modal on hero.

- Category: newsletter
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/newsletter--newsletter-09.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Journal letter" (id `newsletter-09`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/newsletter--newsletter-09.html; Shopify bundle: sections/linen/newsletter-09/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-newsletter-09.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/sections/blko-newsletter-09.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/snippets/blko-fonts-linen.liquid
   - `snippets/blko-linen-mixed.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/snippets/blko-linen-mixed.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/snippets/blko-ui-section.liquid
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-linen-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/assets/blko-linen-motion.css
   - `assets/blko-linen-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/assets/blko-linen-motion.js
   - `assets/blko-newsletter-09.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/assets/blko-newsletter-09.css
   - `assets/blko-newsletter-09.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/assets/blko-newsletter-09.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/assets/blko-ui-motion.js
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/newsletter-09/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Look

- Fonts: bundled EB Garamond + Albert Sans (OFL, latin subset), or any font from the Shopify library, or the theme's fonts.
- Colours, corners and type style: the Linen preset by default. **Read the theme's tokens** makes the section follow a Blocko
  theme's settings (`--color-bg`, `--color-text`, `--radius-card`, `--button-case`…); other themes keep the preset.
- Images: Shopify placeholders until you pick one. Pickers left blank show the design-system demo content.
- Padding: the top/bottom values are the desktop size; phones use 70%.

## Files

- `sections/blko-newsletter-09.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-linen-mixed.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-linen-motion.css`
- `assets/blko-linen-motion.js`
- `assets/blko-newsletter-09.css`
- `assets/blko-newsletter-09.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `kicker` | text | Kicker | The journal letter |
| `heading` | textarea | Heading | Notes to keep. |
| `text` | textarea | Text | A new way to wear an old favourite. A small repair worth learning. Occasional letters about living with natural cloth. |
| `caption` | text | Caption | From the journal / slow days, natural cloth |
| `placeholder` | text | Placeholder | Your email address |
| `button_label` | text | Button label | Send me the notes |
| `done_text` | text | Done text | Thank you for signing up. Please check your inbox. |
| `consent` | text | Consent | Occasional letters. Unsubscribe whenever you like. |
| `image` | image_picker | Hero photo |  |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-linen-motion.css`, `blko-linen-motion.js`, `blko-newsletter-09.css`, `blko-newsletter-09.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-linen.liquid`, `blko-linen-mixed.liquid`, `blko-ui-button.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.newsletter_09.close`, `blko.newsletter_09.label` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
