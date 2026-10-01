<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Guidelines & Coding Standards

## 1. Project Overview & Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (Dark Mode as default)
- **Icons:** Lucide React (`lucide-react`)
- **Domain Focus:** Software Development (Full-Stack Web) & Embedded Systems (IoT / Hardware)

## 2. Architecture & File Structure
- Keep components modular and reusable inside the `components/` directory.
- Use the Next.js App Router conventions (`app/page.tsx`, `app/layout.tsx`, `app/globals.css`).
- Separate static project/skill data into a dedicated configuration file (e.g., `lib/data.ts` or `constants/portfolio.ts`) rather than hardcoding long arrays inside UI components.

## 3. UI/UX & Design Conventions
- **Theme Aesthetics:** High-tech, clean, minimalist dark mode using Slate/Zinc backgrounds with Cyan and Emerald accent colors.
- **Responsiveness:** Mobile-first approach. Ensure all sections scale gracefully across mobile, tablet, and desktop viewports.
- **Interactivity:** Use smooth scrolling for navigation links and subtle CSS/Tailwind transitions/hover effects on buttons and project cards.
- **Icons:** Always import icons directly from `lucide-react`.

## 4. TypeScript & Code Quality
- Always define explicit TypeScript interfaces or types for component props and static datasets. Avoid using `any`.
- Use functional React components with standard named or default exports.
- Follow clean code practices: descriptive variable names, early returns, and concise functions.
- Do not use inline CSS styles unless performing dynamic runtime position/rotation calculations.

## 5. Domain-Specific Content Rules
- Ensure hardware and IoT technical terms are accurate (e.g., ESP32-C6, C/C++, Piezo sensors, MP3 audio modules, REST APIs, PostgreSQL, SQLite).
- Maintain a professional yet modern developer tone in all copy and section descriptions.