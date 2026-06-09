# Open Design Decisions

This file logs unresolved design decisions with context, recommended paths, and what blocks on each.

---

## D1: Canonical color palette — which design spec wins?

**Status:** Blocked — needs UX research (Issue #2)

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

**Status:** Blocked by D1

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

**Status:** Blocked by D1

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
