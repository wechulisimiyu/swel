# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev          # start dev server (Turbopack)
pnpm build        # production build + type-check
pnpm lint         # ESLint
```

Run on a specific port when 3000 is taken:

```bash
PORT=3001 pnpm dev
```

## Stack

- **Next.js 16.2.6** — App Router, Turbopack, React Compiler (`reactCompiler: true`)
- **React 19** — Server Components by default; `'use client'` only for interactivity
- **Tailwind CSS v4** — config lives entirely in `app/globals.css` via `@theme {}`; there is no `tailwind.config.js`
- **TypeScript** strict mode, `@/*` path alias maps to repo root

## Architecture

### Routing

All routes live under `app/`. Currently a single route (`app/page.tsx`) assembles the homepage from section components.

### Components

`components/` holds one file per page section. Each is a Server Component (no `'use client'`). Sections are imported and rendered in order in `app/page.tsx`.

### Design system

All brand tokens are CSS custom properties defined in `app/globals.css` `@theme {}` and consumed as Tailwind utilities:

| Token class     | Hex     |
| --------------- | ------- |
| `swel-navy`     | #111C2D |
| `swel-navy-mid` | #2D325A |
| `swel-bg`       | #FBF9F8 |
| `swel-bg-light` | #F7F9FB |
| `swel-bg-grey`  | #F2F4F6 |
| `swel-bg-card`  | #ECEEF0 |
| `swel-body`     | #45464D |
| `swel-muted`    | #64748B |
| `swel-faint`    | #94A3B8 |
| `swel-accent`   | #D8E3FB |
| `swel-accent2`  | #DAE2FD |
| `swel-accent3`  | #D5E3FC |
| `swel-border`   | #C6C6CD |
| `swel-divider`  | #E2E8F0 |
| `swel-subtle`   | #F1F5F9 |

When a new color appears in a spec, add it to `@theme {}` before using it — never use a raw hex that maps to an existing token.

### Images

All raster images must be **WebP** under `public/images/`. Use `next/image` everywhere — no `<img>` tags. Hero/above-fold images get `priority`. See `/add-assets` skill for the full conversion workflow.

## Project skills

Custom slash commands in `.claude/commands/`:

- `/implement-section` — turn a CSS spec block into a component following project conventions
- `/add-assets` — process dropped image files (convert to WebP, replace placeholders, wire `next/image`)
- `/new-token` — add a design token to `@theme {}` and update the reference table
