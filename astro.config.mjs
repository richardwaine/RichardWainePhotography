


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
  },
  redirects: {
    '/home': '/',
    '/new-folder': '/',
    '/portfolio': '/',
    '/student-sessions': '/',
    '/before-and-after': '/',
    '/client-experiences': '/',
    '/philadelphia-lancaster-headshot-client-experiences': '/',
    '/specials': '/',
    '/contact': '/contact-lancaster-headshot-photographer-richard-waine/',
    '/contact-philadelphia-and-lancaster-headshot-photographer': '/contact-lancaster-headshot-photographer-richard-waine/',
    '/stylist': '/my-team/',
    '/shop/power-hour-headshot-session': '/',
    '/requst-proposal': '/request-proposal/',
    '/blog-content/2016/11/7/who-needs-a-solid-headshot': '/blog/who-needs-a-solid-headshot/',
    '/blog-content/interview-with-a-retoucher-spotlight-on-pratik-naik': '/blog/interview-with-a-retoucher-spotlight-on-pratik-naik/',
    '/blog-content/interview-with-a-retoucher-spotli': '/blog/interview-with-a-retoucher-spotlight-on-pratik-naik/',
    '/blog/blog-2/linkedin-headshots': '/blog/linkedin-headshots/',
    '/blog/blog-2/what-is-a-professional-headshot': '/blog/what-is-a-professional-headshot/',
    '/blog-content/tag/*': '/blog/',
    '/blog-2/tag/*': '/blog/',
    '/blog/2017/6/18/perceived-flaws-and-self-acceptance': '/blog/perceived-flaws-and-self-acceptance/',
    '/blog-2/tkeowv0pj4eiucblmdznyhax0dhz6l': '/blog/how-to-prepare-for-your-professional-headshot-session/',
    '/blog-content/why-being-photographed-is-scarier-than-dating-taylor-swift': '/blog/why-being-photographed-is-scarier-than-dating-taylor-swift/',
    '/blog-content/your-brand-is-not-about-you': '/blog/your-brand-is-not-about-you/',
    '/blog/planning-professional-headshots-website-redesigns': '/blog/planning-headshots-for-websites/',
    '/what-photographers-dont-tell-you-about-headshots': '/blog/what-photographers-dont-tell-you-about-headshots/',
    '/blog-2/why-headshots-are-so-expensive': '/',
    '/blog/the-best-way-to-make-more-money': '/blog/the-best-way-to-make-more-money/',
    '/blog-content': '/blog/',
    '/blog-content/tune-in-to-your-expression': '/blog/',
    '/blog-content/what-makes-you-memorable': '/blog/',
    '/blog-content/2016/12/1/capture-one-pro-10-was-just-released': '/blog/',
    '/blog-content/how-a-simple-change-can-make-all-the-difference-in-front-of-the-camera': '/blog/',
    '/headshots-for-a-cure': '/',
    '/blog/blog-2/*': '/blog/:splat/',
    '/blog-content/*': '/blog/:splat/',
    '/blog-2/*': '/blog/:splat/'
  }
});