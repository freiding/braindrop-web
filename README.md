# BrainDrop — landing site

Promo page for the **BrainDrop** Android app (English trainer for Russian
speakers) plus the two legal pages Google Play requires: Privacy Policy and
Terms & Conditions. The landing page is in Russian; both legal pages are
bilingual — `/privacy/` + `/privacy/en/` and `/terms/` + `/terms/en/`, each
with a RU/EN switch and rendered from one source (`src/i18n/privacy.ts`,
`src/i18n/terms.ts`; shared shape in `src/i18n/types.ts`).

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
  consts.ts                Play Store URL, CONTACT_EMAIL, site copy, content figures
  i18n/
    types.ts               shared shape for the bilingual legal docs
    privacy.ts             Privacy Policy copy, RU + EN (single source for both routes)
    terms.ts               Terms & Conditions copy, RU + EN (single source)
  styles/global.css        tokens, @font-face, reset, shared primitives (.btn, .container…)
  layouts/
    BaseLayout.astro       <head>, meta/OG, font preloads, <html lang> + hreflang
    LegalLayout.astro      shell for the legal pages; optional RU/EN switch
  components/
    Header.astro Footer.astro Icon.astro
    PrivacyPage.astro TermsPage.astro   render one legal doc in one language
    SegmentedBar.astro     the app's progress indicator
    PhoneFrame.astro       device bezel; scales down with `zoom` on small screens
    mockups/               HomeMockup, VerbListMockup, QuizMockup — rebuilt 1:1 from
                           the app's Compose screens
  pages/
    index.astro            hero · «Что внутри» · «Экраны» · «Скоро» · CTA · footer
    privacy/index.astro    Privacy Policy (RU)  → /privacy/
    privacy/en.astro       Privacy Policy (EN)  → /privacy/en/
    terms/index.astro      Terms & Conditions (RU)  → /terms/
    terms/en.astro         Terms & Conditions (EN)  → /terms/en/
    404.astro
Dockerfile .dockerignore
```

The two toggle blocks from the prototype (`showQr`, `showRoadmap`) are plain
booleans at the top of `src/pages/index.astro`.

## Before publishing

- [ ] Keep the domain in `astro.config.mjs` (`site:`) and `robots.txt` in sync —
      it drives canonical, OG, hreflang and sitemap URLs.
- [ ] `CONTACT_EMAIL` in `src/consts.ts` must stay a monitored mailbox and match
      the contact e-mail on the Google Play listing.
- [ ] The legal copy (`src/i18n/privacy.ts`, `src/i18n/terms.ts`) is written for
      the current app: no data collection, offline-only, free, Republic of
      Belarus governing law, independent developer with no named legal entity.
      Re-check both if any of that changes (server sync, accounts, analytics,
      paid features, an iOS release, a registered entity). None of it is legal
      advice.
- [ ] Bump the `updated` date in the changed `src/i18n/*.ts` file (both `ru` and
      `en`) whenever its text changes.
- [ ] If the app's content numbers change (179 verbs / 12 groups, 12 tenses,
      72 phrasal verbs, 3 quiz types), update `src/consts.ts` and the mockups.
- [ ] Consider a dedicated 1200×630 OG image (currently the square app icon).
