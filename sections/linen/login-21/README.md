# Sign in, stitched card

Sign in, stitched card section from the Linen theme.

- Category: customer-account
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/customer-account--login-21.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Sign in, stitched card" (id `login-21`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/customer-account--login-21.html; Shopify bundle: sections/linen/login-21/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-login-21.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/sections/blko-login-21.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/snippets/blko-fonts-linen.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-field.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/snippets/blko-ui-field.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-input.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/snippets/blko-ui-input.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/snippets/blko-ui-section.liquid
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-login-21.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/assets/blko-login-21.css
   - `assets/blko-login-21.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/assets/blko-login-21.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/login-21/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-login-21.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-field.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-input.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-login-21.css`
- `assets/blko-login-21.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `heading` | text | Heading | Sign in |
| `text` | text | Text | Mend requests, your fabric notes and slow-made pieces waiting in your bag. |
| `email_label` | text | Email label | Email |
| `email_placeholder` | text | Email placeholder | you@example.com |
| `password_label` | text | Password label | Password |
| `button_label` | text | Button label | Sign in |
| `forgot_label` | text | Forgot link | Forgot password? |
| `register_text` | text | Sign-up line | New to the atelier? |
| `register_label` | text | Sign-up link | Make an account |
| `show_alts` | checkbox | Show other sign-ins | true |
| `alts_label` | text | Heading | Or continue with |
| `alt_1` | text | Button 1 | Phone |
| `alt_2` | text | Button 2 | Passkey |
| `alt_3` | text | Button 3 | Email link |
| `alt_status` | text | Status | We'll continue with your [method] on the next screen. |
| `recover_heading` | text | Heading | Reset your password |
| `recover_text` | text | Text | We'll email you a link to set a new one. |
| `recover_button` | text | Button label | Send the link |
| `recover_done` | text | Sent message | Check your inbox for the reset link. |
| `cancel_label` | text | Back link | Back to sign in |
| `texture` | image_picker | Background texture |  |
| `show_swatch` | checkbox | Show swatch tag | true |
| `swatch` | image_picker | Swatch photo |  |
| `swatch_caption` | text | Swatch caption | No. 12 · Flax |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-2 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-login-21.css`, `blko-login-21.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-ui-button.liquid`, `blko-ui-field.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-input.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.login_21.label`, `blko_ui.field.optional` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
