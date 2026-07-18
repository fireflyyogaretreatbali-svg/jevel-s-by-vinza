# JEVEL by VINZA — Luxury Jewelry Website

Production-ready Next.js 15 (App Router) storefront scaffold for JEVEL by VINZA.

## Stack
Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · GSAP · shadcn/ui primitives · Lucide Icons

## Getting started
```bash
npm install
npm run dev
```
Build for production:
```bash
npm run build && npm run start
```

## Design system

**Palette**
- `--bg` `#0A0A0B` — near-black stage, not flat pure black (keeps depth in shadows)
- `--ink` `#F6F3EC` — warm ivory text, not pure white (avoids clinical glare)
- `--gold` `#D4AF37` — primary accent
- `--gold-light` `#F1D48C` — hover/shine state
- `--gold-deep` `#8A6A1F` — pressed/border state, low-key dividers
- `--line` `rgba(212,175,55,0.14)` — hairline rules & card borders

**Type**
- Display: *Playfair Display* — headlines, prices, product names. Used large, tight tracking, restrained (never for body copy).
- Body/UI: *Inter* — everything functional: nav, buttons, descriptions, forms.

**Signature element — the Facet Cut**
Every luxury site defaults to rounded cards and soft gradients. JEVEL's signature is the **facet cut**: card corners, image frames, dividers and the loader ring are all clipped along an octagonal "gem facet" path (see `lib/facet.ts` / `.facet-card` utility class) instead of `border-radius`. It's the one geometric idea reused everywhere — hero panel, product cards, testimonial cards, newsletter panel — so the diamond motif is structural, not decorative.

## Structure
```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD
  page.tsx           Home page composition
  globals.css        Design tokens, base styles, facet utilities
components/
  Loader.tsx          Intro diamond-to-logo animation
  CursorGlow.tsx       Luxury tracking cursor
  ScrollProgress.tsx   Top scroll progress bar
  Navbar.tsx           Sticky transparent nav + search
  Hero.tsx             Hero section w/ parallax
  SectionHeading.tsx   Shared eyebrow/heading pattern
  CollectionsGrid.tsx  Featured collections
  ProductCard.tsx      Product card w/ wishlist, quick view, add to cart
  ProductRail.tsx      Horizontal product rail (rings/necklaces/etc.)
  Testimonials.tsx     Client testimonials carousel
  InstagramGallery.tsx Social proof grid
  AboutBrand.tsx        Brand story section
  Newsletter.tsx        Email capture
  Footer.tsx             Site footer
  WhatsAppButton.tsx      Floating contact button
  ThemeToggle.tsx          Dark/Light mode switch
lib/
  data.ts             Product & content data
  facet.ts            Shared clip-path constant
```

## What's scaffolded vs. next steps
Included, working: full home page, design system, loader, cursor, scroll progress, product cards with wishlist/quick-view state (client-side), theme toggle, JSON-LD/OpenGraph/Twitter metadata, semantic HTML, image optimization via `next/image`, code-split client components.

Not included (flagged as the natural next milestone): `/shop` listing route with real filter/sort/search logic, `/product/[slug]` detail route with gallery zoom + reviews, cart persistence (would use Zustand or React Context + a commerce backend), auth/account pages, and a real payment integration. The data layer (`lib/data.ts`) is shaped so these routes can be added without restructuring anything above.

## Performance/SEO checklist already in place
- `next/font` for Playfair Display + Inter (no layout shift, self-hosted)
- `next/image` everywhere, explicit sizes, priority only on the hero image
- Route-level code splitting is automatic under App Router; heavy client components (`Loader`, `CursorGlow`) are isolated so they don't block server-rendered content
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`), one `h1` per page, alt text on every image
- `prefers-reduced-motion` respected in `globals.css` and in the motion components
- Metadata API in `app/layout.tsx` (OpenGraph, Twitter card, canonical) + `Product`/`Organization` JSON-LD

Running an actual Lighthouse pass requires a deployed/built instance — do that after `npm run build && npm run start` against a real host; the scaffold is written to the checklist above but a 100/100/100/100 score also depends on final image assets and hosting.
