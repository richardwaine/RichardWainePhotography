# EXECUTE-PHASE-5-LAUNCH.md
## Claude Code Execution File

---

## ⚠️ PRIME DIRECTIVE ⚠️

```
FOLLOW EXPLICIT DIRECTIONS ONLY. DO NOT DEVIATE.
DO NOT add features. DO NOT "improve" anything. DO NOT guess.
If unclear: STOP and ASK.
```

---

## TASK: Launch & Deployment

**Purpose:** Go live on production domain.

**Dependencies:**
- [ ] Phase 4 Pre-Launch complete
- [ ] Rich has given final approval to launch

---

## PRE-FLIGHT CHECKLIST

- [ ] I have read this entire document
- [ ] Rich has approved launch
- [ ] I will not deviate from these instructions

---

## STEP 1: DNS SWITCH

**Do this early in the day to allow propagation time.**

- [x] Log into domain registrar (Squarespace for richardwainephotography.com)
- [x] Update DNS records to point to Cloudflare Pages:
  - Nameservers changed to Cloudflare (Cloudflare handles DNS/records automatically)
- [x] Verify richardwaine.com → richardwainephotography.com redirect still works
- [x] Monitor DNS propagation at dnschecker.org

**DNS switched:** YES
**Propagation status:** Complete - site live and accessible

---

## STEP 2: VERIFY SITE ACCESSIBLE

- [x] Site loads at https://richardwainephotography.com
- [x] HTTPS working (no certificate errors)
- [x] Homepage displays correctly
- [x] Navigation works

---

## STEP 3: SUBMIT SITEMAP

- [x] Log into Google Search Console
- [x] Submit sitemap-index.xml
- [x] Verify submission successful

---

## STEP 4: INSTALL CHATRA

**Only after site is live on production:**

- [x] Remove Chatra from Squarespace site
- [x] Add Chatra code to Astro site (directly in MainLayout.astro)
- [x] Test chat widget displays
- [x] Test notifications working (awaiting real-world user test)

---

## STEP 5: FIRST 24 HOURS MONITORING

**Check every 2-4 hours:**

### Traffic
- [x] GA4 Real-Time showing activity
- [x] Traffic flowing normally

### Errors
- [x] No 404 errors in Search Console
- [x] No 500 errors
- [x] No browser console errors

### Forms
- [x] Request Proposal form working
- [x] Submissions appearing in Táve

### Analytics
- [x] GA4 tracking correctly
- [x] Clarity recording sessions

### Performance
- [x] Site loading quickly
- [x] No major issues

**Issues Found:**
```
[LIST ANY ISSUES]
```

---

## STEP 6: ROLLBACK PROCEDURE (If Needed)

**Use ONLY if critical failure occurs:**

Trigger conditions:
- Email stops working
- Major traffic drop (>50%)
- Critical forms broken
- Site inaccessible

**Rollback steps:**
1. In Cloudflare Pages, rollback to previous deployment
2. If DNS-related, revert DNS changes
3. Verify site accessible
4. Test critical functionality
5. Document what failed

---

## STEP 7: LAUNCH COMPLETE

- [x] Site live and accessible
- [x] DNS propagated
- [x] Sitemap submitted
- [x] Chatra installed
- [x] No critical issues in first 24 hours

**⚠️ PROCEED TO PHASE 6 MONITORING ⚠️**

---

## END OF EXECUTION FILE
