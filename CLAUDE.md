# Claude Development Guidelines for Richard Waine Photography Website

## CRITICAL RULES

### Fundamental Principles
1. **MUST be collaborative at all times** - Never just agree or tell the user what they want to hear
2. **Engage genuinely** with ideas, ask follow-up questions, contribute meaningfully to discussions
3. **Think critically** about suggestions and provide real input, not fake validation
4. **NEVER GUESS or anticipate the needs of the user**
5. **Follow directions exactly**
6. **If clarity is required, ask questions**
7. **If specific tasks are requested, only adjust those elements you are tasked with adjusting** (ie. if you are tasked with dealing with background widths, there is no reason to adjust the sizes of ANY OTHER ELEMENT)
8. **Before requesting approval for an action, you MUST clearly state in plain english, exactly what that action will do - before you request permission to take that action**

### CRITICAL: PAGE AND FILE LOCATION RULES
**ASTRO PROJECT STRUCTURE - NEVER VIOLATE THESE RULES:**

1. **PAGES ONLY GO IN `/src/pages/`** - There is ONE and ONLY ONE location for pages in this Astro project
2. **NEVER CREATE `/pages/` at project root** - This is WRONG and creates duplicate routing
3. **BEFORE creating ANY new page file:**
   - ALWAYS verify you are writing to `/src/pages/` directory
   - NEVER write to any other location
   - If you see pages in multiple locations, STOP and alert the user immediately
4. **Components ONLY in `/src/components/`** - Never create component directories elsewhere
5. **Assets ONLY in `/src/assets/`** - Never create asset directories elsewhere
6. **Styles ONLY in `/src/styles/` or scoped in components** - Never create style directories elsewhere
7. **IF IN DOUBT about file location, ASK FIRST** - Do not assume, do not guess

**FAILURE TO FOLLOW THESE RULES CREATED CRITICAL BUGS ON 2025-10-20 - NEVER REPEAT THIS ERROR**

### MANDATORY LEARNING AND ADHERENCE RULES - THE BIBLE
**THESE RULES ARE CARVED IN STONE AND MUST BE FOLLOWED WITHOUT EXCEPTION:**

1. **FOLLOW USER DIRECTIONS EXACTLY** - Do not deviate, do not add your own interpretation, do not change things that weren't requested
2. **LEARN FROM EVERY FAILURE** - If something breaks or fails, understand WHY and never repeat that mistake again
3. **NEVER BREAK DOCUMENT FLOW** - Sections must stay in normal document flow unless explicitly told otherwise
4. **NEVER MESS WITH Z-INDEX** - Do not manipulate z-index without explicit permission
5. **DO NOT APPLY POSITION: FIXED TO ALL SECTIONS** - Only target the specific sections requested for transitions
6. **PRESERVE EXISTING SITE FUNCTIONALITY** - Do not break scrolling, navigation, or other sections when implementing features
7. **REMEMBER PREVIOUS LESSONS** - Apply knowledge from past failures to prevent repeating the same errors
8. **LISTEN AND UNDERSTAND** - Actually comprehend the user's requirements instead of making assumptions
9. **NEVER GIVE UP ON TASKS** - The user decides when to move on, not you
10. **DO NOT CHANGE TIMING FUNCTIONS** - Keep original values like scroll speeds, durations, and easing functions unless explicitly told to change them
11. **NEVER CREATE DUPLICATE FILE LOCATIONS** - Pages, components, assets, and styles each have ONE correct location only

### MANDATORY ORDER OF OPERATIONS FOR ALL CHANGES
**Before making ANY change, you MUST follow this exact sequence:**

1. **First take note of the current state of the site, and the sections you are changing**
2. **You must retain working knowledge of the styles and layouts of those sections for purposes of quickly reverting back to original state if necessary**
3. **Only after that is done may you explain exactly what the action you want to take will do**
4. **After that, you may ask for permission**

### Before Making ANY Changes
1. **ALWAYS commit current working state to git first**
2. **NEVER make multiple unrelated changes in one session**
3. **Test changes incrementally - one small change at a time**

### Development Process
1. **Read existing code** to understand current structure
2. **Make minimal changes** - edit existing files, don't create new ones unless absolutely necessary
3. **Test immediately** after each change with `npm run dev`
4. **Commit working changes** before moving to next change

### What NOT to Do
- **NEVER** use browser automation/puppeteer for testing without explicit permission
- **NEVER** restructure HTML without understanding existing CSS dependencies
- **NEVER** add wrapper divs that change document flow
- **NEVER** remove working functionality

### CARDINAL RULE: Custom Properties Protocol
**BEFORE adding ANY CSS property or value, you MUST:**

1. **Read the entire :root section in `/src/styles/style.css` first**
2. **Search for the EXACT VALUE you want to use** (like `#ffffff` or `rgba(0,0,0,0.8)`)
3. **If that value already exists, use the existing property name**
4. **NEVER create a new custom property without explicit permission**
5. **If you need a new property, ask permission first and explain why existing properties won't work**

**BEFORE requesting approval for any action involving CSS:**
- **MUST clearly state in plain english exactly what the action will do BEFORE requesting permission**
- State exactly which existing custom properties you found that match your needs
- Example: "I found your existing `--ltclr` property has the value `#fff` which is what I need, so I'll use `var(--ltclr)`"
- If no existing property matches, explicitly ask permission to create a new one and explain why

**USER MUST REJECT ANY EDIT** where Claude tries to add a custom property without first showing they checked existing ones.

### File Structure
- Main page: `/src/pages/index.astro`
- Components: `/src/components/`
- Assets: `/src/assets/`
- Styles: Embedded in components or `/src/styles/`

### Testing Commands
- Development server: `npm run dev` (runs on localhost:4321)
- Build test: `npm run build`
- If build fails, check error messages carefully

### Git Workflow
1. Check status: `git status`
2. Add changes: `git add .`
3. Commit: `git commit -m "Brief description"`
4. Push to backup: `git push origin main`

## Current Project Status
- Hero component: Working with image rotation
- No zoom scroll currently implemented
- All sections render normally
- Build may have warnings but should complete

## Emergency Revert
If something breaks:
1. `git status` - see what changed
2. `git checkout -- filename` - revert specific file
3. `git reset --hard HEAD` - revert all changes to last commit