# Contact, written letter

Contact, written letter section from the Balm 2 theme.

- Category: contact
- Kind: section
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/balm-2/sections/contact--contact-36.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Contact, written letter" (id `contact-36`, theme `balm-2`; live demo: https://demo.blocko.ai/html/balm-2/sections/contact--contact-36.html; Shopify bundle: sections/balm-2/contact-36/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `sections/blko-contact-36.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/sections/blko-contact-36.liquid
   - `snippets/blko-fonts-balm.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/snippets/blko-fonts-balm.liquid
   - `snippets/blko-ui-button.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/snippets/blko-ui-button.liquid
   - `snippets/blko-ui-icon-more.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/snippets/blko-ui-icon-more.liquid
   - `snippets/blko-ui-icon.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/snippets/blko-ui-icon.liquid
   - `snippets/blko-ui-section.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/snippets/blko-ui-section.liquid
   - `assets/blko-balm-motion.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/assets/blko-balm-motion.css
   - `assets/blko-balm-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/assets/blko-balm-motion.js
   - `assets/blko-contact-36.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/assets/blko-contact-36.css
   - `assets/blko-contact-36.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/assets/blko-contact-36.js
   - `assets/blko-f-bodoni-moda-italic.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/assets/blko-f-bodoni-moda-italic.woff2
   - `assets/blko-f-bodoni-moda.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/assets/blko-f-bodoni-moda.woff2
   - `assets/blko-f-karla.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/assets/blko-f-karla.woff2
   - `assets/blko-ui-core.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/assets/blko-ui-core.css
   - `assets/blko-ui-motion.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/assets/blko-ui-motion.js
3. Merge the keys from `locales/en.default.blko.json` (https://raw.githubusercontent.com/digent-uiux/demo/main/sections/balm-2/contact-36/locales/en.default.blko.json) into your `locales/en.default.json`. Keep your existing keys.
4. Open the page in the Theme Editor and add the section at the chosen position.

## Files

- `sections/blko-contact-36.liquid`
- `snippets/blko-fonts-balm.liquid`
- `snippets/blko-ui-button.liquid`
- `snippets/blko-ui-icon-more.liquid`
- `snippets/blko-ui-icon.liquid`
- `snippets/blko-ui-section.liquid`
- `assets/blko-balm-motion.css`
- `assets/blko-balm-motion.js`
- `assets/blko-contact-36.css`
- `assets/blko-contact-36.js`
- `assets/blko-f-bodoni-moda-italic.woff2`
- `assets/blko-f-bodoni-moda.woff2`
- `assets/blko-f-karla.woff2`
- `assets/blko-ui-core.css`
- `assets/blko-ui-motion.js`
- `locales/en.default.blko.json`

## Section settings

| id | type | label | default |
| --- | --- | --- | --- |
| `label` | text | Region label | Write to us |
| `eyebrow` | text | Label | Correspondence |
| `heading` | text | Heading | Every letter is answered by hand |
| `stamp` | image_picker | Stamp photo |  |
| `stamp_caption` | text | Stamp caption | Hudson · NY |
| `salutation` | text | Salutation | Dear Balm, |
| `name_words` | text | Words before the name | My name is |
| `email_words` | text | Words before the email | and you can write back to me at |
| `topic_words` | text | Words before the topic | I'm writing about |
| `topics` | text | Topics | my skin routine, an order, an ingredient, a gift, something else |
| `letter_placeholder` | text | Letter placeholder | Tell us about your skin, the product, or the order number… |
| `min_words` | range | Fewest words | 5 |
| `signoff` | text | Sign-off | With thanks, |
| `button` | text | Button | Send the letter |
| `reply_note` | text | Reply note | Replies within one working day, Monday to Saturday. |
| `seal_letter` | text | Wax seal letter | B |
| `surface` | select | Colour | bg |
| `tokens` | select | Colors, fonts, corners | preset |
| `color_scheme` | color_scheme | Color scheme | scheme-9 |
| `padding_top` | range | Top padding | 128 |
| `padding_bottom` | range | Bottom padding | 128 |

## Blocks

- `note`: Note

## Dependencies

- Assets: `blko-balm-motion.css`, `blko-balm-motion.js`, `blko-contact-36.css`, `blko-contact-36.js`, `blko-f-bodoni-moda-italic.woff2`, `blko-f-bodoni-moda.woff2`, `blko-f-karla.woff2`, `blko-ui-core.css`, `blko-ui-motion.js`
- Snippets: `blko-fonts-balm.liquid`, `blko-ui-button.liquid`, `blko-ui-icon-more.liquid`, `blko-ui-icon.liquid`, `blko-ui-section.liquid`
- Locale keys: `blko.contact_36.again`, `blko.contact_36.choose`, `blko.contact_36.email_ph`, `blko.contact_36.err_email`, `blko.contact_36.err_message`, `blko.contact_36.err_name`, `blko.contact_36.err_topic`, `blko.contact_36.letter`, `blko.contact_36.n_blanks`, `blko.contact_36.name_ph`, `blko.contact_36.no`, `blko.contact_36.one_blank`, `blko.contact_36.sealed`, `blko.contact_36.sealed_named`, `blko.contact_36.sealed_text`, `blko.contact_36.sealed_text_full`, `blko.contact_36.sealing`, `blko.contact_36.server_error`, `blko.contact_36.sign_ph`, `blko.contact_36.word`, `blko.contact_36.words` (merge `locales/en.default.blko.json` into your `locales/en.default.json`)
- Theme settings read (optional, with fallbacks): none

Generated file: do not edit; open an issue instead.
