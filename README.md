# BrainDrop — landing site

Promo page for the **BrainDrop** Android app (English trainer for Russian
speakers) plus the two legal pages Google Play requires: Privacy Policy and
Terms & Conditions. The landing page and Terms are in Russian; the Privacy
Policy is bilingual — `/privacy/` (RU) and `/privacy/en/` (EN) with a RU/EN
switch, both rendered from one source (`src/i18n/privacy.ts`).

Built from the high-fidelity references in `design/` (`*.dc.html` + `README.md`),
which are a design bundle, not part of the deliverable, and are git-ignored.

## Stack

- **[Astro](https://astro.build)** — static output, zero client-side JS. The
  page has no interactivity beyond links and in-page anchors.
- Plain CSS with design tokens as custom properties (`src/styles/global.css`).
  Token values mirror the app's `Theme.kt` (light theme only — there is no dark
  theme in the app or here).
- Self-hosted fonts (Manrope, IBM Plex Mono) — no third-party requests.
- `@astrojs/sitemap` for `sitemap-index.xml`.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # static build -> dist/
npm run preview    # serve the build
npm run check      # astro check (type + template diagnostics)
npm run generate:qr  # regenerate public/qr-play.svg (needs no network at runtime)
```

`dist/` is fully static (`<page>/index.html` per route) and drops onto any static
host — GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3 — with no rewrite
rules. `trailingSlash: 'always'`.

## Docker

`Dockerfile` is multi-stage: a pinned Node toolchain compiles the site, then an
`nginx:alpine` stage serves the static `dist/` — the runtime image carries
neither Node nor the source.

```bash
docker compose up -d --build      # build + serve on http://localhost:13369
```

`docker-compose.yml` builds the `runtime` target and publishes container `:80`
on host `13369`. Put it behind another reverse proxy by pointing that proxy at
`http://<host>:13369`; `absolute_redirect off` in `nginx.conf` keeps redirects
relative so a different external host/port/scheme just works.

Need the raw files instead of a running server:

```bash
docker build --target export --output type=local,dest=dist .   # writes ./dist, no image
```

### Serving notes

The build uses `trailingSlash: 'always'` + directory format, so every route is
`<path>/index.html`. `nginx.conf` handles that with
`try_files $uri $uri/ =404`, an `error_page 404 /404.html`, and a long
`Cache-Control` on the fingerprinted `/_astro/` bundles.

## Structure

```
public/
  braindrop-lockup.svg     logo lockup (metadata-stripped copy of the design asset)
  app-icon.png             512×512 app icon — favicon + OG image
  qr-play.svg              QR to the Play listing, generated once (scripts/generate-qr.mjs)
  fonts/                   Manrope 500/600/700/800, IBM Plex Mono 500/600 (.ttf)
  robots.txt
src/
  consts.ts                Play Store URL, PRIVACY_EMAIL, site copy, content figures
  i18n/privacy.ts          Privacy Policy copy, RU + EN (single source for both routes)
  styles/global.css        tokens, @font-face, reset, shared primitives (.btn, .container…)
  layouts/
    BaseLayout.astro       <head>, meta/OG, font preloads, <html lang> + hreflang
    LegalLayout.astro      shell for the legal pages; optional RU/EN switch
  components/
    Header.astro Footer.astro Icon.astro
    PrivacyPage.astro      renders the Privacy Policy for one language
    SegmentedBar.astro     the app's progress indicator
    PhoneFrame.astro       device bezel; scales down with `zoom` on small screens
    mockups/               HomeMockup, VerbListMockup, QuizMockup — rebuilt 1:1 from
                           the app's Compose screens
  pages/
    index.astro            hero · «Что внутри» · «Экраны» · «Скоро» · CTA · footer
    privacy/index.astro    Privacy Policy (RU)  → /privacy/
    privacy/en.astro       Privacy Policy (EN)  → /privacy/en/
    terms.astro
    404.astro
Dockerfile .dockerignore
```

The two toggle blocks from the prototype (`showQr`, `showRoadmap`) are plain
booleans at the top of `src/pages/index.astro`.

## Before publishing

- [ ] Set the real domain in `astro.config.mjs` (`site:`) — it drives canonical,
      OG, hreflang and sitemap URLs. `robots.txt` also hard-codes it.
- [ ] Set the real privacy contact in `src/consts.ts` (`PRIVACY_EMAIL`, currently
      `privacy@braindrop.app`) — it must be a monitored mailbox and match the
      contact e-mail on the Google Play listing. Terms still uses its own
      placeholder `hello@example.com` in `src/pages/terms.astro`.
- [ ] The Privacy Policy (`src/i18n/privacy.ts`) is written for the current app:
      no data collection, offline-only, Belarus governing law, independent
      developer with no named legal entity. Re-check it if any of that changes
      (server sync, accounts, analytics, an iOS release, a registered entity).
      Terms is still a **draft** (see its «ЧЕРНОВИК» note). None of this is legal
      advice.
- [ ] Bump the `updated` date in `src/i18n/privacy.ts` (both `ru` and `en`)
      whenever the policy text changes.
- [ ] If the app's content numbers change (179 verbs / 12 groups, 12 tenses,
      72 phrasal verbs, 3 quiz types), update `src/consts.ts` and the mockups.
- [ ] Consider a dedicated 1200×630 OG image (currently the square app icon).
