# Bundle 14 - Travel pouch

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `bundle-14` (look: the Isle preset,
as on the website demo). It runs in any theme: drop the files in, then add **Travel pouch** in the Theme Editor.

## Files

- `sections/blko-bundle-14.liquid`
- `assets/blko-bundle-14.css`
- `assets/blko-bundle-14.js`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-section.liquid`
- `snippets/blko-ui-money.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-young-serif.woff2`
- `assets/blko-f-jost.woff2`
- `snippets/blko-fonts-isle.liquid`
- `assets/blko-isle-motion.css`
- `assets/blko-isle-motion.js`
- `locales/en.default.blko.json`

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Travel pouch**.

## Install by editing theme code (Shopify Sidekick)

Ask Sidekick: "Create these files in my theme with exactly this content", then paste each file from the list above.
Sidekick can't upload binary files: upload the `.woff2` fonts in Online Store → Themes → Edit code → assets → Add a new asset,
or switch **Colors, fonts, corners** to the theme's tokens.

## Look and settings

- Colours, fonts (Young Serif + Jost, OFL, latin subset), corners and type style: the Isle preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `label` | text | Label | Build a travel kit |
| `title` | inline_richtext | Title | Four minis, one clear <em>pouch</em> |
| `lead` | text | Lead | The pouch holds 100 ml of liquids in all. |
| `take` | text | Take | Take |
| `out` | text | Out | out |
| `in_pouch` | text | In pouch | In the pouch |
| `liquids` | text | Liquids | Liquids |
| `meter_label` | text | Meter label | Liquids in the pouch |
| `pick` | text | Pick | Pick [amount] more |
| `complete` | text | Complete | Kit complete |
| `of` | text | Of | of |
| `four` | text | Four | Pouch has four |
| `over` | text | Over | Over by [amount] ml |
| `fill` | text | Fill | Fill the pouch |
| `add` | text | Add | Add the kit |
| `added` | text | Added | Kit added |
| `save` | text | Save | Save |
| `error` | text | Error | The kit could not be added. Try again. |
| `discount_pct` | range | Full kit, % off | 20 |
| `sold` | text | Sold out label | Sold out |
| `variant_aria` | text | Variant menu (screen readers) | Choose a variant of [name] |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `@app` (app blocks)

(none)

### Block `mini` (Mini)

| id | type | label | default |
|---|---|---|---|
| `title` | text | Title | Mini |
| `ml` | number | Ml | 15 |
| `price` | number | Price | 10 |
| `selected` | checkbox | Selected | False |
| `product` | product | Product |  |
| `image` | image_picker | Photo |  |
