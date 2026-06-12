# Open Design Decisions

This file logs unresolved design decisions with context, recommended paths, and what blocks on each.

---

## D1: Canonical color palette — which design spec wins?

**Status:** Resolved (interim) — stitch extraction is source of truth pending Figma

**Resolution:** The stakeholder Figma (Figma Make, "Incorporate new color scheme") could not
be extracted programmatically (auth-gated SPA, no REST/MCP path for Make files). Per
direction, the `docs/pages/*/code.html` stitch extractions are the interim ground truth —
all 7 stitch pages share one consistent MD3-style token set. `app/globals.css` `swel-*`
tokens have been remapped to the exact stitch hex values (see D3/D4). `swel-navy` (#111C2D)
and `swel-heading`/`swel-body`/`swel-tag`/`swel-label` already matched stitch exactly and
are unchanged. When the Figma export becomes available, only these token values need to
change — components consume the `swel-*` variables, not raw hex.

**Context:** The extracted designs in `docs/pages/` and `docs/specs/` contain two
distinct color systems:

| Spec | Primary | Background | Accent | Vibe |
|---|---|---|---|---|
| Academic Editorial | `#000000` | `#f7f9fb` | None (contrast via B&W) | Cool, crisp, editorial |
| Global Health Research Framework | `#171c43` | `#fbf9f8` | Gold `#ffdeaa` | Warm, credentialed, academic |

The current codebase (`app/globals.css`) blends both — `swel-navy` (`#111C2D`)
and `swel-navy-mid` (`#2D325A`) lean warm-indigo, while `swel-bg-light` (`#F7F9FB`)
and `swel-bg-grey` lean cool. Radix UI Colors was raised as the target palette
system, so whichever spec wins, colors should be mapped to Radix scales.

**Recommendation:** Wait for the copywriting/UX deep research (Issue #2). The
chosen voice (warm academic vs crisp editorial) should drive the palette, not
the other way around. Once research returns, pick one spec (or a hybrid) and
map every color to a Radix scale step.

**Blocks:** Issue #3 (design tokens), Issue #4 (new pages)

---

## D2: Two home-page variants — keep or kill?

**Status:** Pending

**Context:** `docs/pages/home/` and `docs/pages/home_prominent_logo/` are two
versions of the homepage — the only difference is the hero logo size/placement.
The rest of the layout is identical.

**Recommendation:** Choose one before building out the rest of the pages. The
prominent-logo variant reads more like a brand landing page; the standard variant
reads more like an institutional lab site. Unless the stakeholder wants both as
A/B test variants, keeping both is dead weight.

**Blocks:** Nothing directly, but adds unnecessary surface area during page builds.

---

## D3: Radix UI Colors — which neutral scale?

**Status:** Resolved (interim) — dropped Radix scales, use exact stitch hex values

**Resolution:** Neither `sand` nor `slate` matches the stitch extraction exactly (stitch's
`background`/`surface` `#f7f9fb`, `surface-container-low` `#f2f4f6`,
`surface-container` `#eceef0`, `outline-variant` `#c6c6cd` are all custom blue-grays, not
on the Radix sand or slate ramps). Per "do not miss an inch", `swel-bg`, `swel-bg-light`,
`swel-bg-grey`, `swel-bg-card`, `swel-border`, `swel-divider`, and `swel-subtle` now hold
these exact stitch hex values directly. The `@radix-ui/colors` CSS imports were removed
from `app/globals.css` (no longer referenced).

**Context:** Radix offers 6 neutral scales with different undertones:

| Scale | Undertone | Matches current codebase? |
|---|---|---|
| `slate` | Blue-tinted | Closest to `swel-bg-light` `#F7F9FB` |
| `sage` | Green-tinted | No |
| `olive` | Lime-tinted | No |
| `sand` | Yellow-tinted | Closest to `swel-bg` `#FBF9F8` |
| `mauve` | Purple-tinted | No |
| `gray` | True neutral | No |

**Recommendation:** If Academic Editorial wins (cool), use `slate`. If Global
Health wins (warm), use `sand`. If hybrid, use `sand` as base with `slate`
accents.

**Blocks:** Issue #3 (design tokens)

---

## D4: Radix UI Colors — which primary/ accent scales?

**Status:** Resolved (interim) — dropped Radix indigo, use exact stitch MD3 accent tones

**Resolution:** `swel-accent` (`#d8e3fb`, stitch `tertiary-fixed`), `swel-accent2`
(`#dae2fd`, stitch `primary-fixed`), `swel-accent3` (`#d5e3fc`, stitch
`secondary-container`), `swel-accent-line` (`#bcc7de`, stitch `tertiary-fixed-dim`), and
`swel-cta-light` (`#dae2fd`, stitch `primary-fixed`) now hold the exact stitch hex values
instead of Radix `indigo` approximations. `swel-navy` (`#111c2d`) remains the brand anchor
— it already matches stitch's `tertiary-container`/`on-tertiary-fixed` exactly.

**Context:** Radix provides 20+ color scales (blue, indigo, violet, ruby, etc.).
SWEL's brand anchor `#2D325A` falls roughly in the `indigo` or `violet` range.
The accent in the warm spec is gold (`--amber-` or `--yellow-` in Radix).

**Recommendation:** Map the brand anchor to `indigo` (step 9) and test against
actual SWEL logo colors. Use `amber` or `yellow` for accent highlights if
warm spec wins; skip accent entirely if cool spec wins.

**Blocks:** Issue #3 (design tokens)

---

## D5: Footer links — implement all or trim?

**Status:** Pending (tracked in Issue #6)

**Context:** The current footer links to 7 routes: `/team`, `/impact`,
`/publications`, `/report`, `/privacy`, `/terms`, `/access`. Only `/team`,
`/impact`, and `/publications` are content pages. The legal pages (`/privacy`,
`/terms`, `/access`) are standard boilerplate that could be deferred.

**Recommendation:** Implement team, impact, and publications as real pages.
Defer legal pages to a separate pass with a single "coming soon" placeholder.
Do not delete the footer links — broken links erode trust even more than
thin pages.

**Blocks:** Issue #4 (which pages to build first)

---

## D6: Image real assets — source unknown

**Status:** Blocked — needs stakeholder input

**Context:** 7 components have placeholder `<div>`s where real images should go.
The Figma URL from the stakeholder contains the target color scheme but may or
may not contain actual image assets. The `docs/pages/*/screen.png` files show
screenshots with stock/placeholder imagery.

**Recommendation:** Determine whether the stakeholder expects real photography
(lab photos, headshots, operating room), illustration, or generated imagery.
This affects the WebP conversion pipeline (Issue #5) and whether we need a
photography/video shoot or can use stock/illustration.

**Blocks:** Issue #5 (image asset pipeline)

---

## D7: Shape language — sharp vs rounded?

**Status:** Resolved — standardized on rounded (8-12px+), per stitch

**Resolution:** Codebase already predominantly used `rounded-lg`/`rounded-xl`/`rounded-2xl`/
`rounded-full`, matching stitch. Cleaned up the two outliers: `rounded-sm` (sharp 2px, in
`about-mission-vision.tsx`) → `rounded-lg`, and `rounded-[2rem]` → `rounded-[32px]` (in
`learning/page.tsx`) for consistent notation with stitch's `rounded-[32px]` CTA blocks.

**Context:** The two design specs are in direct conflict and both are used in the codebase:

| Spec | Corner style |
|------|-------------|
| Academic Editorial | 0px radius everywhere (sharp corners) |
| Global Health Research Framework | 8-12px radius (rounded cards/buttons) |

The current codebase uses a mix: `rounded-sm`, `rounded-lg`, `rounded-xl`,
`rounded-2xl`, `rounded-[32px]`, `rounded-full` — no consistent rationale.

**Recommendation:** The stitch extraction (`docs/pages/home/code.html`) predominantly
uses `rounded-xl` (12px) on cards and `rounded-lg` (8px) on buttons, with
`rounded-[32px]` on the CTA block. Standardize to the Global Health spec (8-12px)
as it matches the extracted designs most closely.

**Blocks:** Phase 1 (design system), #8 (dedicated shape language issue)

---

## D8: Search functionality — hide or implement?

**Status:** Resolved (2026-06-12)

**Context:** `nav.tsx` renders a Search icon button with no `onClick` handler,
no search modal, no search route. It is a dead UI element.

**Resolution:** Per stakeholder direction, restored as a styled, non-functional
icon button (visual parity with the stitch nav, which has the same
non-functional placeholder). If search becomes a real requirement, scope it as
a separate feature with a dedicated search page or modal — tracked under #9.

**Blocks:** #9 (dedicated search issue, if/when scoped)

---

## D9: Social link destinations

**Status:** Blocked — needs stakeholder input

**Context:** Footer social icons (Twitter/X, LinkedIn, Email) are hardcoded to
`href="#"`. The icons exist but have no destination URLs.

**Recommendation:** Remove the icons or replace `#` with real SWEL social media
URLs. If SWEL has no social media presence, remove the icons entirely — dead
links are worse than no links.

**Blocks:** Phase 4 (polish), #10 (dedicated social links issue)

---

## D10: `/access` route meaning

**Status:** Blocked — needs stakeholder input

**Context:** The footer lists "Institutional Access" under the Legal column,
linking to `/access`. It is unclear whether this refers to:
- **Accessibility** (a11y compliance, WCAG statement)
- **Institutional login** (single sign-on for researchers)
- **Surgical access** (publications about surgical access — matches lab mission)

The page is 404. The label "Institutional Access" suggests SSO/login, but that
is unusual for an academic lab website.

**Recommendation:** Clarify with stakeholder. Most likely option: rename to
"Accessibility" and link to an a11y statement page. If it's SSO, that's a
significant feature and should be tracked separately.

**Blocks:** Phase 4 (polish), #12 (dedicated /access issue)
