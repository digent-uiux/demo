# Lather help contact

contact Intro and hours beside Shopify's contact form ({% form 'contact' %}): name, email, topic, order number, message.

- Category: contact
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/contact--help-contact.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather help contact" (id `help-contact`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/contact--help-contact.html; Shopify bundle: sections/lather/help-contact/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-base.css
   - `assets/blko-lv3-help-contact.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-help-contact.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-help-contact.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/sections/blko-lv3-help-contact.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/help-contact/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-4 |
| `heading` | inline_richtext | Heading | Ask a <em>person.</em> |
| `text` | textarea | Text | Tell us the product, your question, and your order number if |
| `hours` | textarea | Hours | Customer care Weekdays, 9–5 ET |
| `note` | text | Small note | Include your order number so we can find the details. |
| `l_name` | text | Name label | Name |
| `l_email` | text | Email label | Email |
| `l_topic` | text | Topic label | What is it about? |
| `topics` | textarea | Topics | Choosing a product Shipping or an order Skin-reaction refund |
| `l_order` | text | Order number label | Order number, optional |
| `l_message` | text | Message label | Your message |
| `button` | text | Button label | Send message |
| `success` | text | Thank-you text | Thank you. Your message has been sent. We will be in touch s |
| `anchor` | text | Anchor id | contact |
