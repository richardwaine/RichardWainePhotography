# EXECUTE-PHASE-4-PRELAUNCH.md
## Claude Code Execution File

---

## ⚠️ PRIME DIRECTIVE ⚠️

```
FOLLOW EXPLICIT DIRECTIONS ONLY. DO NOT DEVIATE.
DO NOT add features. DO NOT "improve" anything. DO NOT guess.
If unclear: STOP and ASK.
```

---

## TASK: Pre-Launch Final Preparation

**Purpose:** Final verification before going live.

**Dependencies:**
- [ ] Phase 1 complete
- [ ] Phase 2 testing complete
- [ ] Phase 3 refactoring complete

---

## PRE-FLIGHT CHECKLIST

- [ ] I have read this entire document
- [ ] All previous phases are complete
- [ ] I will not deviate from these instructions

---

## STEP 1: FINAL VERIFICATION CHECKLIST

### Content
- [x] All pages built
- [x] All content proofread
- [x] All images optimized
- [x] All links working

### Technical
- [x] All tracking working (GTM, GA4, Clarity)
- [x] All redirects configured
- [x] All SEO elements in place
- [x] Performance targets met
- [x] Accessibility 100/100

**Lighthouse Scores:**
- Desktop: 100/100 Performance, 100/100 Accessibility, 100/100 Best Practices, 100/100 SEO
- Mobile (Homepage): 96/100 Performance, 100/100 Accessibility, 100/100 Best Practices, 100/100 SEO

### External Services
- [ ] Google Workspace transferred from Squarespace
- [ ] Acuity verified working independently
- [x] Táve/VSCO form working
- [x] Sitemap ready for submission

---

## STEP 2: GOOGLE WORKSPACE VERIFICATION

**CRITICAL:** Email must work after launch.

- [ ] Google Workspace billing transferred to Google direct
- [ ] Test send email from info@richardwaine.com
- [ ] Test receive email to info@richardwaine.com
- [ ] Verify Google Admin access
- [ ] Confirm Google Business Profile connected

**Email working:** YES / NO

**⚠️ IF NO: STOP - DO NOT PROCEED TO LAUNCH ⚠️**

---

## STEP 3: DNS PREPARATION (Optional but Recommended)

**24-48 hours before launch:**

- [ ] Log into domain registrar
- [ ] Lower TTL on A and CNAME records to 300 seconds
- [ ] Wait for old TTL to expire
- [ ] Verify new TTL in effect

**TTL reduced:** SKIPPED - Site already live, DNS propagation complete. No longer relevant.

---

## STEP 4: FINAL BUILD TEST

- [x] Run `npm run build`
- [x] Build succeeds without errors: YES
- [x] Run `npm run preview`
- [x] Test production build locally
- [x] All functionality works in production build

---

## STEP 5: PRE-LAUNCH SUMMARY

**Ready for Launch:**
- [x] All content complete
- [x] All functionality working
- [x] All tracking verified
- [ ] Email verified working (Email functional via Squarespace; Google Workspace not yet transferred)
- [x] Production build tested
- [x] DNS prepared (TTL reduction skipped - site already live)

**Any blockers:**
```
[LIST ANY REMAINING BLOCKERS]
```

**⚠️ STOP - GET FINAL APPROVAL FROM RICH BEFORE PHASE 5 ⚠️**

---

## END OF EXECUTION FILE
