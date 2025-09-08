# Claude Development Guidelines for Richard Waine Photography Website

## CRITICAL RULES

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