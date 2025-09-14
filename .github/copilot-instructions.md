# Copilot Instructions for ecommerce-web-app

## Project Overview
- This is a Next.js (TypeScript) e-commerce web app, bootstrapped with `create-next-app` and using the `/src/app` directory for routing and pages.
- The architecture is modular: each major page (cart, billing, category, product, thankyou) has its own folder under `src/app/`, with corresponding UI logic in `src/components/`.
- Shared UI components are in `src/components/common/` (e.g., `Button.tsx`, `ItemCard.tsx`, `PriceRangeSlider.tsx`).
- The `public/` directory contains static assets (SVGs, images, fonts) organized by type and usage.

## Key Patterns & Conventions
- **Component Structure:** All React components use TypeScript and are function components. Page-level components are in `src/app/[page]/page.tsx`, while reusable UI is in `src/components/`.
- **Styling:** Global styles are in `src/app/globals.css`. Component-specific styles are colocated or use CSS modules if present.
- **Type Definitions:** Shared types/interfaces are in `src/types/` (e.g., `items.ts`, `formItems.ts`).
- **HOCs:** Higher-order components are in `src/hocs/` (e.g., `withButtonStyle.tsx`).
- **Index Files:** `src/components/index.ts` and `src/components/common/index.ts` re-export components for cleaner imports.

## Developer Workflows
- **Development:**
  - Start with `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`).
  - Main entry: `src/app/layout.tsx` (global layout) and `src/app/page.tsx` (home page).
- **Adding Pages:**
  - Create a new folder under `src/app/` with a `page.tsx` file.
  - Add related UI in `src/components/[PageName]/`.
- **Adding Components:**
  - Place shared UI in `src/components/common/`.
  - Use/extend types from `src/types/`.
- **Assets:**
  - Add images/SVGs to `public/` in the appropriate subfolder.

## Integration & External Dependencies
- Uses Next.js built-in routing, font optimization, and static asset handling.
- No custom backend or API integration is present in this codebase (as of this version).
- No explicit test setup or scripts are present; add tests as needed following Next.js/React conventions.

## Examples
- To add a new product page: create `src/app/product/page.tsx` and implement UI in `src/components/ProductPage/`.
- To add a new type: add to `src/types/items.ts` or create a new file in `src/types/`.

## References
- See `README.md` for getting started and deployment instructions.
- See `src/components/` for UI patterns and composition.
- See `src/types/` for data modeling.

---

**For AI agents:**
- Follow the modular structure and reuse existing components/types where possible.
- Maintain file/folder naming consistency.
- Prefer colocating related files (component, styles, types) for new features.
- If unsure about a pattern, check similar features (e.g., how `CartPage` or `ProductPage` are structured).
