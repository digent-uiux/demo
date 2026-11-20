# Bundle 17 - Shower set builder

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `bundle-17` (look: the Lather preset,
as on the website demo). It runs in any theme: drop the files in, then add **Shower set builder** in the Theme Editor.

## Files

- `sections/blko-bundle-17.liquid`
- `assets/blko-bundle-17.css`
- `assets/blko-bundle-17.js`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-f-urbanist.woff2`
- `assets/blko-f-yeseva-one.woff2`
- `assets/blko-f-antonio-600.woff2`
- `snippets/blko-fonts-lather.liquid`
- `assets/blko-lather-motion.css`
- `assets/blko-lather-motion.js`
- `locales/en.default.blko.json`

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Shower set builder**.

## Install by editing theme code (Shopify Sidekick)

Ask Sidekick: "Create these files in my theme with exactly this content", then paste each file from the list above.
Sidekick can't upload binary files: upload the `.woff2` fonts in Online Store → Themes → Edit code → assets → Add a new asset,
or switch **Colors, fonts, corners** to the theme's tokens.

## Look and settings

- Colours, fonts (Urbanist + Yeseva One + Antonio, OFL, latin subset), corners and type style: the Lather preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `heading_1` | inline_richtext | Heading, line 1 | Build your <em>shower</em> |
| `heading_2` | inline_richtext | Heading, line 2 | set. |
| `tiers_text` | text | Intro | Take a full set for 15% off, or mix any two o… |
| `anchor` | text | Anchor id | bundle |
| `tier_2` | range | 2 items, % off | 5 |
| `tier_3` | range | 3 items, % off | 10 |
| `tier_4` | range | 4 or more items, % off | 15 |
| `set_pct` | range | Complete set, % off | 15 |
| `panel_title` | text | Panel title | Your set |
| `slots_label` | text | Slots label (screen readers) | Items in your set |
| `stops_label` | text | Tiers label (screen readers) | Discount tiers |
| `stop_label` | text | Tier stop | [pct]% off |
| `item_one` | text | Count, one | [n] item |
| `item_many` | text | Count, many | [n] items |
| `total_label` | text | Total label | Total |
| `save` | text | Saving | You save [amount] |
| `no_discount` | text | No discount | No discount yet |
| `cta_pick` | text | Button, fewer than 2 items | Pick 2 to make a set |
| `cta_add` | text | Button | Add set, [amount] |
| `added_label` | text | Button, after adding | Added to your bag |
| `error_text` | text | Error message | That did not go into your bag. Please try again. |
| `msg_set` | text | Set complete | [set] complete: [pct]% off. |
| `msg_empty` | text | Nothing picked | Pick a set, or any 2 items to get [next]% off. |
| `msg_one` | text | One item | Add 1 more to get [next]% off. |
| `msg_mid` | text | Two or three items | [pct]% off. Add 1 more to get [next]% off. |
| `msg_max` | text | Four or more | [pct]% off, the best price on any set. |
| `set_name` | text | Name, one complete set | [set] set |
| `mix_name` | text | Name, mixed set | Your shower set |
| `less_aria` | text | Minus button (screen readers) | One less [name] |
| `more_aria` | text | Plus button (screen readers) | One more [name] |
| `variant_aria` | text | Variant menu (screen readers) | Choose a variant of [name] |
| `sold_label` | text | Sold out label | Sold out |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 0 |
| `padding_bottom` | range | Bottom padding | 0 |

### Block `set` (Set)

| id | type | label | default |
|---|---|---|---|
| `name` | text | Set name | Calm routine |
| `note` | text | Note | For everyday, eczema-prone skin. |
| `pick_label` | text | Pick-all link | Pick both |
| `start` | checkbox | Picked when the page opens | False |
| `scene` | image_picker | Scene photo |  |
| `scene_alt` | text | Scene photo alt text | Calm wash and Calm lotion on dark wet leaves |
| `product_1` | product | Product |  |
| `key_1` | text | Product key | calm |
| `name_1` | text | Name (demo) | Calm wash |
| `note_1` | text | Note | Fragrance-free, colloidal oat. 400 ml. |
| `price_1` | text | Price in cents (demo) | 1800 |
| `pump_1` | select | Pump colour dot | moss |
| `image_1` | image_picker | Thumbnail |  |
| `product_2` | product | Product |  |
| `key_2` | text | Product key | lotion |
| `name_2` | text | Name (demo) | Calm lotion |
| `note_2` | text | Note | Light, on damp skin after the wash. 250 ml. |
| `price_2` | text | Price in cents (demo) | 2200 |
| `pump_2` | select | Pump colour dot | none |
| `image_2` | image_picker | Thumbnail |  |
| `product_3` | product | Product |  |
| `key_3` | text | Product key |  |
| `name_3` | text | Name (demo) |  |
| `note_3` | text | Note |  |
| `price_3` | text | Price in cents (demo) |  |
| `pump_3` | select | Pump colour dot | none |
| `image_3` | image_picker | Thumbnail |  |

### Block `@app` (app blocks)

(none)
