---
name: Academic Editorial
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#111c2d'
  on-tertiary-container: '#79849a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-display:
    fontFamily: Newsreader
    fontSize: 4.5rem
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Newsreader
    fontSize: 2.25rem
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Newsreader
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.75'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.05em
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 32px
  margin-page: 64px
  section-gap: 128px
---

## Brand & Style
This design system is anchored in the visual language of high-end global journalism and academic publishing. It prioritizes intellectual authority and clarity over decorative elements, utilizing a "Minimalist-Editorial" approach. The aesthetic is defined by intentional asymmetry, significant whitespace (macro-typography), and a rigid adherence to a structural grid. 

The emotional response should be one of profound trust and quiet confidence. By stripping away unnecessary UI flourishes, the focus remains entirely on data-driven insights and rigorous research. The style communicates that the content is peer-reviewed, globally significant, and definitive.

## Colors
The palette is restricted to a scholarly spectrum of Deep Navy and Slate to ensure high contrast and legibility. 

- **Primary (Deep Navy):** Used for primary navigation, headings, and critical calls to action to establish immediate authority.
- **Secondary (Slate):** Employed for meta-data, captions, and secondary information, providing a softer hierarchy than the primary navy.
- **Backgrounds:** Primarily a "Crisp White" (#FFFFFF) to mimic high-quality paper stock. A very light neutral tint (#F8FAFC) is used sparingly for section differentiation to maintain a structured, organized feel.
- **Accent:** No vibrant accent colors are used; instead, "high-impact" is achieved through the stark contrast between the deep navy and white.

## Typography
The typography system relies on the interplay between the traditional authority of **Newsreader** and the modern efficiency of **Inter**.

- **Headlines:** Set in Newsreader with tight tracking and optical sizing. Display sizes should feel like a masthead—commanding and elegant.
- **Body Text:** Inter is utilized for all long-form reading and functional UI elements. A generous line-height (1.6 to 1.75) is essential to prevent "grey walls" of text and ensure high readability for complex research papers.
- **Labels:** Small-caps Inter is used for categories, breadcrumbs, and tags to provide a distinct visual break from the serif headings and sans-serif body.

## Layout & Spacing
This design system employs a **Fixed Grid** system for desktop (12 columns) and a fluid system for mobile. 

- **Macro-spacing:** Use significant vertical gaps (128px+) between major sections to allow the content to "breathe" and to signal transitions in research topics.
- **Micro-spacing:** Built on a 4px baseline grid. All elements should align to this grid to maintain a rigorous, mathematical discipline.
- **Alignment:** Content is primarily left-aligned to mirror the scanning patterns of academic journals. Right-rail layouts are used for citations, authors, and related data to keep the primary reading column clean.

## Elevation & Depth
Depth is created through **Subtle Borders** and tonal shifts rather than shadows. This system avoids the use of "elevation" in the traditional sense to maintain its flat, editorial aesthetic.

- **Borders:** Use 1px solid lines in a light Slate (#E2E8F0) to define sections, wrap cards, or separate navigation. This mimics the "column rules" found in newspapers.
- **Tonal Layers:** Subtle shifts between pure white and very light grey backgrounds indicate hierarchy.
- **Interactivity:** Elements do not lift on hover. Instead, hover states are indicated by color shifts (e.g., Deep Navy to Slate) or the appearance of a hairline underline.

## Shapes
The shape language is strictly **Sharp (0px roundedness)**. 

Every UI element—from buttons to input fields to images—must have hard 90-degree corners. This reinforces the "architectural" and "scholarly" feel of the system, distancing it from consumer-grade software and aligning it with institutional prestige. Circular shapes should only be used for functional icons or specific data visualizations (e.g., pie charts), never for containers or buttons.

## Components
- **Buttons:** Large, rectangular, and high-contrast. Primary buttons are solid Deep Navy with White text. Secondary buttons use a 1px Navy border with no fill.
- **Cards:** Simple containers defined by 1px Slate borders. No shadows. The focus within the card is the headline (Newsreader) and a concise summary (Inter).
- **Data Tables:** Extremely clean, using only horizontal rules to separate rows. No vertical lines. Headers are set in Inter Label-Caps for clarity.
- **Images:** Research-focused photography or medical illustrations. All images must be high-contrast and should ideally utilize a slightly de-saturated color profile to match the navy/slate palette.
- **Citations/Footnotes:** Small-scale Inter text, often placed in a dedicated right-hand gutter or at the bottom of sections, separated by a horizontal rule.
- **Search:** A prominent, full-width input field with a sharp border, emphasizing the "think tank" focus on information retrieval.