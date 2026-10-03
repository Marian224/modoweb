# MODO — Modern Dining Experience

A fictional premium restaurant website built as a portfolio case study for
**RENFI DIGITAL**. MODO is located (fictionally) in Leszno, Poland, and the
site is designed as a cinematic, editorial hospitality experience — distinct
from RENFI's other case studies (MAKRIS Atelier — quiet luxury fashion, and
Leszno Tire Lab — dark automotive/technical).

This is a demo/portfolio project. The restaurant, menu, chef, prices and
contact details are all fictional placeholder content created to showcase
design and front-end development work.

## Tech stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS
- Framer Motion (page/section animations, parallax, transitions)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css        Global styles & design tokens
components/
  Header.tsx          Sticky header + mobile fullscreen nav
  Hero.tsx            Cinematic full-screen hero with parallax
  Intro.tsx           Editorial "Food. Space. Moment." intro
  Menu.tsx             Interactive tabbed menu
  SignatureDishes.tsx  Asymmetric signature-dish photography
  Experience.tsx       Full-width parallax statement section
  Space.tsx            Interior gallery, asymmetric grid
  Chef.tsx             Chef profile
  Philosophy.tsx        "Less. But better." typographic section
  Reservation.tsx        Reservation form (demo endpoint)
  Location.tsx           Address, hours, directions link
  FinalCTA.tsx            Closing cinematic call to action
  Footer.tsx              Site footer
  SectionIndicator.tsx    Signature vertical "MODO" scroll indicator
data/
  menu.ts, signature.ts, gallery.ts, nav.ts   Content, separated from UI
```

## Connecting the reservation form

The reservation form in `components/Reservation.tsx` posts to a placeholder
Formspree endpoint (`FORM_ENDPOINT`). To make it live:

1. Create a form at [formspree.io](https://formspree.io) (or any form backend).
2. Replace `FORM_ENDPOINT` in `components/Reservation.tsx` with your real
   endpoint URL.

## Images

All photography is sourced from Unsplash via temporary hot-linked URLs for
demonstration purposes. Replace with licensed/owned photography before any
real-world launch.

## Notes

- Menu content in `data/menu.ts` is explicitly demo content — see the
  in-page disclaimer above the menu tabs.
- The chef profile is fictional.
- Built by RENFI DIGITAL, 2026.
