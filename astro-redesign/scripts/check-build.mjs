import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/** Validate essential static routes and navigation after Astro's production build. */
const dist = join(process.cwd(), 'dist');
const slugs = ['riji', 'coisas-bonitas', 'ambi-mixer', 'dither-studio'];
for (const [prefix, expectedLang] of [['', 'pt-br'], ['en', 'en']]) {
  const home = join(dist, prefix, 'index.html');
  assert.ok(existsSync(home), 'missing homepage: ' + home);
  const html = readFileSync(home, 'utf8');
  assert.ok(html.includes('lang="' + expectedLang + '"'), 'wrong document lang: ' + prefix);
  for (const id of ['main-content', 'projects', 'about', 'experience', 'contact']) {
    assert.ok(html.includes('id="' + id + '"'), 'missing section ' + id + ' in ' + prefix);
  }
  for (const slug of slugs) {
    const page = join(dist, prefix, 'projects', slug, 'index.html');
    assert.ok(existsSync(page), 'missing project page: ' + page);
    assert.ok(html.includes('/projects/' + slug), 'missing project link for ' + slug);
    assert.ok(readFileSync(page, 'utf8').includes('id="main-content"'), 'missing skip target: ' + slug);
  }
}
const layoutSource = readFileSync(join(process.cwd(), 'src/layouts/Layout.astro'), 'utf8');
assert.ok(!layoutSource.includes('ClientRouter'), 'ClientRouter can introduce an unwanted page crossfade');
assert.ok(!layoutSource.includes('scripts/motion'), 'global scroll-reveal animation must not run');
const portfolioSource = readFileSync(join(process.cwd(), 'src/components/Projects.astro'), 'utf8');
assert.ok(portfolioSource.includes('ProjectPlate'), 'project gallery should be artifact-based, not hidden previews');
const archiveGallery = readFileSync(join(process.cwd(), 'src/components/Projects.astro'), 'utf8');
const archivePlate = readFileSync(join(process.cwd(), 'src/components/ProjectPlate.astro'), 'utf8');
const archiveMotion = readFileSync(join(process.cwd(), 'src/scripts/archive-motion.ts'), 'utf8');
assert.ok(archiveGallery.includes('ArchiveRail') && archiveGallery.includes('data-archive-gallery'), 'archive index is missing');
assert.ok(archivePlate.includes('data-archive-plate') && archivePlate.includes('data-archive-glyph'), 'project glyph hooks are missing');
assert.ok(archiveMotion.includes('requestAnimationFrame') && archiveMotion.includes('prefers-reduced-motion'), 'accessible scroll logic is missing');
assert.ok(!/\.style\.opacity\b|setProperty\(['"]opacity['"]|\.animate\(/.test(archiveMotion), 'scroll interaction must not hide and flash content');
const detail = readFileSync(join(process.cwd(), 'src/components/ProjectDetail.astro'), 'utf8');
const identity = readFileSync(join(process.cwd(), 'src/components/ArtifactIdentity.astro'), 'utf8');
const hero = readFileSync(join(process.cwd(), 'src/components/Hero.astro'), 'utf8');
assert.ok(detail.includes('ArtifactIdentity') && identity.includes('data-identity'), 'project-specific identity should appear in detail pages');
assert.ok(!detail.includes('.tiny,.eyebrow,.case-path,.identity-wrapper {'), 'case metadata styling regression');
assert.ok(hero.includes('design de interfaces e desenvolvimento web') && hero.includes('interface design and web development'), 'both languages need a factual introduction');
for (const lang of ['', 'en']) {
  const html = readFileSync(join(dist, lang, 'index.html'), 'utf8');
  for (const slug of slugs) {
    assert.ok(html.includes('id="artifact-' + slug + '"'), 'missing in-page artifact anchor: ' + slug);
  }
}
console.log('static smoke checks passed: 2 languages, 8 project pages, essential landmarks.');
