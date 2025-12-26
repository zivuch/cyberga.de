---
name: adjust-styling
description: Analyze styling from a reference website and apply those design patterns to current project
subagent: website-cloner
---

# Adjust Styling Command

Analyze the styling and design patterns from **$ARGUMENTS** and apply those visual improvements to the current project.

## Project Brief

**Reference Website**: $ARGUMENTS

Extract design elements from the reference site and intelligently apply them to improve the current project's visual design and user experience.

## Scope of Work

### Style Analysis
- Extract color palette, typography, and spacing patterns
- Identify component styling approaches and visual hierarchy
- Document interaction patterns and micro-animations
- Analyze responsive design strategies

### Style Application
- Apply extracted design patterns to existing components
- Update Tailwind configuration with new design tokens
- Enhance visual hierarchy and user experience
- Maintain existing functionality while improving aesthetics

## Expected Deliverables

- **Updated component styles** matching reference site patterns
- **Enhanced Tailwind configuration** with extracted design tokens
- **Improved visual hierarchy** and user experience
- **Style guide documentation** showing before/after changes
- **Responsive design updates** if needed

## Success Criteria

- [ ] Visual improvements clearly inspired by reference site
- [ ] Consistent design system applied across all components
- [ ] Maintained functionality with enhanced aesthetics
- [ ] Responsive behavior improved or maintained
- [ ] Clean, maintainable CSS/Tailwind implementation

## Usage Examples

```bash
# Apply clean, professional styling
$ARGUMENTS = "https://www.dataforwomen.ai/"

# Adopt Linear's modern, minimal design patterns  
$ARGUMENTS = "https://www.dataforwomen.ai/"

# Use header and menu approach
$ARGUMENTS = "https://www.dataforwomen.ai/"
```

The website-cloner subagent will analyze the reference site's design patterns and thoughtfully apply them to enhance the current project's visual design.