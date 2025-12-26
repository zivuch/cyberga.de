# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cyberga.de is a bilingual (German/English) landing page for a test automation and security consultancy. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Configured for static export.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export to /out)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Internationalization (i18n)

- **Routing**: Locale-based routes via `app/[locale]/` dynamic segment
- **Default locale**: German (`de`)
- **Translations**: JSON files in `messages/` (de.json, en.json)
- **Utility**: `lib/i18n.ts` provides `getMessages(locale)` and locale constants
- Root `/` redirects to `/de`

### Component Pattern

Components receive translated messages as props from the page:
```tsx
// In app/[locale]/page.tsx
const messages = getMessages(locale);
<Hero messages={messages.hero} />
```

### Design System (Tailwind)

Custom design tokens in `tailwind.config.ts`:
- **Colors**: `primary` (purple #9342FE), `cream` (background), `dark` (text), `accent-lime`
- **Fonts**: `font-serif` (Antic Didone), `font-sans` (Roboto)
- **Typography**: `text-display-xl`, `text-display-lg`, `text-display`, `text-heading`
- **Utilities**: `rounded-pill`, `max-w-container`

Custom component classes in `app/globals.css`:
- `.btn-primary`, `.btn-secondary`, `.btn-outline`
- `.section-number`, `.section-border`, `.container-main`

### Static Export

Configured with `output: "export"` in `next.config.ts`. Build generates static HTML to `/out` directory.
