import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable static site generation
  output: 'static',
  site: 'https://travis.lol',
  base: '/travislolsite/',
});
