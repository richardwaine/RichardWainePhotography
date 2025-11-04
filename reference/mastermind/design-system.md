# Design System Documentation

## Design Philosophy: "Magazine Headline Driven"

### Core Aesthetic Principles
- **Editorial layout approach** - Bold typography as primary design element
- **High contrast visual hierarchy** - Dark backgrounds, white text, dramatic compositions
- **Typography-first design** - Headlines aren't just content, they're visual impact
- **Brutalist minimalism** - Clean, bold, unapologetic presentation
- **Content as hero** - The message IS the design element

### Visual Characteristics
- **Large, impactful headlines** that break across multiple lines for dramatic effect
- **High contrast palette** - Primarily black, white, with strategic accent colors
- **Generous white space** for dramatic emphasis and breathing room
- **Photography and typography** working as unified design elements
- **Magazine-quality layouts** with editorial sophistication

### Typography Hierarchy
- **H1 Headlines** - Large, bold, often spanning multiple lines
- **H2 Subheadings** - Supporting hierarchy with consistent weight
- **Body Text** - Clean, readable, generous line spacing
- **Captions** - Subtle but informative image context

### Color Strategy
- **Primary** - Deep black backgrounds (#000000 or near-black)
- **Secondary** - Pure white text (#FFFFFF)
- **Accent** - Strategic use of brand colors (determine during footer build)
- **Hover states** - Subtle transitions that enhance interactivity

## Component Naming Convention

### Systematic Structure
Format: `[Layout][Content][Background][Variant]`

### Layout Types
- `TwoCol` - Two column layouts
- `ThreeCol` - Three column layouts  
- `Hero` - Full-width hero sections
- `Grid` - Grid-based layouts (portfolio, testimonials)
- `Stack` - Vertical stacked content

### Content Types
- `ImageLeft` / `ImageRight` - Image positioning
- `Testimonial` - Client testimonial content
- `Portfolio` - Image showcase content
- `CTA` - Call-to-action focused
- `Bio` - About/biographical content

### Background Variants
- `Dark` - Dark background with light text
- `Light` - Light background with dark text
- `Accent` - Brand accent color background

### Example Components
- `TwoColImageLeftDark` - Two column, image left, dark background
- `HeroTestimonialLight` - Hero section with testimonial, light background
- `PortfolioGrid3x3Dark` - 3x3 portfolio grid on dark background
- `CTAButtonAccent` - Call-to-action button with accent color

## Interactive Elements

### Hover States
- **Smooth transitions** - 200-300ms duration for professional feel
- **Subtle transformations** - Scale, opacity, color changes
- **Consistent behavior** - All interactive elements follow same patterns
- **Accessibility compliant** - Focus states for keyboard navigation

### Animation Principles
- **Performance first** - 60fps animations using transform and opacity
- **Purposeful motion** - Animations support user understanding
- **Magazine inspiration** - Sophisticated, editorial-quality transitions
- **Mobile consideration** - Reduced motion for mobile devices and accessibility

## Responsive Design Strategy

### Breakpoint Philosophy
- **Mobile-first approach** - Design for smallest screen, enhance upward
- **Content-driven breakpoints** - Based on content needs, not device sizes
- **Typography scaling** - Headlines remain impactful across all sizes
- **Image optimization** - Perfect sizing for each device

### Tailwind Breakpoints
- `sm:` 640px+ (large mobile)
- `md:` 768px+ (tablet)
- `lg:` 1024px+ (desktop)
- `xl:` 1280px+ (large desktop)
- `2xl:` 1536px+ (extra large)

## Brand Consistency Notes
- This is NOT a pixel-perfect recreation of existing site
- Current styling serves as sophisticated jumping-off point
- Maintain editorial quality while adding modern web interactions
- Every design decision should reinforce magazine-quality aesthetic