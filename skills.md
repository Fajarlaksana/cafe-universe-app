# Café Universe – Technical Skills & Implementation

## Project Overview

**Café Universe** is a minimalist, production-ready café discovery platform for Bandung, Indonesia. Built with Next.js 14, React, TypeScript, and TailwindCSS, featuring a monochrome design system, multi-language support, and an interactive map.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.2.x | App Router, SSG, Image Optimization |
| **React** | 18.3.x | Hooks, Context API |
| **TypeScript** | 5.6.x | Type safety |
| **TailwindCSS** | 3.4.x | Utility-first CSS, monochrome tokens |
| **Leaflet** | 1.9.x | Interactive map |

---

## Architecture

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── cafes/[id]/         # Dynamic café pages (SSG)
│   ├── explore/            # Browse all cafés
│   ├── layout.tsx          # Root layout + providers
│   └── page.tsx            # Homepage
├── components/
│   ├── sections/           # Hero, Mood, Map, Trending, Footer
│   ├── ui/                 # Button, Card, Input
│   └── CafeCard.tsx
├── contexts/
│   ├── ThemeContext.tsx    # Dark/Light mode
│   └── TranslationContext.tsx # i18n
├── data/
│   └── cafes.ts            # Café data
├── hooks/
│   ├── useMap.ts           # Leaflet map logic
│   ├── useSearch.ts        # Search functionality
│   ├── useMoodFilter.ts    # Mood filtering
│   └── usePopularity.ts    # Trending calculation
├── locales/
│   ├── en.json             # English translations
│   └── id.json             # Indonesian translations
├── styles/
│   └── globals.css         # CSS variables, monochrome tokens
└── types/
    └── cafe.ts             # TypeScript interfaces
```

---

## Design System

### Monochrome Color Palette

```css
/* Light Mode */
--background: 0 0% 100%    /* White */
--foreground: 0 0% 8%      /* Near Black */
--primary: 0 0% 8%         /* Black */
--secondary: 0 0% 96%      /* Light Gray */
--muted: 0 0% 96%          /* Light Gray */
--border: 0 0% 90%         /* Subtle Border */

/* Dark Mode */
--background: 0 0% 6%      /* Near Black */
--foreground: 0 0% 96%     /* White */
--primary: 0 0% 96%        /* White */
--secondary: 0 0% 12%      /* Dark Gray */
```

### Design Principles

Inspired by **Apple**, **Dieter Rams**, **Notion**, **Linear**, **Vercel**:

1. **Ultra Minimal** – No unnecessary elements
2. **Strong Typography** – Inter font, clear hierarchy
3. **Generous Spacing** – Large padding, breathing room
4. **Subtle Borders** – 1px borders for structure
5. **Monochrome** – Black, white, gray only
6. **Functional** – Every element serves a purpose

---

## Internationalization (i18n)

### Implementation

```typescript
const { t, locale, setLocale } = useTranslation();

// Usage
<h1>{t('hero.title')}</h1>
```

### Languages

| Locale | Style |
|--------|-------|
| English | Clean, modern |
| Indonesian | Casual, natural (not formal) |

### Translation Philosophy

**Indonesian translations are written casually**, like how people actually speak:

- ✅ "Temuin Café Seru di Bandung" (natural)
- ❌ "Temukan Café Terbaik di Bandung" (too formal)

No AI mentions. No corporate speak.

---

## Map System

### Features

- **Leaflet.js** – Lightweight, no heavy dependencies
- **Lazy Loading** – Map loads only when needed
- **Custom Popups** – Café preview with image, rating, link
- **Smooth Interactions** – Fly-to animation on click
- **Scroll-to-Zoom** – Enabled on hover
- **Responsive** – Works on mobile, tablet, desktop

### Performance

```typescript
// Dynamic import
const L = await import('leaflet');

// Scroll zoom disabled by default
scrollWheelZoom: false

// Enabled on hover
onMouseEnter: enableScrollZoom()
```

---

## Performance Optimization

| Strategy | Implementation |
|----------|---------------|
| **Bundle Size** | 87.2 KB shared JS |
| **Images** | Next.js Image, lazy loading |
| **Code Splitting** | Route-based |
| **Dynamic Imports** | Leaflet loaded on demand |
| **CSS** | Tailwind purges unused styles |
| **Animations** | Minimal, 200ms max |

### Build Metrics

| Page | First Load JS |
|------|---------------|
| Homepage | 116 KB |
| Explore | 114 KB |
| Café Detail | 99.2 KB |

---

## Key Features

### 1. Minimalist Navigation
- Home, Explore, Map links
- No broken routes
- Mobile responsive menu

### 2. Mood Filtering
- 5 moods: Work, Hang Out, Photos, Outdoor, Coffee
- Instant results
- Clean toggle UI

### 3. Search
- Keyword matching
- Real-time results
- Clear button

### 4. Trending Cafés
- Top 5 by rating + features
- Ranked badges
- Grid layout

### 5. Dark/Light Mode
- Toggle in navbar
- localStorage persistence
- System preference detection

---

## SEO

```typescript
export const metadata: Metadata = {
  title: 'Café Universe – Bandung Café Discovery',
  description: 'Find great cafés in Bandung...',
  openGraph: { /* OG tags */ },
  twitter: { /* Twitter Cards */ },
}
```

- sitemap.xml (27 routes)
- robots.txt
- Structured data (Schema.org)
- Semantic HTML

---

## Code Quality

- TypeScript strict mode
- ESLint rules
- No unused variables
- Clean folder structure
- Reusable components

---

## Getting Started

```bash
# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Start
npm start
```

Open **http://localhost:3000**

---

## Summary of Improvements

### Fixed
- ✅ Navbar links (Home, Explore, Map)
- ✅ Map system (Leaflet, lazy loading, popups)
- ✅ Indonesian translations (casual, natural)
- ✅ Removed AI mentions
- ✅ Monochrome color system
- ✅ Ultra-minimal design

### Design Philosophy
- Less is more
- Function over form
- No decorative elements
- Black, white, gray only
- Strong typography
- Generous spacing

### Performance
- Lightweight bundle
- Lazy loading
- No heavy animations
- Fast rendering

---

This project demonstrates:
- Modern Next.js architecture
- Minimalist UI design
- Performance optimization
- Internationalization
- Map integration
- Clean code practices
