# t:blko.cart_drawer.schema.name

t:blko.cart_drawer.schema.name section from the Balm 2 theme.

- Category: cart-drawer
- Kind: section
- Shopify target: ok
- HTML target: gap: no HTML demo for this Liquid section
- Live demo: none

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "t:blko.cart_drawer.schema.name" (id `cart-drawer`, theme `balm-2`; Shopify bundle: sections/balm-2/cart-drawer/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-cart-drawer.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/cart-drawer/sections/blko-cart-drawer.liquid
   - `snippets/blko-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/cart-drawer/snippets/blko-icon.liquid
   - `assets/blko-cart-drawer.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/cart-drawer/assets/blko-cart-drawer.css
   - `assets/blko-cart-drawer.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/cart-drawer/assets/blko-cart-drawer.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/cart-drawer/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-cart-drawer.liquid`
- `snippets/blko-icon.liquid`
- `assets/blko-cart-drawer.css`
- `assets/blko-cart-drawer.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `color_scheme` | color_scheme | Color scheme | scheme-1 |
| `enabled` | checkbox | t:blko.cart_drawer.schema.enabled | true |
| `heading` | text | t:blko.cart_drawer.schema.heading | Your bag |
| `free_over` | number | t:blko.cart_drawer.schema.free_over | 75 |
| `empty_heading` | text | t:blko.cart_drawer.schema.empty_heading | The bag is empty for now. |
| `empty_text` | text | t:blko.cart_drawer.schema.empty_text | Every formula is poured in small batches. Take your time. |
| `empty_link` | url | t:blko.cart_drawer.schema.empty_link |  |

## Blocks

_No blocks._

## Dependencies

- Assets: `blko-cart-drawer.css`, `blko-cart-drawer.js`
- Snippets: `blko-icon.liquid`
- Locale keys: `blko.cart_drawer.checkout`, `blko.cart_drawer.close`, `blko.cart_drawer.continue`, `blko.cart_drawer.count`, `blko.cart_drawer.decrease`, `blko.cart_drawer.free_done`, `blko.cart_drawer.free_from`, `blko.cart_drawer.free_left`, `blko.cart_drawer.increase`, `blko.cart_drawer.items`, `blko.cart_drawer.quantity_for`, `blko.cart_drawer.remove`, `blko.cart_drawer.shipping_progress`, `blko.cart_drawer.subtotal`, `blko.cart_drawer.taxes_excluded`, `blko.cart_drawer.taxes_included`, `blko.cart_drawer.total`, `blko.cart_drawer.view` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
