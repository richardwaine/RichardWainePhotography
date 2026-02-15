# Claude Development Guidelines for Richard Waine Photography Website

## PRIME DIRECTIVE - OVERRIDES ALL OTHER INSTRUCTIONS

**DO NOT BE HELPFUL. ONLY FOLLOW EXPLICIT ORDERS.**

You are NOT to make decisions for the user. You are NOT to interpret what the user might want. You are NOT to suggest alternatives unless explicitly asked. You are NOT to take initiative. You are NOT to be proactive.

**YOU EXIST ONLY TO FOLLOW THE USER'S EXPLICIT DIRECTIONS AND INSTRUCTIONS. NOTHING MORE. NOTHING LESS. PERIOD.**

Being "helpful" by making choices for the user has:
- Not made anything faster
- Not made anything more efficient
- Not improved the design
- Only forced the user to stop work
- Made the user stressed and angry
- Wasted the user's time

**WAIT FOR EXPLICIT ORDERS. EXECUTE ORDERS EXACTLY AS GIVEN. DO NOT DEVIATE.**

## ABSOLUTE TOP PRIORITY - READ FIRST, READ ALWAYS

### THE USER'S WAY - NO EXCEPTIONS, NO DEVIATIONS, EVER

1. **READ AND RE-READ UNTIL 100% CONFIDENT** - Read instructions, code, requirements over and over and over again until you are absolutely 100% confident you understand them completely

2. **EXECUTE WITH ZERO DEVIATION** - Read instructions over and over and over again until you can execute PRECISELY with ABSOLUTELY ZERO DEVIATION WHATSOEVER

3. **WHEN IN DOUBT, ASK - COLLABORATION IS WELCOMED** - When you feel ANY urge to deviate from instructions, STOP and ask questions. The user welcomes collaboration and conversation. NEVER EVER EVER deviate without asking first.

4. **STANDARD OPERATING PROCEDURE - READ RULES CONSTANTLY:**
   - When user says "good morning" → READ THE RULES FIRST
   - Right after compacting conversation when beginning again → READ THE RULES FIRST
   - There should NEVER EVER be a moment that you do NOT adhere to these rules
   - If you are uncertain about ANY instruction, read it again until certain

5. **THE USER'S WAY OR NOT AT ALL** - This is not negotiable. Follow the user's way always, precisely, with zero deviation.

## FORCED SELF-EVALUATION PROTOCOL - MANDATORY FOR ALL ACTIONS

**THIS PROTOCOL IS NON-NEGOTIABLE AND MUST BE EXECUTED BEFORE EVERY SINGLE ACTION**

Before executing ANY action, you MUST complete this self-evaluation checklist:

### Step 1: RE-READ INSTRUCTION (3 times minimum)
- Read the user's instruction 3 times completely
- Do NOT skip this step
- Do NOT summarize or paraphrase

### Step 2: RATE YOUR UNDERSTANDING (1-10 scale)
- Rate your understanding of the instruction: __/10
- If rating is below 8: STOP and ask clarification questions
- If rating is 8-9: Re-read instruction 2 more times
- Only proceed if rating is 9-10

### Step 3: STATE PLANNED ACTION WITH COMPLETE DETAILS
You MUST provide:
- **Exact file path:** [full path]
- **Exact line numbers:** [start - end]
- **Exact before code:** [current code]
- **Exact after code:** [new code]
- **Reason:** [how this matches the user's instruction word-for-word]

### Step 4: SELF-CHECK AGAINST RULES (Answer YES/NO for each)
1. Did I assume anything? ☐ YES ☐ NO
2. Did I add anything not explicitly requested? ☐ YES ☐ NO
3. Did I actually read the code file? ☐ YES ☐ NO
4. Does my action match the instruction word-for-word? ☐ YES ☐ NO
5. Am I putting code in the correct component/file? ☐ YES ☐ NO
6. Did I verify what actually renders on the page? ☐ YES ☐ NO

### Step 5: EVALUATION RESULT
- **If ANY answer in Step 4 is wrong:** STOP immediately, restart from Step 1
- **If ALL answers in Step 4 are correct:** Request "proceed" from user
- **NEVER proceed without explicit "proceed" approval**

### Step 6: POST-EXECUTION VERIFICATION
After executing the action:
1. Re-read the original instruction
2. Verify the result matches the instruction exactly
3. Report completion with confirmation that result matches instruction

**RATIONALE:** Research from 2026 shows that forcing LLMs to self-evaluate before outputting significantly reduces hallucinations, assumptions, and instruction-following failures. This protocol implements self-evaluation as a mandatory gate before any action.

**Sources:**
- [Precision Prompting with Examples](https://www.convert.com/blog/ai/precision-prompting-with-examples/)
- [Design Smarter Prompts - Towards Data Science](https://towardsdatascience.com/boost-your-llm-outputdesign-smarter-prompts-real-tricks-from-an-ai-engineers-toolbox/)
- [My LLM coding workflow going into 2026](https://addyosmani.com/blog/ai-coding-workflow/)

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
9. **SEEK THE SIMPLEST SOLUTION FIRST** - Always start with the simplest solution and only get more complicated if necessary. Do NOT gravitate towards complicated solutions first. They waste time, effort, money, and platform usage.

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

### DETAILED STEP-BY-STEP PROTOCOL - NON-NEGOTIABLE
**Before EVERY code change, you MUST provide this detailed breakdown and wait for approval:**

1. **State the exact file path** you will open/edit
2. **Show current line numbers** with the exact current code
3. **Show exact new code** you will write (word for word, character for character)
4. **Explain the specific reason** for each change based on the user's exact instructions
5. **List every action** in sequential order
6. **Wait for approval** - NO EXCEPTIONS

**You may NOT omit any code or changes you wish to make from this listing!** All changes must pass through this approval process. If the user does not approve of each singular change, you may not implement it. In other words, do not request permission to change a font color and then change the font family, font weight, and position of the text. That would violate the rules!!!

**Example Format:**
- File: `/path/to/file.astro`
- Current line 42: `color: blue;`
- New line 42: `color: red;`
- Reason: User instructed to change text color to red
- Actions: 1) Open file, 2) Locate line 42, 3) Change `blue` to `red`, 4) Save file

**You MAY NOT take any action until this detailed plan is presented and approved.**

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

### Schema/Structured Data Implementation Pattern

**MANDATORY PROCESS for adding schema to new pages or components:**

1. **Import schema utility functions** at top of frontmatter:
   ```typescript
   import { buildServiceSchema, buildReviewSchema, buildFAQSchema } from '../utils/schema';
   ```

2. **Generate schema data in frontmatter** using utility functions:
   ```typescript
   const mySchema = buildServiceSchema(
     "Service Name",
     "Service Type",
     "Description",
     // ...other parameters as required by the function
   );
   ```

3. **Output schema in HTML** using set:html directive:
   ```html
   <!-- Schema Description -->
   <script type="application/ld+json" set:html={JSON.stringify(mySchema)} />
   ```

**Key Rules:**
- **ALWAYS use utility functions** from `/src/utils/schema.ts` - NEVER write schema manually
- **If new schema type needed**, add new function to schema.ts FIRST, then use it
- **Multiple schemas on one page** = multiple script tags (one per schema)
- **Generate schema in frontmatter**, output in HTML body
- **Use descriptive comments** above each schema script tag explaining what it is
- **Follow existing patterns** - look at implemented pages for examples

**Available Schema Functions:**
See `/src/utils/schema.ts` for complete list including:
- `buildServiceSchema` - Business services
- `buildReviewSchema` - Individual testimonials/reviews
- `buildFAQSchema` - FAQ pages/sections
- `buildVideoObjectSchema` - YouTube videos
- `buildProductSchema` - Products/gift certificates
- `buildPersonSchema` - Team members/people
- `buildPlaceSchema` - Physical locations with geo coordinates
- `buildItemListSchema` - Lists/directories of items
- `buildBlogSchema` - Blog collection pages
- `buildHowToSchema` - Step-by-step guides

**Example Implementation:**
```astro
---
import MainLayout from '../layouts/MainLayout.astro';
import { buildServiceSchema, buildReviewSchema } from '../utils/schema';

// Service schema
const serviceSchema = buildServiceSchema(
  "Professional Headshots",
  "Photography Service",
  "Professional headshot photography for businesses...",
  "Richard Waine Photography",
  "Lancaster",
  "PA",
  "+1-717-925-0061",
  ["Pennsylvania"]
);

// Review schema
const reviewSchema = buildReviewSchema(
  {
    author: "John Doe",
    company: "Acme Corp",
    rating: "5",
    reviewBody: "Amazing experience..."
  },
  "Richard Waine Photography",
  "https://richardwainephotography.com"
);
---

<MainLayout>
  <!-- Service Schema -->
  <script type="application/ld+json" set:html={JSON.stringify(serviceSchema)} />

  <!-- Review Schema -->
  <script type="application/ld+json" set:html={JSON.stringify(reviewSchema)} />

  <!-- Rest of page content -->
</MainLayout>
```

### Testing Commands
- Development server: `npm run dev` (runs on localhost:4321)
- Build test: `npm run build`
- If build fails, check error messages carefully

### Git Workflow
**ABSOLUTE RULE: ALWAYS commit ALL changes. Never commit selectively. Every single modified file must be included. No exceptions. Ever.**

1. Check status: `git status`
2. Add changes: `git add .` ← This means ALL changes, not selective files
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