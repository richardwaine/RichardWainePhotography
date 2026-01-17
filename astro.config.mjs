


// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.richardwainephotography.com',
  integrations: [ mdx(), sitemap()],
  build: {
    inlineStylesheets: 'always'
  },
  redirects: {
    '/home': '/',
    '/new-folder': '/',
    '/requst-proposal': '/request-proposal',
    '/blog-2/why-headshots-are-so-expensive': '/',
    '/blog/2017/6/18/perceived-flaws-and-self-acceptance': '/blog/perceived-flaws-and-self-acceptance',
    '/blog-2/tkeowv0pj4eiucblmdznyhax0dhz6l': '/blog/how-to-prepare-for-your-professional-headshot-session',
    '/blog-content/why-being-photographed-is-scarier-than-dating-taylor-swift': '/blog/why-being-photographed-is-scarier-than-dating-taylor-swift',
    '/contact-philadelphia-and-lancaster-headshot-photographer': '/contact-lancaster-headshot-photographer-richard-waine',
    '/blog/the-best-way-to-make-more-money': '/blog/the-best-way-to-make-more-money',
    '/blog-content/your-brand-is-not-about-you': '/blog/your-brand-is-not-about-you',
    '/blog/planning-professional-headshots-website-redesigns': '/blog/planning-headshots-for-websites',
    '/what-photographers-dont-tell-you-about-headshots': '/blog/what-photographers-dont-tell-you-about-headshots',
    '/shop/power-hour-headshot-session': '/',
    '/portfolio': '/',
    '/student-sessions': '/',
    '/contact': '/contact-lancaster-headshot-photographer-richard-waine',
    '/before-and-after': '/',
    '/stylist': '/my-team',
    '/blog-content/*': '/blog/:splat',
    '/blog-2/*': '/blog/:splat',
    '/client-experiences': '/'
  }
});