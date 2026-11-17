# Lather popup and cookies

Lather sign-up popup ({% form 'customer' %}, opens once per session after a delay) and cookie bar (Shopify customer privacy consent when available).

- Category: popup
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/templates/home.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather popup and cookies" (id `popup`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/templates/home.html; Shopify bundle: sections/lather/popup/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-popup.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/sections/blko-lv3-popup.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/popup/sections/blko-lv3-theme.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `pop_enable` | checkbox | Show the sign-up popup | True |
| `pop_delay` | range | Open after | 12 |
| `pop_image` | image_picker | Image |  |
| `pop_alt` | text | Image alt (when the image has none) | Wet shoulder wrapped in a towel after a shower |
| `pop_title` | inline_richtext | Title | 10% off your <em>first</em> bottle. |
| `pop_text` | text | Text | Skin notes twice a month. No daily emails. |
| `pop_email_label` | text | Email placeholder | Email |
| `pop_button` | text | Button | Get my 10% |
| `pop_no` | text | Dismiss | No thanks |
| `pop_done_title` | inline_richtext | Thanks title | Check your <em>inbox.</em> |
| `pop_done_text` | text | Thanks text | Your code works on any bottle or set. |
| `pop_done_button` | text | Thanks button | Keep browsing |
| `cookie_enable` | checkbox | Show the cookie bar | True |
| `cookie_delay` | range | Show after | 1800 |
| `cookie_label` | text | Region label (screen readers) | Cookies |
| `cookie_text` | text | Text | We use cookies to keep your bag and see what helps. Nothing  |
| `cookie_yes` | text | Accept | Accept |
| `cookie_no` | text | Decline | Only needed ones |
