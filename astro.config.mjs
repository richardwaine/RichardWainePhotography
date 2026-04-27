


// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://richardwainephotography.com',
  trailingSlash: 'always',
  devToolbar:{
enabled:false
  },
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        return {
          ...item,
          lastmod: new Date()
        };
      }
    }),
  ],
  build: {
    inlineStylesheets: 'always'
  }
  // Redirects handled by Cloudflare _redirects file (proper 301s)
  // Do NOT add redirects here - Astro generates HTML meta-refresh files which cause GSC "page with redirect" errors
});