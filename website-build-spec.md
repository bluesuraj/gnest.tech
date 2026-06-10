# Marketing Website — Build Specification
**Product:** Cafe-first POS SaaS (working names: Pahuna / Roost / Hearth — use `{BRAND}` placeholder until final)
**Market:** India, cafe vertical first; restaurant & guest house shown as "coming soon"
**Stack:** Next.js 14+ (App Router, TypeScript) · Tailwind CSS · Framer Motion · React Three Fiber + Drei · GSAP ScrollTrigger · Lenis
**Reference structure:** loyverse.com (structure only — all copy below is original, written for this product)

---

## 0. Global rules (apply to every page)

### Tech & performance
- Server components by default; `"use client"` only for animated/3D components
- Every 3D canvas lazy-loaded: `next/dynamic(() => import(...), { ssr: false })` with a static image fallback
- Max ONE Three.js scene per page (the hero). Everything else = Framer Motion / GSAP
- Lenis smooth scroll wrapped once in root layout
- `prefers-reduced-motion` respected globally — all animations disabled, content visible
- Target: Lighthouse mobile ≥ 85. Cafe owners browse on mid-range Android phones
- Images: `next/image`, WebP, lazy below the fold
- SEO: per-page metadata, OpenGraph, JSON-LD (`SoftwareApplication` + `FAQPage` schema), sitemap.xml, robots.txt

### Shared layout
- **Navbar** (sticky, blurs on scroll): Logo · Features · Pricing · Business Types (dropdown: Café / Restaurant–soon / Guest House–soon) · Help · "Sign in" · **"Start free"** CTA button
  - Animation: shrinks + background blur after 80px scroll (Framer Motion `useScroll`)
- **Footer**: Product links · Business types · Resources (Blog, Help, API docs) · Legal (Privacy, Terms) · Social · App store badges
  - Animation: subtle fade-up on enter viewport
- **Page transitions**: Framer Motion `AnimatePresence` in template.tsx — fade + 12px slide-up, 0.35s
- **Floating WhatsApp chat button** on every page (this is the support channel — make it prominent, bottom-right, gentle pulse every 8s)

### Animation vocabulary (reuse, don't reinvent per page)
| Pattern | Tool | Use |
|---|---|---|
| `<FadeUp>` | Framer Motion `whileInView` | Every section heading + body, 0.5s, once |
| `<StaggerGrid>` | Framer Motion variants | Feature cards, 80ms stagger |
| `<CountUp>` | Framer Motion `useSpring` | Stats (cafes onboarded, bills generated) |
| `<ScrubScreens>` | GSAP ScrollTrigger pin | Phone mockup swapping app screens while section scrolls |
| `<TiltCard>` | Framer Motion `useMotionValue` | Pricing cards, hardware cards — 3D tilt on hover |
| `<MarqueeRow>` | CSS animation | Logos / testimonials strip |
| Hero 3D | R3F + Drei `<Float>` `<PresentationControls>` | One per page, see per-page spec |

### Design tokens (starting point — refine in CLAUDE.md)
- **Palette:** deep espresso `#2B1D16`, warm cream `#FAF6EF`, terracotta-chai accent `#C96F3D`, leaf green `#3E7C59` (success/"free"), ink `#1A1A1A`
- **Type:** Display: "Clash Display" or "Cabinet Grotesk" (characterful, used in heroes only) · Body: "Inter" · Numerals/data: "JetBrains Mono" (bills, prices, stats)
- **Signature element:** the **receipt** — section dividers styled as torn receipt edges, stats printed in mono type on a receipt card, the 3D hero prints a receipt. The receipt is the brand motif across every page.
- Rounded-xl cards, soft shadows, generous whitespace. Warm and chai-stall friendly, not corporate-blue SaaS.

---

## 1. Home — `/`

**Job:** convince a cafe owner in 8 seconds that billing can be live today, free to start.

1. **Hero**
   - H1: "The free POS your café can start billing with today"
   - Sub: "Turn any Android phone or tablet into a full point of sale. Works offline, GST-ready, set up in minutes — no new hardware to buy."
   - CTAs: "Start free" (primary) · "See it work — 2 min" (secondary, opens demo video modal)
   - **3D (R3F):** floating tablet running the POS UI (texture = app screenshot on a rounded box mesh), gently rotating via `<PresentationControls>`; on first load, a 3D receipt slides out of the tablet and unfurls (the signature moment). `<Float speed={2}>`, city environment preset.
   - Trust strip below: "GST invoices ✓ · Works offline ✓ · Free to start ✓"

2. **Social proof bar** — `<CountUp>` stats on a receipt-styled card: cafes onboarded · bills printed · avg. setup time ("under 30 minutes to first bill"). `<MarqueeRow>` of pilot cafe logos when available; until then, neighbourhood names ("Trusted by cafés in Hauz Khas, Shahpur Jat, Gurgaon…").

3. **Feature deep-dive (the Loyverse-style anchored tabs)** — sticky side nav (Billing · Payments · Inventory · Reports · Staff · Customers · Multi-outlet) + `<ScrubScreens>`: phone mockup pinned while screens swap per scroll section. Each block: icon, H3, 3–4 bullets, "Explore →" link. Copy angles:
   - **Billing:** "Take orders and print GST invoices in seconds — even when the internet drops." (offline-first is the headline differentiator)
   - **Payments:** "UPI, cards, cash — record every payment the way your customers already pay."
   - **Inventory:** "Know when the milk runs low before the morning rush does."
   - **Reports:** "Yesterday's sales on your phone before your first chai."
   - **Staff:** "PINs for every barista. See who sold what."
   - **Customers:** "Remember regulars. Reward repeat visits."
   - **Multi-outlet:** "One account, every counter." (mark as "Growing with you")

4. **"Built for your business"** — `<StaggerGrid>` of vertical cards: **Café** (active, links to /cafe-pos) · Coffee shop · Bakery · Cloud kitchen · **Restaurant** (badge: Coming soon) · **Guest house** (badge: Coming soon). Hover: `<TiltCard>`.

5. **Why cafés switch to us** — 3 columns vs incumbents (no naming competitors): "No hardware lock-in — your phone is the POS" · "Flat monthly price, no per-feature surprises" · "Real humans on WhatsApp, in your language".

6. **Testimonials** — `<MarqueeRow>` of quote cards from design-partner cafes (placeholder slots for 3–5 pilot quotes).

7. **FAQ** (accordion, Framer Motion height animation + FAQPage JSON-LD): Is it really free? · Does it work offline? · Is it GST-compliant? · What hardware do I need? (answer: none — BYOD) · How fast can I start billing?

8. **Final CTA band** — full-width terracotta, H2: "Print your first bill today." Button + WhatsApp link. Background: subtle animated receipt-paper texture drifting (CSS, cheap).

---

## 2. Features — `/features`

**Job:** the long-form version of homepage section 3, for evaluators.

- Hero (no 3D here — fast page): H1 "Everything a café needs. Nothing it doesn't." + sticky in-page tab nav
- 8 alternating left/right sections (screenshot · copy), each `<FadeUp>` with screenshot sliding in from its side
- Order: Billing & KOT → Offline mode (give this its own section with an animated wifi-off → receipt-still-prints micro-illustration) → GST invoicing → Payments → Inventory → Reports → Staff → Customer loyalty
- Comparison table near bottom: "Free plan vs Pro plan" feature matrix (rows animate in with stagger)
- CTA band

---

## 3. Pricing — `/pricing`

**Job:** show flat, predictable pricing; kill the "hidden cost" fear.

- Hero: H1 "One flat price. Every feature. No per-bill cuts."
- **3D (light):** three pricing cards with `<TiltCard>` (skip R3F here — tilt is enough); monthly/annual toggle with Framer Motion layout animation on prices (`<CountUp>` morph)
- Tiers: **Free** (single device, core billing, GST invoices) · **Pro** (inventory, staff, reports, WhatsApp support priority) · **Multi-outlet** (coming soon, "Talk to us")
- "What's always free" checklist section
- Cost-comparison calculator (interactive): "What do you pay your current POS yearly?" slider → savings figure animates. (Client component, simple state)
- FAQ: contracts? hardware cost? per-transaction fees? GST on subscription?
- CTA band

---

## 4. Café POS — `/cafe-pos` (the beachhead landing page — highest effort)

**Job:** SEO landing for "cafe POS / cafe billing software India"; speaks only to cafe owners.

1. Hero — H1 "The POS made for Indian cafés" · sub mentions KOT, counter billing, UPI, GST.
   - **3D (R3F):** stylised low-poly coffee cup with animated steam (shader or particle sprites) floating beside a phone showing the cafe menu screen. `<Float>` both, slight parallax with pointer.
2. "A morning at your café" — **GSAP pinned horizontal-scroll timeline**: 7am opening → rush-hour billing offline → low-stock alert on milk → evening report on the owner's phone. Each beat = illustration + one line. This is the page's signature scroll moment.
3. Cafe-specific features grid: menu with modifiers (oat milk +₹40), table/token numbers, KOT printing, UPI QR on receipt, day-end summary on WhatsApp
4. Pilot program invite block: "Be one of our 5 founding cafés" — perks list + short inline form (name, cafe name, WhatsApp number). This is the design-partner funnel.
5. Testimonial spotlight (one big quote, pilot cafe)
6. FAQ (cafe-specific) + CTA band

---

## 5. Restaurant POS — `/restaurant-pos` · 6. Guest House — `/guesthouse-pos`

**Job:** capture SEO + waitlist without promising what isn't built.

- Same template, light pages: Hero with "Coming soon" eyebrow · 3 planned-feature cards (KDS, table management / room-folio billing) · **Waitlist form** (email + WhatsApp) with confetti micro-animation on submit · "Meanwhile, see what we built for cafés →"
- 3D: reuse homepage tablet scene with different accent colour — don't build new scenes for these.

---

## 7. Hardware — `/hardware`

**Job:** reinforce BYOD; remove the "do I need to buy a machine?" objection.

- Hero: H1 "Bring the device you already own" · 3D (R3F): phone + tablet + bluetooth thermal printer floating as a trio, slow orbit
- "Works with" grid: Android phone · Android tablet · iPad · 58mm/80mm Bluetooth thermal printers · barcode scanner · cash drawer — each card hover-lifts; compatible-model list in expandable accordion
- "Recommended starter setup under ₹X" section with a sample receipt printing animation (CSS keyframes: receipt slides out of printer illustration)
- CTA band

---

## 8. About — `/about`

- Hero: founding story — "Built in Delhi, for the chai-and-croissant economy"
- Mission section, values cards (`<StaggerGrid>`), founder photos with hover tilt
- Roadmap strip: Café → Restaurant → Guest House (animated progress line draws on scroll — SVG path + Framer Motion `pathLength`)

---

## 9. Help / Support — `/help`

- Search-style hero ("How can we help?")
- Category cards: Getting started · Billing · GST & invoices · Printers · Account
- Big WhatsApp support block: "Message us, get a reply in minutes" + hours
- Can start as static; later link to a real help-center subdomain

---

## 10. Blog — `/blog` (phase 2, scaffold routes now)

- Index grid + `[slug]` MDX pages. SEO workhorse later (e.g. "GST rules for café billing 2026").

---

## 11. Auth/CTA endpoints (stubs now)
- `/signup`, `/login` → can redirect to app subdomain later; build styled placeholder pages so every CTA resolves.

---

## 12. Build order for Claude Code

1. Scaffold: layout.tsx (fonts, Lenis, AnimatePresence), navbar, footer, design tokens in Tailwind config
2. Shared animation components: FadeUp, StaggerGrid, CountUp, TiltCard, MarqueeRow, ScrubScreens
3. Home page (everything except 3D — use static hero image placeholder)
4. Hero3D component (tablet + receipt scene), drop into home
5. /cafe-pos (including GSAP horizontal timeline), /pricing, /features
6. /hardware, /about, /help, coming-soon pages, stubs
7. SEO pass: metadata, JSON-LD, sitemap, OG images
8. Performance pass: bundle check, lazy 3D, Lighthouse mobile ≥ 85

## 13. CLAUDE.md notes (add to repo root)

- Brand name = `{BRAND}` constant in `src/lib/brand.ts` — single rename point once Pahuna/Roost/Hearth is final
- Animation components live in `src/components/motion/` — always reuse, never inline new variants
- 3D scenes in `src/components/three/`, always dynamically imported, always with static fallback image
- All copy in `src/content/*.ts` files (not hardcoded in JSX) — makes Hindi localisation possible later
- Never add a second Canvas to a page; never animate `width/height/top/left` (transforms + opacity only)
- Mobile-first: test every section at 360px width
