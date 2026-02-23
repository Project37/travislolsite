import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';

export default defineConfig({
  integrations: [astroIcon()],
  // Enable static site generation
  output: 'static',
  site: 'http://travis.lol', // Changed https back to http
  base: '/', // Correct base for custom domain
  trailingSlash: 'always',
});
