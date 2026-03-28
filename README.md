# My Signal landing

Static multilingual landing page with a quiz funnel, local pricing, preview generation, analytics hooks and Telegram handoff.

## What was upgraded

- safer market detection: language no longer forces `KZ` for `ru`
- dynamic SEO tags on runtime based on the live origin
- UTM capture in `localStorage` and forwarding into Telegram
- GA4 / Meta Pixel hooks via meta tags in `index.html`
- analytics events for page, quiz, result, plan selection and Telegram clicks
- legal pages: `privacy.html`, `terms.html`
- backup lead path: copy preview + optional email fallback
- `__MACOSX` was removed from the deliverable bundle

## Before launch

Fill these meta tags in `index.html`:

- `ms:telegram`
- `ms:support-email`
- `ms:ga4`
- `ms:meta-pixel`

If you move from the Vercel subdomain to a custom domain, replace the URLs in:

- `robots.txt`
- `sitemap.xml`

## Analytics events

The page dispatches these events when tracking is configured:

- `page_view`
- `market_detected`
- `language_change`
- `quiz_open`
- `quiz_start`
- `quiz_step_answer`
- `quiz_complete`
- `result_view`
- `plan_step_view`
- `plan_select`
- `telegram_click`
- `email_fallback_click`

## Local run

Open the project with any static file server, for example:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
