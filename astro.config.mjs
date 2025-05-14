import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable static site generation
  output: 'static',
  site: 'http://travis.lol', // Changed https back to http
  base: '/', // Correct base for custom domain
  trailingSlash: 'always',
});
