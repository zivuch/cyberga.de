---
name: adjust-styling
description: Analyze styling from a reference website section and apply those design patterns to specific code sections
subagent: website-cloner
---

# Adjust Styling Command

Analyze the styling from a specific section of **$ARGUMENTS** and apply those design patterns to targeted sections in the current codebase.
IMPORTANT: DO NOT BREAK THE HTML STRUCTURE, ONLY MAKE PIXEL PERFECT.

## Project Brief

**Reference Website & Section**: $ARGUMENTS

Extract design elements from the specified website section and intelligently apply them to improve specific parts of the current project's visual design.

## Scope of Work

### Targeted Analysis
- Use Playwright to navigate and analyze the specified website section
- Extract styling patterns from the target section (header, hero, cards, forms, etc.)
- Identify component-specific design approaches and visual treatments
- Document section-specific interaction patterns and responsive behavior

### Selective Application
- Apply extracted design patterns to corresponding sections in current codebase
- Update relevant components with new styling approaches
- Modify Tailwind classes and custom CSS for targeted improvements
- Preserve existing functionality while enhancing visual design

## Expected Deliverables

- **Updated component sections** with styling inspired by reference
- **Modified Tailwind/CSS** for specific components or sections
- **Enhanced visual consistency** in targeted areas
- **Section-specific style documentation** showing changes made
- **Responsive updates** for modified sections

## Success Criteria

- [ ] Target sections visually improved with reference site inspiration
- [ ] Styling changes focused on specified sections only
- [ ] Maintained functionality in modified components
- [ ] Clean, maintainable CSS/Tailwind implementation
- [ ] Consistent integration with existing design system

## Usage Examples

```bash
# Apply Stripe's pricing table styling to current pricing section
$ARGUMENTS = "https://stripe.com/pricing pricing-table"

# Adopt Linear's navigation header design for current header component
$ARGUMENTS = "https://linear.app header-navigation"

# Use Vercel's hero section styling for current landing page hero
$ARGUMENTS = "https://vercel.com hero-section"

# Apply Figma's card component styling to current feature cards
$ARGUMENTS = "https://figma.com feature-cards"
```

The website-cloner subagent will analyze the specified website section and apply those design patterns to enhance the corresponding sections in your current project.