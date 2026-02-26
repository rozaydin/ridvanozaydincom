# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and blog website for ridvanozaydin.com, built with **Astro 5** and **React** islands. Deployed as a static site to AWS S3 + CloudFront via GitHub Actions.

## Commands

```bash
npm run dev        # Start dev server with hot reload
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

There are no test or lint commands configured.

## Architecture

- **Astro** handles routing, static page generation, and content collections
- **React components** are used as interactive "islands" hydrated client-side within Astro pages (e.g., Services, Portfolio, Links)
- **Content Collections** (`src/content/blog/`) manage blog posts as Markdown/MDX with Zod schema validation defined in `src/content/config.ts`
- **Static JSON data** (`src/data/projects.json`, `src/data/companies.json`) drives portfolio and experience components
- **Bootstrap 5** + `react-bootstrap` for styling and layout
- TypeScript in strict mode; JSX configured for React (`react-jsx`)

## Key Directories

- `src/pages/` — Astro file-based routing (includes `blog/[...slug].astro` for dynamic blog routes)
- `src/layouts/BlogPost.astro` — Layout wrapper for blog posts
- `src/components/` — Mix of `.astro` (static) and `.tsx` (React island) components, organized by feature subdirectories
- `src/content/blog/` — Blog posts in Markdown/MDX
- `src/consts.ts` — Site-wide constants (title, description)
- `public/assets/` — Static images (company logos, etc.)

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) — manually triggered, builds with Node 20, syncs `dist/` to S3, and invalidates CloudFront. AWS credentials are stored as GitHub secrets.

## Adding Blog Posts

Create a new `.md` or `.mdx` file in `src/content/blog/`. Frontmatter must match the Zod schema in `config.ts` (title, description, pubDate, optional heroImage/updatedDate).
