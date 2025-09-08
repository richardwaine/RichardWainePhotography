# HERO ZOOM FEATURE DOCUMENTATION

## OVERVIEW
The hero zoom feature is implemented in `/src/components/Hero.astro` using JavaScript and CSS transforms.

## KEY COMPONENTS

### 1. CSS ANIMATIONS & TRANSFORMS
- **Text Animations**: Words use `transform: translateY(100%) rotateX(-90deg)` and transition to `translateY(0) rotateX(0deg)` when revealed
- **3D Elements**: Uses `transform-style: preserve-3d` and `perspective: 1200px` for 3D effects
- **Image Layers**: Multiple layers with `translateZ()` values for depth
- **Button Effects**: Hover transforms like `translateY(-8px) scale(1.02)`

### 2. JAVASCRIPT SCROLL ZOOM LOGIC (Lines 587-631)
**Phase 1 (0-50% scroll progress):**
- Hero scales from 1 to 11x: `const heroScale = 1 + zoomProgress * 10`
- Hero opacity fades from 1 to 0: `const heroOpacity = 1 - zoomProgress`
- All sections stay in original positions: `translateY(${index * 100}vh)`

**Phase 2 (50-100% scroll progress):**
- Hero stays fully zoomed (scale 11) and invisible (opacity 0)
- Sections start moving up: `const translateY = -100 * scrollPhaseProgress`
- Each section moves: `translateY(${(index * 100) + translateY}vh)`

### 3. SECTION TARGETING
JavaScript targets these sections:
```javascript
const sections = document.querySelectorAll('.hero-experience, .problem, .features, #promo-video, .office-headshots, .tear-sheet, .testimonials, .process, .brief-bio, .hs-near, .professions, .did-you-know, .FAQs');
```

### 4. POSITIONING DEPENDENCIES
- Hero: `position: fixed` (currently removed)
- All sections: Uses JavaScript transform positioning rather than CSS positioning
- Scroll handling: Custom wheel event listeners override natural scroll

## PROBLEMS CREATED
1. **Fixed positioning**: Removes sections from document flow
2. **JavaScript transforms**: Override natural CSS positioning
3. **Custom scroll handling**: Prevents natural browser scrolling
4. **Section positioning**: All sections positioned via JavaScript, not CSS document flow

## TO REMOVE
1. Remove all JavaScript scroll zoom logic (lines 587-631)
2. Remove `position: fixed` constraints  
3. Remove transform overrides on sections
4. Restore natural document flow and CSS positioning