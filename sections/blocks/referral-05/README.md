# Referral 05 - Friend's landing, claim the code

Standalone Shopify OS 2.0 section ported 1:1 from the Blocko design system variant `referral-05` (look: the Tide preset,
as on the website demo). It runs in any theme: drop the files in, then add **Referral 05** in the Theme Editor.

## Files

- `sections/blko-referral-05.liquid`
- `assets/blko-referral-05.css`
- `assets/blko-referral-05.js`
- `snippets/blko-ui-input.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-money.liquid`
- `snippets/blko-ui-price.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `assets/blko-ui-commerce.css`
- `assets/blko-ui-commerce.js`
- `snippets/blko-ui-icon.liquid`
- `assets/blko-f-codex2-newsreader-normal.woff2`
- `assets/blko-f-codex2-newsreader-italic.woff2`
- `assets/blko-f-codex2-dm-sans-normal.woff2`
- `snippets/blko-fonts-tide.liquid`
- `locales/en.default.blko.json`

## Paste this into your coding agent

```text
Install the standalone section "Referral 05 - Friend's landing, claim the code" from https://github.com/digent-uiux/demo/tree/main/sections/blocks/referral-05 into my Shopify theme by following its README. Ask which store, theme, page/template and position first and wait for my OK. Copy only this bundle’s files, compare existing files before overwriting, merge the locale keys, upload the bundled fonts or retain theme fonts, run `shopify theme check`, and explain how to add the section and set it up. Do not publish my theme.
```

## Install

1. Copy each file into the same folder of your theme (`sections/`, `snippets/`, `assets/`, `locales/`).
   `blko-ui-*` files are shared by every Blocko section: keep one copy. If the theme already has `locales/en.default.json`,
   merge the `blko` / `blko_ui` keys from `locales/en.default.blko.json` into it.
2. Theme Editor → Add section → **Referral 05**.

## Install by editing theme code (Shopify Sidekick)

Follow the files at https://github.com/digent-uiux/demo/tree/main/sections/blocks/referral-05. Edit theme code directly; do not use a zip. Ask which theme, template and position, and wait for approval. Compare existing files before overwriting.

## Look and settings

- Colours, fonts (Newsreader + DM Sans, OFL, latin subset), corners and type style: the Tide preset by default.
  **Read the theme's tokens** makes the section follow a Blocko theme (`--color-bg`, `--font-heading`, `--radius-card`,
  `--theme-button-case`…).
- Images: Shopify placeholders until you pick one.
- Padding: the top/bottom values are the desktop size; phones use 70%.

### Section settings

| id | type | label | default |
|---|---|---|---|
| `image` | image_picker | Photo |  |
| `image_alt` | text | Photo alt text |  |
| `sender` | text | Sender's name | Maya |
| `tag` | text | Tag on the photo | From Maya, member since 2023 |
| `heading` | inline_richtext | Note | “I live in their linen. <em>You will too.</em>” |
| `text` | textarea | Offer | Maya thinks you'll like it here, so the first… |
| `email_label` | text | Email label | Your email |
| `button_label` | text | Button label | Claim my $20 |
| `hint` | text | Hint | New customers only. One code per person. |
| `error_empty` | text | Empty email message | Enter your email to claim the $20. |
| `tags` | text | Customer tags | referral, newsletter |
| `code` | text | Discount code | MAYA-LINEN-20 |
| `code_label` | text | Code label | Your code: $20 off over $100 |
| `saved` | text | After claiming | Saved for [email]. The code works for 30 days. |
| `editor_state` | select | Show in the editor | form |
| `off` | number | Code amount off | 20 |
| `min` | number | Minimum order | 100 |
| `picks_heading` | text | Heading | Maya's favourites |
| `picks_before` | text | Note before claiming | Claim the code to see your prices |
| `picks_after` | text | Note after claiming | Prices with your code |
| `need` | text | Under the minimum | Add [amount] more to use the code |
| `label` | text | Section name for screen readers | A gift from Maya |
| `tokens` | select | Colors, fonts, corners | preset |
| `padding_top` | range | Top padding | 80 |
| `padding_bottom` | range | Bottom padding | 80 |

### Block `@app` (app blocks)

(none)

### Block `pick` (Pick)

| id | type | label | default |
|---|---|---|---|
| `product` | product | Product |  |
| `image` | image_picker | Photo |  |
| `name` | text | Name | Linen camp shirt, chalk |
| `price` | number | Price | 78 |

## Published files for Shopify Sidekick

Copy text files into the same theme folders using these exact raw file links. Merge locale keys into `locales/en.default.json` instead of replacing it. Binary fonts must be downloaded and uploaded in Assets.

- `assets/blko-f-codex2-dm-sans-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/assets/blko-f-codex2-dm-sans-normal.woff2 — binary font; download and upload
- `assets/blko-f-codex2-newsreader-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/assets/blko-f-codex2-newsreader-italic.woff2 — binary font; download and upload
- `assets/blko-f-codex2-newsreader-normal.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/assets/blko-f-codex2-newsreader-normal.woff2 — binary font; download and upload
- `assets/blko-referral-05.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/assets/blko-referral-05.css
- `assets/blko-referral-05.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/assets/blko-referral-05.js
- `assets/blko-ui-commerce.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/assets/blko-ui-commerce.css
- `assets/blko-ui-commerce.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/assets/blko-ui-commerce.js
- `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/assets/blko-ui-core.css
- `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/assets/blko-ui-motion.js
- `locales/en.default.blko.json`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/locales/en.default.blko.json
- `sections/blko-referral-05.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/sections/blko-referral-05.liquid
- `snippets/blko-fonts-tide.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/snippets/blko-fonts-tide.liquid
- `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/snippets/blko-ui-button.liquid
- `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/snippets/blko-ui-icon.liquid
- `snippets/blko-ui-input.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/snippets/blko-ui-input.liquid
- `snippets/blko-ui-money.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/snippets/blko-ui-money.liquid
- `snippets/blko-ui-price.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/snippets/blko-ui-price.liquid
- `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/blocks/referral-05/snippets/blko-ui-section.liquid
