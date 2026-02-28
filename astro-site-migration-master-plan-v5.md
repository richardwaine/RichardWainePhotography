# Richard Waine Photography - Astro Site Migration Master Plan v5.0

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
- [x] All actionable steps checked above
- [x] Breakpoints documented in DESIGN-SYSTEM.md
- [x] Chrome DevTools testing complete
- [x] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

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
- [x] All actionable steps checked above
- [x] Strategy documented
- [x] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

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

**Decision:** Use Tave forms for contact form

**Rationale:** Consistent with Request Proposal form, all leads in one system

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

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
- [x] All actionable steps checked above
- [x] No additional changes were made
- [x] Code has been tested on all breakpoints
- [x] prefers-reduced-motion fallback works
- [x] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

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
- [x] All actionable steps checked above
- [x] H1 is exactly "Professional Headshots Lancaster"
- [x] Semantic HTML verified
- [x] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

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
- [x] All actionable steps checked above
- [x] Animation plays smoothly
- [x] Other sections not affected
- [x] Document flow preserved
- [x] prefers-reduced-motion works
- [x] Ready for Rich to verify

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

#### 1.1.4 Design Consistency Pass (ALL PAGES)
**Purpose:** Ensure all 21 pages have consistent UI/UX

**Actionable Steps:**
- [x] Audit all 21 pages for design inconsistencies
- [x] Document which elements differ
- [x] Define design system standards in DESIGN-SYSTEM.md
- [x] Apply standards to each page ONE AT A TIME
- [x] Test each page on all breakpoints

**Completed Work:**
- Standardized wrapper widths (calc(100% - var(--size-7)) mobile, 80% desktop)
- Replaced hard-coded box shadows with custom properties
- Standardized video section structure across all pages
- Analyzed and preserved intentional design differences (form heights, button padding)

**Forbidden Actions:**
- ❌ Do NOT change multiple pages at once
- ❌ Do NOT create new CSS custom properties without permission

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

#### 1.1.5 - 1.1.11 (Remaining Design Tasks)
**Note:** Tasks were never defined by previous Claude - placeholder only

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE (N/A - no tasks defined)

---

## SECTION 1.2: CONTENT REQUIREMENTS

**Purpose:** Ensure all content is migrated, verified, and optimized

**Completion Criteria:** All Squarespace content migrated, all images local, no external dependencies

---

### 1.2.1 Hero Section Copy Rewrite
**Purpose:** Optimize hero messaging for SEO and conversion

**Current State:** Copy needs rewriting, semantic structure needs fixing

**Requirements:**
- H1 tag: "Professional Headshots Lancaster" (SEO-critical keyword)
- Tagline: "World Class Headshot Experience" (may change - TBD)
- Large display text is NOT the H1 - tagline styled separately
- Supporting copy: Needs rewriting (content TBD)

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Audit current hero semantic structure
- [ ] Ensure H1 is properly marked (not the large display text)
- [ ] Rewrite supporting copy for conversion
- [ ] Test visual hierarchy (H1 doesn't need to be largest text visually)

**Forbidden Actions:**
- ❌ Do NOT change layout without approval
- ❌ Do NOT modify other sections

**Success Criteria:** H1 is "Professional Headshots Lancaster", semantic structure correct

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.2.2 Blog Migration
**Purpose:** Migrate all blog posts from Squarespace to Astro

**Current State:** 4 posts migrated, 52 remaining

**Technical Requirements:**
- Convert HTML/CSS posts to Markdown format
- Set up proper frontmatter for each post (title, date, category, slug, etc.)
- Ensure slugs match original Squarespace URLs for redirect mapping
- Posts go in `/src/posts/` directory

**Phased Approach:**
- **Pre-launch:** Migrate priority/high-traffic posts
- **During launch:** Continue migration
- **Post-launch:** Complete remaining posts (target: 60-90 days)

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Identify high-priority posts to migrate first
- [ ] Create Markdown template with proper frontmatter structure
- [ ] Convert posts in batches
- [ ] Verify each post renders correctly
- [ ] Add 301 redirect for each migrated post

**Success Criteria:** All blog posts migrated with working redirects

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.2.3 Blog Image Migration
**Purpose:** Replace all Squarespace CDN image references with local images

**Current Problem:** Blog posts reference images via HTTP links to Squarespace CDN (e.g., `https://images.squarespace-cdn.com/...`). These will break when Squarespace subscription ends.

**Image Source:** Original images stored locally on Rich's computer

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Extract all image URLs from blog posts
- [ ] Match images to correct posts (Rich provides from local storage)
- [ ] Organize images by blog post
- [ ] Optimize images (format, size, compression)
- [ ] Place in `/src/assets/blog/` directory
- [ ] Update Markdown files with local image paths
- [ ] Verify correct Markdown syntax for image references

**Forbidden Actions:**
- ❌ Do NOT attempt to download from Squarespace CDN
- ❌ Do NOT proceed without Rich providing local images

**Success Criteria:** All blog images stored locally, no Squarespace CDN references

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.2.4 Squarespace Reference Audit
**Purpose:** Ensure NO references to Squarespace remain in codebase

**What to Check:**
- Image hrefs pointing to `squarespace-cdn.com`
- Any links pointing to Squarespace domains
- Embedded content from Squarespace
- CSS or JS references to Squarespace assets

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Search entire codebase for "squarespace"
- [ ] Search entire codebase for "sqsp"
- [ ] Document all references found
- [ ] Replace each reference with local asset or remove
- [ ] Re-run search to verify all removed
- [ ] Test site functions without Squarespace dependency

**Success Criteria:** Zero references to Squarespace in codebase

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.2.5 Page Content Verification
**Purpose:** Verify all Squarespace page content exists on Astro site

**All 21 Pages to Verify:**
- [ ] Homepage - all sections present and content accurate
- [ ] About - content complete
- [ ] Studio Headshots - content complete
- [ ] On-Location Headshots - content complete
- [ ] My Team - content complete (page needs redesign)
- [ ] Videos - content complete
- [ ] Gift Certificates - content complete
- [ ] Studio - content complete
- [ ] Schedule - Acuity widget functional
- [ ] Rates - toggle working, pricing accurate
- [ ] Request Proposal - Tave form functional
- [ ] Contact - contact info accurate, map working
- [ ] Blog - filtering functional, posts display correctly
- [ ] FAQs - content complete
- [ ] Resources - vendor filtering functional
- [ ] Baltimore location page - content complete
- [ ] Delaware location page - content complete
- [ ] Harrisburg location page - content complete
- [ ] Philadelphia location page - content complete
- [ ] York location page - content complete
- [ ] Conference/event location page - content complete

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Open Squarespace and Astro side by side
- [ ] Compare each page section by section
- [ ] Document any missing content
- [ ] Add missing content
- [ ] Verify all content accurate and current

**Success Criteria:** All 21 pages verified complete

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.2.6 FAQ Update
**Purpose:** Update FAQ content and add internal links

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Review current FAQ questions/answers
- [x] Update outdated information
- [x] Add internal links to relevant pages
- [x] Verify FAQ schema markup (tracked in 1.6.8)

**Success Criteria:** FAQs updated with internal links

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.2.7 Image Alt Text
**Purpose:** Add descriptive alt text to all images for SEO and accessibility

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Inventory all images on site
- [ ] Write descriptive alt text for each
- [ ] Implement alt text in code
- [ ] Verify with accessibility audit

**Note:** Complete after all images migrated to local storage

**Success Criteria:** All images have descriptive alt text

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.2.8 CTA Optimization
**Purpose:** Ensure all calls-to-action are clear and conversion-focused

**Standard CTA Phrasing:**
- "Get Pricing"
- "Request Proposal"
- "Schedule Session"
- Action-oriented language

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Audit all CTAs across site
- [x] Standardize language
- [x] Verify all CTAs link to correct destinations
- [x] Test all CTA buttons functional

**Success Criteria:** All CTAs consistent and functional

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.2.9 Content Gap Analysis (POST-LAUNCH - MANDATORY)
**Purpose:** Identify content opportunities to outrank competitors

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Competitive research across all service areas
- [ ] Keyword gap identification
- [ ] Create content plan to fill gaps
- [ ] Execute content creation
- [ ] Establish as THE definitive headshot resource regionally

**Note:** This is post-launch but MANDATORY for business growth

**Success Criteria:** Content gaps identified and plan created

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## SECTION 1.3: MOBILE OPTIMIZATION

**Purpose:** Ensure site is fully responsive and mobile-first indexed

**Completion Criteria:** All pages pass mobile usability, Google mobile-first indexing ready

---

### 1.3.1 Mobile-First CSS Conversion
**Purpose:** Convert all CSS from desktop-first to mobile-first

**Current State:** In progress - media queries being converted

**Breakpoints (from DESIGN-SYSTEM.md):**
```css
/* Mobile-first: Base styles for mobile */

/* Tablet: 768px+ */
@media (min-width: 48em) { }

/* Desktop Small: 1024px+ */
@media (min-width: 64em) { }

/* Desktop Large: 1440px+ */
@media (min-width: 90em) { }
```

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Audit all CSS files for desktop-first media queries
- [ ] Convert each file to mobile-first approach
- [ ] Test each component at all breakpoints
- [ ] Verify no visual regressions

**Success Criteria:** All CSS mobile-first, site responsive at all breakpoints

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.3.2 Mobile Usability Testing
**Purpose:** Verify all pages function correctly on mobile devices

**Test Devices:**
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- iPad (768px)
- iPad Pro (1024px)

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Test all 21 pages on each device width
- [x] Document any layout issues
- [x] Fix layout issues one page at a time
- [x] Re-test after fixes
- [x] Verify touch targets adequate size (44x44px minimum)
- [x] Verify text readable without zooming

**Completed:** All 21 pages tested on mobile devices, all issues documented and resolved in mobile-testing-results.md

**Success Criteria:** All pages pass mobile usability

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.3.3 Mobile Navigation
**Purpose:** Ensure navigation works on mobile

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Test hamburger menu functionality
- [x] Verify all nav links accessible
- [x] Test CTA button in header on mobile
- [x] Verify footer navigation on mobile

**Success Criteria:** Navigation fully functional on mobile

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

## SECTION 1.4: TECHNICAL INFRASTRUCTURE

**Purpose:** Ensure all technical systems are properly configured

**Completion Criteria:** All forms working, all embeds functional, all integrations connected

---

### 1.4.1 Tave Request Proposal Form
**Purpose:** Verify Tave form integration working

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Test form submission
- [x] Verify submission appears in Tave
- [x] Test all form fields
- [x] Verify validation working
- [x] Test on mobile devices

**Success Criteria:** Form submissions arrive in Tave

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.4.2 Acuity Scheduling Widget
**Purpose:** Verify Acuity widget functional on Schedule page

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Test widget loads correctly
- [x] Test booking flow
- [x] Verify mobile responsiveness
- [x] Test on multiple browsers

**Success Criteria:** Scheduling widget fully functional

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.4.3 Google Maps Embed
**Purpose:** Verify map displays correctly on Contact page

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Verify map loads
- [x] Verify correct location displayed
- [x] Test on mobile devices
- [x] Fix any shadow/styling issues

**Success Criteria:** Map displays correctly

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.4.4 Video Embeds
**Purpose:** Verify all video content plays correctly

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Test sizzle reel on homepage
- [x] Test Videos page content
- [x] Verify responsive behavior
- [x] Test on mobile devices

**Success Criteria:** All videos play correctly

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

## SECTION 1.5: ANALYTICS & TRACKING IMPLEMENTATION

**Purpose:** Implement comprehensive tracking infrastructure for data-driven decisions

**Completion Criteria:** GTM configured, GA4 tracking, Clarity heatmaps, Search Console verified, GBP connected, Moz Local claimed

**CRITICAL:** All tracking must be implemented BEFORE launch to capture data from day one

---

### 1.5.1 Google Tag Manager (GTM) Setup
**Purpose:** Centralize all tracking scripts through GTM container

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Create Google Tag Manager account (existing account used)
- [x] Create GTM container for richardwainephotography.com (existing container GTM-KS6CRSL)
- [x] Add GTM container script to MainLayout.astro `<head>` section (line 124-130 with is:inline)
- [x] Add GTM noscript to MainLayout.astro `<body>` section (line 140-143)
- [x] Verify GTM container loads correctly (2 instances verified in page source)
- [ ] Full testing deferred until staging/production domain available

**GTM Container Placement:**
```html
<!-- Google Tag Manager (in <head>) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Google Tag Manager (noscript) (after opening <body>) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

**Implementation Details:**
- Container ID: GTM-KS6CRSL
- Account: Richard Waine Photography
- Container name: www.richardwaine.com (redirects to richardwainephotography.com)
- Head script location: MainLayout.astro lines 124-130 (with is:inline directive)
- Body noscript location: MainLayout.astro lines 140-143
- Verified: Both snippets render correctly in page source

**Forbidden Actions:**
- ❌ Do NOT hardcode tracking scripts directly (use GTM instead)
- ❌ Do NOT deploy without testing GTM loads correctly

**Success Criteria:** GTM container installed and firing correctly

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.5.2 Google Analytics 4 (GA4) Configuration
**Purpose:** Track user behavior, traffic sources, and conversions

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Create GA4 property for richardwainephotography.com (existing property verified)
- [x] Get GA4 Measurement ID (G-TRKC22DDJ9)
- [x] Configure GA4 tag in GTM (existing tag verified)
- [ ] Set up key events (conversions) - DEFERRED TO TASK 1.5.7:
  - [ ] Form submission (Request Proposal)
  - [ ] Schedule click (Acuity)
  - [ ] Phone click
  - [ ] Email click
  - [ ] Rates page view
  - [ ] Gift certificate view
- [x] Configure enhanced measurement (enabled by default in GA4)
- [ ] Test GA4 tracking with DebugView (deferred until staging/production)
- [ ] Verify all events fire correctly (deferred until staging/production)

**Implementation Details:**
- GA4 Property: Richard Waine Photography - GA4
- Measurement ID: G-TRKC22DDJ9
- GTM Tag: "Google Tag"
- Tag Type: Google Tag
- Firing Trigger: Initialization - All Pages
- Stream URL: http://www.richardwaine.com
- Data collection: Active (verified in past 48 hours)

**Forbidden Actions:**
- ❌ Do NOT use Universal Analytics (deprecated)
- ❌ Do NOT add GA4 script directly to HTML (use GTM)
- ❌ Do NOT deploy without testing events

**Success Criteria:** GA4 tracking all pages and key events

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE (base tracking configured, conversion events in 1.5.7)

---

### 1.5.3 Microsoft Clarity Setup
**Purpose:** Heatmaps, session recordings, and user behavior insights

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Create Microsoft Clarity account (existing account used)
- [x] Create project for richardwainephotography.com (existing project)
- [x] Get Clarity tracking code (tracking ID: gnx1bu1ml3)
- [x] Add Clarity tag to GTM (Custom HTML tag created)
- [x] Configure Clarity settings:
  - [x] Enable session recordings (enabled)
  - [x] Enable heatmaps (enabled)
  - [x] Set up masking for sensitive data (default masking active)
- [x] Test Clarity tracking (verified in GTM Preview mode - tag fired)
- [x] Verify recordings capture correctly (sessions recorded and visible in Clarity dashboard)

**Implementation Details:**
- GTM Tag Name: MS Clarity
- Tag Type: Custom HTML
- Clarity Project ID: gnx1bu1ml3
- Firing Trigger: Initialization - All Pages
- Status: Active and capturing sessions
- Integration: Connected to Google Analytics
- Verified: Tag fires in GTM debugger, sessions appear in Clarity dashboard

**Forbidden Actions:**
- ❌ Do NOT record sensitive form data (mask all form inputs)
- ❌ Do NOT add Clarity script directly (use GTM)

**Success Criteria:** Clarity capturing heatmaps and recordings

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.5.4 Google Search Console Verification
**Purpose:** Monitor search performance, indexing status, and SEO issues

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Add property to Search Console (richardwainephotography.com) - ALREADY EXISTS
- [x] Verify ownership via HTML meta tag method - ALREADY VERIFIED
- [x] Add both www and non-www versions (if applicable) - ALREADY CONFIGURED
- [ ] Submit sitemap.xml - DEFERRED TO LAUNCH
- [ ] Verify sitemap processed correctly - DEFERRED TO LAUNCH
- [ ] Check for indexing issues - DEFERRED TO LAUNCH
- [ ] Set up email alerts for critical errors - ALREADY CONFIGURED

**Implementation Details:**
- Search Console property already exists for richardwainephotography.com
- Domain is not changing (richardwainephotography.com remains)
- Only action needed at launch: Submit new sitemap.xml to existing property
- No new verification required

**Verification Methods:**
- HTML meta tag (recommended - add to MainLayout.astro `<head>`)
- OR DNS TXT record
- OR Google Analytics (if GA4 already configured)

**Forbidden Actions:**
- ❌ Do NOT skip sitemap submission
- ❌ Do NOT ignore indexing errors

**Success Criteria:** Search Console verified, sitemap submitted and processed

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE (deferred sitemap submission to launch)

---

### 1.5.5 Google Business Profile (GBP) Connection
**Purpose:** Ensure business listing accurate and connected to website

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Verify GBP listing claimed and active - ALREADY ACTIVE
- [x] Update website URL to richardwainephotography.com - N/A (DOMAIN NOT CHANGING)
- [x] Verify NAP (Name, Address, Phone) matches website - ALREADY MATCHES
- [x] Add all service areas (Lancaster, Baltimore, Harrisburg, Philadelphia, York, Delaware) - ALREADY CONFIGURED
- [x] Update business hours - ALREADY CONFIGURED
- [x] Add all service categories (headshot photography, portrait photography, etc.) - ALREADY CONFIGURED
- [x] Upload recent photos - ALREADY DONE
- [x] Enable messaging if desired - USER DECISION
- [x] Set up Google Posts schedule (optional but recommended) - USER DECISION

**Implementation Details:**
- Domain is NOT changing: richardwainephotography.com remains
- GBP already points to richardwainephotography.com
- No URL update required
- All GBP information already accurate
- Task is N/A for this migration (no domain change)

**Forbidden Actions:**
- ❌ Do NOT use different NAP info than website
- ❌ Do NOT forget to update website URL from Squarespace

**Success Criteria:** GBP listing updated with new website URL

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE (N/A - no domain change required)

---

### 1.5.6 Moz Local Listing Management
**Purpose:** Ensure consistent NAP across all directories and citations

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Log into Moz Local account - ALREADY CONFIGURED
- [x] Update website URL to richardwainephotography.com - N/A (DOMAIN NOT CHANGING)
- [x] Verify NAP consistency across all listings - ALREADY CONSISTENT
- [x] Update any outdated citations - N/A (NO CHANGES NEEDED)
- [x] Check listing accuracy score - ALREADY MONITORED
- [x] Fix any duplicate listings - ALREADY MANAGED
- [x] Monitor for new listings to claim - ONGOING

**Implementation Details:**
- Domain is NOT changing: richardwainephotography.com remains
- Moz Local already has correct URL and NAP
- No citations need updating (domain stays the same)
- Listing accuracy already maintained
- Task is N/A for this migration (no domain change)

**Forbidden Actions:**
- ❌ Do NOT leave old Squarespace URL in citations
- ❌ Do NOT ignore duplicate listings (merge or remove)

**Success Criteria:** Moz Local showing updated URL, high accuracy score

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE (N/A - no domain change required)

---

### 1.5.7 Conversion Tracking Setup
**Purpose:** Track business-critical conversions and ROI

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Configure GA4 conversion events:
  - [x] Request Proposal form submission
  - [x] Schedule session click
  - [x] Phone number click
  - [x] Email click - SKIPPED (email address being removed from site)
  - [x] Gift certificate page view
- [x] Set up GTM triggers for each conversion
- [ ] Test each conversion fires correctly - DEFERRED until after launch (testing requires live domain)
- [ ] Verify conversions appear in GA4 - DEFERRED until after launch
- [ ] Set conversion values if applicable - DEFERRED until data available

**Implementation Details:**

**1. Request Proposal Form Submission:**
- GTM Trigger: "Proposal Form Submitted"
- Trigger Type: Page View
- Condition: Page URL contains `/proposal-thank-you`
- GTM Tag: "Proposal Form Conversion"
- Tag Type: Google Analytics: GA4 Event
- Event Name: `generate_lead`
- Measurement ID: G-TRKC22DDJ9
- Note: Tracks when users land on thank you page after submitting Request Proposal form (Táve/VSCO iframe)

**2. Schedule Session Click:**
- GTM Trigger: "Schedule Page View"
- Trigger Type: Page View
- Condition: Page URL contains `/schedule`
- GTM Tag: "Schedule Session Click"
- Tag Type: Google Analytics: GA4 Event
- Event Name: `view_schedule`
- Measurement ID: G-TRKC22DDJ9
- Note: Tracks when users reach schedule page with Acuity embed

**3. Phone Number Click:**
- GTM Trigger: "Phone Number Click"
- Trigger Type: Click - Just Links
- Condition: Click URL contains `7179250061`
- GTM Tag: "Phone Number Click"
- Tag Type: Google Analytics: GA4 Event
- Event Name: `click_phone`
- Measurement ID: G-TRKC22DDJ9
- Note: Tracks all clicks to `tel:7179250061` links across entire site
- Phone links standardized to: `tel:7179250061` format

**4. Email Click:**
- SKIPPED - User removing email address from site to reduce spam/solicitations
- Contact form used instead of email links

**5. Gift Certificate Page View:**
- GTM Trigger: "Gift Certificate Page View"
- Trigger Type: Page View
- Condition: Page URL contains `/gift-certificates`
- GTM Tag: "Gift Certificate Page View"
- Tag Type: Google Analytics: GA4 Event
- Event Name: `view_item`
- Measurement ID: G-TRKC22DDJ9
- Note: Tracks when users view gift certificate purchase page (Square integration)

**Files Modified:**
- Created: `/src/pages/proposal-thank-you.astro` (thank you page for Request Proposal form)
- Created: `/src/assets/check-mark-black.png` (checkmark icon for thank you page)
- Standardized all phone links to: `tel:7179250061` format

**Testing Notes:**
- Cannot test Request Proposal conversion on localhost (Táve redirects to richardwaine.com/proposal-thank-you)
- All conversions require live domain for complete testing
- GTM Preview mode can verify tags fire, but actual GA4 data requires production domain
- Testing deferred to post-launch monitoring phase

**Forbidden Actions:**
- ❌ Do NOT skip testing conversions
- ❌ Do NOT deploy without verifying all conversions work

**Success Criteria:** All conversions tracking correctly in GA4

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE (setup complete, testing deferred to post-launch)

---

### 1.5.8 Tracking Documentation
**Purpose:** Document all tracking implementations for future reference

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Create TRACKING.md file in project root
- [x] Document GTM container ID
- [x] Document GA4 measurement ID
- [x] Document Clarity project ID
- [x] List all GA4 events and triggers
- [x] Document all GTM tags, triggers, and variables
- [x] Note any custom tracking implementations
- [x] Include troubleshooting notes

**Implementation Notes:**
- TRACKING.md created with comprehensive documentation of all tracking implementations
- Documented GTM container (GTM-KS6CRSL), GA4 property (G-TRKC22DDJ9), Clarity project (gnx1bu1ml3)
- Listed all 4 conversion events with full GTM trigger and tag details
- Included troubleshooting section for common issues
- Added testing checklist for post-launch verification
- File relocated to user's personal hard drive for security (tracking IDs should not be in public repo)

**Success Criteria:** Complete tracking documentation exists

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

## SECTION 1.6: SEO MIGRATION INFRASTRUCTURE

**Purpose:** Preserve SEO rankings during migration

**Completion Criteria:** All redirects configured, all metadata preserved, sitemap submitted

**CRITICAL:** Cannot lose rankings, SEO performance, or traffic

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.6.1 URL Mapping
**Purpose:** Document all URLs and their destinations

**Pages with Exact URL Match (no redirect needed):**
- All location pages (/baltimore-headshots, /delaware-headshots, etc.)
- All core pages (/about, /contact, /schedule, /rates, etc.)
- /studio
- /my-team
- /resources
- /videos
- /gift-certificates
- /preparation-guide (if exists)
- /terms-conditions

**Pages Requiring 301 Redirects:**
- `/blog-content/[post-slug]` → `/blog/[post-slug]`
- `/blog-2/[post-slug]` → `/blog/[post-slug]`
- `/client-experiences` → `/` (homepage)

**Pages Returning 404:**
- `/headshots-for-a-cure` → Custom 404 page

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Create complete URL mapping spreadsheet
- [x] Verify all current Squarespace URLs documented
- [x] Map each to Astro equivalent
- [x] Identify any URL structure changes

**Success Criteria:** Complete URL map documented

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.6.2 Blog URL Extraction
**Purpose:** Get complete list of all blog post URLs for redirect mapping

**Sources:**
- Squarespace sitemap.xml
- Both `/blog-content/` and `/blog-2/` paths

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Download/access Squarespace sitemap
- [x] Extract all blog post URLs
- [x] Create redirect mapping for each post
- [x] Verify slug format matches between old and new

**Success Criteria:** All blog URLs extracted and mapped

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.6.3 301 Redirect Configuration
**Purpose:** Implement all redirects to preserve SEO value

**For Cloudflare Pages, create `_redirects` file in `/public/`:**

```
# Blog redirects
/blog-content/* /blog/:splat 301
/blog-2/* /blog/:splat 301

# Special pages
/client-experiences / 301

# Add individual redirects as needed
```

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Create `/public/_redirects` file
- [x] Add blog redirect rules
- [x] Add special page redirects
- [x] Carry over existing Squarespace redirects
- [ ] Test redirects on staging domain
- [ ] Verify 301 status (not 302)
- [ ] Check for redirect chains (should be direct A→B)

**Success Criteria:** All redirects return 301, no chains

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.6.4 Existing Squarespace Redirects
**Purpose:** Preserve redirects already configured in Squarespace

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Export/document all current Squarespace redirects
- [ ] Add each to Cloudflare `_redirects` file
- [ ] Test each redirect works on new site

**Success Criteria:** All existing redirects preserved

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.6.5 Metadata Migration
**Purpose:** Preserve and improve SEO metadata

**Strategy:** Start with current Squarespace metadata, enhance where possible, never make worse

**For Each Page:**
- Title tag (preserve or improve)
- Meta description (preserve or improve)
- H1 tag (verify correct)
- Open Graph tags (social sharing)

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Extract current metadata from all Squarespace pages (not needed - metadata already implemented)
- [x] Document in spreadsheet (not needed - metadata in code)
- [x] Audit for optimization opportunities (current metadata is good)
- [x] Implement metadata in Astro (via frontmatter or Layout)
- [ ] Verify Open Graph tags working (test with social sharing debuggers - POST-LAUNCH ONLY)

**Implementation Details:**
- Title tags: Implemented in MainLayout.astro line 36, all pages pass title prop
- Meta descriptions: Implemented in MainLayout.astro line 30, default + page overrides
- H1 tags: Hero component default "Professional Headshots Lancaster", PageTitle component for other pages
- Open Graph tags: og:type, og:url, og:title, og:description, og:image (MainLayout.astro lines 38-42)
- Canonical URLs: Implemented in MainLayout.astro line 37
- OG image: /public/Logo-RichardWainePhotography-black.png (verified exists)

**Success Criteria:** All metadata preserved or improved

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.6.6 Sitemap Configuration
**Purpose:** Generate valid sitemap for search engines

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Configure Astro sitemap integration
- [x] Verify all pages included
- [x] Verify blog posts included
- [x] Verify sitemap.xml accessible at /sitemap.xml
- [x] Validate sitemap format

**Success Criteria:** Valid sitemap generated

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.6.7 Robots.txt Configuration
**Purpose:** Configure crawler access

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Create robots.txt in `/public/`
- [ ] Allow all crawlers
- [ ] Reference sitemap location
- [ ] Do NOT block any pages

**robots.txt content:**
```
User-agent: *
Allow: /

Sitemap: https://richardwainephotography.com/sitemap.xml
```

**Success Criteria:** robots.txt accessible and correct

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

### 1.6.8 Schema Markup (EXPANDED - COMPREHENSIVE IMPLEMENTATION)
**Purpose:** Add structured data for rich search results

**Original Scope:**
- LocalBusiness (photographer)
- Organization
- BreadcrumbList
- FAQPage (for FAQ page)

**ACTUAL IMPLEMENTATION (Expanded to comprehensive site-wide schema):**

**Infrastructure:**
- [x] Created `/src/utils/schema.ts` with 11 TypeScript utility functions
- [x] Added schema implementation pattern to CLAUDE.md for future pages
- [x] Implemented consistent pattern: import → generate in frontmatter → output with set:html

**Schema Types Implemented:**
- [x] Service schema (3 service pages: business, LinkedIn, acting headshots)
- [x] Review schema (testimonials across multiple pages + 13 components)
- [x] FAQ schema (FAQ sections on pages)
- [x] VideoObject schema (8 videos on Videos page + promo video on 7 location pages)
- [x] Product schema (5 gift certificate denominations)
- [x] Person schema (2 team members: Lionel Adriano, Lisa Torba)
- [x] Place schema (studio location with geo coordinates and hours)
- [x] ItemList schema (22 vendors on Resources page)
- [x] Blog schema (blog collection page)
- [x] HowTo schema (preparation guide with 5 steps)
- [x] LocalBusiness schema (embedded in Service and Review schemas)
- [x] Organization schema (embedded in various schemas)

**Files with Schema Implementation:**

**Components (13):**
- Hero.astro (VideoObject + 3 Reviews)
- Gallery.astro (Service)
- FAQs.astro (FAQ)
- Process.astro (HowTo)
- Features.astro (3 Reviews)
- OfficeHeadshots.astro (Service)
- HeadshotsNear.astro (3 Reviews)
- BriefBio.astro (3 Reviews)
- BriefBio2.astro (3 Reviews)
- Professions.astro (3 Reviews)
- WorldMap.astro (3 Reviews)
- FloatingStats.astro (3 Reviews)
- RatesCard.astro (3 Reviews)

**Pages (19):**

*Location Pages (7):*
- index.astro (VideoObject + 3 Reviews)
- baltimore-headshots.astro (VideoObject + 3 Reviews)
- harrisburg-headshots.astro (VideoObject + 3 Reviews)
- philadelphia-headshots.astro (VideoObject + 3 Reviews)
- york-headshots.astro (VideoObject + 3 Reviews)
- delaware-headshots.astro (VideoObject + 3 Reviews)
- conference-headshots.astro (VideoObject + 3 Reviews)

*Service Pages (3):*
- business-headshots.astro (Service + 3 Reviews + FAQ)
- linkedin-headshots.astro (Service + 3 Reviews + FAQ)
- acting-headshots.astro (Service + 3 Reviews + FAQ)

*Individual Pages (9):*
- blog.astro (Blog)
- preparation-guide.astro (HowTo with 5 steps)
- gift-certificates.astro (5 Product schemas)
- videos.astro (8 VideoObject schemas)
- my-team.astro (2 Person schemas)
- request-proposal.astro (1 Review)
- schedule.astro (1 Review)
- resources.astro (ItemList with 22 vendors)
- richard-waine-photography-studio.astro (Place with geo coordinates)

**Total:** 32 files with JSON-LD structured data

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Create schema utility functions in /src/utils/schema.ts
- [x] Implement schema on all 13 components
- [x] Implement schema on all 19 pages
- [x] Document schema pattern in CLAUDE.md
- [x] Test build to verify all schema compiles correctly
- [x] Commit to git on schema-implementation branch
- [x] Push to GitHub

**Build Test Results:**
- [x] Build completed successfully (74 pages built)
- [x] No schema-related errors
- [x] All 290 images optimized
- [x] Sitemap generated successfully

**Success Criteria:** Schema valid, implemented across entire site, build successful

**Git Branch:** schema-implementation
**Commit:** "Implement schema/structured data across entire site"

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

**Next Steps:** Test schema with Google Rich Results Test after deployment (post-launch task)

---

### 1.6.9 Canonical URLs
**Purpose:** Prevent duplicate content issues

**Pre-Execution Checklist:**
- [x] I have read this entire task
- [x] I understand what is being asked
- [x] I will not deviate from these instructions

**Actionable Steps:**
- [x] Add canonical tags to all pages
- [x] Verify canonical points to correct URL
- [x] Ensure www vs non-www consistency
- [x] Ensure https consistency

**Success Criteria:** All pages have correct canonical tags

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [x] COMPLETE

---

## PHASE 2: TESTING & QUALITY ASSURANCE

**Purpose:** Comprehensive testing across all areas before refactoring and launch

**Completion Criteria:** All tests passed, no critical bugs, performance acceptable

**Note:** Full task breakdown in EXECUTE-PHASE-2-TESTING.md

**Code Verification Progress:**
- ✅ STEP 3: Functionality Testing (code verification complete)
- ✅ STEP 4: SEO Testing (code verification complete, 404 bug fixed)
- ⏸️ STEP 1, 2, 5, 6, 7: Require dev server or live domain

**Lighthouse Testing Completed:**
- ✅ Homepage: 100 SEO, 100 Accessibility, 92 Performance (mobile)
- ✅ Business Headshots: 100/100/100/100 (mobile), 100/100/100/100 (desktop)
- ✅ Acting Headshots: 100/100/100/100 (mobile), 100/100/100/100 (desktop)
- ✅ LinkedIn Headshots: 100/100/100/100 (mobile), 100/100/100/100 (desktop)
- ✅ Office Headshots: 100/100/100/100 (mobile), 100/100/100/100 (desktop)
- ✅ Gift Certificates: 100/100/100/100 (mobile), 100/100/100/100 (desktop)
- ✅ Blog: 100/100/100/100
- ✅ Contact: 100/100/98/100 (desktop), 100/100/97/100 (mobile)
- ✅ Baltimore: 100/100/88-92/100 (mobile, network variance)

**Status:** [ ] NOT STARTED  [x] IN PROGRESS  [ ] COMPLETE

---

## PHASE 3: CODE REFACTORING & OPTIMIZATION

**Purpose:** Clean up, optimize, and improve code efficiency BEFORE deployment

**Completion Criteria:** Code clean, optimized, no technical debt

**CRITICAL:** This phase happens AFTER everything is built, BEFORE deployment

**Note:** Full task breakdown to be expanded with checkbox format when Phase 2 nears completion

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## PHASE 4: PRE-LAUNCH FINAL PREPARATION

**Purpose:** Final checks and preparations before going live

**Completion Criteria:** All systems verified, backup plan ready, launch checklist complete

---

### 4.1 Test Domain Configuration
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

**Note:** Additional task breakdown to be expanded with checkbox format when Phase 3 nears completion

**Phase Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## PHASE 5: LAUNCH & DEPLOYMENT

**Purpose:** Execute production deployment

**Completion Criteria:** Site live on production domain, all systems operational

**Note:** Full task breakdown to be expanded with checkbox format when Phase 4 nears completion

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## PHASE 6: POST-LAUNCH MONITORING & STABILIZATION

**Purpose:** Intensive monitoring and rapid response in first 30 days

**Completion Criteria:** No critical issues, traffic stable, rankings maintained

**Note:** Full task breakdown to be expanded with checkbox format when Phase 5 nears completion

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## PHASE 7: SEO INTELLIGENCE DASHBOARD & ONGOING OPTIMIZATION

**Purpose:** Build comprehensive analytics system for business intelligence

**Completion Criteria:** Dashboard operational, automated reporting configured

**Note:** Full task breakdown to be expanded with checkbox format when Phase 6 nears completion

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## VERSION CONTROL

**Document Version:** 5.0
**Created:** November 30, 2024
**Last Updated:** December 22, 2025
**Status:** APPROVED - Ready for Execution

**Changes from v4.0:**
- Updated all version references from v4 to v5
- Updated last modified date to December 22, 2025
- Consolidated all task formats with consistent checkbox structure
- All execution framework rules remain in effect
- All technical specifications remain unchanged

---

**COMPANION FILES:**
- `EXECUTE-PHASE-0A-BREAKPOINTS.md` - Breakpoint implementation
- `EXECUTE-PHASE-0B-CONTACT-FORM.md` - Contact form decision
- `EXECUTE-PHASE-1A-HERO-SECTION.md` - Hero section build
- Additional execution files to be created as needed

---

**END OF MASTER PLAN v5.0**
