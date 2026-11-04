# Footer 16 - Back label

Footer 16 - Back label section from the Balm 2 theme.

- Category: footer
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/footer--footer-16.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Footer 16 - Back label" (id `footer-16`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/footer--footer-16.html; Shopify bundle: sections/balm-2/footer-16/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-footer-16.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/sections/blko-footer-16.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-payment-marks.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/snippets/blko-ui-payment-marks.liquid
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/assets/blko-f-karla.woff2
   - `assets/blko-footer-16.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/assets/blko-footer-16.css
   - `assets/blko-footer-16.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/assets/blko-footer-16.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/footer-16/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-footer-16.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-payment-marks.liquid`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-footer-16.css`
- `assets/blko-footer-16.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `spine_text` | text | Spine text (desktop) | Balm & Co · Back label |
| `directions_label` | text | Label | Directions |
| `heading` | inline_richtext | Heading | Letters from the <em>bench</em>, twice a month. |
| `newsletter` | checkbox | Show the newsletter | true |
| `newsletter_home` | checkbox | Also show it on the home page | false |
| `text` | text | Newsletter line | What is steeping, what is back in stock, and one slow ritual. Nothing more. |
| `thanks` | text | Thank-you line | Thank you. The next letter goes out on Sunday. |
| `statement` | text | Statement (where the newsletter is off) | Organic skincare, pressed and poured in small batches at our workshop. |
| `contents_label` | text | Label | Contents |
| `pao_months` | range | Months after opening | 12 |
| `pao_text` | text | Line beside the open-jar mark | Use within 12 months of opening. Keep cool and out of the sun. |
| `show_barcode` | checkbox | Show the barcode | true |
| `lot_code` | text | Lot code | L-1102 |
| `pour_date` | text | Pour date | 02.11.26 |
| `social` | checkbox | Show social links | true |
| `localization` | checkbox | Show the country/language selector | true |
| `copyright` | text | Copyright (blank = store name) | Balm & Co |
| `policy_menu` | link_list | Policies menu |  |
| `policy_demo` | text | Demo policies (while there are none) | Privacy, Terms, Shipping, Refunds |
| `payment` | checkbox | Show payment marks | true |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 40 |

## Blocks

- `menu`: Menu

## Dependencies

- Assets: `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-footer-16.css`, `blko-footer-16.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-payment-marks.liquid`
- Locale keys: `blko.footer_16.country`, `blko.footer_16.done`, `blko.footer_16.email`, `blko.footer_16.error`, `blko.footer_16.facebook`, `blko.footer_16.follow`, `blko.footer_16.footer`, `blko.footer_16.instagram`, `blko.footer_16.language`, `blko.footer_16.lists`, `blko.footer_16.lot`, `blko.footer_16.pao`, `blko.footer_16.pinterest`, `blko.footer_16.poured`, `blko.footer_16.subscribe`, `blko.footer_16.tiktok`, `blko.footer_16.update`, `blko.footer_16.write`, `blko.footer_16.x`, `blko.footer_16.youtube` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
