<div align="center">

<br/>

```
  ☕  C A F É   U N I V E R S E
```

### *Discover the best cafés in Bandung — beautifully curated, elegantly presented.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-UI_Complete-4A7C59?style=flat-square)]()
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange?style=flat-square)]()

<br/>

> ☕ Café Universe is a modern café discovery and recommendation web app focused on Bandung, Indonesia.
> Built with Next.js, TypeScript, and Tailwind CSS — featuring a curated café list, smart filtering,
> and an elegant UI. Open for contributions and actively seeking Google Places API integration.

<br/>

[🚀 Live Demo](#) · [📖 Dokumentasi](#-tentang-proyek--about) · [🐛 Report Bug](mailto:fajarlaksana13@gmail.com) · [✨ Request Feature](mailto:fajarlaksana13@gmail.com)

<br/>

---

</div>

## 📸 Screenshot

><img width="1912" height="890" alt="Screenshot 2026-03-16 045412" src="https://github.com/user-attachments/assets/988ffceb-b692-4336-a289-7eb77339beb1" />

<br/>

## 📋 Daftar Isi / Table of Contents

- [Tentang Proyek / About](#-tentang-proyek--about)
- [Status Proyek / Project Status](#-status-proyek--project-status)
- [Tech Stack](#-tech-stack)
- [Fitur / Features](#-fitur--features)
- [Memulai / Getting Started](#-memulai--getting-started)
- [Struktur Proyek / Project Structure](#-struktur-proyek--project-structure)
- [Roadmap](#-roadmap)
- [Catatan Developer / Developer Notes](#-catatan-developer--developer-notes)
- [Kontribusi / Contributing](#-kontribusi--contributing)
- [Harapan Kedepannya / Future Expectations](#-harapan-kedepannya--future-expectations)
- [Kontak / Contact](#-kontak--contact)
- [Lisensi / License](#-lisensi--license)

<br/>

---

## 🌟 Tentang Proyek / About

**🇮🇩 Bahasa Indonesia**

**Café Universe** adalah platform rekomendasi café berbasis web yang dirancang khusus untuk kota **Bandung, Indonesia**. Proyek ini lahir dari keinginan untuk membantu siapa pun — mulai dari warga lokal hingga wisatawan — menemukan café terbaik yang sesuai dengan kebutuhan mereka, berdasarkan suasana, lokasi, dan preferensi pribadi.

**🇬🇧 English**

**Café Universe** is a web-based café recommendation platform designed specifically for **Bandung, Indonesia**. This project was born from the desire to help anyone — from locals to tourists — discover the best cafés that match their needs, based on ambiance, location, and personal preference.

<br/>

---

## 📋 Status Proyek / Project Status

**🇮🇩** Proyek ini telah mencapai tahap penyelesaian tampilan **(UI/UX)**. Secara visual dan struktur halaman, website sudah siap digunakan dan dikembangkan lebih lanjut. Fokus pengembangan berikutnya bukan lagi pada desain, tetapi pada **penguatan sistem data dan integrasi API**.

**🇬🇧** This project has reached the stage where the **UI/UX design is fully completed**. The visual layout and page structure are finalized. Future development should focus less on design and more on **data systems and API integration**.

<br/>

| Komponen / Component | Status |
|---|---|
| Homepage | ✅ Selesai / Done |
| Sistem Rekomendasi Café | ✅ Selesai / Done |
| Komponen UI | ✅ Selesai / Done |
| Layout & Struktur Halaman | ✅ Selesai / Done |
| Internationalization (i18n) | ✅ Selesai / Done |
| Dark / Light Mode | ✅ Selesai / Done |
| Peta Interaktif (Leaflet.js) | ✅ Selesai / Done |
| SEO (robots.ts & sitemap.ts) | ✅ Selesai / Done |
| Google Places API Integration | ⏳ Belum / Pending |
| Database CRUD Sistem | ⏳ Belum / Pending |
| Foto & Rating Real-time | ⏳ Belum / Pending |

<br/>

---

## 🛠 Tech Stack

| Layer | Teknologi / Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router + SSG) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Map** | [Leaflet.js](https://leafletjs.com/) via `MapComponent` |
| **i18n** | Custom `TranslationContext` (EN / ID) |
| **Theme** | Custom `ThemeContext` (Dark / Light) |
| **Data (saat ini / current)** | Static dataset — `src/data/cafes.ts` (20 cafés) |
| **Data (planned)** | [Google Places API](https://developers.google.com/maps/documentation/places/web-service) |
| **Deployment (recommended)** | [Vercel](https://vercel.com/) / [Netlify](https://netlify.com/) |

<br/>

---

## ✨ Fitur / Features

- 🔍 **Smart Filtering** — Filter café berdasarkan mood, lokasi, dan fasilitas / Filter cafés by mood, location, and amenities
- 🗺️ **Peta Interaktif / Interactive Map** — Visualisasi lokasi café menggunakan Leaflet.js
- 🌙 **Dark / Light Mode** — Tema gelap dan terang yang bisa disesuaikan / Switchable dark and light theme
- 🌐 **Bilingual (EN / ID)** — Dukungan dua bahasa penuh / Full English and Indonesian language support
- 📱 **Responsive Design** — Tampilan optimal di semua ukuran layar / Optimized for all screen sizes
- ⚡ **SSG (Static Site Generation)** — Halaman detail café di-generate secara statis untuk performa terbaik
- 🔎 **SEO Ready** — `robots.ts` dan `sitemap.ts` sudah tersedia / `robots.ts` and `sitemap.ts` included
- 📸 **Galeri Foto / Photo Gallery** *(pending — menunggu Google Places API)*
- ⭐ **Rating & Review** *(pending — menunggu Google Places API)*

<br/>

---

## 🚀 Memulai / Getting Started

### Prasyarat / Prerequisites

Pastikan sudah menginstal / Make sure you have installed:

- [Node.js](https://nodejs.org/) `>= 18.x`
- [npm](https://www.npmjs.com/) atau/or [yarn](https://yarnpkg.com/) atau/or [pnpm](https://pnpm.io/)

### Instalasi / Installation

```bash
# 1. Clone repository ini / Clone this repository
git clone https://github.com/username/cafe-universe.git

# 2. Masuk ke direktori proyek / Navigate to project directory
cd cafe-universe

# 3. Install dependencies
npm install
# atau / or
yarn install

# 4. Jalankan development server / Start development server
npm run dev
# atau / or
yarn dev
```

Buka / Open [http://localhost:3000](http://localhost:3000) di browser.

### Environment Variables

Buat file `.env.local` di root proyek / Create `.env.local` at project root:

```env
# Google Places API (opsional — belum diimplementasi / optional — not yet implemented)
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> ⚠️ **Catatan / Note:** Google Places API belum diintegrasikan. Tanpa API key, aplikasi tetap berjalan menggunakan data statis dari `src/data/cafes.ts`. /
> Google Places API is not yet integrated. Without an API key, the app still runs using static data from `src/data/cafes.ts`.

### Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

<br/>

---

## 📁 Struktur Proyek / Project Structure

```
cafe-universe/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies & scripts
│   ├── tsconfig.json             # TypeScript config
│   ├── tailwind.config.js        # TailwindCSS config
│   ├── postcss.config.js         # PostCSS config
│   ├── next.config.js            # Next.js config
│   ├── .eslintrc.json            # ESLint rules
│   └── .gitignore                # Git ignore rules
│
├── 📄 Documentation
│   ├── README.md                 # Project documentation
│   └── skills.md                 # Technical skills doc
│
├── 📂 src/
│   │
│   ├── 📂 app/                   # Next.js App Router
│   │   ├── cafes/
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Café detail page (SSG)
│   │   ├── explore/
│   │   │   └── page.tsx          # Explore all cafés
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Homepage
│   │   ├── loading.tsx           # Loading component
│   │   ├── not-found.tsx         # 404 page
│   │   ├── robots.ts             # robots.txt generator
│   │   └── sitemap.ts            # sitemap.xml generator
│   │
│   ├── 📂 components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx        # Navigation bar
│   │   │   ├── Hero.tsx          # Homepage hero
│   │   │   ├── MoodSection.tsx   # Mood filter section
│   │   │   ├── MapSection.tsx    # Map section
│   │   │   ├── TrendingSection.tsx # Trending cafés
│   │   │   └── Footer.tsx        # Footer
│   │   ├── ui/
│   │   │   ├── button.tsx        # Button component
│   │   │   ├── card.tsx          # Card component
│   │   │   └── input.tsx         # Input component
│   │   ├── CafeCard.tsx          # Café card component
│   │   ├── CafePageClient.tsx    # Café page client component
│   │   ├── MapComponent.tsx      # Leaflet map component
│   │   └── MapWrapper.tsx        # Dynamic import wrapper
│   │
│   ├── 📂 contexts/
│   │   ├── ThemeContext.tsx      # Dark/Light mode context
│   │   └── TranslationContext.tsx # i18n context
│   │
│   ├── 📂 data/
│   │   └── cafes.ts              # ⚠️ Café data (20 cafés) — static, temporary
│   │
│   ├── 📂 lib/
│   │   └── utils.ts              # cn() utility function
│   │
│   ├── 📂 locales/
│   │   ├── en.json               # English translations
│   │   └── id.json               # Indonesian translations
│   │
│   ├── 📂 styles/
│   │   └── globals.css           # Global styles + CSS variables
│   │
│   └── 📂 types/
│       └── cafe.ts               # TypeScript interfaces
│
├── 📂 public/
│   └── images/                   # Static images
│
└── 📂 .next/                     # Build output (auto-generated)
```

<br/>

---

## 🗺️ Roadmap

```
Phase 1 — UI/UX Design          ████████████████████  ✅ Selesai / Done
Phase 2 — Data & API            ░░░░░░░░░░░░░░░░░░░░  ⏳ Next Priority
Phase 3 — Backend & Auth        ░░░░░░░░░░░░░░░░░░░░  🔜 Planned
Phase 4 — Monetization          ░░░░░░░░░░░░░░░░░░░░  🔜 Planned
```

### ✅ Phase 1 — UI/UX Design *(Selesai / Completed)*
- [x] Homepage dengan hero section
- [x] Sistem rekomendasi café
- [x] Komponen UI (Card, Button, Input)
- [x] Peta interaktif dengan Leaflet.js
- [x] Dark / Light mode
- [x] Bilingual support (EN / ID)
- [x] SEO: robots.ts & sitemap.ts
- [x] SSG untuk halaman detail café

### ⏳ Phase 2 — Data & API *(Prioritas Berikutnya / Next Priority)*
- [ ] Integrasi Google Places API
- [ ] Foto café otomatis dari Google
- [ ] Rating & review real-time
- [ ] Jam buka & informasi lengkap
- [ ] Koordinat & peta yang lebih presisi

### 🔜 Phase 3 — Backend & Authentication
- [ ] User authentication (login / register)
- [ ] Bookmark / simpan café favorit
- [ ] Sistem ulasan pengguna
- [ ] Admin dashboard

### 🔜 Phase 4 — Monetization
- [ ] Fitur premium untuk pemilik café
- [ ] Iklan lokal berbasis lokasi
- [ ] Kemitraan dengan café Bandung

<br/>

---

## 📌 Catatan Developer / Developer Notes

### ⚠️ Status Data Saat Ini / Current Data Status

**🇮🇩** Saat ini data café masih diambil dari file statis sementara `src/data/cafes.ts` yang berisi **20 data café**. Keterbatasannya:

**🇬🇧** Café data is currently retrieved from the static file `src/data/cafes.ts` containing **20 café entries**. Limitations:

| Keterbatasan / Limitation | |
|---|---|
| ❌ Data belum sepenuhnya akurat | Café data is not fully accurate |
| ❌ Foto café belum tersedia | No café images available |
| ❌ Tidak ada rating real-time | No real-time ratings |
| ❌ Jam buka & review belum lengkap | Opening hours & reviews incomplete |
| ❌ Koordinat detail belum presisi | Precise coordinates missing |

### 💡 Solusi yang Direkomendasikan / Recommended Solution

**🇮🇩** Integrasi **Google Places API** adalah solusi terbaik. Namun karena **keterbatasan biaya dan funding**, implementasi ini belum dapat dilakukan. Alternatifnya adalah membangun sistem **CRUD database café** untuk input data manual.

**🇬🇧** Integrating the **Google Places API** is the ideal solution. However, due to **financial constraints and lack of funding**, this has not yet been implemented. An alternative is building a **CRUD café database system** for manual data entry.

| Aspek / Aspect | CRUD Manual | Google Places API |
|---|---|---|
| Akurasi Data / Accuracy | ⚠️ Tergantung input | ✅ Real-time & akurat |
| Foto Café / Photos | ❌ Manual upload | ✅ Otomatis tersedia |
| Skalabilitas / Scalability | ❌ Terbatas | ✅ Skala besar |
| Update Data | ❌ Manual | ✅ Otomatis |
| Biaya / Cost | ✅ Gratis | ⚠️ Berbayar / Paid |
| Kemudahan Implementasi | ✅ Lebih mudah | ⚠️ Perlu setup API |

> 💡 **Integrasi Google Places API tetap menjadi arah pengembangan yang paling direkomendasikan ke depan.**
> Google Places API integration remains the most recommended direction for future development.

<br/>

---

## 🤝 Kontribusi / Contributing

**🇮🇩** Kontribusi sangat disambut! Proyek ini terbuka untuk siapa saja yang ingin membantu mengembangkan Café Universe.

**🇬🇧** Contributions are very welcome! This project is open to anyone who wants to help develop Café Universe.

```bash
# 1. Fork repository ini / Fork this repository

# 2. Buat branch baru / Create a new branch
git checkout -b feature/nama-fitur

# 3. Commit perubahan / Commit your changes
git commit -m "feat: tambah fitur X"

# 4. Push ke branch / Push to branch
git push origin feature/nama-fitur

# 5. Buka Pull Request / Open a Pull Request
```

### Prioritas Kontribusi / Contribution Priorities

| Prioritas | Task |
|---|---|
| 🔴 **High** | Integrasi Google Places API |
| 🔴 **High** | CRUD sistem database café (alternatif tanpa API) |
| 🟡 **Medium** | Unit testing setup |
| 🟡 **Medium** | Optimasi performa & image |
| 🟢 **Low** | Tambahan dokumentasi |
| 🟢 **Low** | Penambahan data café baru ke `src/data/cafes.ts` |

<br/>

---

## 🙏 Harapan Kedepannya / Future Expectations

**🇮🇩** Kami sangat berharap proyek ini dapat dilanjutkan oleh developer lain, mendapatkan kontribusi open-source, atau mendapatkan dukungan untuk pengembangan lebih lanjut.

**🇬🇧** We sincerely hope this project can be continued by other developers, receive open-source contributions, or gain support for further development.

- 🚀 Dilanjutkan oleh developer lain / Be continued by other developers
- 🚀 Mendapatkan kontribusi open-source / Receive open-source contributions
- 🚀 Mendapatkan funding / sponsorship / Gain funding or sponsorship
- 🚀 Integrasi Google Places API / Integrate Google Places API

<br/>

---

## 📬 Kontak / Contact

**🇮🇩** Jika kamu tertarik untuk melanjutkan, berkontribusi, atau mendukung proyek ini, silakan hubungi:

**🇬🇧** If you are interested in continuing, contributing, or supporting this project, feel free to contact:

<div align="center">

**Fajar Laksana**

📧 [fajarlaksana13@gmail.com](mailto:fajarlaksana13@gmail.com)

</div>

<br/>

---

<div align="center">

Dibuat dengan ☕ di **Bandung, Indonesia**

*Café Universe — Discover. Explore. Enjoy.*

<br/>

*Terima kasih kepada siapa pun yang ingin melanjutkan proyek ini.*
*Thank you to anyone willing to continue this project.*

</div>
