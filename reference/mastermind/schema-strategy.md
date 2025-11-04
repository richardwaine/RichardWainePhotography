# Schema Strategy for AI Search Optimization

## Overview
Comprehensive Schema.org implementation designed to optimize for AI-powered search summaries (Google SGE, ChatGPT search, Perplexity, etc.). AI systems increasingly use structured data to understand and summarize content for users.

## Core Schema Types Implementation

### 1. Photographer/Business Schema (Site-wide)
```json
{
  "@context": "https://schema.org",
  "@type": "Photographer", 
  "name": "Michael Schacht",
  "url": "https://312elements.com",
  "description": "Professional photographer specializing in headshots, corporate photography, and personal branding",
  "areaServed": "Chicago, IL Metro Area",
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chicago",
    "addressRegion": "IL"
  },
  "sameAs": ["https://instagram.com/312elements"],
  "knowsAbout": ["Wedding Photography", "Portrait Photography", "Headshots", "Corporate Photography"]
}
```

### 2. ImageObject Schema (Per Portfolio Image)
```json
{
  "@type": "ImageObject",
  "contentUrl": "/portfolio/corporate-headshot-chicago.jpg",
  "caption": "Professional corporate headshot in Chicago studio setting",
  "creditText": "Michael Schacht Photography - 312 Elements",
  "keywords": ["corporate headshot", "professional photography", "Chicago photographer"],
  "locationCreated": "312 Elements Studio, Chicago, IL",
  "dateCreated": "2024-MM-DD",
  "photographicTechnique": "Studio Portrait",
  "exifData": {
    "focalLength": "85mm",
    "aperture": "f/1.8", 
    "camera": "Canon 5D Mark IV",
    "lens": "Canon 85mm f/1.8"
  }
}
```
### 3. Service Schema (Per Photography Type)
```json
{
  "@type": "Service",
  "name": "Corporate Headshot Photography",
  "description": "Professional headshot photography for business professionals and executives",
  "provider": {
    "@type": "Photographer",
    "name": "Michael Schacht"
  },
  "areaServed": "Chicago Metro Area",
  "serviceType": "Photography",
  "offers": {
    "@type": "Offer",
    "priceRange": "$400-$800",
    "availability": "Available year-round"
  }
}
```

### 4. FAQ Schema (AI Summary Optimization Gold)
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's included in your headshot photography package?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Professional headshot session includes consultation, studio or location shoot, professional retouching, and high-resolution digital files with print release."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book a headshot session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I recommend booking 2-4 weeks in advance to ensure availability, especially during busy seasons."
      }
    }
  ]
}
```

### 5. Review/Testimonial Schema
```json
{
  "@type": "Review",
  "reviewBody": "Amazing experience from beginning to end. Working with Mike is like hanging out with an old friend.",
  "reviewRating": {
    "@type": "Rating", 
    "ratingValue": 5,
    "bestRating": 5
  },
  "author": {
    "@type": "Person",
    "name": "Kathryn V"
  },
  "reviewAspect": "Photography Quality"
}
```

### 6. Article Schema (For Blog Posts)
```json
{
  "@type": "Article",
  "headline": "5 Tips for Perfect Professional Headshots",
  "author": {
    "@type": "Person", 
    "name": "Michael Schacht"
  },
  "datePublished": "2024-MM-DD",
  "image": "/blog/headshot-tips-hero.jpg",
  "articleSection": "Photography Tips"
}
```

## AI Optimization Strategy

### Photography-Specific Advantages
- **Rich image metadata** - Help AI understand your expertise and photographic style
- **Structured service descriptions** - Clear pricing, location, specialties for AI recommendations
- **FAQ content** - Directly answers user queries that AI systems commonly reference
- **Technical photography details** - Camera settings, techniques for photography-specific searches
- **Location data** - Geographic relevance for local search AI optimization
- **Testimonial structure** - Social proof that AI can reference in recommendations

### Implementation Approach
- **Auto-generate schema from markdown front matter** - Efficient content management
- **Image schema from EXIF data + manual metadata** - Rich technical information
- **Service schema for each photography type offered** - Clear service differentiation
- **FAQ schema from common client questions** - Direct AI query optimization
- **Review schema integrated with testimonial content** - Social proof optimization

### Content Strategy for AI
- **Answer common photography questions** in FAQ format
- **Include technical specifications** (equipment, techniques, processes) 
- **Provide clear service descriptions** with pricing and availability
- **Use location-specific keywords** for local search optimization
- **Structure testimonials** with specific aspects (quality, experience, professionalism)

## Measurement and Optimization
- **Track AI-sourced traffic** in Google Analytics
- **Monitor featured snippet appearances** in search results
- **Test schema markup** with Google's Rich Results Test
- **Analyze which structured data** generates most AI recommendations
- **Refine FAQ content** based on actual user queries