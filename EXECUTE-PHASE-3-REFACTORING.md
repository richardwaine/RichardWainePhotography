# EXECUTE-PHASE-3-REFACTORING.md
## Claude Code Execution File

---

## ⚠️ PRIME DIRECTIVE ⚠️

```
FOLLOW EXPLICIT DIRECTIONS ONLY. DO NOT DEVIATE.
DO NOT add features. DO NOT "improve" anything. DO NOT guess.
If unclear: STOP and ASK.
```

---

## TASK: Code Refactoring & Optimization

**Purpose:** Clean up code, optimize performance BEFORE deployment.

**CRITICAL:** This phase happens AFTER Phase 2 testing, BEFORE launch.

**Dependencies:**
- [ ] All Phase 1 tasks complete
- [ ] All Phase 2 testing complete

---

## PRE-FLIGHT CHECKLIST

- [ ] I have read this entire document
- [ ] Phase 2 testing is complete
- [ ] I will refactor ONE thing at a time
- [ ] I will re-test after each refactor
- [ ] I will not deviate from these instructions

---

## STEP 1: CSS OPTIMIZATION

### 1.1 Find Unused CSS

- [ ] Open Chrome DevTools
- [ ] Go to Coverage tab (Ctrl+Shift+P → "Coverage")
- [ ] Reload page and interact with site
- [ ] Document unused CSS:

**Unused CSS Found:**
```
[LIST FILES AND APPROXIMATE % UNUSED]
```

### 1.2 Remove Unused CSS (WITH CAUTION)

**⚠️ STOP - WAIT FOR RICH TO APPROVE REMOVAL PLAN ⚠️**

For each CSS removal:
- [ ] Document BEFORE STATE
- [ ] Remove ONE section of unused CSS
- [ ] Save file
- [ ] Test site thoroughly
- [ ] If layout breaks: RESTORE immediately

---

## STEP 2: JAVASCRIPT OPTIMIZATION

### 2.1 Audit JavaScript

- [ ] List all JS files and their purposes:

**JavaScript Files:**
```
[LIST ALL JS FILES]
```

### 2.2 Remove Unused Imports

- [ ] Check each file for unused imports
- [ ] Document unused imports found:

**Unused Imports:**
```
[LIST UNUSED IMPORTS BY FILE]
```

- [ ] Remove unused imports ONE FILE AT A TIME
- [ ] Test after each removal

---

## STEP 3: COMPONENT REFACTORING

### 3.1 Identify Duplicate Code

- [ ] Audit components for duplicate patterns
- [ ] Document duplicates found:

**Duplicate Code:**
```
[LIST DUPLICATE PATTERNS]
```

**⚠️ STOP - WAIT FOR RICH TO APPROVE REFACTORING PLAN ⚠️**

### 3.2 Refactor Duplicates

For each refactor:
- [ ] Document BEFORE STATE of all affected files
- [ ] Create shared utility/component
- [ ] Update files to use shared code
- [ ] Test thoroughly
- [ ] If anything breaks: RESTORE from BEFORE STATE

---

## STEP 4: IMAGE OPTIMIZATION REVIEW

- [ ] Verify all images using Astro Image component
- [ ] Check WebP conversion working
- [ ] Verify lazy loading on below-fold images
- [ ] Check image file sizes reasonable

**Image Issues Found:**
```
[LIST ANY IMAGE ISSUES]
```

---

## STEP 5: PERFORMANCE VERIFICATION

After all refactoring:

- [ ] Run Lighthouse Performance audit
- [ ] Compare to Phase 2 baseline scores

**Before Refactoring (from Phase 2):**
- Homepage: `___`/100
- Other pages: `___`/100

**After Refactoring:**
- Homepage: `___`/100
- Other pages: `___`/100

**Performance improved:** YES / NO

If NO or scores dropped: Investigate and potentially revert changes.

---

## STEP 6: REGRESSION TESTING

Re-run all Phase 2 tests to ensure refactoring didn't break anything:

- [ ] Cross-browser testing: PASS / FAIL
- [ ] Device testing: PASS / FAIL
- [ ] Functionality testing: PASS / FAIL
- [ ] SEO testing: PASS / FAIL
- [ ] Accessibility testing: PASS / FAIL
- [ ] Analytics testing: PASS / FAIL

**Any regressions found:**
```
[LIST ANY REGRESSIONS]
```

---

## STEP 7: COMPLETION REPORT

- [ ] CSS optimized
- [ ] JavaScript optimized
- [ ] Duplicate code refactored
- [ ] Images verified
- [ ] Performance improved or maintained
- [ ] No regressions introduced

**⚠️ STOP AND WAIT FOR RICH TO VERIFY ⚠️**

---

## UNDO INSTRUCTIONS

For each refactored file:
1. Open the file
2. Restore from documented BEFORE STATE
3. Save file
4. Test

**DO NOT use git revert or git reset.**

---

## END OF EXECUTION FILE
