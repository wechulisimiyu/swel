# /new-token

Add a new design token to the SWEL design system.

## When to use
A new color, font size, or spacing value appears in a CSS spec that isn't already in `app/globals.css`.

## Process

### 1. Check existing tokens first
Read `app/globals.css` and confirm the value isn't already defined under a different name.

### 2. Name the token
Follow the existing convention:
- Colors: `--color-swel-<descriptor>` → maps to `bg-swel-<descriptor>`, `text-swel-<descriptor>`
- Fonts: `--font-<name>`
- Custom spacing/sizing: use Tailwind arbitrary values `[value]` unless the value recurs 3+ times

### 3. Add to `@theme {}`
Open `app/globals.css` and add inside the existing `@theme {}` block:
```css
@theme {
  /* existing tokens ... */
  --color-swel-new-name: #hexvalue;
}
```

### 4. Use the token
Replace every raw `[#hexvalue]` usage in components with the new token class.

### 5. Update the token table
Update the token reference table in `.claude/commands/implement-section.md` so future sessions know about it.
