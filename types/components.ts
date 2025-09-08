// Shared TypeScript types for Astro components

export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
}

export interface TestimonialData {
  name: string;
  company: string;
  review: string;
  rating: number;
  imageUrl: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  iconUrl: string;
  ctaText: string;
  ctaUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconClass: string;
  ariaLabel: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email?: string;
}

export interface NavigationItem {
  label: string;
  url: string;
  isActive?: boolean;
}

export interface CTAButton {
  text: string;
  url: string;
  style?: 'primary' | 'secondary' | 'outline';
}