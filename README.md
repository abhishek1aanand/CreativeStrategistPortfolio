# Abhishek Anand — Portfolio

Single-page portfolio site for Abhishek Anand, Performance Creative Strategist and direct-response copywriter.

## Stack

- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS v4**
- **Poppins** via `next/font/google` (self-hosted, no external font requests)
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

Other scripts:

```bash
npm run build   # production build
npm run lint    # eslint
```

## Editing content

All copy, stats, and links live in [`lib/content.ts`](lib/content.ts) — a single typed data file kept separate from the components. Update numbers, case study text, swipe file links, and contact details there without touching any JSX.

## Structure

```
app/         layout, page, global styles
components/  one component per page section, plus shared StatCard / Pill / RevealOnScroll
lib/         content.ts — all site copy and data
```

The recurring visual motif is `StatCard` — an ad-platform-style metrics tile reused everywhere a number appears.

## Accessibility & motion

Semantic HTML, visible focus states throughout, and scroll-reveal animations that are skipped entirely under `prefers-reduced-motion: reduce`.

## Open items

- [ ] Fix sharing on the Dr. James Farley doc — currently returns HTTP 401, breaking
      both the "Long-Form Ad" and "Ad Script (VO)" swipe file cards
