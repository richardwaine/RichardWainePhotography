# Site Architecture Documentation

## Current Site Structure (Based on Sitemap Analysis)

### Core Pages
- **Homepage** (`/`) - Portfolio showcase with testimonial-driven design
- **About** (`/michael-schacht/`) - Photographer bio and personal story
- **Pricing** (`/headshot-pricing/`) - Service packages and rates
- **Contact** (`/contact/`) - Contact form and studio information
- **Consultation** (`/consultation/`) - Booking and consultation page

### Service-Specific Pages
- **Group Headshots** (`/group-headshots/`) - Corporate team photography services
- **Business Headshots** (`/bookabusinessheadshot/`) - Professional headshot services

### Supporting Pages
- **Workshop** (`/workshop/`) - Photography education and training offerings
- **Links** (`/links/`) - Social media hub and resource directory
- **Privacy Policy** (`/privacy-policy/`) - Legal compliance
- **Terms & Conditions** (`/terms-and-conditions/`) - Legal compliance

## Content Organization Strategy

### Markdown File Structure
```
/content/
  pages/
    home.md              # Homepage content and portfolio references
    about.md             # Personal story and bio
    pricing.md           # Service packages and pricing tiers
    contact.md           # Contact information and form content
    consultation.md      # Booking process and consultation info
    group-headshots.md   # Corporate photography services
    business-headshots.md # Professional headshot services  
    workshop.md          # Education and training content
    links.md             # Social media and resources
    privacy-policy.md    # Legal content
    terms-conditions.md  # Legal content
  testimonials/
    [individual-client-testimonials.md] # One file per testimonial
  blog/
    [future-blog-posts.md] # Expandable blog content
  portfolio/
    [image-metadata.md]  # Rich metadata for portfolio images
```

## Homepage Content Strategy

### Testimonial-Driven Design Approach
- **Client quotes as hero elements** - Testimonials are primary design components, not sidebar content
- **Contextual portfolio organization** - Images grouped by story/service type with descriptive headlines
- **Conversion-focused headlines** - Examples: "RECEIVE THE CELEBRITY TREATMENT", "A UNIQUE TWIST ON THE TRADITIONAL HEADSHOT"
- **Integrated social proof** - Reviews woven throughout the experience, not relegated to separate sections
- **Strategic visual hierarchy** - Pattern: Compelling headline → client testimonial → relevant portfolio grid → repeat

### Portfolio Image Organization
- **50+ portfolio images** on homepage for rich content and engagement
- **Contextual grouping** - Images organized by story/service type, not random galleries
- **Service differentiation** - Clear visual separation between business headshots, creative portraits, etc.
- **Rich metadata** - Every image tagged for schema optimization and analytics

### About Page Interactive Design
- **Instagram-inspired square grid** - Visual consistency with hover interactions
- **Q&A format** - Questions as headlines, answers revealed on hover/tap
- **Personality showcase** - "20 Questions" approach to reveal photographer personality
- **Engagement tracking** - Monitor which questions generate most interaction

## Navigation Strategy

### Header Design
- **Clean, minimal approach** - Focus on single clear CTA (sales funnel)
- **Primary CTA button** - Main conversion action prominently displayed
- **Minimal navigation** - Avoid overwhelming users with choices

### Footer as Primary Navigation
- **Complete site navigation** - All pages accessible from footer
- **Brand elements** - Logo, colors, typography showcase
- **Interactive states** - Hover actions and state changes
- **Contact information** - Multiple ways to connect
- **Social proof** - Links to social media and testimonials

## Content Management Approach

### Front Matter Strategy
Each markdown file includes rich metadata:
```yaml
---
title: "Page Title"
description: "SEO description"
featured_image: "/images/hero-image.jpg"
schema_type: "Service" # For JSON-LD generation
last_updated: "2024-MM-DD"
priority: 1.0 # For sitemap generation
---
```

### Image Metadata
Portfolio images include comprehensive data:
```yaml
---
image_id: "unique-identifier"
title: "Descriptive title"
category: "business-headshots"
client_type: "corporate"
location: "Chicago studio"
camera_settings:
  focal_length: "85mm"
  aperture: "f/1.8"
  camera: "Canon 5D Mark IV"
keywords: ["professional", "headshot", "corporate"]
---
```

## SEO and Schema Implementation

### Page-Level Schema
- **Photographer/Business schema** for main pages
- **Service schema** for each photography type
- **ImageObject schema** for all portfolio images
- **FAQ schema** for common questions
- **Review schema** for testimonials

### URL Structure
- Clean, descriptive URLs matching current structure
- Automatic sitemap generation from content files
- Proper canonical URLs and meta tags