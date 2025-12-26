---
name: clone-website
description: Clone and recreate any website as a modern React/TypeScript application
subagent: website-cloner
---

# Clone Website Command

Analyze and recreate the website at **$WEBSITE_URL** as a modern React/TypeScript application with Tailwind CSS styling.

## Target Website
**URL to Clone**: $WEBSITE_URL

## Project Requirements

### Analysis Phase
1. **Deep Website Analysis**
   - Navigate to $WEBSITE_URL using Playwright browser automation
   - Capture full-page screenshots and layout snapshots
   - Extract design system elements (colors, typography, spacing)
   - Document component patterns and interactive elements
   - Analyze content structure and user experience flows

2. **Technical Assessment**
   - Identify key functionality and interactive features
   - Document responsive behavior patterns
   - Assess performance characteristics of original site
   - Note accessibility implementations

### Implementation Phase
1. **Modern Tech Stack Setup**
   - React 18+ with TypeScript for type-safe development
   - Tailwind CSS with custom configuration matching extracted design
   - Component-based architecture with proper separation of concerns
   - Modern development tooling and build optimization

2. **Pixel-Perfect Recreation**
   - Implement exact visual design matching $WEBSITE_URL
   - Recreate responsive behavior across all device sizes
   - Build reusable component library based on identified patterns
   - Implement smooth animations and micro-interactions

3. **Enhanced Functionality**
   - Recreate all interactive elements and user flows
   - Implement proper form validation and error handling
   - Add performance optimizations (lazy loading, code splitting)
   - Ensure full accessibility compliance (WCAG 2.1 AA)

### Quality Assurance
1. **Automated Testing**
   - Playwright test suite covering critical user journeys
   - Visual regression testing against original site
   - Performance benchmarking and Core Web Vitals validation
   - Cross-browser compatibility verification

2. **Code Quality**
   - TypeScript strict mode compliance
   - ESLint and Prettier configuration
   - Comprehensive component documentation
   - Production-ready build configuration

## Expected Deliverables

### Application Code
- **Complete React/TypeScript application** with production-ready architecture
- **Custom Tailwind design system** with extracted design tokens from $WEBSITE_URL
- **Reusable component library** documented with usage examples
- **Responsive layouts** working seamlessly across desktop, tablet, and mobile

### Documentation & Testing
- **Site analysis report** documenting findings from $WEBSITE_URL analysis
- **Setup and deployment guide** with clear instructions
- **Playwright test suite** ensuring functionality and performance
- **Design system documentation** for future maintenance and extension

### Performance & Accessibility
- **Optimized performance** meeting or exceeding original site metrics
- **Full accessibility compliance** with proper semantic markup
- **SEO optimization** with meta tags and structured data
- **Cross-browser compatibility** for modern browsers

## Development Approach

### Phase 1: Discovery & Analysis (Use Playwright MCP)
- Navigate to $WEBSITE_URL and perform comprehensive analysis
- Extract visual design elements and document component patterns
- Identify user experience flows and conversion elements
- Create detailed analysis report with screenshots and findings

### Phase 2: Technical Foundation (Use Context7 MCP)
- Fetch latest React, TypeScript, and Tailwind documentation
- Set up modern development environment with best practices
- Create project structure and component architecture
- Configure custom Tailwind theme based on extracted design tokens

### Phase 3: Implementation & Testing
- Build components with pixel-perfect attention to detail
- Implement responsive behavior matching original site
- Add interactive functionality and form handling
- Create comprehensive test suite with Playwright automation

### Phase 4: Optimization & Polish
- Performance optimization and bundle size analysis
- Accessibility audit and compliance verification
- Code review and documentation completion
- Production deployment configuration

## Success Metrics

### Visual Fidelity
- [ ] 95%+ visual match to $WEBSITE_URL across all breakpoints
- [ ] Smooth animations and transitions matching original behavior
- [ ] Consistent typography, spacing, and color implementation
- [ ] Responsive design working flawlessly on all device sizes

### Technical Excellence
- [ ] Clean, maintainable TypeScript code with proper typing
- [ ] Lighthouse performance scores of 90+ across all metrics
- [ ] Zero accessibility violations (WCAG 2.1 AA compliance)
- [ ] Comprehensive test coverage for critical user paths

### Development Quality
- [ ] Modern React patterns and hooks usage
- [ ] Proper component composition and reusability
- [ ] Optimized build size and loading performance
- [ ] Clear documentation and setup instructions

## Usage Example

To use this command, replace `$ARGUMENTS` with your target website:

```bash
# Example usage:
$ARGUMENTS = "https://stripe.com"
$ARGUMENTS = "https://linear.app"
$ARGUMENTS = "https://vercel.com"
$ARGUMENTS = "https://figma.com"
```

The website-cloner subagent will automatically handle the complete analysis, recreation, and testing process to deliver a production-ready React/TypeScript application that faithfully recreates the target website with modern web technologies.