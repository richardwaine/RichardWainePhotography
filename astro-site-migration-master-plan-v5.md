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
**Note:** Full details to be expanded in individual execution files as needed

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.2.6 FAQ Update
**Purpose:** Update FAQ content and add internal links

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Review current FAQ questions/answers
- [ ] Update outdated information
- [ ] Add internal links to relevant pages
- [ ] Verify FAQ schema markup (if applicable)

**Success Criteria:** FAQs updated with internal links

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.2.8 CTA Optimization
**Purpose:** Ensure all calls-to-action are clear and conversion-focused

**Standard CTA Phrasing:**
- "Get Pricing"
- "Request Proposal"
- "Schedule Session"
- Action-oriented language

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Audit all CTAs across site
- [ ] Standardize language
- [ ] Verify all CTAs link to correct destinations
- [ ] Test all CTA buttons functional

**Success Criteria:** All CTAs consistent and functional

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.3.2 Mobile Usability Testing
**Purpose:** Verify all pages function correctly on mobile devices

**Test Devices:**
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- iPad (768px)
- iPad Pro (1024px)

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Test all 21 pages on each device width
- [ ] Document any layout issues
- [ ] Fix layout issues one page at a time
- [ ] Re-test after fixes
- [ ] Verify touch targets adequate size (44x44px minimum)
- [ ] Verify text readable without zooming

**Success Criteria:** All pages pass mobile usability

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.3.3 Mobile Navigation
**Purpose:** Ensure navigation works on mobile

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Test hamburger menu functionality
- [ ] Verify all nav links accessible
- [ ] Test CTA button in header on mobile
- [ ] Verify footer navigation on mobile

**Success Criteria:** Navigation fully functional on mobile

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## SECTION 1.4: TECHNICAL INFRASTRUCTURE

**Purpose:** Ensure all technical systems are properly configured

**Completion Criteria:** All forms working, all embeds functional, all integrations connected

---

### 1.4.1 Tave Request Proposal Form
**Purpose:** Verify Tave form integration working

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Test form submission
- [ ] Verify submission appears in Tave
- [ ] Test all form fields
- [ ] Verify validation working
- [ ] Test on mobile devices

**Success Criteria:** Form submissions arrive in Tave

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.4.2 Acuity Scheduling Widget
**Purpose:** Verify Acuity widget functional on Schedule page

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Test widget loads correctly
- [ ] Test booking flow
- [ ] Verify mobile responsiveness
- [ ] Test on multiple browsers

**Success Criteria:** Scheduling widget fully functional

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.4.3 Google Maps Embed
**Purpose:** Verify map displays correctly on Contact page

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Verify map loads
- [ ] Verify correct location displayed
- [ ] Test on mobile devices
- [ ] Fix any shadow/styling issues

**Success Criteria:** Map displays correctly

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.4.4 Video Embeds
**Purpose:** Verify all video content plays correctly

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Test sizzle reel on homepage
- [ ] Test Videos page content
- [ ] Verify responsive behavior
- [ ] Test on mobile devices

**Success Criteria:** All videos play correctly

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## SECTION 1.6: SEO MIGRATION INFRASTRUCTURE

**Purpose:** Preserve SEO rankings during migration

**Completion Criteria:** All redirects configured, all metadata preserved, sitemap submitted

**CRITICAL:** Cannot lose rankings, SEO performance, or traffic

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
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Create complete URL mapping spreadsheet
- [ ] Verify all current Squarespace URLs documented
- [ ] Map each to Astro equivalent
- [ ] Identify any URL structure changes

**Success Criteria:** Complete URL map documented

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.6.2 Blog URL Extraction
**Purpose:** Get complete list of all blog post URLs for redirect mapping

**Sources:**
- Squarespace sitemap.xml
- Both `/blog-content/` and `/blog-2/` paths

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Download/access Squarespace sitemap
- [ ] Extract all blog post URLs
- [ ] Create redirect mapping for each post
- [ ] Verify slug format matches between old and new

**Success Criteria:** All blog URLs extracted and mapped

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Create `/public/_redirects` file
- [ ] Add blog redirect rules
- [ ] Add special page redirects
- [ ] Carry over existing Squarespace redirects
- [ ] Test redirects on staging domain
- [ ] Verify 301 status (not 302)
- [ ] Check for redirect chains (should be direct A→B)

**Success Criteria:** All redirects return 301, no chains

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Extract current metadata from all Squarespace pages
- [ ] Document in spreadsheet
- [ ] Audit for optimization opportunities
- [ ] Implement metadata in Astro (via frontmatter or Layout)
- [ ] Verify Open Graph tags working (test with social sharing debuggers)

**Success Criteria:** All metadata preserved or improved

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.6.6 Sitemap Configuration
**Purpose:** Generate valid sitemap for search engines

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Configure Astro sitemap integration
- [ ] Verify all pages included
- [ ] Verify blog posts included
- [ ] Verify sitemap.xml accessible at /sitemap.xml
- [ ] Validate sitemap format

**Success Criteria:** Valid sitemap generated

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.6.8 Schema Markup
**Purpose:** Add structured data for rich search results

**Schema Types Needed:**
- LocalBusiness (photographer)
- Organization
- BreadcrumbList
- FAQPage (for FAQ page)

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Implement LocalBusiness schema
- [ ] Implement Organization schema
- [ ] Add breadcrumb schema
- [ ] Add FAQ schema to FAQ page
- [ ] Test with Google Rich Results Test
- [ ] Fix any validation errors

**Success Criteria:** Schema valid, no errors in testing tool

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

### 1.6.9 Canonical URLs
**Purpose:** Prevent duplicate content issues

**Pre-Execution Checklist:**
- [ ] I have read this entire task
- [ ] I understand what is being asked
- [ ] I will not deviate from these instructions

**Actionable Steps:**
- [ ] Add canonical tags to all pages
- [ ] Verify canonical points to correct URL
- [ ] Ensure www vs non-www consistency
- [ ] Ensure https consistency

**Success Criteria:** All pages have correct canonical tags

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

---

## PHASE 2: TESTING & QUALITY ASSURANCE

**Purpose:** Comprehensive testing across all areas before refactoring and launch

**Completion Criteria:** All tests passed, no critical bugs, performance acceptable

**Note:** Full task breakdown to be expanded with checkbox format when Phase 1 nears completion

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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

**Note:** Full task breakdown to be expanded with checkbox format when Phase 3 nears completion

**Status:** [ ] NOT STARTED  [ ] IN PROGRESS  [ ] COMPLETE

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
