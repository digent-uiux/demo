# Apothecary sign-in

Apothecary sign-in section from the Balm 2 theme.

- Category: customer-account
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--login-01.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Apothecary sign-in" (id `login-01`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/customer-account--login-01.html; Shopify bundle: sections/balm-2/login-01/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-login-01.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/sections/blko-login-01.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-balm-motion.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-f-karla.woff2
   - `assets/blko-login-01.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-login-01.css
   - `assets/blko-login-01.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-login-01.js
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/login-01/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-login-01.liquid`
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
- `assets/blko-login-01.css`
- `assets/blko-login-01.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Sign in |
| `eyebrow` | text | Label | Members · Sign in |
| `heading` | text | Heading | Welcome |
| `heading_em` | text | Heading, italic word | back |
| `text` | textarea | Text | Your orders, saved formulas and refill dates, kept on one shelf. |
| `tag_label` | text | Tag label | Members' register |
| `placeholder` | text | Email placeholder | you@example.com |
| `member_heading` | text | Heading | New to the apothecary? |
| `reason_1` | text | Reason 1 | Refill reminders, timed to your bottle |
| `reason_2` | text | Reason 2 | First pour of every new batch |
| `reason_3` | text | Reason 3 | A sample of your choice each season |
| `register_label` | text | Link | Create an account |
| `image` | image_picker | Image |  |
| `caption` | text | Caption | Plate · Amber and linen |
| `caption_right` | text | Caption, right | Batch 0426 |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `padding_top` | range | Top padding | 112 |
| `padding_bottom` | range | Bottom padding | 112 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-login-01.css`, `blko-login-01.js`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.login_01.e_email`, `blko.login_01.e_email_bad`, `blko.login_01.e_password`, `blko.login_01.email`, `blko.login_01.forgot`, `blko.login_01.hide`, `blko.login_01.hide_aria`, `blko.login_01.password`, `blko.login_01.recover_back`, `blko.login_01.recover_h`, `blko.login_01.recover_send`, `blko.login_01.recover_sent`, `blko.login_01.recover_text`, `blko.login_01.sending`, `blko.login_01.show`, `blko.login_01.show_aria`, `blko.login_01.side_login`, `blko.login_01.side_recover`, `blko.login_01.sign_in`, `blko.login_01.signing` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
