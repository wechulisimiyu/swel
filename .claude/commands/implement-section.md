# /implement-section

Implement a new page section or component from CSS specs (Figma export or hand-written CSS).

## Input expected

Paste the CSS spec block directly in the prompt, e.g.:
`/implement-section [paste CSS here]`

Or describe which section to work on if it's already in context.

## Process

### 1. Read the docs first

Before writing any code, read the relevant Next.js 16 guide:

```
node_modules/next/dist/docs/01-app/01-getting-started/
```

Check for any API that touches what you're implementing (fonts, images, routing, metadata).

### 2. Parse the spec

Extract from the CSS block:

- **Component name** — from the top comment (e.g., `/* Section */`, `/* Card */`)
- **Layout** — flex/grid direction, alignment, gaps, padding
- **Dimensions** — fixed widths/heights vs fluid (`left: 0; right: Xpx` = fluid with offset)
- **Colors** — map every hex to the nearest `swel-*` token; use arbitrary `[#hex]` only if truly one-off
- **Typography** — font-size, font-weight, line-height, letter-spacing, color
- **Borders & shadows** — border radius, border color, box-shadow values
- **Z-index / positioning** — absolute positions within relative containers

### 3. Map to design tokens

Check `app/globals.css` `@theme {}` before using any raw hex value.
| Raw hex | Token |
|---|---|
| #111C2D | `swel-navy` |
| #2D325A | `swel-navy-mid` |
| #FBF9F8 | `swel-bg` |
| #F7F9FB | `swel-bg-light` |
| #F2F4F6 | `swel-bg-grey` |
| #ECEEF0 | `swel-bg-card` |
| #45464D | `swel-body` |
| #64748B | `swel-muted` |
| #94A3B8 | `swel-faint` |
| #D8E3FB | `swel-accent` |
| #DAE2FD | `swel-accent2` |
| #D5E3FC | `swel-accent3` |
| #C6C6CD | `swel-border` |
| #E2E8F0 | `swel-divider` |
| #F1F5F9 | `swel-subtle` |

If a new color appears that isn't in the table above, add it to `@theme {}` in `globals.css` first, then use the token.

### 4. Choose component type

- **Server Component** by default — no `'use client'`
- Add `'use client'` only if the component needs: `useState`, `useEffect`, event handlers, browser APIs
- Interactive sub-parts (e.g., a mobile menu toggle) should be split into a separate small Client Component

### 5. Create the file

- Path: `components/<kebab-name>.tsx`
- Use `next/link` for all internal links — no raw `<a>` tags
- Use `next/image` for all raster images (see image rules below)
- Inline SVGs for icons (avoids extra round-trips for small icons)
- No comments unless the CSS has a non-obvious constraint worth preserving

### 6. Wire it into the page

Import and add the component to `app/page.tsx` (or the relevant route) in the correct visual order.

### 7. Verify

Run `pnpm dev` if not already running. Open the browser. Check:

- [ ] Section appears in the right position
- [ ] Colors match the spec
- [ ] Typography sizes/weights match
- [ ] Layout doesn't break at 1280px viewport
- [ ] No TypeScript errors in terminal

---

## Tailwind v4 reminders

- No `tailwind.config.js` — all config lives in `app/globals.css` inside `@theme {}`
- Custom tokens are available as `bg-swel-navy`, `text-swel-body`, etc.
- Arbitrary values: `text-[48px]`, `tracking-[-0.96px]`, `shadow-[0_10px_15px_...]`
- No dark mode variants needed for this project
