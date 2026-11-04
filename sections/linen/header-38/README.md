# Header, linen bar

Header, linen bar section from the Linen theme.

- Category: header
- Kind: section
- Theme: linen
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/linen/sections/header--header-38.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Header, linen bar" (id `header-38`, theme `linen`; live demo: https://demo.blocko.ai/html/linen/sections/header--header-38.html; Shopify bundle: sections/linen/header-38/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
`blko-ui-*` files are shared by every Blocko section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-header-38.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/sections/blko-header-38.liquid
   - `snippets/blko-fonts-linen.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/snippets/blko-fonts-linen.liquid
   - `snippets/blko-linen-localization.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/snippets/blko-linen-localization.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/snippets/blko-ui-icon.liquid
   - `assets/blko-f-albert-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/assets/blko-f-albert-sans-normal.woff2
   - `assets/blko-f-eb-garamond-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/assets/blko-f-eb-garamond-italic.woff2
   - `assets/blko-f-eb-garamond-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/assets/blko-f-eb-garamond-normal.woff2
   - `assets/blko-header-38.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/assets/blko-header-38.css
   - `assets/blko-header-38.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/assets/blko-header-38.js
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/assets/blko-ui-core.css
   The `.woff2` fonts are binary: upload them in Online Store > Themes > Edit code > assets > Add a new asset.
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/linen/header-38/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-header-38.liquid`
- `snippets/blko-fonts-linen.liquid`
- `snippets/blko-linen-localization.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-albert-sans-normal.woff2`
- `assets/blko-f-eb-garamond-italic.woff2`
- `assets/blko-f-eb-garamond-normal.woff2`
- `assets/blko-header-38.css`
- `assets/blko-header-38.js`
- `assets/blko-ui-core.css`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `brand` | text | Store name | Linnet |
| `tagline` | text | Tag next to the name | slow linen |
| `menu` | link_list | Menu |  |
| `notes_label` | text | Journal link label | Cloth notes |
| `notes_link` | url | Journal link |  |
| `search_placeholder` | text | Search placeholder | Search dresses, shirts, gauze |
| `cloth_heading` | text | Cloth chips heading | Shop by cloth |
| `cloth_hint` | text | Line before a pick | Pick a cloth to see what we make in it. |
| `note` | richtext | Note card | <p><em>Free hemming</em> on every pair of trousers. Tell us your inside leg at checkout.</p> |
| `ship_label` | text | Region picker label | Ship to |
| `regions` | textarea | Regions | Portugal · EUR United Kingdom · GBP United States · USD Australia · AUD |
| `font_source` | select | Fonts | bundled |
| `heading_font` | font_picker | Heading font | assistant_n4 |
| `body_font` | font_picker | Body font | assistant_n4 |
| `tokens` | select | Colors, corners, type style | preset |
| `color_scheme` | color_scheme | t:blko.linen.color_scheme | scheme-1 |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

## Blocks

- `cloth`: Cloth chip

## Dependencies

- Assets: `blko-f-albert-sans-normal.woff2`, `blko-f-eb-garamond-italic.woff2`, `blko-f-eb-garamond-normal.woff2`, `blko-header-38.css`, `blko-header-38.js`, `blko-ui-core.css`
- Snippets: `blko-fonts-linen.liquid`, `blko-linen-localization.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`
- Locale keys: `blko.header.account`, `blko.header.cart_count.one`, `blko.header.cart_count.other`, `blko.header_38.account`, `blko.header_38.bag.one`, `blko.header_38.bag.other`, `blko.header_38.close_menu`, `blko.header_38.home`, `blko.header_38.main`, `blko.header_38.menu`, `blko.header_38.open_menu`, `blko.header_38.pieces_in`, `blko.header_38.search`, `blko.header_38.search_store`, `blko.linen.country`, `blko.linen.language`, `blko.linen.localization_update`, `blko.linen.search_count`, `blko.linen.search_error`, `blko.linen.search_loading`, `blko.linen.search_suggestions` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
