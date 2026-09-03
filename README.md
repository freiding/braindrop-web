# BrainDrop — landing site

Promo page for the **BrainDrop** Android app (English trainer for Russian
speakers) plus the two legal pages Google Play requires: Privacy Policy and
Terms & Conditions. All content is in Russian.

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

Multi-stage build: Node builds the static site, then nginx serves `dist/`. The
final image contains only the built files and nginx — no Node, no `node_modules`.

```bash
docker compose up --build      # -> http://localhost:8080

# or plain docker:
docker build -t braindrop-web .
docker run --rm -p 8080:80 braindrop-web
```

- `Dockerfile` — `node:22-alpine` build stage → `nginx:1.27-alpine` runtime
- `nginx.conf` — gzip, long-cache for hashed assets/fonts, `must-revalidate` for
  HTML, `try_files $uri $uri/ =404` routing (matches `trailingSlash: 'always'`),
  `/404.html` error page, baseline security headers
- `.dockerignore` — keeps `node_modules`, `dist`, `design/`, `.git` out of the
  build context

## Structure

```
public/
  braindrop-lockup.svg     logo lockup (metadata-stripped copy of the design asset)
  app-icon.png             512×512 app icon — favicon + OG image
  qr-play.svg              QR to the Play listing, generated once (scripts/generate-qr.mjs)
  fonts/                   Manrope 500/600/700/800, IBM Plex Mono 500/600 (.ttf)
  robots.txt
src/
  consts.ts                Play Store URL, site copy, content figures
  styles/global.css        tokens, @font-face, reset, shared primitives (.btn, .container…)
  layouts/
    BaseLayout.astro       <head>, meta/OG, font preloads
    LegalLayout.astro      shell for the two legal pages
  components/
    Header.astro Footer.astro Icon.astro
    SegmentedBar.astro     the app's progress indicator
    PhoneFrame.astro       device bezel; scales down with `zoom` on small screens
    mockups/               HomeMockup, VerbListMockup, QuizMockup — rebuilt 1:1 from
                           the app's Compose screens
  pages/
    index.astro            hero · «Что внутри» · «Экраны» · «Скоро» · CTA · footer
    privacy.astro terms.astro
    404.astro
Dockerfile .dockerignore nginx.conf docker-compose.yml
```

The two toggle blocks from the prototype (`showQr`, `showRoadmap`) are plain
booleans at the top of `src/pages/index.astro`.

## Before publishing

- [ ] Set the real domain in `astro.config.mjs` (`site:`) — it drives canonical,
      OG and sitemap URLs. `robots.txt` also hard-codes it.
- [ ] Replace the placeholder support address `hello@example.com` in
      `src/pages/privacy.astro` and `src/pages/terms.astro`.
- [ ] The legal copy is a **draft** (see the «ЧЕРНОВИК» notes on both pages):
      have a lawyer fill in the legal entity, governing law and real contact.
- [ ] If the app's content numbers change (179 verbs / 12 groups, 12 tenses,
      72 phrasal verbs, 3 quiz types), update `src/consts.ts` and the mockups.
- [ ] Consider a dedicated 1200×630 OG image (currently the square app icon).
