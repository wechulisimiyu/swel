# /add-assets

Process and wire in image assets when the user drops them into the project.

## Trigger
Use this when the user provides actual image files to replace placeholders.

---

## Step 1 — Convert everything to WebP

**All raster images MUST be WebP.** No JPG, no PNG, no JPEG in `public/`. If the user drops non-WebP files, convert them before placing:

```bash
# Single file
ffmpeg -i input.jpg -quality 85 public/images/output.webp

# Batch convert a directory
for f in /path/to/drops/*.{jpg,jpeg,png}; do
  name=$(basename "${f%.*}")
  ffmpeg -i "$f" -quality 85 "public/images/${name}.webp"
done
```

If `ffmpeg` is not available, try `cwebp`:
```bash
cwebp -q 85 input.jpg -o public/images/output.webp
```

**Quality guide:**
| Use | `-quality` |
|---|---|
| Hero / full-bleed background | 80 |
| Section images / cards | 85 |
| Author avatars / thumbnails | 75 |

---

## Step 2 — Place files

Put all images under `public/images/`:
```
public/
  images/
    hero-bg.webp
    about-lab.webp
    project-atlas.webp
    project-mentorship.webp
    author-*.webp
```

---

## Step 3 — Replace placeholder divs with `next/image`

Find every component that has an image placeholder comment or `<div>` standing in for an image. Replace with:

```tsx
import Image from "next/image";

// For known-dimension images (section images, project cards):
<Image
  src="/images/about-lab.webp"
  alt="Descriptive alt text"
  width={536}
  height={536}
  className="rounded-2xl object-cover"
/>

// For hero / full-bleed backgrounds:
<Image
  src="/images/hero-bg.webp"
  alt=""          // decorative — empty alt
  fill
  className="object-cover object-center"
  priority        // above the fold — always add priority to hero
/>

// For author avatars:
<Image
  src="/images/author-mensah.webp"
  alt="Dr. A. Mensah"
  width={32}
  height={32}
  className="rounded-full object-cover"
/>
```

**Rules:**
- `priority` on the hero image and any image in the first viewport
- `fill` + parent `position: relative` for background-style images
- Always provide meaningful `alt` text; use `alt=""` only for purely decorative images
- `object-cover` by default; use `object-contain` only for logos/SVGs
- Never use `<img>` — always `next/image`

---

## Step 4 — Set dimensions in the CSS spec

Cross-reference the CSS spec comments (the `width`/`height` values on each layer) for correct `width` and `height` props on `next/image`. When the spec uses `left: 0; right: 0` (fluid), use `fill` instead.

---

## Step 5 — Verify

- [ ] `public/images/` contains only `.webp` files (no jpg/png)
- [ ] No placeholder `<div>` elements remain in the components
- [ ] Images load in browser with no layout shift
- [ ] Hero image has `priority` prop
- [ ] `alt` text is set on every `<Image>`
- [ ] Terminal shows no TypeScript errors
- [ ] Run `pnpm build` to confirm no static analysis issues
