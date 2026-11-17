# Dimensions 03 - Size table, doorway check

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `dimensions-03` (look: the Plush preset,
as on the website demo). It runs in any theme: drop the files in, then add **Dimensions 03 - Sizes** in the Theme Editor.

## Files

- `sections/blko-dimensions-03.liquid`
- `assets/blko-dimensions-03.css`
- `assets/blko-dimensions-03.js`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-bagel-fat-one.woff2`
- `assets/blko-f-plus-jakarta-sans.woff2`
- `snippets/blko-fonts-plush.liquid`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Dimensions 03 - Size table, doorway check" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/dimensions-03 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Dimensions 03 - Sizes**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/dimensions-03. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Bagel Fat One + Plus Jakarta Sans, OFL, latin subset), corners and type style: the Plush preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `image` | image_picker | Product photo |  |
| `image_alt` | text | Photo alt text |  |
| `heading` | text | Heading | Find your size, check the door |
| `lead` | textarea | Intro | Six sizes on the same frame and the same deep… |
| `product` | product | Product |  |
| `form_title` | text | Title | Will it get in? |
| `form_label` | text | Form name for screen readers | Access check |
| `show_in` | text | Switch to inches | Show inches |
| `show_cm` | text | Switch to cm | Show cm |
| `door_width_label` | text | Door width field | Door width |
| `door_height_label` | text | Door height field | Door height |
| `hall_label` | text | Hall field | Hall at a turn |
| `turn_label` | text | Turn checkbox for screen readers | There is a turn straight after the door |
| `door_width` | number | Example door width (cm) | 80 |
| `door_height` | number | Example door height (cm) | 200 |
| `hall_width` | number | Example hall width (cm) | 95 |
| `col_view` | text | Column 1 | Top view |
| `col_size` | text | Column 2 | Size |
| `col_width` | text | Column 3 | Width |
| `col_depth` | text | Column 4 | Depth |
| `col_height` | text | Column 5 | Height |
| `col_seat` | text | Column 6 | Seat |
| `col_door` | text | Column 7 | Through the door |
| `col_price` | text | Column 8 | Price |
| `choose_label` | text | Choose button | Choose this size |
| `chosen_label` | text | Chosen button | Chosen |
| `sil_label` | text | Top view description | Top view of the [name], [width] by [depth] cm |
| `v_empty` | text | No door size yet | Add your door size |
| `v_side` | text | Fits on its side | Goes in on its side |
| `v_legs` | text | Fits without legs | Fits with the legs unscrewed |
| `v_need` | text | Door too narrow | Needs a [value] door |
| `v_tall` | text | Door too low | Too tall for the door on its side |
| `v_turn` | text | Too long for the turn | Will not make the turn (max [value]) |
| `v_parts` | text | Comes in two parts | [verdict], in two parts |
| `label` | text | Section name for screen readers | Sizes and access |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `size` (Size)

| id | type | label | default |
|---|---|---|---|
| `name` | text | Size name | Three-seater |
| `seats` | text | Seats | 3 seats |
| `price` | text | Price | $2,690 |
| `shape` | select | Top view shape | sofa |
| `width` | number | Width (cm) | 220 |
| `depth` | number | Depth (cm) | 92 |
| `height` | number | Height (cm) | 78 |
| `seat` | number | Seat height (cm) | 45 |
| `legs` | number | Leg height (cm) | 12 |
| `part` | number | Longest part (cm) | 0 |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-dimensions-03.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/assets/blko-dimensions-03.css
- `assets/blko-dimensions-03.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/assets/blko-dimensions-03.js
- `assets/blko-f-bagel-fat-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/assets/blko-f-bagel-fat-one.woff2 — binary font; download and upload
- `assets/blko-f-plus-jakarta-sans.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/assets/blko-f-plus-jakarta-sans.woff2 — binary font; download and upload
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/locales/en.default.blko.json
- `sections/blko-dimensions-03.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/sections/blko-dimensions-03.liquid
- `snippets/blko-fonts-plush.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/snippets/blko-fonts-plush.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/dimensions-03/snippets/blko-ui-section.liquid
