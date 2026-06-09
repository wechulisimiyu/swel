# Issue Tracker

All issues filed against the SWEL redesign. Each is self-contained and
addresses one concern. Links are to the GitHub issue.

---

| # | Title | Link | Status |
|---|-------|------|--------|
| 1 | Open design decisions log | [#1](https://github.com/wechulisimiyu/swel/issues/1) | Filed |
| 2 | Docs sweep: archive, organize, deduplicate | [#2](https://github.com/wechulisimiyu/swel/issues/2) | Filed |
| 3 | Deep research: copywriting & UX for academic health-equity sites | [#3](https://github.com/wechulisimiyu/swel/issues/3) | Research delivered → `docs/RESEARCH.md` |
| 4 | Design tokens: single source of truth from Radix UI Colors | [#4](https://github.com/wechulisimiyu/swel/issues/4) | Filed (22 hex instances, not 4) |
| 5 | Missing pages: research, blog, get-involved, contact, team, publications, impact | [#5](https://github.com/wechulisimiyu/swel/issues/5) | Filed (+ `/publications`, `/report`, `/learning`) |
| 6 | Image asset pipeline: WebP + next/image | [#6](https://github.com/wechulisimiyu/swel/issues/6) | Filed (17 placeholders, not 7) |
| 7 | Footer dead links: decide vs implement | [#7](https://github.com/wechulisimiyu/swel/issues/7) | Filed (+ social `#` links, `/access` ambiguity) |
| 9 | Shape language inconsistency: sharp vs rounded mix across components | [#9](https://github.com/wechulisimiyu/swel/issues/9) | Filed |
| 10 | Search button in nav has no handler | [#10](https://github.com/wechulisimiyu/swel/issues/10) | Filed |
| 11 | Footer social links all point to `#` | [#11](https://github.com/wechulisimiyu/swel/issues/11) | Filed |
| 12 | Author avatar placeholders missing from image count | [#12](https://github.com/wechulisimiyu/swel/issues/12) | Filed |
| 13 | `/access` route meaning ambiguous (accessibility vs institutional) | [#13](https://github.com/wechulisimiyu/swel/issues/13) | Filed |

---

## Dependency Graph

```
#1 (decisions log) — ongoing, updated as decisions are made

#2 (docs sweep)
  └── #3 (copy research) ✅ → docs/RESEARCH.md
        └── #4 (design tokens)
              └── #5 (missing pages)
                    ├── #6 (images)
                    └── #7 (footer links)

#9 (shape language) — depends on D7 resolution in #1
#10 (search handler) — independent, low priority
#11 (footer social #) — related to #7
#12 (author avatars) — related to #6
#13 (/access ambiguity) — related to #7
```

## Research Deliverables

| Document | Purpose | Status |
|----------|---------|--------|
| `docs/RESEARCH.md` | 6-site copy/UX audit: tone patterns, trust signals, CTA analysis, page UX patterns | Complete |
| `docs/IMPLEMENTATION.md` | 25-step phased tracker with dependency graph, image inventory, decisions cross-ref | Complete |
| `docs/DECISIONS.md` | 10 open design decisions with context + recommendations | Updated (D7-D10) |

## Redesign Iteration Issues (Future)

| # | Title | Link | Source |
|---|-------|------|--------|
| 14 | [R1] Partners/funders logo section on homepage | [#14](https://github.com/wechulisimiyu/swel/issues/14) | RESEARCH.md §4 |
| 15 | [R2] Newsletter/mailing list signup | [#15](https://github.com/wechulisimiyu/swel/issues/15) | RESEARCH.md §4 |
| 16 | [R3] High-profile endorsement quote block on homepage | [#16](https://github.com/wechulisimiyu/swel/issues/16) | RESEARCH.md §4 |
| 17 | [R4] Annual report download page | [#17](https://github.com/wechulisimiyu/swel/issues/17) | RESEARCH.md §4 |
| 18 | [R5] Personal stories / patient narratives | [#18](https://github.com/wechulisimiyu/swel/issues/18) | RESEARCH.md §5 |
| 19 | [R6] Geographic map / Where We Work | [#19](https://github.com/wechulisimiyu/swel/issues/19) | RESEARCH.md §5 |
| 20 | [R7] Institutional affiliation bar in footer | [#20](https://github.com/wechulisimiyu/swel/issues/20) | RESEARCH.md §4 |
