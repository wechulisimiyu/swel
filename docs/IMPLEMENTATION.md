# Implementation Tracker

Master plan for SWEL redesign. Implement the design as-is from stitch extraction
and Figma canonical source. Redesign iterations logged as separate issues.

---

## Dependency Graph

```
Phase 1: Design System Foundation
  └→ Phase 2: Refactor Existing Pages (Home + About)
       └→ Phase 3: Build Remaining Pages (7 routes)
            └→ Phase 4: Boilerplate + Polish
```

```
Design decisions (docs/DECISIONS.md)
  └→ Phase 1 (tokens, shapes, typography)
       └→ Phase 2 (existing pages)
            └→ Phase 3 (new pages)
```

```
Redesign Iterations (R1-R7) — tracked separately, not blocking
  Logged in GitHub Issues for future sprints
```

---

## Phase 1: Design System Foundation

**Goal:** Clean `@theme{}` with canonical tokens, zero raw hex values, consistent
shape and typography conventions.

| # | Task | Files | Status |
|---|------|-------|--------|
| 1.1 | Replace 22 raw hex values with `@theme{}` tokens | `globals.css`, `about-hero.tsx`, `about-problem.tsx`, `about-mission-vision.tsx`, `featured-projects.tsx`, `think-pieces.tsx`, `cta-block.tsx`, `about-team.tsx` | `pending` |
| 1.2 | Install `@radix-ui/colors`, map tokens to Radix scales | `package.json`, `globals.css` | `pending` |
| 1.3 | Define shape system (standardize border-radius conventions) | `globals.css` `@theme{}` | `pending` |
| 1.4 | Define typography scale in `@theme{}` (h1-h4, body, label) | `globals.css` `@theme{}` | `pending` |
| 1.5 | Remove `body{}` raw hex in `globals.css` — use tokens | `globals.css` | `pending` |

### Raw Hex Inventory (22 instances)

| # | File | Line(s) | Raw Hex | Maps To |
|---|------|---------|---------|----------|
| 1 | `about-hero.tsx` | 8 | `#3C475A` | `on-tertiary-fixed-variant` |
| 2 | `about-problem.tsx` | 11 | `#BCC7DE` | `tertiary-fixed-dim` |
| 3 | `about-problem.tsx` | 20 | `#191C1E` | `on-surface` |
| 4 | `about-problem.tsx` | 31 | `#191C1E` | `on-surface` |
| 5 | `about-mission-vision.tsx` | 20 | `#191C1E` | `on-surface` |
| 6 | `featured-projects.tsx` | 7 | `#57657A` | `on-secondary-container` |
| 7 | `featured-projects.tsx` | 17 | `#57657A` | `on-secondary-container` |
| 8 | `featured-projects.tsx` | 75 | `#1B1C1C` | `on-surface` |
| 9 | `think-pieces.tsx` | 54 | `#334155` | needs new token |
| 10 | `cta-block.tsx` | 7 | `#2D325A` | `swel-navy-mid` (token exists) |
| 11 | `cta-block.tsx` | 9 | `#2D325A` | `swel-navy-mid` (token exists) |
| 12 | `cta-block.tsx` | 21 | `#E0E7FF` | needs new token |
| 13 | `about-team.tsx` | 8 | `#d8e3fb` | `swel-accent` (token exists) |
| 14 | `about-team.tsx` | 13 | `#dae2fd` | `swel-accent2` (token exists) |
| 15 | `about-team.tsx` | 18 | `#d5e3fc` | `swel-accent3` (token exists) |
| 16 | `about-team.tsx` | 23 | `#c6c6cd` | `swel-border` (token exists) |
| 17 | `globals.css` | 23 | `#fbf9f8` | `swel-bg` (token exists) |
| 18 | `globals.css` | 24 | `#45464d` | `swel-body` (token exists) |
| 19 | `hero.tsx` | 38 | `swel-navy/90` (opacity hack) | needs proper token |
| 20 | `hero.tsx` | 47 | `swel-navy/5` (opacity hack) | needs proper token |
| 21 | `about-hero.tsx` | 12 | `swel-navy-mid` (hardcoded token — OK) | verified |
| 22 | `research-focus.tsx` | 49 | `#1B1C1C` | `on-surface` |

---

## Phase 2: Refactor Existing Pages

**Goal:** Home and About pages use canonical design system tokens, include stitch
interactions, and have no dead links or placeholder quality issues.

| # | Component | File | Stitch Reference | Changes | Status |
|---|-----------|------|------------------|---------|--------|
| 2.1 | Hero | `hero.tsx` | `home/code.html:41-57` | Fix navy/90 opacity hacks, add scale interactions on buttons | `pending` |
| 2.2 | AboutSection | `about-section.tsx` | `home/code.html:58-88` | Fix tokens, replace image placeholder with `next/image` | `pending` |
| 2.3 | ResearchFocus | `research-focus.tsx` | `home/code.html:90-118` | Add group-hover on cards, swap icon bg on hover | `done` |
| 2.4 | FeaturedProjects | `featured-projects.tsx` | `home/code.html:121-165` | Add `group-hover:scale-105` on images, fix tag tokens | `done` |
| 2.5 | ThinkPieces | `think-pieces.tsx` | `home/code.html:166-197` | Add hover states, replace author avatars with `next/image` | `partial` — title hover (`hover:text-swel-navy-mid transition-colors cursor-pointer`) added; author avatar `next/image` replacement still pending (no image asset) |
| 2.6 | CTABlock | `cta-block.tsx` | `home/code.html:200-214` | Fix `[#2D325A]` → token, add scale on button | `done` — token already `swel-navy-mid`, scale already present; icon swapped `Hexagon` → `BookOpen` (see Image Placeholder Inventory #9). Content intentionally kept as "Join Us" / `/get-involved` rather than stitch's "Learning Platform" promo, since `/learning` already has its own dedicated hero/CTA (decided 2026-06-12) |
| 2.7 | AboutHero | `about-hero.tsx` | `about_us/code.html:50-66` | Fix tokens, add label-caps style, replace image placeholder | `pending` |
| 2.8 | AboutProblem | `about-problem.tsx` | `about_us/code.html:67-88` | Add stitch icons (`public`, `diversity_3`), fix tokens | `pending` |
| 2.9 | AboutMissionVision | `about-mission-vision.tsx` | `about_us/code.html:90-104` | Align bento layout with stitch, replace icon placeholder | `pending` |
| 2.10 | AboutApproach | `about-approach.tsx` | `about_us/code.html:106-132` | Add `hover:border-primary` on hoverable border | `pending` |
| 2.11 | AboutTeam | `about-team.tsx` | `about_us/code.html` | Fix hashed colors → tokens, link "View all team" → `/team`, replace photo placeholders | `pending` |

### Interactions to Extract from Stitch

| Component | Stitch Class | Implementation | Status |
|-----------|-------------|----------------|--------|
| Focus cards | `hover:shadow-md transition-all group` | Wrap card in `group`, add transition | `done` |
| Focus card icon | `group-hover:bg-primary group-hover:text-on-primary transition-all` | Icon container swaps bg/text on group hover | `done` |
| Project image | `group-hover:scale-105 transition-transform duration-500` | Wrap `next/image` in `overflow-hidden`, add scale | `done` (scale done; still a gradient placeholder, not `next/image` — see Image Placeholder Inventory #6) |
| CTA buttons | `hover:scale-105 active:scale-95 transition-transform` | Add to all CTA buttons | `done` |
| Footer links | `hover:underline` | Add underline decoration | `done` — `hover:underline decoration-swel-navy-mid/30` |
| Nav links | `hover:scale-105 inline-block transition-transform` | Extend existing nav hover states | `done` |

---

## Phase 3: Build Remaining Pages

**Goal:** All 7 linked routes return 200 with meaningful content sourced from stitch
extraction layouts.

| # | Route | Stitch Reference | Sections | Status |
|---|-------|------------------|----------|--------|
| 3.1 | `/research` | `docs/pages/projects/code.html` | Hero, Project grid, Filter bar, CTA | `pending` |
| 3.2 | `/blog` | `docs/pages/blog/code.html` | Hero, Article grid, Categories, Newsletter | `pending` |
| 3.3 | `/get-involved` | None (new from patterns) | Why partner, Researcher path, Institution path, CTA | `pending` |
| 3.4 | `/contact` | `docs/pages/contact/code.html` | Form, Address, Map placeholder | `pending` |
| 3.5 | `/publications` | None (new) | Filterable list, PubMed embed | `pending` |
| 3.6 | `/team` | `about_us/code.html` (team section) | Full team grid with headshots + bios | `pending` |
| 3.7 | `/impact` | None (new) | Stats, Map/where, Annual report download | `pending` |
| 3.8 | `/learning` | `docs/pages/learning_platform/code.html` | Course list, Resources | `pending` |

### Page Shell Template

Each new page follows this pattern:

```tsx
// app/<route>/page.tsx
import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'SWEL — <Page Title>',
  description: '<SEO description>',
}

export default function Page() {
  return (
    <>
      <Nav />
      <main>{/* Section components */}</main>
      <Footer />
    </>
  )
}
```

---

## Phase 4: Boilerplate + Polish

**Goal:** No dead links, no broken UX, all routes resolve.

| # | Task | Files | Status |
|---|------|-------|--------|
| 4.1 | Create `ComingSoon` placeholder component | `components/coming-soon.tsx` — new | `pending` |
| 4.2 | Wire `/privacy`, `/terms`, `/access`, `/report` to `ComingSoon` | `app/privacy/page.tsx` etc. — 4 new page files | `pending` |
| 4.3 | Fix social links in footer (or remove `href="#"`) | `footer.tsx` | `pending` |
| 4.4 | Fix hero CTA "VIEW PUBLICATIONS" → link to `/publications` | `hero.tsx:46` | `pending` |
| 4.5 | Hide search button until search feature is scoped | `nav.tsx:48-53` | `superseded` — search button restored as a styled, non-functional icon for visual parity with stitch nav, per stakeholder direction (2026-06-12, see DECISIONS.md D8) |
| 4.6 | Fix "View all team" link → `/team` | `about-team.tsx:44` | `pending` |
| 4.7 | Add per-page `<title>` and meta description to all routes | `app/*/page.tsx` | `pending` |

---

## Redesign Iterations (Tracked Separately)

These are logged as GitHub issues for future sprints. Do not implement in the
current design-as-is pass.

| ID | Issue | Source | GitHub |
|----|-------|--------|--------|
| R1 | Partners/funders logo section on homepage | RESEARCH.md §4 | TBD |
| R2 | Newsletter/mailing list signup (footer or dedicated) | RESEARCH.md §4 | TBD |
| R3 | High-profile endorsement quote block on homepage | RESEARCH.md §4 | TBD |
| R4 | Annual report download page/section | RESEARCH.md §4 | TBD |
| R5 | Personal stories / patient narratives section | RESEARCH.md §5 | TBD |
| R6 | Geographic map / Where We Work page section | RESEARCH.md §5 | TBD |
| R7 | Institutional affiliation bar in footer | RESEARCH.md §4 | TBD |

---

## Image Placeholder Inventory

| # | Component | File | Line | Purpose | Status |
|---|-----------|------|------|---------|--------|
| 1 | Hero | `hero.tsx` | 7 | Background (gradient div) | `pending` |
| 2 | AboutSection | `about-section.tsx` | 49 | Right column image | `pending` |
| 3 | AboutHero | `about-hero.tsx` | 23 | Right column image | `pending` |
| 4 | AboutProblem | `about-problem.tsx` | 18, 30 | Card icons ×2 (div blocks) | `pending` |
| 5 | AboutMissionVision | `about-mission-vision.tsx` | 18 | Decorative icon | `pending` |
| 6 | FeaturedProjects | `featured-projects.tsx` | 57 | Project image ×2 | `pending` |
| 7 | ThinkPieces | `think-pieces.tsx` | 53 | Author avatar ×3 | `pending` |
| 8 | AboutTeam | `about-team.tsx` | 57 | Team member photo ×4 | `pending` |
| 9 | CTABlock | `cta-block.tsx` | 13 | Hexagon icon | `done` — swapped to `BookOpen` (lucide), matching stitch's `local_library` icon |

**Total: 17 placeholder elements** (vs 7 originally tracked in Issue [#6](https://github.com/wechulisimiyu/swel/issues/6). Additional avatars tracked in [#12](https://github.com/wechulisimiyu/swel/issues/12)).

---

## Decisions Log Reference

Current open decisions tracked in `docs/DECISIONS.md`:

| ID | Question | Blocks | Status |
|----|----------|--------|--------|
| D1 | Which design spec is canonical? | Phase 1 | Pending — Figma is target, stitch extraction is interim |
| D2 | Two home-page variants — keep or kill? | Phase 2 | Pending |
| D3 | Which Radix neutral scale? (`slate` vs `sand` vs `gray`) | Phase 1 | Blocked by D1 |
| D4 | Which Radix primary/accent scale? | Phase 1 | Blocked by D1 |
| D5 | Footer links — implement all or trim? | Phase 4 | Pending |
| D6 | Image real assets — source unknown? | Phase 2/3 | Needs stakeholder input |
| D7 | Shape language conflict (sharp vs rounded mix) | Phase 1 | Pending |
| D8 | Search button — hide or implement? | Phase 4 | Hide for now |
| D9 | Social link destinations in footer | Phase 4 | Needs stakeholder input |
| D10 | `/access` route meaning (accessibility vs institutional) | Phase 4 | Needs stakeholder input |

---

*Last updated: 2026-06-09*
