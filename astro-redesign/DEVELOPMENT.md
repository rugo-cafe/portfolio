# development guidelines

## structure
- `src/styles/global.css`: semantic design tokens, typography, baseline accessibility.
- `src/components/SectionHeading.astro`: shared section heading.
- `src/components/ProjectRow.astro` and `ProjectStage.astro`: project listing and responsive image system.
- `src/components/{Hero,Projects,About,Experience,Contact,Navbar}.astro`: page sections with locally scoped CSS.
- `src/components/ProjectDetail.astro`: project detail content and next-project navigation.
- `src/data/projects.ts`: bilingual project data and stable slugs.
- `src/i18n/ui.ts`: translated UI and experience copy.
- `src/scripts/project-previews.ts`: delegated hover/focus image selection.
- `src/scripts/motion.ts`: optional intersection-based entrance motion.
- `src/scripts/theme.ts`: persistent color mode.

## implementation standards
- Start with semantic Astro HTML and accessible links; JS enhances, never replaces content.
- Keep design decisions in tokens. Scoped CSS handles component layout. Avoid one-off global overrides.
- Use `--ease-out`, `--ease-standard`, `--speed-fast` and `--speed-medium` for consistent transitions.
- Animate only `transform` and `opacity`; never add blur-driven scrolling reveals or long-running animation loops.
- Before adding movement, test keyboard navigation and `prefers-reduced-motion`.
- Desktop may enhance with hover/focus previews; mobile must expose all project images inline.
- Preserve PT/EN parity, project URLs, headings and alt text.
- Update `DESIGN_DIRECTION.md` when a visual decision changes.
- Validate `npm ci && npm run build && node scripts/check-build.mjs`.
- Before merging: review desktop, tablet, narrow mobile, light/dark, touch, keyboard, reduced motion and image load behavior. Compilation is not visual QA.

## adding a project
1. Add slug and localized content in `src/data/projects.ts`.
2. Add the preview asset to `public/projects/`.
3. Verify the responsive row, project detail and translated routes.
4. Do not invent impact metrics or badges; demonstrate the work with real decisions and artifacts.
