# development guidelines

## current structure
- `src/styles/global.css`: semantic color/type/space tokens and baseline accessibility.
- `src/components/Hero.astro`: personal introduction and external links.
- `src/components/ProjectPlate.astro`: individual project object in the responsive gallery.
- `src/components/Projects.astro`: gallery layout and source data.
- `src/components/{About,Experience,Contact,Navbar}.astro`: self-contained Astro sections with scoped styles.
- `src/components/ProjectDetail.astro`: project document with dedicated visual treatment.
- `src/data/projects.ts`: localized project data; unique slugs; no invented outcomes.
- `src/scripts/theme.ts`: user/system dark mode setting.

## standards
1. semantic HTML first; optional scripts only for meaningful interactive behavior.
2. all content appears immediately; do not use scroll reveal animations or duplicate router crossfades.
3. avoid generic card patterns, giant titles, glass and decorative shadow effects.
4. compose each artifact with its own geometry; never rely on hover to expose essential images or information.
5. use design tokens for repeatable decisions and scoped CSS for component layout.
6. support `prefers-reduced-motion`, keyboard navigation, legible focus rings and native links.
7. keep `pt` and `en` aligned. the home and each of four project pages must compile in both.
8. do not include an avatar photo until the owner approves a replacement.

## testing
- `npm ci && npm run build && node scripts/check-build.mjs`.
- build tests check structure and routes, **not** visual quality or live behavior.
- manually QA mobile/desktop/light/dark/keyboard/hover/loading before any aesthetic release.
- update `DESIGN_DIRECTION.md` when the direction changes.

## adding projects
add translated content and an asset to `src/data/projects.ts`; ensure links work and image alt is meaningful. only publish concrete work and honestly sourced claims.
