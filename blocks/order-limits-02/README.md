# Order limits 02 - Limited drop, two per customer by the button

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `order-limits-02` (look: the Seam preset,
as on the website demo). It runs in any theme: drop the files in, then add **Order limits 02 - Drop** in the Theme Editor.

## Files

- `sections/blko-order-limits-02.liquid`
- `assets/blko-order-limits-02.css`
- `assets/blko-order-limits-02.js`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-option.liquid`
- `snippets/blko-ui-app-cta.liquid`
- `snippets/blko-ui-quantity.liquid`
- `snippets/blko-ui-button.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-gilda-display.woff2`
- `assets/blko-f-manrope.woff2`
- `snippets/blko-fonts-seam.liquid`
- `assets/blko-seam-motion.css`
- `assets/blko-seam-motion.js`
- `locales/en.default.blko.json`

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Order limits 02 - Drop**.

## Install by editing theme code (Shopify Sidekick)

Ask Sidekick: "Create these files in my theme with exactly this content", then paste each file from the list above.
Sidekick can't upload binary files: upload the `.woff2` fonts in Online Store → Themes → Edit code → assets → Add a new asset,
or switch **Colors, fonts, corners** to the theme's tokens.

## Look and settings

- Colours, fonts (Gilda Display + Manrope, OFL, latin subset), corners and type style: the Seam preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `product` | product | Product |  |
| `image` | image_picker | Photo |  |
| `line` | text | Line above the title | Hand-loomed linen, 120 made |
| `title_suffix` | text | Second line after the title | in raw linen |
| `reason` | textarea | Reason, under the price | The cloth is loomed by hand, about thirty met… |
| `limit` | range | Limit without a rule | 2 |
| `rule` | text | Rule, one sentence | Limit [limit] per customer. |
| `rule_note` | text | After the rule | 120 made, no restock. |
| `at_limit` | text | Line at the limit | That's the limit: [limit] per customer. |
| `in_bag` | text | Line when some are in the bag | You have [bag] in your bag, so you can add [l… |
| `bag_full` | text | Line when the bag holds the limit | You already have [limit] in your bag, the mos… |
| `made` | number | Made in this run | 120 |
| `stock_text` | text | Stock line | [left] of [made] left. |
| `untracked_text` | text | Stock line, untracked | [made] made. |
| `qty_label` | text | Stepper name for screen readers | Quantity |
| `add_label` | text | Add button | Add [n] to bag, [total] |
| `added_label` | text | After adding | Added to bag |
| `sold_label` | text | Sold-out button | Sold out |
| `full_label` | text | Button when the bag holds the limit | Limit reached |
| `cart_label` | text | Bag link after adding | View bag |
| `add_error` | text | Add error | We couldn't add this. You may already have th… |
| `app_line` | text | Editor card line | Cap each customer across orders, not only per… |
| `preview_title` | text | Title | Tie-back top |
| `preview_price` | number | Price | 185 |
| `preview_left` | number | Left | 38 |
| `option_label` | text | Option name | Size |
| `preview_size` | text | Picked size | S |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

### Block `@app` (app blocks)

(none)

### Block `size` (Preview size)

| id | type | label | default |
|---|---|---|---|
| `title` | text | Size | M |
| `sold_out` | checkbox | Sold out | False |
