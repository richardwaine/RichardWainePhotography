# Content Creation Workflow

**Purpose:** Complete step-by-step guide for creating AI-optimized blog content using the PAA scraper, content clustering, and blog writing process.

**Last Updated:** 2026-04-16

---

## STEP 1: RUN THE PAA SCRAPER

### Prerequisites
- Node.js installed
- Playwright installed in the scraper folder

### Location
```
/Users/richardwaine/CloudStation/People Also Ask Scraper/paa-scraper/
```

### Command
```bash
cd "/Users/richardwaine/CloudStation/People Also Ask Scraper/paa-scraper"
node scraper.js "your keyword here" 3 4000 ./output
```

### Parameters
| Position | What it is | Example | Notes |
|----------|-----------|---------|-------|
| 1 | Keyword | "professional headshots" | Must be in quotes |
| 2 | Depth | 3 | How many levels of PAA to expand (1-3) |
| 3 | Delay | 4000 | Milliseconds between clicks (4000 = 4 seconds) |
| 4 | Output folder | ./output | Where CSV gets saved |

### What Happens
1. Playwright opens a browser window
2. Goes to Google
3. Searches your keyword
4. Finds the "People Also Ask" box
5. Clicks each question to expand more questions
6. Repeats for the depth you specified
7. Saves all questions to a CSV file

### Output
- File location: `./output/[keyword]_[date].csv`
- Format: `Question,Keyword,Scraped Date`

### If Captcha Appears
- The browser will pause
- Solve the captcha manually in the browser window
- Press Enter in the terminal to continue

---

## STEP 2: CLUSTER THE QUESTIONS

### What You Have
- A CSV file from the scraper (e.g., `professional_headshots_2026-04-16.csv`)

### What You Need to Provide
1. Tell Claude to read the CSV file: "Read the CSV at `[path to file]`"
2. Your main topic/niche (e.g., "Professional Headshots")
3. List of existing blog posts (optional, for redundancy checking)

### How to Use
In Claude Code, run:
```
/content-cluster
```

Or say:
> "Read the CSV at `/Users/richardwaine/CloudStation/People Also Ask Scraper/paa-scraper/output/professional_headshots_2026-04-16.csv` and cluster these questions for my Professional Headshots blog."

### What Claude Will Do
1. Analyze all questions
2. Group similar questions into themes
3. Create cluster names (e.g., "Wardrobe & Appearance")
4. Generate blog post titles for each cluster
5. Assign questions to each post
6. Check for redundancies against your existing content
7. Output a TOPICAL-AUTHORITY-MAP.md file

### Output Format
- Markdown file matching your existing TOPICAL-AUTHORITY-MAP.md format
- Clusters with numbered posts (1.1, 1.2, etc.)
- Questions assigned to each post
- Status column (TO WRITE, EXISTS, etc.)

### What to Do With the Output
- Review the clusters
- Adjust titles if needed
- Save/update your TOPICAL-AUTHORITY-MAP.md
- Pick a post to write

---

## STEP 3: WRITE THE BLOG POST

### What You Have
- A TOPICAL-AUTHORITY-MAP.md with clustered topics
- A specific post you want to write (e.g., "1.3 Can You Wear Patterns in a Headshot?")

### What You Need to Provide
1. The blog post title from your map
2. The PAA questions assigned to that post

### How to Use
In Claude Code, run:
```
/blog-writer
```

Or say:
> "I want to write a blog post titled 'Can You Wear Patterns in a Headshot?' answering these questions: [list the questions from your map]"

### What Claude Will Do

**Phase 1: Research**
- Find 5-8 authoritative sources
- Identify key stats and data points
- Present sources for your approval
- **WAIT for your approval before continuing**

**Phase 2: Structure**
- Create TL;DR section (3-5 bullets)
- Outline H2 sections (one per question)
- Add FAQ section at bottom
- **WAIT for your approval before continuing**

**Phase 3: Write**
- Write full blog post in conversational tone
- 60% your voice/experience, 40% supporting context
- Include source citations
- Add internal link placeholders
- Mark spots for you to add personal experience

### Output Format
- Full markdown blog post
- TL;DR at top
- FAQ at bottom
- Source citations inline
- `[INTERNAL LINK: topic]` placeholders
- `[ADD YOUR EXPERIENCE: suggestion]` placeholders

### What to Do With the Output
- Review the draft
- Add your personal experience where marked
- Replace internal link placeholders with actual links
- Read it out loud (does it sound like you?)
- Edit as needed

---

## STEP 4: PUBLISH

### What You Have
- A completed blog post draft

### Before Publishing Checklist
- [ ] Added your personal experience where marked
- [ ] Replaced `[INTERNAL LINK: topic]` placeholders with actual links
- [ ] Read it out loud - does it sound like you?
- [ ] All claims backed up with sources?
- [ ] TL;DR at top?
- [ ] FAQ at bottom?

### Your Tasks (Not Claude's)
1. Add images with alt text
2. Write meta description
3. Set title tag with primary keyword
4. Format in your CMS/blog template
5. Publish
6. Submit URL to Google Search Console

---
