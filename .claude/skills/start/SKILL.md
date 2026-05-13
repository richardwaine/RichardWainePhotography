---
name: start
description: Begin a session by orienting to current project state. Reads rules, session notes, to-do list, and surfaces anything needing attention. Silent on success except for the ready summary.
---

# Start Session

Orient to the current state. Do not execute any work. Load context and surface what matters.

## Process

Complete each step in order.

### Step 1: Read Context

1. Read `CLAUDE.md` in full
2. Read `SESSION-NOTES.md` (last session's state)
3. Read `TODO.md` (current to-do list)
4. Read `TRACKING.md` (active experiments)

If any file does not exist, note it and continue.

### Step 2: Check Content Freshness

Read all blog post frontmatter in `src/content/blog/`. Flag any post where `modifiedDate` is older than 12 months from today.

Output format if stale posts found:
```
Stale content (not updated in 12+ months):
- [post title] (last updated: [date])
```

If none are stale, do not mention it.

### Step 3: Check Blog Cadence

Identify the most recently published blog post by `publishDate`. Calculate days since publication.

Output:
```
Last blog published: [title] ([X] days ago)
```

### Step 4: Check Experiments

Review `TRACKING.md` for any experiments with check dates due today or past due.

Output format if checks due:
```
Experiment checks due:
- [experiment name]: check due [date]
```

If no checks due, do not mention it.

### Step 5: Check Weekly Schedule

If today is Monday:
```
Monday items:
- Weekly GSC check
- GBP update post due
```

If not Monday, do not mention it.

### Step 6: Check Git Status

Run `git status`. If there are uncommitted changes, untracked files, or unstaged modifications, surface them:
```
Git status: [uncommitted changes / untracked files / etc.]
```

If working tree is clean, do not mention it.

### Step 7: Ready Summary

Output the following:
```
---
To-do list: [count] items
[list each item on its own line]

Last session: [one-line summary from SESSION-NOTES.md, or "No session notes found"]

Ready.
---
```

## Rules

- Do not begin any work
- Do not make any file changes
- Surface issues, do not solve them
- Be concise
