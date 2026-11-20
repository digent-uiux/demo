# Before after 13 - Two faces, benefit list

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `before-after-13` (look: the Veil preset,
as on the website demo). It runs in any theme: drop the files in, then add **Before after 13 - Pair** in the Theme Editor.

## Files

- `sections/blko-before-after-13.liquid`
- `assets/blko-before-after-13.css`
- `assets/blko-before-after-13.js`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-button.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-marcellus.woff2`
- `assets/blko-f-mulish.woff2`
- `snippets/blko-fonts-veil.liquid`
- `assets/blko-veil-motion.css`
- `assets/blko-veil-motion.js`
- `locales/en.default.blko.json`

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Before after 13 - Pair**.

## Install by editing theme code (Shopify Sidekick)

Ask Sidekick: "Create these files in my theme with exactly this content", then paste each file from the list above.
Sidekick can't upload binary files: upload the `.woff2` fonts in Online Store → Themes → Edit code → assets → Add a new asset,
or switch **Colors, fonts, corners** to the theme's tokens.

## Look and settings

- Colours, fonts (Marcellus + Mulish, OFL, latin subset), corners and type style: the Veil preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `heading` | text | Heading | One sheer layer, still your skin |
| `before_image` | image_picker | Before photo |  |
| `before_label` | text | Before label | Before |
| `after_image` | image_picker | After photo |  |
| `after_label` | text | After label | After |
| `after_shade_text` | text | Under the after label | Wearing [shade] |
| `product` | product | Product |  |
| `shade` | text | Shade worn | Light 2 |
| `in_word` | text | Between name and shade | in |
| `add_label` | text | Button | Add to bag |
| `adding_label` | text | Button while adding | Adding |
| `added_label` | text | Button after adding | Added |
| `sold_label` | text | Button, sold out | Sold out |
| `sold_text` | text | Sold-out line | [shade] is sold out right now. |
| `in_bag_text` | text | Line after adding | [shade] is in your bag. |
| `view_label` | text | Bag link | View bag |
| `error_text` | text | Add error | We couldn't add it. Please try again. |
| `shop_label` | text | Product link | Shop this shade |
| `nomatch_note` | text | Editor note, shade not found | No variant is called [shade]: Add uses the fi… |
| `preview_title` | text | Name | Sheer Skin Tint SPF 30 |
| `preview_price` | number | Price | 46 |
| `preview_url` | url | Link |  |
| `preview_sold` | checkbox | Preview as sold out | False |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `line` (Benefit line)

| id | type | label | default |
|---|---|---|---|
| `text` | text | Line | Evens tone |
