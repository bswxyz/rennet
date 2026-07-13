import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://bswxyz.github.io/rennet/
// Built output goes to ./docs so Pages can serve straight from main + /docs.
export default defineConfig({
  site: 'https://bswxyz.github.io',
  base: '/rennet',
  outDir: './docs',
});
