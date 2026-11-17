# Lather header

Lather header: menu (link_list, demo links while it is empty), centred logo, search, account and bag with the cart count.

- Category: header
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/templates/home.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather header" (id `header`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/templates/home.html; Shopify bundle: sections/lather/header/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-header.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/sections/blko-lv3-header.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-demo-links.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/snippets/blko-lv3-demo-links.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/header/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-2 |
| `logo` | image_picker | Logo image |  |
| `logo_tint` | checkbox | Tint the logo with the header colour (needs a transparent PNG or SVG) | True |
| `brand_logo` | checkbox | No image: use the Lather mark (off = store name as text) | True |
| `menu` | link_list | Menu | main-menu |
| `demo_links` | textarea | Demo links while the menu is empty (one per line: label | link; [all] [search] [account] [cart] [home] or /pages/about) | Shop all | [all] Build a set | [home]#bundle Skin quiz | [ho |
| `demo_mobile_links` | textarea | Demo mobile links while the menu is empty | Shop all | [all] Build a set | [home]#bundle Skin quiz | [ho |
| `over_hero` | checkbox | Home page: sit over the hero until scrolled | True |
| `show_search` | checkbox | Show search | True |
| `show_account` | checkbox | Show account | True |
| `nav_label` | text | Main menu | Main |
| `mobile_label` | text | Mobile menu | Mobile |
| `home_label` | text | Logo link ([shop] = store name) | [shop] home |
| `open_label` | text | Open menu | Open menu |
| `close_label` | text | Close menu | Close menu |
| `search_label` | text | Search | Search |
| `account_label` | text | Account | Account |
| `wish_label` | text | Wishlist icon label (screen readers) | Wishlist |
| `wish_label_n` | text | Wishlist label with count | Wishlist, [count] saved |
| `bag_label` | text | Bag | Open bag |
