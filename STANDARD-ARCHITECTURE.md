# STANDARD PAGE ARCHITECTURE

## HTML Structure

Every page MUST follow this exact structure:

```astro
<MainLayout title="SEO Title">

  <!-- OPTIONAL: Title Section (use PageTitle component when page needs title) -->
  <PageTitle
    title="Page Title"
    subtitle="Optional Subtitle"
  />

  <!-- WRAPPER: Single wrapper div for entire page width constraint -->
  <div class="wrapper">

    <!-- MAIN CONTENT: Semantic main element for page content -->
    <main>

      <!-- Each content area is a <section> -->
      <section id="unique-section-id">
        <!-- Content goes here -->
      </section>

      <section id="another-section">
        <!-- More content -->
      </section>

    </main>

  </div>

</MainLayout>
```

## CSS Rules

### Global (already in style.css)
```css
section {
  padding-block: var(--size-8); /* 48px vertical spacing on ALL sections */
}

.wrapper {
  width: 80%;
  margin-inline: auto; /* Centers content horizontally */
}
```

### Page-Specific Overrides
Only override when absolutely necessary:
```css
#specific-section {
  padding-block: 0; /* Only if section needs no padding */
}
```

## Architecture Rules

1. **Every page has ONE `.wrapper` div** - Wraps main element, constrains width to 80% and centers horizontally
2. **Every page has `<main>` inside wrapper** - All page content goes inside main tag for semantic HTML
3. **Every content area is a `<section>`** - Sections define logical page areas inside main
4. **Every section has ID** - For targeting with CSS/JS
5. **Section `padding-block` provides base vertical spacing** - Additional margins on elements (h1, h2, p) handle spacing within sections
6. **PageTitle is optional** - Outside wrapper, only when page needs title
7. **Use CSS custom properties** - Never hardcode px/rem/em values
8. **Grid for layouts** - Use CSS Grid for multi-column layouts

## Spacing Hierarchy

```
Header (fixed/sticky)
  ↓
PageTitle (optional, outside wrapper)
  ↓ PageTitle has its own section padding
Wrapper (width: 80%, margin-inline: auto)
  ↓
Main (no padding)
  ↓
Section 1 (padding-block: var(--size-8))
  ↓ Section padding provides vertical spacing
Section 2 (padding-block: var(--size-8))
  ↓ Section padding provides vertical spacing
Section 3 (padding-block: var(--size-8))
  ↓
Footer
```

## Component Guidelines

- Components handle their OWN internal structure
- Components should NOT assume they're in a wrapper
- Components should work standalone in any section
- Components define their own padding/margins internally

## Migration Strategy

1. Wrap all content in `<main>` if not already
2. Ensure every content area is in a `<section>` with ID
3. Ensure every section has `.wrapper` div inside
4. Remove any padding from `<main>`
5. Let section padding-block handle vertical spacing
6. Convert all magic numbers to CSS custom properties
7. Test page spacing visually
8. Move to next page
