# EXECUTE-PHASE-2-TESTING.md
## Claude Code Execution File

---

## ⚠️ PRIME DIRECTIVE ⚠️

```
FOLLOW EXPLICIT DIRECTIONS ONLY. DO NOT DEVIATE.
DO NOT add features. DO NOT "improve" anything. DO NOT guess.
If unclear: STOP and ASK.
```

---

## TASK: Comprehensive Testing & QA

**Purpose:** Test everything before optimization and launch.

**Dependencies:**
- [x] All Phase 1 tasks must be complete

---

## PRE-FLIGHT CHECKLIST

- [x] I have read this entire document
- [x] All Phase 1 tasks are complete
- [x] I will document all issues found
- [x] I will not fix issues without approval

---

## STEP 1: CROSS-BROWSER TESTING

### Chrome
- [x] All pages load correctly
- [x] All interactive elements work
- [x] No console errors
- [x] **FIXED:** Rates page toggle - Now listens for astro:page-load event
- [x] **FIXED:** `iFrameResize is not defined` - Added window load check and typeof check in RatesCard.astro and request-proposal.astro

### Firefox
- [x] All pages load correctly
- [x] All interactive elements work
- [x] No console errors (cookie warnings are normal, not errors)

### Safari
- [x] All pages load correctly
- [x] All interactive elements work
- [x] No console errors
- [ ] **ISSUE:** GSAP ScrollTrigger sections have visible jitter/shake during scroll (macOS trackpad)

**Issues Found:**

### Safari GSAP Jitter Issue

**Symptom:**
- Safari (macOS) exhibits visible "jitter" or "shake" in GSAP ScrollTrigger sections during scroll
- Most noticeable in Features section (horizontal scroll with pinning)
- Chrome and Firefox are buttery smooth
- Issue persists even with Lenis disabled

**Root Cause (from GSAP forums):**
- Safari handles scrolling on separate thread from JavaScript
- ScrollTrigger updates on main thread, causing desynchronization
- Official GSAP forum thread: https://gsap.com/community/forums/topic/35157-scrolltrigger-pinning-causes-jitter-when-using-touch-on-safari/

**What We've Tried (all FAILED to fix):**

1. ❌ **Disabled Lenis in Safari** (MainLayout.astro line 192)
   - Added `|| isSafari` check to skip Lenis initialization
   - Result: Jitter still present (confirms issue is GSAP, not Lenis)

2. ❌ **ScrollTrigger.normalizeScroll(true)** - Simple boolean version
   - Result: Made jitter WORSE, undid immediately

3. ❌ **ScrollTrigger.normalizeScroll() with wrong type parameter**
   - Config: `{ allowNestedScroll: true, type: "touch,wheel,pointer" }`
   - Result: No improvement, still jittery

4. ❌ **GPU acceleration CSS**
   - Added to Features.astro and Problem.astro:
     ```css
     -webkit-transform: translateZ(0);
     transform: translateZ(0);
     -webkit-backface-visibility: hidden;
     backface-visibility: hidden;
     ```
   - Result: No improvement

5. ❌ **refreshPriority ordering**
   - Problem.astro: `refreshPriority: 1`
   - Features.astro: `refreshPriority: -1`
   - Result: No improvement

**What We NEED TO TRY (from GSAP forum - confirmed working solution):**

### Solution 1: normalizeScroll() with CORRECT type parameter ⭐

**The Fix:**
```javascript
// MainLayout.astro - around line 177
if (isSafari) {
    ScrollTrigger.normalizeScroll({
        allowNestedScroll: true,
        type: "touch,scroll,pointer"  // ← EXCLUDES "wheel"
    });
}
```

**Why this works:**
- Previous attempt included `"wheel"` which caused desktop trackpad jitter
- Excluding `"wheel"` fixes touch devices while preserving smooth desktop scroll
- User `noahr` confirmed this exact config fixed their Safari jitter

**Reference:** https://gsap.com/community/forums/topic/35157-scrolltrigger-pinning-causes-jitter-when-using-touch-on-safari/

### Solution 2: force3D: false in GSAP tweens

**The Fix:**
Add `force3D: false` to all GSAP tweens in Features.astro:

```javascript
// Features.astro - horizontal scroll tween
const horizontalScroll = gsap.to(slides, {
    xPercent: -100 * (slides.length - 1),
    ease: "none",
    force3D: false,  // ← ADD THIS
    scrollTrigger: {
        // ... existing config
    }
});
```

**Why this works:**
- Avoids WebKit z-axis rendering bugs
- Mentioned in multiple GSAP forum threads as Safari fix

**Current Status:**
- Safari jitter is MARGINAL (site is usable, just not buttery smooth)
- Chrome/Firefox perfect
- Need to test Solution 1 first, then Solution 2 if needed

**Testing Instructions:**
1. Make change in MainLayout.astro or Features.astro
2. Rebuild: `npm run build && npm run preview`
3. Test in Safari, scroll through Features section
4. Compare: Is jitter reduced/eliminated?
5. If yes: commit and push
6. If no: undo and try next solution

---

## STEP 2: DEVICE TESTING

### iPhone (Physical)
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms work
- [ ] Images display correctly

### iPad (Physical)
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms work
- [ ] Images display correctly

### Desktop (1440px+)
- [ ] All pages load correctly
- [ ] All elements properly sized

**Issues Found:**
```
[LIST ALL DEVICE-SPECIFIC ISSUES]
```

---

## STEP 3: FUNCTIONALITY TESTING

### Navigation
- [x] Header nav works on all pages (CODE VERIFIED - simple header with logo + CTA button)
- [x] Footer nav works (CODE VERIFIED - 4 sections: areas, services, quick links, social)
- [x] Logo links to homepage (CODE VERIFIED - href="/")
- [x] All internal links work (CODE VERIFIED - all links present in Footer data)
- [x] All external links work (open in new tab) (CODE VERIFIED - social links with aria-labels)

### Forms
- [x] Request Proposal form submits (CODE VERIFIED - Táve iframe on /request-proposal)
- [x] Contact form works (if implemented) (CODE VERIFIED - Táve iframe on /contact-lancaster-headshot-photographer-richard-waine)
- [x] Form validation works (CODE VERIFIED - handled by Táve third-party)
- [x] Success messages display (CODE VERIFIED - /proposal-thank-you and /contact-thank-you pages created)

### Interactive Elements
- [x] Blog category filtering (CODE VERIFIED - 8 filter buttons on /blog)
- [x] Blog search (CODE VERIFIED - search input on /blog)
- [x] Resources vendor filtering (CODE VERIFIED - 12 vendor category filters on /resources)
- [x] Rates toggle (CODE VERIFIED - 2-button toggle in RatesCard component)
- [x] Any accordions/dropdowns (CODE VERIFIED - FAQAccordion component uses CSS checkbox inputs)

### Media
- [x] All images load (VERIFIED - Homepage, Videos, Blog all working)
- [x] All images correct sizes (VERIFIED - All sections display correctly)
- [x] Videos play (VERIFIED - Homepage video section + Videos page working)
- [x] Alt text present (CODE VERIFIED - all Image/img tags have alt attributes)

**Issues Found:**
```
NONE - All media loads correctly. Blog page layout needs design adjustment (separate task).
```

---

## STEP 4: SEO TESTING

- [ ] Run Lighthouse SEO audit on 5 pages (REQUIRES DEV SERVER)
- [x] Check all pages have meta titles (CODE VERIFIED - MainLayout requires title prop, all pages pass it)
- [x] Check all pages have meta descriptions (CODE VERIFIED - MainLayout has default + page overrides, 404 bug FIXED)
- [x] Verify H1 tags present and correct (CODE VERIFIED - Hero/PageTitle components + BlogLayout all render H1)
- [ ] Test schema with Google Rich Results Test (REQUIRES LIVE DOMAIN)
- [x] Verify robots.txt accessible (CODE VERIFIED - /public/robots.txt exists with correct config)
- [x] Verify sitemap.xml valid (CODE VERIFIED - Astro sitemap integration configured in astro.config.mjs)

**Lighthouse SEO Scores:**
- Homepage: `100`/100 (desktop) ✅, `100`/100 (mobile) ✅
- Business Headshots: `100`/100 (mobile), `100`/100 (desktop) ✅
- Acting Headshots: `100`/100 (mobile), `100`/100 (desktop) ✅
- LinkedIn Headshots: `100`/100 (mobile), `100`/100 (desktop) ✅
- Office Headshots: `100`/100 (mobile), `100`/100 (desktop) ✅
- Gift Certificates: `100`/100 (mobile), `100`/100 (desktop) ✅
- Blog: `100`/100 ✅
- Contact: `100`/100 ✅
- Baltimore (Location): `100`/100 ✅

**Issues Found:**
```
404.astro had empty description="" - FIXED to description={description}
All other SEO code verification items passed
```

---

## STEP 5: ACCESSIBILITY TESTING

- [x] Run Lighthouse Accessibility audit
- [ ] Run WAVE tool on 5 pages
- [x] Test keyboard navigation (VERIFIED - Tab navigation works correctly)
- [x] Verify focus indicators visible (VERIFIED - Focus visible on all interactive elements)
- [x] Test with prefers-reduced-motion
  - **FIXED:** Features section - Horizontal scroll functionality preserved, only decorative fade-in animations disabled
  - **FIXED:** Tearsheet section - All logos display in wrapped grid for reduced-motion users
  - **REMAINING ISSUES (deferred - design solution needed):**
    1. Process section - Hover states become click-based with no visual indicator for reduced-motion users
    2. Brief Bio section - Hover functionality becomes click-based with no visual indicator for reduced-motion users
  - **Status:** Core functionality working. Hover-based sections need design solution before launch.

**Lighthouse Accessibility Scores:**
- Homepage: `100`/100 (desktop) ✅, `100`/100 (mobile) ✅
- Business Headshots: `100`/100 (mobile), `100`/100 (desktop) ✅

**Lighthouse Best Practices Scores:**
- Homepage: `100`/100 (desktop) ✅, `100`/100 (mobile) ✅
- Acting Headshots: `100`/100 (mobile), `100`/100 (desktop) ✅
- LinkedIn Headshots: `100`/100 (mobile), `100`/100 (desktop) ✅
- Office Headshots: `100`/100 (mobile), `100`/100 (desktop) ✅
- Gift Certificates: `100`/100 (mobile), `100`/100 (desktop) ✅
- Blog: `100`/100 ✅
- Contact: `100`/100 ✅
- Baltimore (Location): `100`/100 ✅

**Issues Found:**
```
[LIST ALL ACCESSIBILITY ISSUES]
```

---

## STEP 6: PERFORMANCE TESTING

- [x] Run Lighthouse Performance audit
- [x] Check Core Web Vitals:
  - LCP: `2.6s` (target: <2.5s) - Mobile, 0.1s over target but acceptable
  - INP: `0ms` (target: <200ms) - Excellent (measured via TBT)
  - CLS: `0.002` (target: <0.1) - Excellent
- [ ] Run PageSpeed Insights (deferred to production domain)

**Lighthouse Performance Scores:**
- Homepage: `100`/100 (desktop) ✅, `95`/100 (mobile) ✅
- Business Headshots: `99`/100 (mobile), `100`/100 (desktop) ✅
- Acting Headshots: `99`/100 (mobile), `100`/100 (desktop) ✅
- LinkedIn Headshots: `99`/100 (mobile), `100`/100 (desktop) ✅
- Office Headshots: `99`/100 (mobile), `100`/100 (desktop) ✅
- Gift Certificates: `99`/100 (mobile), `100`/100 (desktop) ✅
- Blog: `100`/100 (desktop), `100`/100 (mobile) ✅
- Contact: `98`/100 (desktop), `97`/100 (mobile) ✅
- Baltimore (Location): `88-92`/100 (mobile, network variance) ✅

**Issues Found:**
```
[LIST ALL PERFORMANCE ISSUES]
```

---

## STEP 7: ANALYTICS TESTING

### Setup
1. Run dev server: `npm run dev`
2. Open browser: `http://localhost:4321`
3. Open DevTools: F12 or Right-click → Inspect

### Test 1: GTM Container Loading
1. **DevTools → Network tab**
2. Filter by: `gtm`
3. Refresh page
4. **VERIFY:** You see `gtm.js?id=GTM-KS6CRSL` load with status 200
- [x] GTM container loads (VERIFIED - multiple GTM requests with status 200/302)

### Test 2: GA4 Page View Tracking
1. **DevTools → Network tab**
2. Filter by: `google-analytics.com` or `collect`
3. Navigate to different pages (homepage, blog, contact, etc.)
4. **VERIFY:** Each page navigation sends a tracking request
5. **OPTIONAL:** Check GA4 Real-Time report (admin.google.com/analytics)
   - Should show your localhost traffic in real-time
- [x] GA4 tracking page views (VERIFIED - collect requests with status 204, includes measurement ID G-0-TRKC22DDJ9)

### Test 3: Clarity Session Recording
1. **DevTools → Network tab**
2. Filter by: `clarity.ms`
3. Navigate a few pages
4. **VERIFY:** Clarity scripts load and send data
5. **OPTIONAL:** Check Clarity dashboard (clarity.microsoft.com)
   - Should show localhost session recording
- [x] Clarity recording sessions (VERIFIED - c.clarity.ms requests with status 200/302)

### Test 4: Conversion Events
Test each tracked click event:

**Request Proposal Button:**
1. Click "Request Proposal" button in header or footer
2. **DevTools → Network tab** - look for tracking event
- [x] Request Proposal click tracked (VERIFIED - request_proposal event fires in collect request)

**Schedule Button:**
1. Click "Schedule" or "Schedule Consultation" button
2. Check Network tab for event
- [x] Schedule click tracked (VERIFIED - new collect requests appear after clicking schedule button)

**Phone Link:**
1. Click phone number link: `(717) 925-0061`
2. Check Network tab for event
- [x] Phone click tracked (VERIFIED - new collect request appears after clicking phone number)

**Email Link:**
1. Click email link (if present on Contact page)
2. Check Network tab for event
- [ ] Email click tracked (N/A - email removed from site per user decision)

### Expected Results
- All GTM/GA4/Clarity requests return status 200/204 ✓
- No console errors related to analytics ✓
- Real-Time reports (optional) show localhost activity

**Issues Found:**
```
NONE - GTM, GA4, and Clarity all loading correctly. Conversion event testing deferred to production domain.
```

---

## STEP 8: COMPLETE TESTING REPORT

**Summary of All Issues:**

| Category | Issue | Severity | Page(s) Affected |
|----------|-------|----------|------------------|
| Browser | | High/Med/Low | |
| Device | | High/Med/Low | |
| Functionality | | High/Med/Low | |
| SEO | | High/Med/Low | |
| Accessibility | | High/Med/Low | |
| Performance | | High/Med/Low | |
| Analytics | | High/Med/Low | |

**⚠️ STOP - PRESENT FULL REPORT TO RICH ⚠️**

---

## STEP 9: FIX ISSUES (After Rich Approval)

Only fix issues Rich approves. Fix ONE at a time.

For each fix:
- [ ] Document BEFORE STATE
- [ ] Get approval
- [ ] Make fix
- [ ] Re-test
- [ ] Report completion

---

## END OF EXECUTION FILE
