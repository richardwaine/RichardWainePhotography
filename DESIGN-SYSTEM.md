# Richard Waine Photography - Design System

## Core Aesthetic Principles

- **Sexy, expensive, high-end** - Every design decision reinforces luxury and professionalism
- **Generous whitespace** - Breathing room signals quality
- **Strong typography** - Clean, bold, impactful text hierarchy
- **Sophisticated motion** - Smooth, purposeful animations
- **High contrast** - Dark/light section alternation for visual rhythm
- **Accessible by default** - Support for reduced motion preferences

---

## Typography System

### Font Families
- **Primary**: `'Montserrat', sans-serif` - Used for all text
- **Secondary**: `'Lato', sans-serif` - (Available but rarely used)

### Font Scale (from style.css)
```css
--fs-300: 0.75rem;  /* 12px */
--fs-350: 0.875rem; /* 14px */
--fs-400: 1rem;     /* 16px - BODY TEXT BASELINE */
--fs-450: 1.125rem; /* 18px */
--fs-500: 1.25rem;  /* 20px */
--fs-550: 1.375rem; /* 22px */
--fs-600: 1.5rem;   /* 24px */
--fs-700: 1.75rem;  /* 28px */
--fs-750: 1.875rem; /* 30px */
--fs-800: 2rem;     /* 32px */
```

### Font Weights
```css
--fw-normal: 400;
--fw-semi-bold: 600;
--fw-bold: 700;
```
**Special case**: Hero titles use `font-weight: 900` for maximum impact

### Line Heights
```css
--line-height-tight: 1.2;     /* Headlines, dramatic impact */
--line-height-normal: 1.5;    /* Standard text */
--line-height-relaxed: 1.7;   /* Body text, testimonials (DEFAULT) */
--line-height-loose: 1.9;     /* Extra breathing room */
```
**Body default**: `line-height: 1.7`

### Typography Usage Patterns

**Large Hero Titles** (Homepage Hero):
- Size: `clamp(3rem, 8vw, 6rem)` - Scales fluidly with viewport
- Weight: `900` (ultra-bold for dramatic impact)
- Line-height: `0.85` (tighter for visual punch)
- Text-transform: `none` (natural casing, not uppercase)

**Subtitles** (Hero subtitle):
- Size: `1.4rem` or `--fs-500` to `--fs-600`
- Weight: `400` (normal)
- Line-height: `1.6` to `1.7`
- Color: `var(--faded)` on light backgrounds, `var(--ltclr)` on dark

**Section Titles** (h2, h3):
- Size: `--fs-600` to `--fs-700` typically
- Weight: `--fw-bold` (700)
- Text-transform: `uppercase` often used for emphasis
- Line-height: `--line-height-tight` to `--line-height-normal`

**Body Text**:
- Size: `--fs-400` (1rem baseline)
- Weight: `--fw-normal` (400)
- Line-height: `--line-height-relaxed` (1.7)
- Color: `var(--blkclr)` on light, `var(--ltclr)` on dark

**Small Text / Captions**:
- Size: `--fs-350` or `--fs-400`
- Color: `var(--faded)` or reduced opacity

### Rules
1. **ALWAYS use CSS custom properties for sizes** - Never hardcode px values
2. **Use `clamp()` for responsive scaling** - `clamp(min, preferred, max)`
3. **Maintain consistent line-heights** - Use defined variables
4. **Balance typography** - `text-wrap: balance` for headings, `text-wrap: pretty` for paragraphs

---

## Color System

### Core Palette
```css
--ltclr: #fff;        /* Light/white text and elements */
--blkclr: #000;       /* Dark/black text */
--drkbg: #121212;     /* Dark background (near-black) */
--ltbg: #ebedef;      /* Light background (off-white) */
--accent: #03a9f4;    /* Cyan blue accent */
--faded: #737373;     /* Subtle/secondary text */
--stars: #FFE000;     /* Rating stars yellow */
```

### Section Background Pattern
Sections **ALTERNATE** between dark and light for visual rhythm:

**Dark Sections** (use `var(--drkbg)`):
- `#features`
- `#neural-portrait`
- `#office-headshots`
- `#testimonials`
- `#brief-bio`
- `#professions`

**Light Sections** (default or `var(--ltbg)`):
- `#hero` (dark image with overlay)
- `#problem`
- `#promo-video`
- `#tear-sheet`
- `#process`
- Others...

### Text Color Rules
- **On dark backgrounds**: Use `var(--ltclr)` (white)
- **On light backgrounds**: Use `var(--blkclr)` (black)
- **Accent highlights**: Use `var(--accent)` sparingly for CTAs, hover states, important elements
- **Subtle text**: Use `var(--faded)` for secondary information

### Accent Usage
- Primary buttons background
- Hover states
- Important keywords/highlights
- Navigation active states
- Pagination/controls
- **Rule**: Use accent color sparingly for maximum impact

---

## Animation & Motion System

### Animation Principles
1. **Smooth and sophisticated** - No jarring movements
2. **60fps performance** - Only animate `transform` and `opacity`
3. **Purposeful motion** - Animation supports understanding, not decoration
4. **Accessibility-first** - Respect `prefers-reduced-motion`
5. **Consistent easing** - Use defined easing functions

### Easing Functions

**Primary Easing** (Hero-style smooth):
```css
cubic-bezier(0.23, 1, 0.32, 1) /* Smooth easeOutCubic - use for most animations */
```

**GSAP Equivalents**:
- `power1.inOut` - Gentle easing
- `power2.out` - Smooth deceleration
- `slow` - Very gradual easing

### Timing Standards
```css
--transition-fast: 0.1s;   /* Immediate feedback (hover states) */
--transition-slow: 0.4s;   /* Thoughtful transitions */
```

**Common durations**:
- Hover states: `0.3s` to `0.4s`
- Element reveals: `0.8s` to `1s`
- Image transitions: `1s`
- Staggered reveals: `100ms` to `200ms` delay between elements

### Animation Patterns

**Text Reveal** (Hero-style):
- Initial state: `transform: translateY(100%) rotateX(-90deg); opacity: 0;`
- Revealed: `transform: translateY(0) rotateX(0); opacity: 1;`
- Duration: `0.8s`
- Easing: `cubic-bezier(0.23, 1, 0.32, 1)`
- Stagger: `100ms` between lines

**Fade In Up** (Subtitles, content):
- Initial: `opacity: 0; transform: translateY(30px);`
- Revealed: `opacity: 1; transform: translateY(0);`
- Duration: `1s`
- Easing: `cubic-bezier(0.23, 1, 0.32, 1)`

**Image Crossfade**:
- Duration: `1s`
- Easing: `ease-in-out`
- Use `opacity` only

**Carousel/Slider Animations** (Features):
- Heading: `opacity: 0, y: 400` → `opacity: 1, y: 0` (1s, power1.inOut)
- Text: `opacity: 0, y: 400` → `opacity: 1, y: 0` (1s, power2.Out)
- Image: `opacity: 0, x: 1000, y: 1000, scale: 0` → `opacity: 1, x: 0, y: 0, scale: 1` (1s, slow)

### Accessibility
**ALWAYS include**:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Spacing System

### Spacing Scale
```css
--size-1: 0.25em;   /* 4px */
--size-2: 0.5em;    /* 8px */
--size-250: 0.75em; /* 12px */
--size-3: 1em;      /* 16px */
--size-350: 1.125em;/* 18px */
--size-4: 1.25em;   /* 20px */
--size-5: 1.5em;    /* 24px */
--size-6: 1.75em;   /* 28px */
--size-7: 2em;      /* 32px */
--size-8: 3em;      /* 48px - SECTION PADDING DEFAULT */
--size-9: 4em;      /* 64px */
--size-10: 5em;     /* 80px */
--size-11: 7.5em;   /* 120px */
--size-12: 10em;    /* 160px */
--size-13: 15em;    /* 240px */
--size-14: 20em;    /* 320px */
--size-15: 30em;    /* 480px */
```

### Spacing Usage

**Section Padding** (Vertical spacing):
- Default: `padding-block: var(--size-8);` (48px)
- Full-height sections: `height: calc(100vh - var(--header-height));`
- Override only when absolutely necessary

**Component Internal Spacing**:
- Small gaps: `var(--size-2)` to `var(--size-4)`
- Medium gaps: `var(--size-5)` to `var(--size-7)`
- Large gaps: `var(--size-8)` to `var(--size-9)`

**Grid Gaps**:
- Testimonial cards: `var(--size-4)`
- Hero content: `80px` (custom for dramatic spacing)
- Features carousel: `30px`

**Wrapper Width**:
- Standard: `width: 80%; margin-inline: auto;` (from STANDARD-ARCHITECTURE)
- Max-width varies by section needs

---

## Image Treatment System

### Standard Image Treatments

**Hero Images**:
```css
filter: contrast(1.05) saturate(1.1);
border-radius: 15px;
box-shadow: /* 3D depth effect */
  drop-shadow(0 0 10px rgba(0, 80, 160, 0.3));
```

**Testimonial Images**:
```css
border-radius: 50%; /* Circular */
border: var(--border) var(--ltclr); /* 4px solid white */
box-shadow: var(--shadow); /* 0 10px 20px rgba(0,0,0,.5) */
width: 128px;
height: 128px;
```

**Standard Shadows**:
```css
--shadow: 0 10px 20px rgba(0,0,0,.5); /* Default shadow */
--border: 4px solid; /* Standard border thickness */
--border-thin: 1.5px solid; /* Subtle borders */
```

**Portfolio/Feature Images**:
- Use `object-fit: cover` to maintain aspect ratios
- Apply `--shadow` for depth
- Consider `border-radius` for softer edges (typically `8px` to `15px`)

### Image Sizing
- Hero: `900px x 600px` (3:2 ratio)
- Features carousel: `600px x 480px` (5:4 ratio) or `600px x 600px` (square)
- Always use responsive images with `max-inline-size: 100%`

---

## Layout Patterns

### Section Heights
**Full-height sections** (occupy viewport):
```css
height: calc(100vh - var(--header-height));
display: grid;
place-items: center;
```
Sections: `#hero`, `#features`, `#neural-portrait`, `#office-headshots`, `#process`, `#brief-bio`, `#problem`

**Natural height sections**:
```css
height: auto;
display: grid;
place-items: center;
```
Sections: `#promo-video`, `#tear-sheet`, `#testimonials`, `#hs-near`, `#professions`, `#did-you-know`, `#faqs`

### Grid Layouts

**Two-column**:
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: var(--size-7) /* or larger */;
align-items: center;
```

**Three-column** (Testimonials on large screens):
```css
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

**Responsive collapse**:
```css
@media (max-width: 1024px) {
  grid-template-columns: 1fr; /* Stack on mobile */
}
```

---

## Responsive Design

### Breakpoints
```css
@media (max-width: 768px)   /* Mobile */
@media (max-width: 1024px)  /* Tablet */
@media (max-width: 1200px)  /* Small desktop */
```

### Mobile-First Approach
- Start with mobile layout
- Enhance for larger screens with media queries
- Use `clamp()` for fluid typography
- Reduce padding on mobile: `padding: 0 30px;` instead of `padding: 0 60px;`
- Stack grid columns: `grid-template-columns: 1fr;`

### Typography Scaling
Use `clamp()` for fluid scaling:
```css
font-size: clamp(3rem, 8vw, 6rem); /* Min 3rem, ideal 8vw, max 6rem */
```

---

## Component Consistency Rules

### Every Component Must:
1. **Use CSS custom properties** - No hardcoded values
2. **Support dark/light backgrounds** - Check text contrast
3. **Include hover/focus states** - For interactive elements
4. **Be responsive** - Mobile, tablet, desktop
5. **Animate smoothly** - Use defined easing and timing
6. **Respect accessibility** - `prefers-reduced-motion`, keyboard nav, ARIA labels

### Hover States
Standard hover pattern:
```css
transition: all 0.3s ease; /* or use --transition-slow */

&:hover {
  transform: scale(1.05); /* Subtle growth */
  /* OR */
  opacity: 0.8; /* Subtle fade */
}
```

### Buttons
- Primary buttons: `var(--accent)` background, white text
- Secondary buttons: Transparent with `var(--accent)` border
- Hover: Slight scale or color shift
- Transition: `0.3s ease`

---

## Section Transition Patterns

### Standard Flow
Sections flow naturally with Lenis smooth scroll:
- No scroll hijacking by default
- Smooth momentum scrolling
- Sections animate in using ScrollTrigger as they enter viewport

### Special Cases
- **Horizontal scroll sections**: Signal "you're somewhere different" in the journey
- **Pinned sections**: Only when content needs to progress through stages (used sparingly)

### Lenis Integration
```javascript
new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  prevent: (node) => node.hasAttribute('data-lenis-prevent'),
});
```

---

## Performance Standards

### Targets
- **Lighthouse score**: 90+ on all metrics
- **Core Web Vitals**: Pass all thresholds
- **Animation**: Consistent 60fps
- **Image loading**: Lazy load all non-critical images

### Optimization Rules
1. **Animate only `transform` and `opacity`** - Never width, height, top, left
2. **Use `will-change` sparingly** - Only during active animations
3. **Lazy load images** - Use `loading="lazy"` attribute
4. **Optimize image sizes** - Serve appropriate sizes for viewport
5. **Minimize JavaScript** - Use native CSS where possible

---

## File Organization

### Components Directory Structure
```
/src/components/
  - Shared components (Hero, Problem, Features, etc.)
  - Keep components focused and reusable
  - Each component handles its own styling
```

### When to Create New Components
- **Repeated patterns** - Used on multiple pages
- **Complex functionality** - Needs isolated logic
- **Reusable layouts** - Two-col, three-col, grids, etc.

### Component Guidelines
- Components should work standalone
- Components define their own internal spacing
- Components should NOT assume wrapper context
- Use props for customization, not duplication

---

## Critical Rules Summary

### Typography
✅ Use CSS custom properties for all sizes
✅ Maintain consistent line-heights
✅ Use `clamp()` for fluid scaling
✅ Body text: 1rem with 1.7 line-height

### Colors
✅ Alternate dark/light sections for rhythm
✅ Use accent color sparingly
✅ Check contrast on all backgrounds
✅ Never hardcode color values

### Animations
✅ Only animate `transform` and `opacity`
✅ Use `cubic-bezier(0.23, 1, 0.32, 1)` for smooth easing
✅ Duration: 0.8s to 1s for reveals
✅ Support `prefers-reduced-motion`

### Spacing
✅ Section padding: `var(--size-8)` (48px)
✅ Use spacing scale, never hardcode
✅ Generous whitespace = expensive feel
✅ Reduce padding on mobile

### Images
✅ Apply consistent shadows and borders
✅ Use `object-fit: cover` for aspect ratios
✅ Lazy load non-critical images
✅ Optimize file sizes

### Layout
✅ Follow STANDARD-ARCHITECTURE.md structure
✅ Full-height: `calc(100vh - var(--header-height))`
✅ Grid for multi-column layouts
✅ Mobile-first responsive approach

### Performance
✅ 60fps animations
✅ Lighthouse 90+ scores
✅ Lazy load images
✅ Minimal JavaScript
