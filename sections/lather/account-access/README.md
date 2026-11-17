# Lather account access

html) for customers/login, customers/register, customers/reset_password and customers/activate_account.

- Category: customer-account
- Kind: section
- Theme: lather (body wash)
- Shopify target: ok
- HTML target: ok
- Live demo: https://demo.blocko.ai/html/lather/sections/customer-account--account-access.html

## Paste this into your coding agent

```text
Use the Blocko library (https://github.com/blockoai/blocko, or the Claude Code plugin: claude plugin marketplace add blockoai/blocko && claude plugin install blocko-sections@blocko) to implement the section "Lather account access" (id `account-access`, theme `lather`; live demo: https://demo.blocko.ai/html/lather/sections/customer-account--account-access.html; Shopify bundle: sections/lather/account-access/ in the repo) into my project. Before changing any code, ask me where it should go — which project/theme, which page or template, and the position (e.g. after the hero) — and whether the target is a Shopify theme or a plain HTML site, unless I already said; restate the plan and wait for my OK. Then follow the repo's AGENTS.md: keep the blko- class prefix and CSS tokens (with fallbacks), keep custom elements idempotent, don't touch unrelated code, run `shopify theme check` for Shopify targets, and finish by telling me how to add/arrange it (Theme Editor steps for Shopify).
```

## Install

Copy the files into the same folders of your theme, then add the section from the Theme Editor (Add section).
The bundle includes the **Lather look** section (`blko-lv3-theme`: fonts, colour tokens, shared CSS and the store runtime). Add it once per page, before any other Lather section (the header group is a good place). Files starting with `blko-lv3-` are shared by every Lather section: keep one copy.
Never overwrite an existing file with the same name without comparing it first.

## Install by editing theme code (Shopify Sidekick)

Do not use a zip.

1. Ask which theme, which page and where on the page the section goes. Wait for the answer.
2. In that theme's code editor, create each file below at the same path, with the exact content from its link. If a file with the same name already exists, compare first and never overwrite it blindly.
   - `assets/blko-lv3-account-access.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-account-access.css
   - `assets/blko-lv3-account-access.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-account-access.js
   - `assets/blko-lv3-antonio-600.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-antonio-600.woff2
   - `assets/blko-lv3-base.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-base.css
   - `assets/blko-lv3-logo.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-logo.png
   - `assets/blko-lv3-mark.png`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-mark.png
   - `assets/blko-lv3-recent.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-recent.js
   - `assets/blko-lv3-store.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-store.js
   - `assets/blko-lv3-urbanist.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-urbanist.woff2
   - `assets/blko-lv3-wishlist.css`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-wishlist.css
   - `assets/blko-lv3-wishlist.js`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-wishlist.js
   - `assets/blko-lv3-yeseva-one.woff2`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/assets/blko-lv3-yeseva-one.woff2
   - `sections/blko-lv3-account-access.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/sections/blko-lv3-account-access.liquid
   - `sections/blko-lv3-theme.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/sections/blko-lv3-theme.liquid
   - `snippets/blko-lv3-account-intro.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/snippets/blko-lv3-account-intro.liquid
   - `snippets/blko-lv3-settings.liquid`: https://raw.githubusercontent.com/digent-uiux/demo/main/sections/lather/account-access/snippets/blko-lv3-settings.liquid
3. Add the section in the Theme Editor and pick your products.

## Settings

| Id | Type | Label | Default |
|---|---|---|---|
| `color_scheme` | color_scheme | Color scheme | scheme-3 |
| `view` | select | View | auto |
| `eyebrow` | text | Small label | Your account |
| `heading_1` | inline_richtext | Heading, line 1 | A little less |
| `heading_2` | inline_richtext | Heading, line 2 | to <em>remember.</em> |
| `text` | textarea | Text | Your orders, your details, and an easier way back to the for |
| `help_label` | text | Help link | Need help with an order? |
| `help_link` | url | Help link URL |  |
| `image` | image_picker | Image |  |
| `image_alt` | text | Image description | Soft wash on warm stone with leaf shadows |
| `tabs_label` | text | Tabs label (screen readers) | Account access |
| `tab_login` | text | Tab, log in | Log in |
| `tab_create` | text | Tab, create account | Create account |
| `login_heading` | text | Heading | Welcome back. |
| `email_label` | text | Email label | Email |
| `password_label` | text | Password label | Password |
| `login_button` | text | Button | Log in |
| `forgot_label` | text | Forgot password link | Forgot your password? |
| `create_heading` | text | Heading | Make room for your routine. |
| `first_name_label` | text | First name label | First name |
| `new_password_label` | text | New password label | Password, at least 8 characters |
| `create_button` | text | Button | Create account |
| `reset_heading` | text | Heading | Reset your password. |
| `reset_button` | text | Button | Request reset link |
| `back_label` | text | Back link | Back to log in |
| `reset_sent` | text | Sent message | Thank you. Check your email for a password reset link. |
| `new_password_heading` | text | New password heading (from the email link) | Choose a new password. |
| `confirm_password_label` | text | Confirm password label | Password, once more |
| `new_password_button` | text | New password button | Save password |
| `activate_heading` | text | Activate heading | Set a password to finish. |
| `activate_button` | text | Activate button | Activate account |
