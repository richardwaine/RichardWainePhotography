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
- [ ] All Phase 1 tasks must be complete

---

## PRE-FLIGHT CHECKLIST

- [ ] I have read this entire document
- [ ] All Phase 1 tasks are complete
- [ ] I will document all issues found
- [ ] I will not fix issues without approval

---

## STEP 1: CROSS-BROWSER TESTING

### Chrome
- [ ] All pages load correctly
- [ ] All interactive elements work
- [ ] No console errors

### Firefox
- [ ] All pages load correctly
- [ ] All interactive elements work
- [ ] No console errors

### Safari
- [ ] All pages load correctly
- [ ] All interactive elements work
- [ ] No console errors

**Issues Found:**
```
[LIST ALL BROWSER-SPECIFIC ISSUES]
```

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
- [ ] Header nav works on all pages
- [ ] Footer nav works
- [ ] Logo links to homepage
- [ ] All internal links work
- [ ] All external links work (open in new tab)

### Forms
- [ ] Request Proposal form submits
- [ ] Contact form works (if implemented)
- [ ] Form validation works
- [ ] Success messages display

### Interactive Elements
- [ ] Blog category filtering
- [ ] Blog search
- [ ] Resources vendor filtering
- [ ] Rates toggle
- [ ] Any accordions/dropdowns

### Media
- [ ] All images load
- [ ] All images correct sizes
- [ ] Videos play
- [ ] Alt text present

**Issues Found:**
```
[LIST ALL FUNCTIONALITY ISSUES]
```

---

## STEP 4: SEO TESTING

- [ ] Run Lighthouse SEO audit on 5 pages
- [ ] Check all pages have meta titles
- [ ] Check all pages have meta descriptions
- [ ] Verify H1 tags present and correct
- [ ] Test schema with Google Rich Results Test
- [ ] Verify robots.txt accessible
- [ ] Verify sitemap.xml valid

**Lighthouse SEO Scores:**
- Homepage: `___`/100
- Studio Headshots: `___`/100
- Blog: `___`/100
- Contact: `___`/100
- Location Page: `___`/100

**Issues Found:**
```
[LIST ALL SEO ISSUES]
```

---

## STEP 5: ACCESSIBILITY TESTING

- [ ] Run Lighthouse Accessibility audit
- [ ] Run WAVE tool on 5 pages
- [ ] Test keyboard navigation
- [ ] Verify focus indicators visible
- [ ] Test with prefers-reduced-motion

**Lighthouse Accessibility Scores:**
- Homepage: `___`/100
- Studio Headshots: `___`/100
- Blog: `___`/100
- Contact: `___`/100
- Location Page: `___`/100

**Issues Found:**
```
[LIST ALL ACCESSIBILITY ISSUES]
```

---

## STEP 6: PERFORMANCE TESTING

- [ ] Run Lighthouse Performance audit
- [ ] Check Core Web Vitals:
  - LCP: `___` (target: <2.5s)
  - INP: `___` (target: <200ms)
  - CLS: `___` (target: <0.1)
- [ ] Run PageSpeed Insights

**Lighthouse Performance Scores:**
- Homepage: `___`/100
- Studio Headshots: `___`/100
- Blog: `___`/100
- Contact: `___`/100
- Location Page: `___`/100

**Issues Found:**
```
[LIST ALL PERFORMANCE ISSUES]
```

---

## STEP 7: ANALYTICS TESTING

- [ ] GTM container loading
- [ ] GA4 tracking page views
- [ ] Clarity recording sessions
- [ ] Conversion events firing:
  - [ ] Request Proposal click
  - [ ] Schedule click
  - [ ] Phone click
  - [ ] Email click

**Issues Found:**
```
[LIST ALL ANALYTICS ISSUES]
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
