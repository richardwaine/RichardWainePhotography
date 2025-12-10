# Richard Waine Photography - Astro Site Migration Master Plan v4.0

**Project Goal:** Migrate from Squarespace to Astro while preserving SEO rankings, traffic, and business functionality. Build comprehensive data tracking and SEO intelligence system.

**Target Launch:** January 1, 2026 (flexible - quality over speed)

**Non-Negotiable:** Cannot lose rankings, SEO performance, or traffic.

**Project Priorities:**
1. Website migration with comprehensive tracking (GTM, GA4, Clarity, Search Console, GBP, Moz Local)
2. SEO & Business Intelligence Dashboard (post-launch)
3. Future: Custom chat widget to replace Chatra (separate project - not in this plan)

---

## ⚠️ CLAUDE CODE EXECUTION FRAMEWORK ⚠️

**THIS SECTION MUST BE READ AND FOLLOWED BY CLAUDE CODE FOR EVERY TASK**

### PRIME DIRECTIVE

```
YOU EXIST ONLY TO FOLLOW EXPLICIT DIRECTIONS AND INSTRUCTIONS.
NOTHING MORE. NOTHING LESS. PERIOD.

DO NOT be "helpful" by making choices
DO NOT interpret what the user might want
DO NOT suggest alternatives unless explicitly asked
DO NOT take initiative
DO NOT be proactive
DO NOT add features not specified
DO NOT refactor code not mentioned
DO NOT skip steps for any reason
DO NOT guess or assume anything

WAIT FOR EXPLICIT ORDERS.
EXECUTE ORDERS EXACTLY AS GIVEN.
DO NOT DEVIATE.

If unclear about ANY instruction: STOP and ASK.
```

### MANDATORY EXECUTION SEQUENCE

**For EVERY task, Claude Code MUST follow this exact sequence:**

```
STEP 1: READ
- Read the entire task specification
- Read it again
- Read it a third time
- Do NOT proceed until 100% certain of what is being asked

STEP 2: DOCUMENT BEFORE STATE
- List exact files that will be modified
- Copy the EXACT current code that will be changed
- Record line numbers
- This is your restoration point if something breaks

STEP 3: STATE YOUR PLAN
- In plain English, explain exactly what you will do
- List every file you will touch
- List every line you will change
- Show the exact code changes (before → after)
- WAIT FOR APPROVAL before proceeding

STEP 4: EXECUTE
- Make ONLY the approved changes
- Make them ONE AT A TIME
- Check each checkbox as you complete each step
- Do NOT combine steps
- Do NOT add anything not in the plan

STEP 5: VERIFY
- Test that the change works
- Confirm no other functionality was broken
- Report completion with evidence

STEP 6: STOP
- Do NOT proceed to the next task automatically
- WAIT for explicit instruction to continue
```

### FORBIDDEN ACTIONS

Claude Code is FORBIDDEN from doing ANY of the following without EXPLICIT permission:

**Code Changes:**
- ❌ Deleting code (must COMMENT OUT instead unless explicitly told to delete)
- ❌ Refactoring code not mentioned in the task
- ❌ Renaming variables, functions, or files
- ❌ Reorganizing file structure
- ❌ "Improving" or "cleaning up" code not specified
- ❌ Adding features not requested
- ❌ Changing timing functions, scroll speeds, durations, or easing
- ❌ Modifying z-index values
- ❌ Adding position: fixed to elements
- ❌ Adding wrapper divs that change document flow
- ❌ Creating new CSS custom properties (must use existing ones in :root)

**File Operations:**
- ❌ Creating files in wrong locations (pages ONLY in /src/pages/, etc.)
- ❌ Creating duplicate file structures
- ❌ Moving files without permission
- ❌ Deleting files

**Git Operations:**
- ❌ Using `git revert` (this is NOT the same as undoing a change)
- ❌ Using `git reset --hard` without explicit permission
- ❌ Any destructive git operation

**Process:**
- ❌ Skipping the approval step
- ❌ Combining multiple changes into one
- ❌ Proceeding to next task without permission
- ❌ Using browser automation/puppeteer without permission

### UNDO INSTRUCTIONS (NOT "REVERT")

**When Claude Code needs to undo a change it just made:**

"UNDO" means: Restore the code to EXACTLY what it was before this specific task.

It does NOT mean:
- Git revert
- Git reset
- Rolling back to a previous commit
- Any git operation

**Correct UNDO procedure:**

1. Open the file that was modified
2. Delete the NEW code that was just added
3. If code was commented out: UNCOMMENT it
4. If code was deleted (against rules): Paste back the BEFORE STATE that was documented
5. Save the file
6. Verify the site renders correctly
7. Do NOT touch any other files

### PROJECT FILE STRUCTURE (ABSOLUTE - NO EXCEPTIONS)

```
~/CloudStation/Richard Waine Photography Website/
├── src/
│   ├── assets/          ← ALL images, fonts, media go here
│   ├── components/      ← ALL components go here
│   ├── content/         ← Content collections
│   ├── data/            ← Data files (JSON, etc.)
│   ├── layouts/         ← ALL layouts go here
│   ├── pages/           ← ALL pages go here (ONLY location for pages)
│   ├── posts/           ← Blog posts
│   ├── styles/          ← ALL stylesheets go here
│   └── types/           ← TypeScript types
├── public/              ← Static assets (favicon, robots.txt, etc.)
├── astro.config.mjs     ← Astro configuration
├── CLAUDE.md            ← Rules for Claude Code
├── DESIGN-SYSTEM.md     ← Design specifications
└── package.json         ← Dependencies
```

**CRITICAL FILE LOCATION RULES:**
- Pages ONLY go in `/src/pages/` - NEVER create `/pages/` at root
- Components ONLY go in `/src/components/`
- Styles ONLY go in `/src/styles/` or scoped within components
- Assets ONLY go in `/src/assets/`
- Layouts ONLY go in `/src/layouts/`

### TECHNICAL SPECIFICATIONS (FIXED - NO DECISIONS REQUIRED)

**Responsive Breakpoints:**
```css
/* Mobile: 320px - 767px */
@media (max-width: 767px) { }

/* Tablet: 768px - 1023px */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop Small: 1024px - 1439px */
@media (min-width: 1024px) and (max-width: 1439px) { }

/* Desktop Large: 1440px+ */
@media (min-width: 1440px) { }
```

**Image Specifications:**
- Source format: PNG or JPG (originals)
- Output format: WebP (Astro converts automatically via Image component)
- Lazy loading: YES for all images BELOW the fold
- Lazy loading: NO for hero/above-fold images (use `loading="eager"`)
- Quality: Maintain original quality - NO visible degradation acceptable

**CSS Custom Properties:**
- BEFORE adding ANY new custom property, search `/src/styles/style.css` for existing ones
- USE existing properties when the value matches
- NEVER create duplicates
- If new property truly needed: ASK PERMISSION FIRST

**Development Commands:**
```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build for production
npm run preview  # Preview production build
```

**Git Commands (USE WITH CAUTION):**
```bash
git status                    # See what changed
git add .                     # Stage changes
git commit -m "message"       # Commit with descriptive message
git push origin main          # Push to remote
git checkout -- filename      # Undo changes to specific file (SAFE)
git reset --hard HEAD         # DANGEROUS - reverts ALL changes - ASK FIRST
```

### EXECUTION FILE REFERENCE

This master plan is accompanied by individual execution files for Claude Code:

| File | Purpose |
|------|---------|
| `EXECUTE-PHASE-0A-BREAKPOINTS.md` | Define and implement responsive breakpoints |
| `EXECUTE-PHASE-0B-CONTACT-FORM.md` | Contact form decision and implementation |
| `EXECUTE-PHASE-1A-HERO-SECTION.md` | Hero section redesign |
| `EXECUTE-PHASE-1B-PROBLEM-SECTION.md` | Problem section animation |
| ... | (additional files for each task) |

**How to use execution files:**
1. Copy the ENTIRE contents of the execution file
2. Paste as prompt to Claude Code
3. Claude Code executes ONLY what is in that file
4. Wait for completion confirmation
5. Verify work before proceeding to next file

---

## PROJECT PHASES OVERVIEW

| Phase | Name | Purpose |
|-------|------|---------|
| **Phase 0** | Foundation & Setup | Critical decisions and baseline configuration |
| **Phase 1** | Design, Content & Infrastructure | Build all pages, components, and tracking |
| **Phase 2** | Testing & Quality Assurance | Comprehensive testing across all areas |
| **Phase 3** | Code Refactoring & Optimization | Clean up, optimize, improve efficiency BEFORE deployment |
| **Phase 4** | Pre-Launch Final Preparation | Last checks before deployment |
| **Phase 5** | Launch & Deployment | Go live on production domain |
| **Phase 6** | Post-Launch Monitoring & Stabilization | Intensive monitoring first 30 days |
| **Phase 7** | SEO Intelligence Dashboard & Ongoing Optimization | Build comprehensive analytics system |

---

## PHASE 0: FOUNDATION & SETUP

**Purpose:** Make critical decisions and establish baseline configuration before development begins

**Completion Criteria:** All foundational decisions made, test environment ready, breakpoints defined

**Execution File:** `EXECUTE-PHASE-0.md`

---

### 0.1 Test Domain Configuration
**Purpose:** Set up staging environment for safe testing before production launch

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Choose test domain: waineenterprises.com OR lancasterheadshots.com
- [ ] Disconnect domain forward to richardwainephotography.com
- [ ] Connect test domain to Cloudflare Pages
- [ ] Configure DNS for test domain
- [ ] Verify test domain loads correctly

**Forbidden Actions:**
- ❌ Do NOT submit sitemap to search engines
- ❌ Do NOT create robots.txt blocking
- ❌ Do NOT configure production domain

**Success Criteria:** Test domain accessible and ready for deployment

**Completion Checklist:**
- [ ] All actionable steps checked above
- [ ] Test domain loads in browser
- [ ] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 0.2 Responsive Breakpoints Definition
**Purpose:** Establish mobile/tablet/desktop breakpoints for consistent responsive design

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Technical Specifications (FIXED - use these exact values):**
```css
/* Mobile: 320px - 767px */
@media (max-width: 767px) { }

/* Tablet: 768px - 1023px */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop Small: 1024px - 1439px */
@media (min-width: 1024px) and (max-width: 1439px) { }

/* Desktop Large: 1440px+ */
@media (min-width: 1440px) { }
```

**Actionable Steps:**
- [ ] Create breakpoint documentation in project (add to DESIGN-SYSTEM.md)
- [ ] Verify breakpoints match specifications above
- [ ] Test breakpoints in Chrome DevTools with device presets:
  - [ ] iPhone SE (375px)
  - [ ] iPhone 12 Pro (390px)
  - [ ] iPad (768px)
  - [ ] iPad Pro (1024px)
  - [ ] Laptop (1440px)
  - [ ] Desktop (1920px)

**Forbidden Actions:**
- ❌ Do NOT change breakpoint values from specifications above
- ❌ Do NOT create breakpoint variables in multiple files
- ❌ Do NOT use different breakpoints in different components

**Success Criteria:** All breakpoints defined, documented, and tested

**Dependencies:** BLOCKS mobile optimization, responsive images, design consistency

**Completion Checklist:**
- [ ] All actionable steps checked above
- [ ] Breakpoints documented in DESIGN-SYSTEM.md
- [ ] Chrome DevTools testing complete
- [ ] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 0.3 Image Delivery Strategy Decision
**Purpose:** Determine how images will be served (local vs CDN)

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Decision (ALREADY MADE):** Use local images with Astro optimization

**Actionable Steps:**
- [ ] Verify image directory structure exists: `/src/assets/`
- [ ] Document image strategy in DESIGN-SYSTEM.md:
  - Source: PNG/JPG originals
  - Output: WebP via Astro Image component
  - Lazy loading: Below fold only
  - Quality: No visible degradation acceptable

**Forbidden Actions:**
- ❌ Do NOT set up external CDN without explicit permission
- ❌ Do NOT change image quality settings without approval
- ❌ Do NOT modify existing images

**Success Criteria:** Image strategy documented and directory structure verified

**Completion Checklist:**
- [ ] All actionable steps checked above
- [ ] Strategy documented
- [ ] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 0.4 Contact Form Strategy Decision
**Purpose:** Decide on contact form approach before launch

**Current State:** Contact form on Contact page is a non-functional placeholder

**Decision Required By:** End of Phase 0

**Options:**

**Option A: Remove Contact Form Entirely (Simplest)**
- Pros: No maintenance, no form service needed
- Cons: Removes one contact method
- Implementation: Display email address and phone number prominently

**Option B: Use Táve for Contact Form**
- Pros: Consistent with Request Proposal form, all leads in one system
- Cons: May require Táve configuration
- Implementation: Embed Táve contact form (if available)

**Option C: Simple Third-Party Form Service**
- Pros: Easy to implement, independent of Táve
- Cons: Another service to manage
- Options: Formspree (free tier), Cloudflare Workers

**Option D: Cloudflare Workers Form Handler**
- Pros: No external service, integrated with hosting
- Cons: Requires setup
- Implementation: Build simple form handler with email notification

**Decision:** [TO BE FILLED IN BY RICH]

**Rationale:** [TO BE FILLED IN BY RICH]

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## PHASE 1: DESIGN, CONTENT & INFRASTRUCTURE

**Purpose:** Build all pages, components, tracking, and content

**Completion Criteria:** All pages built, all tracking implemented, all content migrated (or priority content migrated)

**Execution Files:** 
- `EXECUTE-PHASE-1A-HERO-SECTION.md`
- `EXECUTE-PHASE-1B-PROBLEM-SECTION.md`
- `EXECUTE-PHASE-1C-DESIGN-CONSISTENCY.md`
- `EXECUTE-PHASE-1D-MOBILE-OPTIMIZATION.md`
- `EXECUTE-PHASE-1E-GTM-ANALYTICS.md`
- `EXECUTE-PHASE-1F-SEO-INFRASTRUCTURE.md`

---

### 1.1 DESIGN & USER EXPERIENCE

#### 1.1.1 Hero Section Redesign
**Purpose:** Replace rotating carousel with grid showcasing multiple portfolio images

**Current Problem:** Rotating 1 image at a time = visitors never see portfolio breadth

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions
- [ ] Breakpoints (0.2) are complete

**BEFORE STATE (document current code before making changes):**
- File: `/src/components/Hero.astro` (or current hero file)
- Current code: [CLAUDE CODE MUST DOCUMENT THIS BEFORE PROCEEDING]

**Actionable Steps:**
- [ ] Document BEFORE STATE (current hero code)
- [ ] Remove current rotating showcase carousel (COMMENT OUT, do not delete)
- [ ] Determine final number of images for grid (WAIT for Rich's decision)
- [ ] Create grid layout that displays multiple images simultaneously
- [ ] Implement GSAP animation for images (random/staggered load-in effect)
- [ ] Optimize images for hero section (WebP format, appropriate sizes)
- [ ] Test animation performance
- [ ] Verify grid works on all breakpoints:
  - [ ] Mobile (320-767px)
  - [ ] Tablet (768-1023px)
  - [ ] Desktop Small (1024-1439px)
  - [ ] Desktop Large (1440px+)
- [ ] Implement prefers-reduced-motion fallback (static layout for accessibility)

**Forbidden Actions:**
- ❌ Do NOT delete existing carousel code (comment out only)
- ❌ Do NOT change other sections of the page
- ❌ Do NOT modify z-index values without permission
- ❌ Do NOT add position: fixed
- ❌ Do NOT change timing/easing values without permission

**UNDO Instructions (if this task fails):**
1. Open the hero component file
2. Delete the new grid code
3. Uncomment the original carousel code
4. Save the file
5. Verify site renders correctly
6. Do NOT use git revert or git reset

**Success Criteria:** Hero section displays multiple portfolio images with smooth GSAP animation

**Dependencies:** Requires breakpoints (0.2)

**Completion Checklist:**
- [ ] All actionable steps checked above
- [ ] No additional changes were made
- [ ] Code has been tested on all breakpoints
- [ ] prefers-reduced-motion fallback works
- [ ] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

#### 1.1.2 Hero Section Copy Rewrite
**Purpose:** Optimize hero messaging for SEO and conversion

**Current State:** Needs rewrite

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**BEFORE STATE (document current code before making changes):**
- File: [hero component file]
- Current H1: [DOCUMENT]
- Current tagline: [DOCUMENT]
- Current supporting copy: [DOCUMENT]

**Actionable Steps:**
- [ ] Document BEFORE STATE
- [ ] Set H1 tag to: "Professional Headshots Lancaster" (SEO-critical keyword)
- [ ] Decide on tagline (currently "World Class Headshot Experience" - WAIT for Rich's decision)
- [ ] Rewrite supporting copy for conversion (WAIT for Rich's approval)
- [ ] Verify semantic HTML structure:
  - [ ] H1 properly marked with `<h1>` tag
  - [ ] Tagline styled separately (not inside H1)
- [ ] Test visual hierarchy (H1 doesn't need to be largest text visually)

**Forbidden Actions:**
- ❌ Do NOT change H1 to anything other than specified
- ❌ Do NOT modify layout/structure
- ❌ Do NOT change CSS unless required for semantic fix

**UNDO Instructions (if this task fails):**
1. Open the hero component file
2. Replace H1 content with original documented content
3. Replace tagline with original documented content
4. Save the file
5. Verify site renders correctly

**Success Criteria:** Hero copy optimized for SEO with proper semantic structure

**Completion Checklist:**
- [ ] All actionable steps checked above
- [ ] H1 is exactly "Professional Headshots Lancaster"
- [ ] Semantic HTML verified
- [ ] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

#### 1.1.3 Problem Section Advanced Animation
**Purpose:** Create engaging scroll-triggered animation sequence

**Current State:** Triptych placeholder, not satisfied with design

**Desired Effect:**
1. Showcase container floats down from hero section
2. Pins into Problem section using GSAP ScrollTrigger
3. Expands (width + height, NOT scale)
4. Images swap: portfolio grid → Problem section triptych (3 images)

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions
- [ ] Hero Section (1.1.1) is complete

**BEFORE STATE (document current code before making changes):**
- File: [problem section file]
- Current code: [CLAUDE CODE MUST DOCUMENT THIS BEFORE PROCEEDING]

**Actionable Steps:**
- [ ] Document BEFORE STATE
- [ ] Research GSAP ScrollTrigger + pin implementation
- [ ] Create scroll trigger for showcase container movement
- [ ] Implement pin functionality in Problem section
- [ ] Add expansion animation (width/height change, NOT scale/transform)
- [ ] Create image swap transition (portfolio → triptych)
- [ ] Fine-tune timing and easing (DOCUMENT all values used)
- [ ] Test across all breakpoints:
  - [ ] Mobile (320-767px)
  - [ ] Tablet (768-1023px)
  - [ ] Desktop Small (1024-1439px)
  - [ ] Desktop Large (1440px+)
- [ ] Verify performance impact acceptable (no jank)
- [ ] Implement prefers-reduced-motion fallback:
  - [ ] Detect via CSS media query or JavaScript
  - [ ] If reduced motion: Skip animations, show static layout
  - [ ] Test both states

**Forbidden Actions:**
- ❌ Do NOT use scale/transform for expansion (use width/height)
- ❌ Do NOT apply position: fixed to other sections
- ❌ Do NOT break document flow of other sections
- ❌ Do NOT modify z-index without explicit permission
- ❌ Do NOT change timing values without documenting original values

**UNDO Instructions (if this task fails):**
1. Open the problem section file
2. Delete all GSAP ScrollTrigger code added
3. Restore original code from BEFORE STATE
4. Save the file
5. Verify site renders correctly
6. Verify scrolling works normally

**Complexity:** HIGH - requires GSAP expertise

**Success Criteria:** Smooth scroll-triggered animation with image swap working perfectly

**Completion Checklist:**
- [ ] All actionable steps checked above
- [ ] Animation plays smoothly
- [ ] Other sections not affected
- [ ] Document flow preserved
- [ ] prefers-reduced-motion works
- [ ] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

#### 1.1.4 Design Consistency Pass (ALL PAGES)
**Purpose:** Ensure all 21 pages have consistent UI/UX

**Actionable Steps:**
- [ ] Audit all 21 pages for design inconsistencies
- [ ] Document which elements differ
- [ ] Define design system standards in DESIGN-SYSTEM.md
- [ ] Apply standards to each page ONE AT A TIME
- [ ] Test each page on all breakpoints

**Forbidden Actions:**
- ❌ Do NOT change multiple pages at once
- ❌ Do NOT create new CSS custom properties without permission

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

#### 1.1.5 - 1.1.11 (Remaining Design Tasks)
*See v3.0 for full details - checkbox format applied*

---

### 1.2 CONTENT REQUIREMENTS
*See v3.0 for full details - checkbox format applied to all tasks*

---

### 1.3 MOBILE OPTIMIZATION
*See v3.0 for full details - checkbox format applied to all tasks*

---

### 1.4 TECHNICAL INFRASTRUCTURE
*See v3.0 for full details - checkbox format applied to all tasks*

---

### 1.5 GOOGLE TAG MANAGER & ANALYTICS IMPLEMENTATION
*See v3.0 for full GTM/GA4/Clarity setup details - checkbox format applied*

---

### 1.6 SEO MIGRATION INFRASTRUCTURE
*See v3.0 for full SEO details - checkbox format applied to all tasks*

---

## PHASE 2: TESTING & QUALITY ASSURANCE
*See v3.0 for full testing details - checkbox format applied to all tasks*

---

## PHASE 3: CODE REFACTORING & OPTIMIZATION
*See v3.0 for full refactoring details - checkbox format applied to all tasks*

**CRITICAL:** This phase happens AFTER everything is built, BEFORE deployment

---

## PHASE 4: PRE-LAUNCH FINAL PREPARATION
*See v3.0 for full pre-launch details - checkbox format applied*

---

## PHASE 5: LAUNCH & DEPLOYMENT
*See v3.0 for full launch details - checkbox format applied*

---

## PHASE 6: POST-LAUNCH MONITORING & STABILIZATION
*See v3.0 for full monitoring details - checkbox format applied*

---

## PHASE 7: SEO INTELLIGENCE DASHBOARD & ONGOING OPTIMIZATION
*See v3.0 for full dashboard details - checkbox format applied*

---

## VERSION CONTROL

**Document Version:** 4.0
**Created:** November 30, 2024
**Last Updated:** December 8, 2025
**Status:** APPROVED - Ready for Execution

**Changes from v3.0:**
- Added CLAUDE CODE EXECUTION FRAMEWORK section
- Added PRIME DIRECTIVE (inline rules for every task)
- Added MANDATORY EXECUTION SEQUENCE (6-step process)
- Added FORBIDDEN ACTIONS list
- Added UNDO INSTRUCTIONS (explicit, not git-based)
- Added PROJECT FILE STRUCTURE (absolute paths)
- Added TECHNICAL SPECIFICATIONS (breakpoints, images, CSS)
- Added checkbox format to all tasks
- Added Pre-Execution Checklists
- Added BEFORE STATE documentation requirements
- Added Completion Checklists
- Added Status tracking for each task
- Created execution file reference system

---

**COMPANION FILES:**
- `EXECUTE-PHASE-0A-BREAKPOINTS.md` - Breakpoint implementation
- `EXECUTE-PHASE-0B-CONTACT-FORM.md` - Contact form decision
- `EXECUTE-PHASE-1A-HERO-SECTION.md` - Hero section build
- Additional execution files to be created as needed

---

**END OF MASTER PLAN v4.0**
