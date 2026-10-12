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
console.log('static smoke checks passed: 2 languages, 8 project pages, essential landmarks.');
