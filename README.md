# Café Universe – Bandung Café Discovery

A modern, AI-powered café discovery platform built with Next.js 14, React, TypeScript, and TailwindCSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss)

## 🌟 Features

- **AI-Powered Search**: Intelligent café search with keyword matching
- **Mood-Based Discovery**: Find cafés based on your current mood (Focus, Chill, Instagram, Outdoor, Coffee)
- **Interactive Map**: Explore cafés on a Leaflet-powered map
- **Trending Cafés**: Discover the most popular cafés in Bandung
- **Advanced Filtering**: Filter by area, mood, and sort by rating/name
- **Responsive Design**: Perfect experience on desktop, tablet, and mobile
- **SEO Optimized**: Full metadata, OpenGraph, Twitter Cards, and Schema.org structured data

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
cafe-universe/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── cafes/[id]/         # Café detail pages
│   │   ├── explore/            # Explore page
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # Sitemap generator
│   │   └── robots.ts           # Robots.txt generator
│   ├── components/
│   │   ├── ui/                 # UI primitives (Button, Card, Input)
│   │   ├── sections/           # Page sections (Navbar, Hero, Footer)
│   │   └── CafeCard.tsx        # Café card component
│   ├── data/
│   │   └── cafes.ts            # Café data
│   ├── hooks/
│   │   ├── useSearch.ts        # Search functionality
│   │   ├── useMoodFilter.ts    # Mood-based filtering
│   │   ├── usePopularity.ts    # Trending calculations
│   │   └── useMap.ts           # Map integration
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── styles/
│   │   └── globals.css         # Global styles
│   └── types/
│       └── cafe.ts             # TypeScript types
├── public/
│   └── images/                 # Static images
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Design System

### Color Palette

| Color | Value | Usage |
|-------|-------|-------|
| Primary | `#8B6F47` | Coffee brown - main brand color |
| Secondary | `#D4B89A` | Warm beige - accents |
| Background | `#F6F8FB` | Light gray - page background |
| Card | `#FFFFFF` | White - card backgrounds |

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large (4xl-7xl)
- **Body**: Regular, medium (sm-base)

### Components

Built with [shadcn/ui](https://ui.shadcn.com) primitives:
- Button (variants: default, outline, ghost, secondary)
- Card (with Header, Title, Description, Content, Footer)
- Input (with focus states)

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📱 Pages

### Homepage (`/`)
- Hero section with AI search
- Mood-based discovery
- Interactive map
- Trending cafés

### Explore (`/explore`)
- Full café listing
- Advanced filters (area, mood)
- Search functionality
- Sort options (rating, name, area)

### Café Detail (`/cafes/[id]`)
- Full café information
- Image gallery
- Amenities list
- Location details
- External links (directions, search)

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Maps**: Leaflet
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration: Apple, Stripe, Notion, Airbnb
- Data: Bandung café listings
- Icons: Lucide Icons
- UI Components: shadcn/ui

---

Built with ❤️ for coffee lovers in Bandung
