# Component Library Documentation

## Component Naming Convention

### Systematic Structure
Format: `[Layout][Content][Background][Variant]`

### Component Categories

#### Layout Types
- `TwoCol` - Two column layouts
- `ThreeCol` - Three column layouts
- `Hero` - Full-width hero sections  
- `Grid` - Grid-based layouts (portfolio, testimonials)
- `Stack` - Vertical stacked content
- `Section` - Generic page sections

#### Content Types
- `ImageLeft` / `ImageRight` - Image positioning in layouts
- `Testimonial` - Client testimonial content
- `Portfolio` - Image showcase content
- `CTA` - Call-to-action focused components
- `Bio` - About/biographical content
- `Service` - Service description content
- `QA` - Question and answer content

#### Background Variants
- `Dark` - Dark background with light text
- `Light` - Light background with dark text  
- `Accent` - Brand accent color background

## Component Reference Library

### Foundation Components (Built in Phases 1-3)
- `Footer` - Site-wide footer with navigation and brand elements
- `Header` - Site-wide header with logo and primary CTA
- `CTAButton` - Reusable call-to-action button
- `ContactForm` - Contact form with validation

### Layout Components
- `TwoColImageLeftDark` - Two column, image left, text right, dark background
- `TwoColImageRightLight` - Two column, image right, text left, light background
- `ThreeColGridDark` - Three column grid layout, dark background
- `HeroSectionLight` - Full-width hero section, light background
- `HeroTestimonialDark` - Hero section with large testimonial, dark background

### Content Components  
- `TestimonialCard` - Individual testimonial with quote and attribution
- `PortfolioGrid3x3` - 3x3 portfolio image grid with hover effects
- `PortfolioGrid4x4` - 4x4 portfolio image grid for larger showcases
- `ServiceCard` - Service description with pricing and CTA button
- `AboutQACard` - Question/answer card with hover reveal interaction
- `ImageCaption` - Styled image with caption text

### Interactive Components
- `ImageGallery` - Portfolio showcase with lightbox functionality
- `ScrollTriggerAnimation` - Wrapper for scroll-based animations
- `HoverReveal` - Generic hover state reveal component
- `TabNavigation` - Tabbed content navigation (for About page sections)

## Component Documentation Template

### For Each Component Include:

#### Props Interface
```typescript
interface ComponentProps {
  title: string;
  description?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'dark' | 'light' | 'accent';
}
```

#### Usage Example
```jsx
<TwoColImageLeftDark 
  title="Professional Headshots"
  description="Corporate photography that makes an impression"
  image="/images/corporate-headshot.jpg"
  ctaText="Book Session"
  ctaLink="/consultation"
/>
```

#### Visual Reference
- Screenshot or description of component appearance
- Hover states and interactive behaviors
- Responsive behavior notes

#### Responsive Behavior
- Mobile: Stack vertically, adjust typography
- Tablet: Maintain layout with adjusted spacing  
- Desktop: Full layout with optimal spacing

## Component Usage Guidelines

### Consistency Rules
- **Always use established naming convention** for new components
- **Follow design system** colors, typography, spacing
- **Maintain interaction patterns** - hover timing, animation style
- **Ensure responsive behavior** matches other components

### When to Create New Components
- **Unique layout needs** not covered by existing components
- **Repeated content patterns** that appear on multiple pages
- **Complex interactions** that need reusable functionality
- **Performance considerations** - isolated components for optimization

### Component Modification Guidelines
- **Never modify core components** directly on pages
- **Create variants** using the naming convention for different needs
- **Update documentation** when creating new components
- **Test responsiveness** across all breakpoints

## Component Development Workflow

### 1. Design Review
- Confirm component follows established design language
- Check naming convention compliance
- Verify responsive requirements

### 2. Development
- Build component with TypeScript interfaces
- Include all responsive breakpoints
- Add hover/focus states matching design system
- Optimize for performance (transform/opacity animations)

### 3. Documentation
- Add to component reference library
- Include props interface and usage examples
- Screenshot component for visual reference
- Note any special responsive behaviors

### 4. Integration Testing
- Test component isolation
- Verify integration with other components
- Check performance impact
- Validate across devices and browsers

## Maintenance and Updates

### Version Control
- **Component library** maintained as separate directory
- **Documentation updates** with each new component
- **Breaking changes** documented and communicated
- **Deprecated components** marked clearly

### Performance Monitoring
- **Bundle size** impact of new components
- **Animation performance** - maintain 60fps
- **Image optimization** - lazy loading and responsive sizing
- **Core Web Vitals** - ensure components don't impact metrics