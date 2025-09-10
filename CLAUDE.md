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