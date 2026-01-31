# Tech Stack Documentation

## Core Framework
- **Next.js** - React framework with static export capability
- **React** - Component-based UI with hooks
- **TypeScript** (recommended) - Type safety and better development experience
- **Tailwind CSS** - Utility-first styling with mobile-first approach

## Performance & Images
- **Next.js Image Component** - Automatic optimization, WebP conversion, responsive sizing
- **Sharp** - Image processing engine (built into Next.js)
- **Static Site Generation** - Pre-rendered pages for maximum performance

## Animation & Interactions  
- **Framer Motion** - Smooth animations optimized for 60fps
- **Scroll-triggered animations** for portfolio engagement
- **Page transitions** and micro-interactions

## Content Management
- **Markdown + Front Matter** - Content separated from code
- **Gray-matter** - Front matter parsing
- **Remark** - Markdown processing
- **Next-MDX-Remote** - React components in markdown (if needed)

## SEO & Analytics
- **Built-in Next.js SEO** - Meta tags, sitemaps, structured data
- **Schema.org JSON-LD** - Rich snippets and AI optimization
- **Google Analytics 4** - Custom event tracking
- **BigQuery pipeline preparation** - Data warehouse integration

## Development Tools
- **Git** - Version control (self-hosted Gitea)
- **ESLint + Prettier** - Code formatting and quality
- **VS Code** - Editor with Next.js extensions

## Deployment & Hosting
- **AWS S3** - Static file hosting (current setup)
- **CloudFront** - CDN for global performance
- **GitHub Actions** - Automated deployment pipeline from Gitea
- **SSL** - Already configured

## Third-Party Integrations
- **Formspree** - Contact form handling (current setup)
- **Acuity Scheduling** - Booking system embed (current setup)
- **Stripe** - Payment processing (current setup)

## Image Quality Settings
- **Default quality**: 75 (0-100 scale)
- **Hero images**: 85-90 for maximum impact
- **Thumbnails**: 70 for faster loading
- **Automatic format selection**: WebP/AVIF for modern browsers

## Browser Support
- Modern browsers with ES6+ support
- Progressive enhancement for older browsers
- Mobile-first responsive design

## Performance Targets
- **Core Web Vitals** compliance
- **Lighthouse score** 90+ on all metrics
- **Image optimization** automatic and transparent
- **Lazy loading** for all non-critical images