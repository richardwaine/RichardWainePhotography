/**
 * Schema.org Structured Data Utilities
 * Generates JSON-LD schema markup for SEO
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
}

export interface City {
  name: string;
  state: string;
}

export interface ServiceItem {
  name: string;
  description: string;
}

export interface AudienceItem {
  name: string;
  description: string;
}

export interface ReviewItem {
  author: string;
  rating: string;
  reviewBody: string;
  datePublished?: string;
  company?: string;
}

export interface VideoItem {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  embedUrl: string;
  duration?: string;
}

export interface VendorItem {
  name: string;
  url: string;
  category: string;
}

// ============================================
// SCHEMA BUILDER FUNCTIONS
// ============================================

/**
 * Builds FAQPage schema from FAQ data
 */
export function buildFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Builds HowTo schema for process steps
 */
export function buildHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.url && { "url": step.url })
    }))
  };
}

/**
 * Builds AggregateRating schema for reviews
 */
export function buildAggregateRatingSchema(
  businessName: string,
  ratingValue: string,
  reviewCount: string,
  businessUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "image": `${businessUrl}/images/logo.png`,
    "@id": businessUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$$"
  };
}

/**
 * Builds Person schema for photographer bio
 */
export function buildPersonSchema(
  name: string,
  jobTitle: string,
  description: string,
  websiteUrl: string,
  imageUrl: string,
  businessName: string,
  city: string,
  state: string,
  socialLinks: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "url": websiteUrl,
    "image": imageUrl,
    "worksFor": {
      "@type": "Organization",
      "name": businessName
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "sameAs": socialLinks,
    "knowsAbout": [
      "Professional Photography",
      "Headshot Photography",
      "Portrait Photography",
      "Business Photography",
      "Acting Headshots",
      "Corporate Photography"
    ]
  };
}

/**
 * Builds ImageGallery schema for portfolio galleries
 */
export function buildImageGallerySchema(
  name: string,
  description: string,
  photographerName: string,
  photographerTitle: string,
  imageUrls?: string[]
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": name,
    "description": description,
    "author": {
      "@type": "Person",
      "name": photographerName,
      ...(photographerTitle && { "jobTitle": photographerTitle })
    }
  };

  if (imageUrls && imageUrls.length > 0) {
    schema.image = imageUrls;
  }

  return schema;
}

/**
 * Builds Service schema with offer catalog for multiple services
 */
export function buildServiceCatalogSchema(
  businessName: string,
  city: string,
  state: string,
  services: ServiceItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Professional Headshot Photography",
    "provider": {
      "@type": "LocalBusiness",
      "name": businessName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "addressCountry": "US"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Headshot Photography Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    }
  };
}

/**
 * Builds Service schema with audience targeting
 */
export function buildServiceAudienceSchema(
  businessName: string,
  city: string,
  state: string,
  audiences: AudienceItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Professional Headshot Photography by Profession",
    "provider": {
      "@type": "LocalBusiness",
      "name": businessName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "addressCountry": "US"
      }
    },
    "audience": audiences.map(audience => ({
      "@type": audience.name === "Companies" ? "BusinessAudience" :
               audience.name === "Performers" ? "ProfessionalAudience" : "BusinessAudience",
      "name": audience.name,
      "description": audience.description
    }))
  };
}

/**
 * Builds LocalBusiness schema with service areas
 */
export function buildLocalBusinessSchema(
  businessName: string,
  description: string,
  city: string,
  state: string,
  latitude: string,
  longitude: string,
  phone: string,
  websiteUrl: string,
  serviceCities: City[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": description,
    "image": `${websiteUrl}/images/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Downtown Lancaster",
      "addressLocality": city,
      "addressRegion": state,
      "postalCode": "17603",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "areaServed": serviceCities.map(city => ({
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": city.state
      }
    })),
    "priceRange": "$$$",
    "telephone": phone,
    "url": websiteUrl
  };
}

/**
 * Builds Offer schema for pricing
 */
export function buildOfferSchema(
  offerName: string,
  description: string,
  pricePerImage: string,
  sessionFee: string,
  businessName: string,
  city: string,
  state: string,
  websiteUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": offerName,
    "description": description,
    "price": pricePerImage,
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": pricePerImage,
      "priceCurrency": "USD",
      "unitText": "per image"
    },
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Session Fee",
      "value": sessionFee,
      "unitCode": "USD"
    },
    "seller": {
      "@type": "LocalBusiness",
      "name": businessName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "addressCountry": "US"
      }
    },
    "itemOffered": {
      "@type": "Service",
      "name": "Individual Headshot Photography Session",
      "description": description
    },
    "availableAtOrFrom": {
      "@type": "Place",
      "name": `${businessName} Studio`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "addressCountry": "US"
      }
    },
    "url": `${websiteUrl}/rates`
  };
}

/**
 * Builds Service schema for specific service type
 */
export function buildServiceSchema(
  serviceName: string,
  serviceType: string,
  description: string,
  businessName: string,
  city: string,
  state: string,
  phone: string,
  serviceAreas: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": businessName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": state,
        "addressCountry": "US"
      },
      "telephone": phone
    },
    "areaServed": serviceAreas.map(area => ({
      "@type": "State",
      "name": area
    })),
    "audience": {
      "@type": "BusinessAudience",
      "name": "Corporate Teams and Companies"
    },
    "serviceOutput": {
      "@type": "CreativeWork",
      "name": "Professional Office Headshots",
      "description": "Consistent, brand-aligned professional headshots for entire teams"
    }
  };
}

/**
 * Builds Organization schema for business info
 */
export function buildOrganizationSchema(
  businessName: string,
  websiteUrl: string,
  description: string,
  city: string,
  state: string,
  phone: string,
  socialLinks: string[],
  founderName: string,
  founderTitle: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessName,
    "url": websiteUrl,
    "logo": `${websiteUrl}/images/logo.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": phone,
      "contactType": "Customer Service",
      "areaServed": ["PA", "MD", "DE"],
      "availableLanguage": "English"
    },
    "sameAs": socialLinks,
    "founder": {
      "@type": "Person",
      "name": founderName,
      "jobTitle": founderTitle
    }
  };
}

/**
 * Builds Review schema for individual testimonials
 */
export function buildReviewSchema(
  review: ReviewItem,
  businessName: string,
  businessUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": businessName,
      "url": businessUrl
    },
    "author": {
      "@type": "Person",
      "name": review.author,
      ...(review.company && { "worksFor": { "@type": "Organization", "name": review.company } })
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.reviewBody,
    ...(review.datePublished && { "datePublished": review.datePublished })
  };
}

/**
 * Builds VideoObject schema for YouTube embeds
 */
export function buildVideoObjectSchema(
  video: VideoItem,
  businessName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "embedUrl": video.embedUrl,
    ...(video.duration && { "duration": video.duration }),
    "author": {
      "@type": "Organization",
      "name": businessName
    }
  };
}

/**
 * Builds Blog or CollectionPage schema for blog listing
 */
export function buildBlogSchema(
  name: string,
  description: string,
  url: string,
  businessName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": name,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": businessName
    }
  };
}

/**
 * Builds Place schema for physical studio location
 */
export function buildPlaceSchema(
  name: string,
  description: string,
  streetAddress: string,
  city: string,
  state: string,
  postalCode: string,
  latitude: string,
  longitude: string,
  phone: string,
  url: string,
  openingHours?: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": name,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": city,
      "addressRegion": state,
      "postalCode": postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "telephone": phone,
    "url": url,
    ...(openingHours && openingHours.length > 0 && { "openingHoursSpecification": openingHours })
  };
}

/**
 * Builds Product schema for gift certificates
 */
export function buildProductSchema(
  name: string,
  description: string,
  price: string,
  businessName: string,
  businessUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": businessName,
        "url": businessUrl
      }
    }
  };
}

/**
 * Builds ItemList schema for vendor directory
 */
export function buildItemListSchema(
  name: string,
  description: string,
  vendors: VendorItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "description": description,
    "numberOfItems": vendors.length,
    "itemListElement": vendors.map((vendor, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "LocalBusiness",
        "name": vendor.name,
        "url": vendor.url,
        "category": vendor.category
      }
    }))
  };
}
