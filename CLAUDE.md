@AGENTS.md

# Project conventions

## Brand
- Brand name = `{BRAND}` constant in `src/lib/brand.ts` — single rename point once Pahuna/Roost/Hearth is final
- Never hardcode the brand name in JSX or copy — always import from `src/lib/brand.ts`

## Architecture
- Next.js 14+ App Router with TypeScript
- Tailwind CSS v4 (CSS-based config in `globals.css`, `@theme inline` block)
- Server components by default; `"use client"` only for animated/interactive components
- All copy in `src/content/*.ts` files (not hardcoded in JSX) — enables Hindi localisation later

## Animation
- Animation components live in `src/components/motion/` — always reuse, never inline new variants
- 3D scenes in `src/components/three/`, always dynamically imported with `next/dynamic`, always with static fallback image
- Never add a second Canvas to a page
- Never animate `width/height/top/left` — transforms + opacity only
- Respect `prefers-reduced-motion` globally

## Design tokens (in globals.css @theme)
- **Palette:** espresso `#2B1D16`, cream `#FAF6EF`, terracotta `#C96F3D`, leaf `#3E7C59`, ink `#1A1A1A`
- **Fonts:** Display = Cabinet Grotesk (Space Grotesk placeholder) · Body = Inter · Mono = JetBrains Mono
- **Signature element:** the receipt — section dividers, stats cards, 3D hero

## Performance
- Target: Lighthouse mobile >= 85
- Mobile-first: test every section at 360px width
- Images: `next/image`, WebP, lazy below the fold
- Every 3D canvas lazy-loaded with static image fallback
- Max ONE Three.js scene per page (the hero)

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
