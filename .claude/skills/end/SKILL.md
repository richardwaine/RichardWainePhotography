---
name: end
description: Close a session by writing session notes and updating tracking files. Captures what was done, decisions made, and where things were left so the next session can pick up seamlessly.
---

# End Session

Close the session by documenting what happened. Write for a reader with zero context.

## Process

Complete each step in order.

### Step 1: Write Session Notes

Write to `SESSION-NOTES.md` (overwrites previous content):

```markdown
# Session Notes

**Date:** [YYYY-MM-DD]

## What was done
[Describe the work completed this session. Be specific.]

## Decisions made
[Document every non-obvious decision: what options were considered, which was chosen, and why. If no major decisions, state what the straightforward path was.]

## Where we left off
[Current state. What is in flight. What is blocked. What the next logical task is.]
```

### Step 2: Update To-Do List

Ask the user:
1. "Any items to add to the to-do list?"
2. "Any items to mark complete or remove?"

Update `TODO.md` based on their responses.

If they have nothing to add or remove, confirm and move on.

### Step 3: Update Tracking

If any new experiments were started this session (meta description changes, schema changes, content tests, etc.), add them to `TRACKING.md` with:
- Experiment name
- Change date
- What was changed (before/after)
- Baseline metrics if available
- Check dates (Week 1, Week 2, Week 4, Week 8 from change date)

If no new experiments, do not modify `TRACKING.md`.

### Step 4: Confirm Close

State:
```
Session closed.
- Session notes written
- To-do list: [count] items
- Active experiments: [count]
```

## Rules

- Write what actually happened, not what was planned
- Be specific enough that the next session can orient without re-reading everything
- Do not fabricate or assume
