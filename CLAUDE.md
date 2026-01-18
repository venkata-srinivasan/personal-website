# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (uses ESLint with Next.js core-web-vitals and TypeScript configs)
- **Start production**: `npm run start`

## Architecture

This is a Next.js 16 personal portfolio website using the App Router with React 19 and Tailwind CSS v4.

### Project Structure

- `src/app/` - Next.js App Router pages and layouts
  - `page.tsx` - Single-page layout composing all section components
  - `layout.tsx` - Root layout with Geist font configuration and SEO metadata
  - `globals.css` - Tailwind imports and custom CSS utilities
- `src/components/` - Page section components (Navigation, Hero, About, Projects, Activity, Newsletter, Footer)
- `public/` - Static assets including profile image

### Styling

Uses Tailwind CSS v4 with custom CSS variables defined in `globals.css`:
- Primary color: `#6366f1` (indigo)
- Secondary color: `#22d3ee` (cyan)
- Dark background: `#0a0a0f`
- Custom utility classes: `.btn-primary`, `.btn-secondary`, `.card-hover`, `.tech-badge`, `.animated-underline`, `.gradient-bg`

### Component Patterns

- Client components use `'use client'` directive for interactivity (Navigation, Hero)
- Section IDs for in-page navigation: `#about`, `#experience`, `#projects`, `#activity`, `#newsletter`
- All components are self-contained with inline Tailwind classes
