# Dean Putra — Portfolio

A modern, dark-mode personal portfolio built with **Next.js (App Router)**, **Tailwind CSS v4**, **TypeScript**, and **Lucide React** icons — localized in **English** and **Bahasa Indonesia**.

> Bridging computer networks, web applications, and hardware IoT innovations.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

## Localization (English + Indonesian)

The site ships in two languages under locale-prefixed routes:

| Route | Language |
| --- | --- |
| `/en` | English |
| `/id` | Bahasa Indonesia |

- **`/` redirects** to `/en` or `/id`: the `NEXT_LOCALE` cookie (set by the
  language switcher) wins, then the visitor's `Accept-Language` header, then
  English. Detection lives in **`proxy.ts`** at the project root.
- **Dictionaries** live in `lib/i18n/`. `en.ts` defines the `Dictionary` type —
  `id.ts` must satisfy it exactly, so a missing or extra translation fails the
  build.
- **Navbar switcher** (globe pill on desktop, full-language row in the mobile
  menu) switches locale client-side and keeps the current `#section` anchor.
- Each locale gets its own `generateMetadata`: localized title/description/
  keywords, `og:locale`, and (once `siteUrl` is set) canonical + hreflang
  `alternates` with `x-default`.
- `<html lang>` is set per locale for screen readers and search engines.

### Adding a locale

1. Add the code to `locales` in `lib/i18n/locales.ts`.
2. Copy `lib/i18n/en.ts` → `lib/i18n/<code>.ts`, translate, type it as
   `Dictionary` — TypeScript guides you through every missing string.
3. Register it in `lib/i18n/index.ts` (`dictionaries` map).

## Project structure

```
proxy.ts            Locale detection: redirects / → /en or /id
app/
  [locale]/
    layout.tsx      Root layout — per-locale <html lang>, fonts, metadata, viewport
    page.tsx        Single-page composition of all sections (passes the dictionary)
  globals.css       Tailwind v4 theme tokens, glass/glow/gradient utilities
components/
  Navbar.tsx        Sticky glassmorphism header + scroll progress + mobile menu + EN/ID switcher
  Hero.tsx          Role title, subtitle badge, tagline, CTA buttons
  About.tsx         Background + terminal "whoami" card
  Skills.tsx        3 categorized skill cards (networking / web / embedded)
  Projects.tsx      Filterable tabs (All · Web Dev · IoT / Hardware)
  Contact.tsx       Social/contact link cards
  Footer.tsx        Copyright + quick links
  Section.tsx       Shared section container + heading
  Reveal.tsx        Scroll-triggered entrance animation
lib/
  data.ts           Locale-independent data: identity, project structure, and links
  i18n/
    locales.ts      Supported locale codes (shared with proxy.ts)
    en.ts           English dictionary — source of truth for the Dictionary type
    id.ts           Indonesian dictionary (type-checked against en.ts)
    index.ts        getDictionary(locale) + re-exports
```

## Customizing your links

Every URL on the site lives in **`lib/data.ts`**:

- `socials.github`, `socials.linkedin`, `socials.email` → Contact cards + footer
- `projects[].liveDemo`, `projects[].repo` → per-project action buttons
- `siteUrl` → your deployed URL; enables canonical + hreflang metadata
  (leave `""` to skip — the build stays warning-free)

Empty strings render a disabled *"coming soon"* state instead of a dead link, so you can ship now and fill them in later.

## Design notes

- **Theme**: dark slate/zinc surface with cyan + emerald accents and soft glow-on-hover effects.
- **Responsive**: mobile-first, with breakpoints at `sm`, `md`, and `lg`.
- **Motion**: scroll-triggered reveals that respect `prefers-reduced-motion`.
- **A11y**: focus-visible outlines, `aria-*` states on the menu and filters, semantic landmarks.
