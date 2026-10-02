# Portfolio Project Context

## Project Overview
This is a professional portfolio website for **Asad Imran Shah**, built with **Next.js 15**, **TypeScript**, and **Tailwind CSS 4**. The site showcases AI-powered web development and SEO-optimized content writing services. It features a dark theme with neon green accents (`#00ff9d`) and utilizes smooth animations.

## Architecture & Tech Stack
*   **Framework:** Next.js 15 (App Router)
*   **Rendering:** Static Site Generation (`output: 'export'` in `next.config.ts`)
*   **Styling:** Tailwind CSS 4
*   **Language:** TypeScript
*   **Data Source:**
    *   **Frontend:** Static data files in `src/data/` (e.g., `projects.ts`, `case-studies.ts`) are used for the public-facing site.
    *   **Database:** Prisma ORM with SQLite (`dev.db`) is configured, but the current production build relies on static exports.
*   **Deployment:** Optimized for Netlify/Cloudflare Pages (static export).

## Key Directories & Files
*   `src/app/` - App Router pages and layouts.
    *   `page.tsx` - Homepage composing various components.
    *   `layout.tsx` - Root layout, includes Metadata and font configurations.
*   `src/components/` - UI components (e.g., `Header`, `Hero`, `ProjectShowcase`).
*   `src/data/` - Static content data (Projects, Case Studies).
*   `prisma/` - Database schema and seed scripts.
*   `public/` - Static assets (images, logos).
*   `next.config.ts` - Next.js configuration (static export settings).

## Development Workflow

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs the app at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
This command runs `prisma generate` and `next build`. The static output is generated in the `out/` directory.

## Conventions
*   **Metadata:** Pages use the Next.js Metadata API for SEO (Title, Description, OpenGraph).
*   **Styling:** Utility-first CSS with Tailwind. Custom colors (like the neon green) are likely defined in `globals.css` or Tailwind config.
*   **Components:** Functional React components. 'use client' directive is used for interactive components (e.g., `ProjectShowcase.tsx`).
*   **Routing:** File-system based routing in `src/app`.

## Future Context
*   The project contains a Prisma schema (`prisma/schema.prisma`) defining models like `Project`, `Service`, and `Contact`. While the current frontend uses static files, the infrastructure exists for a database-backed version.
*   The site uses `metadataBase` in `layout.tsx` to resolve absolute URLs for Open Graph images, pointing to `https://asadimran.pages.dev`.
