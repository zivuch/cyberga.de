# Cyberga.de Landing Page - Implementation Plan

## Project Overview
Build a professional, bilingual (DE/EN) landing page for Cyberga - a test automation and security-focused consultancy. The site must convey trust, technical expertise, and enterprise readiness while maintaining a distinctive, memorable design.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules for animations
- **Deployment**: Vercel
- **Internationalization**: next-intl or custom solution
- **Animations**: Framer Motion
- **Icons**: Lucide React or Heroicons

## Design Direction: "Refined Technical Elegance"

### Aesthetic Philosophy
- **Theme**: Dark/sophisticated with cyber-security undertones
- **Typography**: 
  - Display: "Space Grotesk" or "JetBrains Mono" for headers (technical, modern)
  - Body: "Inter" or "IBM Plex Sans" (professional, readable)
- **Color Palette**:
  - Primary: Deep navy/charcoal (#0A0E27, #1A1F3A)
  - Accent: Electric cyan (#00D9FF, #0EA5E9)
  - Success/Trust: Emerald green (#10B981)
  - Warning/Security: Amber (#F59E0B)
  - Text: Off-white (#E5E7EB), gray gradients
- **Visual Elements**:
  - Subtle grid patterns (cyber/tech aesthetic)
  - Geometric shapes and lines
  - Gradient overlays
  - Smooth micro-interactions
  - Parallax scrolling effects
  - Animated security/shield icons

## Project Structure

```
cyberga-landing/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Root layout with locale
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form endpoint (optional)
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navigation with language switcher
│   │   ├── Footer.tsx           # Footer with legal links
│   │   └── LanguageSwitcher.tsx # DE/EN toggle
│   ├── sections/
│   │   ├── Hero.tsx             # Hero section with main value prop
│   │   ├── Services.tsx         # Test automation & security services
│   │   ├── CaseStudy.tsx        # Anonymous client showcase
│   │   ├── Technology.tsx       # Tech stack/expertise
│   │   ├── Benefits.tsx         # Why choose Cyberga
│   │   └── Contact.tsx          # Contact CTA section
│   ├── ui/
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Card.tsx             # Card component for services
│   │   └── GridPattern.tsx      # Background grid pattern
│   └── animations/
│       ├── FadeIn.tsx           # Scroll-triggered fade-in
│       └── StaggerChildren.tsx  # Staggered animation wrapper
├── lib/
│   ├── translations/
│   │   ├── de.json              # German translations
│   │   └── en.json              # English translations
│   └── i18n.ts                  # i18n configuration
├── public/
│   ├── images/                  # Placeholder for logos/images
│   └── icons/                   # Custom SVG icons
├── styles/
│   └── animations.css           # Custom CSS animations
├── .env.local                   # Environment variables
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind customization
└── vercel.json                  # Vercel deployment config
```

## Content Structure

### 1. Hero Section
**German:**
- H1: "Zuverlässigkeit und Sicherheit für kritische Anwendungen"
- Subheading: "Cyberga ist eine auf Testautomatisierung und Sicherheit spezialisierte Beratung, die sicherstellt, dass unternehmenskritische Anwendungen zuverlässig und sicher funktionieren."
- CTA: "Kontakt aufnehmen" / "Mehr erfahren"

**English:**
- H1: "Reliability and Security for Critical Applications"
- Subheading: "Cyberga is a test automation and security-focused consultancy that ensures mission-critical applications work reliably and securely."
- CTA: "Get in touch" / "Learn more"

### 2. Services Section
**Three core pillars:**
1. **Test Automation**
   - End-to-End Testing
   - API Testing
   - System Integration Testing
   - Continuous Testing (CI/CD)

2. **Quality Engineering**
   - Business Process Validation
   - Regression Testing
   - Performance Testing
   - Data Quality Assurance

3. **Security Validation**
   - Security Testing
   - Compliance Validation (DSGVO/GDPR)
   - Risk Assessment
   - Vulnerability Analysis

### 3. Case Study Section (Anonymous)
**Client Profile:**
- Industry: "Leading Financial Services Provider"
- Challenge: "Complex regulatory environment requiring automated validation of critical business processes"
- Solution: "Implemented comprehensive test automation framework for end-to-end validation"
- Results:
  - 85% reduction in manual testing effort
  - 100% coverage of critical business flows
  - Zero production incidents related to tested processes
  - Accelerated release cycles

**Visual:** Abstract representation, no logos

### 4. Technology & Expertise
**Frameworks & Tools:**
- Robot Framework
- Selenium/Playwright
- API Testing (REST/SOAP)
- CI/CD Integration (Jenkins, GitLab CI, GitHub Actions)
- Security Testing Tools
- Custom Test Frameworks

**Industries:**
- Financial Services
- Insurance
- Healthcare
- Enterprise Software

### 5. Benefits/Why Cyberga
- **Reduced Operational Risk**: Catch issues before they reach production
- **Regulatory Compliance**: Ensure adherence to industry standards
- **Cost Efficiency**: Automated testing reduces manual effort by 80%+
- **System Stability**: Continuous validation protects critical processes
- **Expert Consultation**: Deep technical expertise in complex environments

### 6. Contact Section
- Email: contact@cyberga.de
- Location: Germany (keep it vague for privacy)
- Form fields: Name, Email, Company, Message
- CTA: "Start a conversation"

## Implementation Steps

### Phase 1: Project Setup
1. Initialize Next.js project with TypeScript and Tailwind
2. Install dependencies:
   ```bash
   npm install framer-motion lucide-react
   npm install -D @types/node
   ```
3. Set up folder structure as outlined above
4. Configure Tailwind with custom colors and fonts
5. Set up i18n structure (next-intl or custom solution)

### Phase 2: Layout & Navigation
1. Create base layout with Header and Footer
2. Implement language switcher (DE/EN toggle)
3. Set up routing for locale-based URLs (/de, /en)
4. Create responsive navigation menu
5. Add smooth scroll behavior

### Phase 3: Hero Section
1. Design and implement hero with:
   - Animated background grid pattern
   - Gradient overlays
   - Typewriter or fade-in text effect
   - Dual CTAs with hover animations
2. Add particle effect or subtle motion graphics
3. Implement responsive design (mobile/tablet/desktop)

### Phase 4: Services Section
1. Create service cards with:
   - Icon animations on hover
   - Staggered fade-in on scroll
   - Clean typography hierarchy
2. Add subtle background patterns
3. Implement grid layout (3 columns desktop, stacked mobile)

### Phase 5: Case Study Section
1. Design anonymous case study card with:
   - Abstract visual representation
   - Stats/metrics with count-up animation
   - Professional typography
2. Add testimonial-style layout
3. Implement scroll-triggered animations

### Phase 6: Technology & Benefits Sections
1. Create tech stack grid with icons/logos
2. Implement benefits section with:
   - Icon + text combinations
   - Hover effects
   - Responsive layout
3. Add smooth transitions between sections

### Phase 7: Contact Section
1. Design contact form with:
   - Clean input styling
   - Validation (client-side)
   - Success/error states
2. Add alternative contact methods (email, phone if needed)
3. Implement form submission (email API or form service)

### Phase 8: Animations & Interactions
1. Add page load animations (staggered reveals)
2. Implement scroll-triggered animations for each section
3. Create hover effects for interactive elements
4. Add smooth scrolling and parallax effects
5. Optimize animation performance

### Phase 9: Translations & Content
1. Extract all text into translation files (de.json, en.json)
2. Implement language switcher logic
3. Set up URL structure (/de, /en)
4. Add language persistence (localStorage or cookies)
5. Ensure all content is fully bilingual

### Phase 10: SEO & Metadata
1. Add meta tags (title, description, OG tags)
2. Create favicon and app icons
3. Implement structured data (JSON-LD)
4. Add sitemap.xml
5. Set up robots.txt
6. Optimize images with Next.js Image component

### Phase 11: Performance Optimization
1. Lazy load images and components
2. Optimize font loading
3. Minimize JavaScript bundle
4. Enable Next.js caching
5. Test performance with Lighthouse

### Phase 12: Deployment
1. Create Vercel account and link repository
2. Configure environment variables
3. Set up custom domain (cyberga.de)
4. Configure SSL/TLS
5. Test production build
6. Deploy and verify

## Key Components Code Examples

### Language Switcher Component
```typescript
// components/layout/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const languages = [
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' }
];

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const newPath = pathname.replace(/^\/(de|en)/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`px-3 py-1 rounded ${
            currentLocale === lang.code
              ? 'bg-cyan-500 text-white'
              : 'bg-gray-800 text-gray-400 hover:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}
```

### Grid Pattern Background
```typescript
// components/ui/GridPattern.tsx
export default function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full opacity-10">
        <defs>
          <pattern
            id="grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-cyan-500"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
```

## Translation Files Structure

### de.json
```json
{
  "nav": {
    "services": "Leistungen",
    "expertise": "Expertise",
    "contact": "Kontakt"
  },
  "hero": {
    "title": "Zuverlässigkeit und Sicherheit für kritische Anwendungen",
    "subtitle": "Cyberga stellt sicher, dass kritische Anwendungen durch professionelle Testautomatisierung und Quality Engineering zuverlässig und sicher funktionieren.",
    "cta_primary": "Kontakt aufnehmen",
    "cta_secondary": "Mehr erfahren"
  },
  "services": {
    "title": "Unsere Leistungen",
    "automation": {
      "title": "Testautomatisierung",
      "description": "Automatisierte End-to-End-, API- und Systemtests zur Validierung kritischer Geschäftsprozesse."
    },
    "quality": {
      "title": "Quality Engineering",
      "description": "Reduzierung operativer Risiken und Schutz der Systemstabilität in komplexen Umgebungen."
    },
    "security": {
      "title": "Sicherheitsvalidierung",
      "description": "Sicherheitstests und Compliance-Validierung für regulierte Branchen."
    }
  },
  "caseStudy": {
    "title": "Erfolgsgeschichte",
    "client": "Führender Finanzdienstleister",
    "challenge": "Herausforderung",
    "solution": "Lösung",
    "results": "Ergebnisse"
  },
  "contact": {
    "title": "Lassen Sie uns sprechen",
    "subtitle": "Bereit, die Qualität und Sicherheit Ihrer Anwendungen zu verbessern?",
    "button": "Nachricht senden"
  }
}
```

### en.json
```json
{
  "nav": {
    "services": "Services",
    "expertise": "Expertise",
    "contact": "Contact"
  },
  "hero": {
    "title": "Reliability and Security for Critical Applications",
    "subtitle": "Cyberga ensures the reliability and security of critical applications through professional test automation and quality engineering.",
    "cta_primary": "Get in touch",
    "cta_secondary": "Learn more"
  },
  "services": {
    "title": "Our Services",
    "automation": {
      "title": "Test Automation",
      "description": "Automated end-to-end, API, and system tests to validate critical business processes."
    },
    "quality": {
      "title": "Quality Engineering",
      "description": "Reduce operational risk and protect system stability in complex environments."
    },
    "security": {
      "title": "Security Validation",
      "description": "Security testing and compliance validation for regulated industries."
    }
  },
  "caseStudy": {
    "title": "Success Story",
    "client": "Leading Financial Services Provider",
    "challenge": "Challenge",
    "solution": "Solution",
    "results": "Results"
  },
  "contact": {
    "title": "Let's Talk",
    "subtitle": "Ready to improve the quality and security of your applications?",
    "button": "Send message"
  }
}
```

## Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          900: '#0A0E27',
          950: '#050713',
        },
        accent: {
          cyan: '#00D9FF',
          blue: '#0EA5E9',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

## Deployment Configuration

### vercel.json
```json
{
  "rewrites": [
    { "source": "/", "destination": "/de" },
    { "source": "/:path*", "destination": "/:path*" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
  },
  images: {
    domains: [],
  },
}

module.exports = nextConfig
```

## Testing Checklist

- [ ] All text is translatable (no hardcoded strings)
- [ ] Both languages display correctly
- [ ] Navigation works on all screen sizes
- [ ] Animations perform well (60fps)
- [ ] Contact form validation works
- [ ] Images are optimized
- [ ] SEO meta tags are complete
- [ ] Accessibility (keyboard navigation, ARIA labels)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile responsiveness
- [ ] Performance score >90 (Lighthouse)

## Success Metrics

1. **Performance**: Lighthouse score >90
2. **Accessibility**: WCAG 2.1 AA compliance
3. **SEO**: Proper meta tags, structured data
4. **User Experience**: Smooth animations, fast load times
5. **Conversion**: Clear CTAs, easy contact process

## Optional Enhancements (Post-MVP)

1. Blog section for technical articles
2. Client portal for project tracking
3. Live chat integration
4. Newsletter signup
5. Case study downloads (PDF whitepapers)
6. Video testimonials
7. Interactive demos of test automation
8. Dark/light mode toggle

## Resources & References

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Vercel Deployment: https://vercel.com/docs
- Web Vitals: https://web.dev/vitals/

## Timeline Estimate

- **Setup & Configuration**: 2 hours
- **Component Development**: 8-10 hours
- **Content & Translations**: 2 hours
- **Animations & Polish**: 3-4 hours
- **Testing & Optimization**: 2-3 hours
- **Deployment & DNS Setup**: 1 hour

**Total**: ~18-22 hours for full implementation

---

## Next Steps for Claude Code

1. **Review this plan** and confirm understanding
2. **Create project structure** following the outlined folder hierarchy
3. **Implement components** section by section (Hero → Services → Case Study → Contact)
4. **Add translations** and test language switching
5. **Optimize and deploy** to Vercel
6. **Verify** on custom domain

Ready to start building! 🚀
