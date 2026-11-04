# Account, wardrobe

Account, wardrobe section from the Linen theme.

- Category: customer-account
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/customer-account--account-26.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Account, wardrobe" (id `account-26`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/customer-account--account-26.html; Shopify bundle: sections/linen/account-26/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-account-26.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/sections/blko-account-26.liquid
   - `snippets/blko-account-26-piece.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-account-26-piece.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-fonts-linen.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-icon.liquid
   - `snippets/blko-linen-account-summary.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-linen-account-summary.liquid
   - `snippets/blko-pagination.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-pagination.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-option.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-ui-option.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/snippets/blko-ui-section.liquid
   - `assets/blko-account-26.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/assets/blko-account-26.css
   - `assets/blko-account-26.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/assets/blko-account-26.js
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/assets/blko-ui-commerce.css
   - `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/assets/blko-ui-commerce.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/account-26/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-account-26.liquid`
- `snippets/blko-account-26-piece.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-icon.liquid`
- `snippets/blko-linen-account-summary.liquid`
- `snippets/blko-pagination.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-option.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-account-26.css`
- `assets/blko-account-26.js`
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
| `heading` | text | Heading | Pieces you |
| `heading_em` | text | Heading, italic end | live in |
| `text` | text | Text | Free repairs for life on everything you buy from us. Pick a piece to see its care and history. |
| `worn_label` | text | Worn count | worn [n]× |
| `bought_word` | text | Bought word | bought |
| `bought_line` | text | Bought, history line | Bought, |
| `sent_line` | text | Shipped, history line | Sent out |
| `care_label` | text | Care heading | Care |
| `care` | textarea | Default care | Wash cool, 30° Dry on the line, in shade Iron damp, medium No tumble dryer |
| `story_label` | text | History heading | Its story so far |
| `repair_heading` | text | Heading | Needs a repair? |
| `repairs` | text | Repairs | Hem, Mend a seam, Replace buttons, Darn a hole |
| `send_label` | text | Button label | Send it to our tailor |
| `success` | text | Sent message | Repair booked. A prepaid label is on its way. |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-2 |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

- `piece`: Demo piece

## Dependencies

- Assets: `blko-account-26.css`, `blko-account-26.js`, `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-ui-commerce.css`, `blko-ui-commerce.js`, `blko-ui-core.css`
- Snippets: `blko-account-26-piece.liquid`, `blko-fonts-linen.liquid`, `blko-icon.liquid`, `blko-linen-account-summary.liquid`, `blko-pagination.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-option.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.account_26.care`, `blko.account_26.history`, `blko.account_26.label`, `blko.account_26.repair`, `blko.account_26.repair_type`, `blko.general.next`, `blko.general.page`, `blko.general.pagination`, `blko.general.previous`, `blko.linen.account_details`, `blko.linen.addresses`, `blko.linen.log_in`, `blko.linen.log_out`, `blko.linen.no_orders`, `blko.linen.orders`, `blko.linen.shop_all` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
