# Cyberga.de - Setup Guide

Professional bilingual (DE/EN) landing page for Cyberga test automation consultancy.

## ✅ Project Status

**Build Status:** ✅ **Successful**
- Next.js 16.1.1 (Security patched - CVE-2025-55182)
- All sections implemented
- Contact form with Resend integration
- Full internationalization (DE/EN)
- SEO optimized

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and add your API keys:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:

```env
# Required: Resend Email API
# Sign up at https://resend.com and get your API key
RESEND_API_KEY=re_your_actual_api_key_here

# Required: Email where contact form submissions will be sent
CONTACT_EMAIL=contact@cyberga.de

# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Rate Limiting (default values shown)
RATE_LIMIT_MAX_REQUESTS=3
RATE_LIMIT_WINDOW_MS=3600000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000/de](http://localhost:3000/de) (German) or [http://localhost:3000/en](http://localhost:3000/en) (English)

### 4. Build for Production

```bash
npm run build
npm run start
```

## 📧 Email Setup (Resend)

### Option 1: Quick Test (Using Resend's Test Domain)

1. Sign up at [https://resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key
   ```
4. Contact form will use `onboarding@resend.dev` as sender

### Option 2: Production Setup (Custom Domain)

1. Verify your domain (cyberga.de) in Resend dashboard
2. Add DNS records (MX, SPF, DKIM) as instructed
3. Update `app/api/contact/route.ts` line 95:
   ```typescript
   from: 'Cyberga Contact Form <noreply@cyberga.de>',
   ```
4. Test email delivery

## 🎨 Customization

### Colors

Edit `app/[locale]/globals.css`:

```css
--color-primary-900: #0A0E27;    /* Deep navy */
--color-accent-cyan: #00D9FF;    /* Electric cyan */
--color-success: #10B981;         /* Emerald green */
```

### Translations

Edit `messages/de.json` (German) and `messages/en.json` (English)

### Fonts

Configured in `app/[locale]/layout.tsx`:
- Display: Space Grotesk
- Body: Inter

## 📁 Project Structure

```
app/
├── [locale]/              # Locale-based routing (DE/EN)
│   ├── layout.tsx         # Root layout with i18n
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
├── api/contact/
│   └── route.ts           # Contact form API
├── sitemap.ts             # SEO sitemap
└── robots.ts              # SEO robots.txt

components/
├── animations/            # Scroll & motion animations
├── layout/                # Header, Footer, Navigation
├── sections/              # Hero, Services, CaseStudy, etc.
└── ui/                    # Reusable UI components

messages/
├── de.json                # German translations
└── en.json                # English translations
```

## 🔒 Security Features

✅ **Next.js 16.1.1** - Patched for:
- CVE-2025-55182 (CVSS 10.0 - RCE vulnerability)
- CVE-2025-55183, CVE-2025-55184 (RSC vulnerabilities)

✅ **Contact Form Security:**
- Server-side validation
- Input sanitization
- Rate limiting (3 requests/hour per IP)
- Email format validation
- XSS protection

## 📱 Features

### Sections
- ✅ Hero with gradient text and CTAs
- ✅ Services (Test Automation, Quality Engineering, Security)
- ✅ Case Study with animated stats counter
- ✅ Technology stack grid
- ✅ Benefits section
- ✅ Contact form with validation

### Technical
- ✅ Bilingual (DE/EN) with URL-based locale switching
- ✅ Smooth scroll navigation
- ✅ Hamburger menu (mobile + desktop)
- ✅ Scroll-triggered animations
- ✅ Form rate limiting
- ✅ Google Analytics integration
- ✅ SEO optimized (sitemap, robots.txt, meta tags)

## 🚀 Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Cyberga.de landing page"
git branch -M main
git remote add origin https://github.com/yourusername/cyberga-landing.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Framework: **Next.js** (auto-detected)
4. Add environment variables:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_GA_ID` (optional)
   - `RATE_LIMIT_MAX_REQUESTS`
   - `RATE_LIMIT_WINDOW_MS`
5. Click **Deploy**

### 3. Configure Custom Domain

1. Vercel Dashboard → Project Settings → Domains
2. Add domain: `cyberga.de`
3. Add domain: `www.cyberga.de` (redirect to cyberga.de)
4. Update DNS at your registrar:
   - Point nameservers to Vercel (recommended), OR
   - Add A record: `76.76.21.21`
   - Add CNAME `www` → `cname.vercel-dns.com`
5. Wait for DNS propagation (1-48 hours)
6. SSL certificate auto-provisioned by Vercel

### 4. Post-Deployment

- ✅ Test at https://cyberga.de/de and https://cyberga.de/en
- ✅ Verify contact form sends emails
- ✅ Check Google Analytics tracking
- ✅ Run Lighthouse audit (target: >90)

## 📊 Performance Targets

- **Lighthouse Performance:** >90
- **Accessibility:** 100 (WCAG 2.1 AA)
- **Best Practices:** 100
- **SEO:** 100
- **First Contentful Paint:** <1.8s
- **Largest Contentful Paint:** <2.5s

## 🛠 Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Run production build locally
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### Build Fails: "Missing API key"
- Make sure `.env.local` exists with `RESEND_API_KEY`
- For local builds without email: leave `RESEND_API_KEY` empty (contact form won't work but build will succeed)

### Contact Form Not Working
1. Check Resend API key is correct
2. Verify `CONTACT_EMAIL` is set
3. Check browser console for errors
4. Verify API route at `/api/contact` returns 200

### Translations Not Loading
1. Check `messages/de.json` and `messages/en.json` exist
2. Verify `i18n/request.ts` is present
3. Check middleware.ts is routing correctly

### Animations Laggy on Mobile
- Disable animations for low-end devices by checking `window.matchMedia('(prefers-reduced-motion: reduce)')`
- Reduce animation complexity in production

## 📝 License

Proprietary - Cyberga.de

## 🤝 Support

For issues or questions:
- Email: contact@cyberga.de
- Check `cyberga-implementation-plan.md` for detailed specs

---

**Built with:**
- Next.js 16.1.1 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-intl
- Resend
- Lucide React Icons
