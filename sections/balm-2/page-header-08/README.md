# Contact header, rail

Contact header, rail section from the Balm 2 theme.

- Category: page-header
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/page-header--page-header-08.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Contact header, rail" (id `page-header-08`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/page-header--page-header-08.html; Shopify bundle: sections/balm-2/page-header-08/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-page-header-08.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/sections/blko-page-header-08.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/assets/blko-balm-motion.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/assets/blko-f-karla.woff2
   - `assets/blko-page-header-08.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/assets/blko-page-header-08.css
   - `assets/blko-page-header-08.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/assets/blko-page-header-08.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/page-header-08/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-page-header-08.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-balm-motion.css`
- `assets/blko-balm-motion.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-page-header-08.css`
- `assets/blko-page-header-08.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Page header: Write to us |
| `show_crumbs` | checkbox | Show breadcrumb | true |
| `crumb` | text | Current page in breadcrumb | Contact |
| `heading` | text | Heading | Write to the |
| `heading_em` | text | Heading, italic word | apothecary |
| `text` | textarea | Text | A formula, a reaction, an order gone astray: every message goes to the people who mix the jars, and one of them answers by name. |
| `studio_key` | text | Studio label | Studio |
| `studio` | textarea | Studio address | 18 Mill Lane Hudson, New York |
| `hours_key` | text | Hours label | Bench hours |
| `hours` | text | Hours | Mon–Sat · 9:00–17:00 |
| `timezone` | text | Time zone (IANA) | America/New_York |
| `place` | text | Place name | Hudson |
| `open_days` | text | Open days | Mon,Tue,Wed,Thu,Fri,Sat |
| `open_hour` | range | Opens at (hour) | 9 |
| `close_hour` | range | Closes at (hour) | 17 |
| `email_key` | text | Email label | Email |
| `email` | text | Email | studio@balm.example |
| `phone_key` | text | Phone label | Orders line |
| `phone` | text | Phone | +1 518 555 0142 |
| `surface` | select | Colour | alt |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-9 |
| `padding_top` | range | Top padding | 96 |
| `padding_bottom` | range | Bottom padding | 80 |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-page-header-08.css`, `blko-page-header-08.js`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.page_header_08.breadcrumb`, `blko.page_header_08.closed`, `blko.page_header_08.home`, `blko.page_header_08.open_now`, `blko.page_header_08.today`, `blko.page_header_08.tomorrow` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
