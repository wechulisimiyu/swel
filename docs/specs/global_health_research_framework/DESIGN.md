---
name: Global Health Research Framework
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#46464e'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#77767f'
  outline-variant: '#c7c5cf'
  surface-tint: '#565b86'
  primary: '#171c43'
  on-primary: '#ffffff'
  primary-container: '#2d325a'
  on-primary-container: '#969bc9'
  inverse-primary: '#bfc3f4'
  secondary: '#5e5e5c'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdc'
  on-secondary-container: '#636360'
  tertiary: '#2d1d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#46320b'
  on-tertiary-container: '#b79a6a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bfc3f4'
  on-primary-fixed: '#13183f'
  on-primary-fixed-variant: '#3f446d'
  secondary-fixed: '#e4e2de'
  secondary-fixed-dim: '#c8c6c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#474744'
  tertiary-fixed: '#ffdeaa'
  tertiary-fixed-dim: '#e2c28f'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#59431b'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.75'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: '0'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

The visual identity of this design system is anchored in **Academic Minimalism**. It is designed to evoke a sense of peer-reviewed credibility, quiet authority, and intellectual rigor. The system avoids decorative flourishes, opting instead for a "content-first" approach that prioritizes data legibility and research accessibility. 

The aesthetic is professional and balanced, utilizing significant white space to allow complex global health data to breathe. It reflects the intersection of medical surgical precision and social equity, using a refined color palette and structured layout to guide users through high-density information without cognitive overload.

## Colors

The palette is derived from the professional landscape of surgical research and global institutions.

*   **Primary (Deep Indigo):** Used for primary navigation, headings, and key call-to-action buttons. It provides the "weight" of the brand.
*   **Secondary (Soft Beige):** Used as the main background surface for cards or page sections to soften the contrast compared to pure white, enhancing long-form reading comfort.
*   **Accent (Light Gold):** Reserved for high-value highlights, such as citations, featured data points, or "New Research" badges.
*   **System Coral:** A tertiary accent used sparingly for interactive states or to highlight specific equity-focused outliers in data visualizations.
*   **Neutrals:** A range of slate-greys for body text and borders to maintain a softer, more sophisticated look than true black.

## Typography

This design system utilizes **Inter** for all typographic needs to ensure a systematic, utilitarian, and modern feel. 

*   **Headings:** Set in Bold with tighter letter spacing to create a sense of impact and structural hierarchy.
*   **Body Copy:** Leverages a generous 1.7x to 1.75x line height. This "large line spacing" is critical for research papers and long-form data analysis, reducing eye strain and improving reading speed.
*   **Labels:** Small, uppercase labels with increased letter-spacing are used for metadata, category tags, and overlines to provide clear taxonomic distinction.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop (1200px max-width) to mimic the structure of academic journals. 

*   **Rhythm:** An 8px base grid governs all padding and margins.
*   **Whitespace:** "Breathability" is a core principle. Sections should be separated by substantial vertical padding (80px+) to allow the user to mentally reset between different research topics.
*   **Alignment:** Strong left-alignment is maintained throughout the system to reflect a structured, document-like flow.

## Elevation & Depth

This design system uses **Ambient Shadows** to create a sense of organized layering without looking overly "techy" or flashy.

*   **Surface Tiers:** Backgrounds are primarily white or Soft Beige. Cards use a pure white surface to pop against the beige background.
*   **Shadow Profile:** Shadows are extremely diffused (Blur: 20-30px) and low opacity (2-4%). They should feel like a subtle lift rather than a physical drop shadow.
*   **Interactive Depth:** On hover, cards may transition to a slightly deeper shadow to provide tactile feedback, emphasizing that the research item is selectable.

## Shapes

The shape language balances modern software aesthetics with professional restraint.

*   **Corners:** A consistent 8px to 12px radius is applied to cards and buttons. This "Rounded" approach softens the academic content, making the lab feel approachable and human-centric rather than cold or institutional.
*   **Iconography:** Use 2px stroke-weight line icons. Icons should be functional and literal (e.g., a simple flask for "Lab", a document for "Publication"), avoiding abstract or overly stylized metaphors.

## Components

### Cards
Cards are the primary container for research previews. They feature a white background, the 8-12px corner radius, and a 1px soft border in a light neutral tone. Content inside cards should follow the 1.7 line-height rule.

### Buttons
*   **Primary:** Solid Deep Indigo with white text.
*   **Secondary:** Ghost style with a 1px Deep Indigo border or a soft beige fill.
*   **States:** Subtle color shifts (darkening by 5%) on hover.

### Inputs & Selectors
Fields use a Soft Beige fill in their default state to blend with the page, moving to a white background with a Primary color border on focus.

### Micro-animations
Animations must be functional, not decorative:
*   **Transitions:** Use `ease-out` with a duration of 200ms for hover states.
*   **Page Loads:** Subtle vertical fade-ins (20px slide) for section headers to lead the eye.
*   **Data Viz:** Simple line-drawing animations for charts to indicate the direction of data trends.

### Research-Specific Components
*   **Citation Tooltip:** A specialized pop-over component for academic references.
*   **Metric Badges:** Small, pill-shaped chips using the Light Gold accent to highlight "Impact Factor" or "Peer Reviewed" status.