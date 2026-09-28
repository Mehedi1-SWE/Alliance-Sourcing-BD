# Alliance Sourcing BD - Professional Garment Sourcing Website

A modern, responsive Next.js website for Alliance Sourcing BD - a leading professional buying and sourcing service for apparel, knitwear, woven, and denim products.

## Features

- **5 Main Pages**: Home, About, Buying House Services, Factory & Machinery, Contact
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Components**: Reusable, modular React components
- **SEO Optimized**: Metadata, sitemap, robots.txt, structured data
- **Brand Colors**: Teal (#0891b2) and Navy (#1e293b)
- **Professional UI**: Hero sections, service cards, product showcases, process flows, CTAs
- **Contact Integration**: Email links and embedded map

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Language**: TypeScript
- **Hosting**: Optimized for Vercel

## Project Structure

```
Alliance-Sourcing-BD/
│
├── app/
│   ├── page.tsx                         # Home page
│   ├── about/page.tsx                   # About page
│   ├── buying-house/page.tsx            # Buying house page
│   ├── factory-machinery/page.tsx       # Factory & machinery page
│   ├── global-partners/page.tsx         # Global partners page
│   ├── contact/page.tsx                 # Contact page
│   ├── layout.tsx                       # Root layout
│   ├── globals.css                      # Global styles
│   └── sitemap.ts                       # SEO sitemap
│
├── components/
│   ├── layout/
│   │   ├── Navbar/page.tsx              # Navigation bar
│   │   ├── TopNavbar/page.tsx           # Top navigation
│   │   ├── Footer/page.tsx              # Footer
│   │   ├── Breadcrumb/page.tsx          # Breadcrumb
│   │   └── PageHeader/page.tsx          # Page header
│   │
│   ├── sections/
│   │   ├── Hero/page.tsx                # Hero section
│   │   ├── BannerCarousel/page.tsx      # Banner carousel
│   │   ├── ServicesGrid/page.tsx        # Services grid
│   │   ├── FeaturesGrid/page.tsx        # Features grid
│   │   ├── CtaSection/page.tsx          # CTA section
│   │   ├── ContactForm/page.tsx         # Contact form
│   │   ├── CatalogSection/page.tsx      # Catalog section
│   │   ├── ProductShowcase/page.tsx     # Product showcase
│   │   ├── PartnerCatalog/page.tsx      # Partner catalog
│   │   ├── PartnerFaq/page.tsx          # Partner FAQ
│   │   ├── PartnershipStrengths/page.tsx
│   │   └── ...
│   │
│   ├── cards/
│   │   ├── ServiceCard/page.tsx         # Service card
│   │   ├── FeatureCard/page.tsx         # Feature card
│   │   ├── ProductCard/page.tsx         # Product card
│   │   └── MachineryCard/page.tsx       # Machinery card
│   │
│   ├── common/
│   │   ├── Logo/page.tsx                # Logo
│   │   ├── SectionWrapper/page.tsx       # Section wrapper
│   │   ├── LoadingScreen/page.tsx        # Loading screen
│   │   ├── ScrollToTop/page.tsx          # Scroll to top
│   │   ├── WhatsAppButton/page.tsx       # WhatsApp button
│   │   ├── GoogleTranslate/page.tsx      # Translation
│   │   └── ThemeProvider/page.tsx        # Theme provider
│   │
│   ├── factory-machinery/
│   │   ├── Machenary/page.tsx            # Machinery
│   │   └── MachenaryGallary/page.tsx     # Machinery gallery
│   │
│   └── ui/
│       └── */page.tsx                    # Shadcn/Radix UI
│
├── lib/
│   ├── api.ts                            # API
│   ├── banner.ts                         # Banner data
│   ├── catalog.ts                        # Catalog data
│   ├── constants.ts                      # Constants
│   ├── product.ts                        # Product data
│   ├── services.ts                       # Services data
│   ├── types.ts                          # TypeScript types
│   ├── utils.ts                          # Utilities
│   └── weWork.ts                         # How-we-work data
│
├── public/
│   ├── images/assets
│   ├── icons/
│   ├── robots.txt
│   └── ...
│
├── types/
├── package.json
├── next.config.mjs
├── tsconfig.json
├── postcss.config.mjs
├── .env.example
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm/pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd alliance-sourcing-bd
```

2. Install dependencies
```bash
pnpm install
```

3. Create environment file
```bash
cp .env.example .env.local
```

4. Run development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Pages Overview

### Home (`/`)
- Hero banner with CTA
- "What sets us apart" features
- Buying house services
- How we work process
- Call-to-action section

### About (`/about`)
- Company story and mission
- Core values
- Process overview
- Contact CTA

### Buying House Services (`/buying-house`)
- Service offerings (sampling, supplier selection, negotiation, quality)
- Product expertise by category (Knitwear, Woven, Denim)
- Work process
- Contact CTA

### Factory & Machinery (`/factory-machinery`)
- Factory overview
- Advanced machinery inventory
- Production systems
- Contact CTA

### Contact (`/contact`)
- Contact information (email, phone, address)
- Contact form CTA
- Embedded map
- Contact CTA

## Design System

### Colors
- **Primary**: Cyan (#0891b2)
- **Secondary**: Navy (#1e293b)
- **Background**: White (#ffffff)
- **Muted**: Slate-100 (#f1f5f9)
- **Text**: Slate-900 (#1e293b)

### Typography
- **Font Family**: Geist (sans-serif)
- **Font Sizes**: Responsive (sm to 5xl)
- **Weight**: Regular (400), Semibold (600), Bold (700)

### Spacing & Radius
- Uses Tailwind's default spacing scale
- Border radius: 0.5rem (default), customizable per component

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px (md)
- **Desktop**: 1024px+ (lg)

## SEO Features

- Metadata on every page with title, description, OpenGraph tags
- Sitemap.xml for search engine crawling
- Robots.txt file
- Semantic HTML structure
- Image alt text
- Mobile-responsive design
- Fast load times with Next.js optimization

## Customization

### Update Content
Edit `/lib/constants.ts` to update:
- Site name and contact info
- Navigation links
- Services and expertise
- Team members
- Machinery list
- Values and process steps

### Update Colors
Edit `app/globals.css` to update design tokens:
```css
:root {
  --primary: 6 182 212;  /* Cyan */
  --secondary: 30 41 59; /* Navy */
  /* ... */
}
```

### Add New Pages
1. Create new folder in `app/(pages)/`
2. Create `page.tsx` with metadata
3. Import components from sections, cards, or layout
4. Add navigation link in `lib/constants.ts`

## Performance Optimization

- Image optimization with Next.js Image component
- Static generation (SSG) for all pages
- Tailwind CSS tree-shaking for minimal CSS
- Optimized fonts loading
- Minified production builds

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Next.js and deploys
4. Environment variables are automatically managed

```bash
vercel
```

### Deploy to Other Platforms

Works with any Node.js hosting:
- Next.js Static Export (if needed)
- Docker support
- Traditional Node.js servers

## Future Enhancements

- Blog section with dynamic posts
- Contact form backend integration
- Multi-language support (i18n)
- Dark mode theme
- Product testimonials section
- Team member profiles with images
- News/press releases
- Video content integration
- Newsletter signup
- Analytics integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

All rights reserved. Alliance Sourcing BD © 2024

## Support

For support, contact: info@alliancesourcingbd.com

---

Built with Next.js and Tailwind CSS. Optimized for performance and SEO.
# Alliance-Sourcing-BD
# Alliance-Sourcing-BD
## Next.js Project Structure

This project uses the Next.js App Router. Every route is implemented with `app/**/page.tsx`, while reusable UI is organized as `components/**/page.tsx`.

```text
app/
├── page.tsx
├── about/page.tsx
├── buying-house/page.tsx
├── factory-machinery/page.tsx
├── global-partners/page.tsx
└── contact/page.tsx

components/
├── Navbar/page.tsx
├── Footer/page.tsx
├── TopNavbar/page.tsx
├── Hero/page.tsx
├── ...
├── cards/*/page.tsx
└── ui/*/page.tsx
```

There is no React Router or separate Vite/React application; routing is handled by the Next.js App Router.

