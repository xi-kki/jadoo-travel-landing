# ✈️ Jadoo — Travel Agency Landing Page

A pixel-faithful, fully functional rebuild of the [Figma Community "Travel Agency Landing Page"](https://www.figma.com/design/LFLTNKRRIGgFd3wyuWHkW1/Travel-Website-Landing-Page--Community-) design, converted from design tokens into a production-ready Next.js application.

![Stack](https://img.shields.io/badge/Next.js-14-000000) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6) ![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC) ![Deploy](https://img.shields.io/badge/Vercel-ready-000000)

## 🚀 Live Demo

**🔗 [jadoo-landing-nine.vercel.app](https://jadoo-landing-nine.vercel.app)** — deployed via Vercel

**Source:** [github.com/xi-kki/jadoo-travel-landing](https://github.com/xi-kki/jadoo-travel-landing)

## ✨ Features

- **Pixel-faithful** conversion of all 8 sections: Hero, Services, Destinations, Book a Trip, Testimonials, Logos, Subscribe, Footer
- **Design tokens extracted from Figma** — exact colors, typography, and spacing (Volkhov, Poppins, Open Sans; navy `#181E4B`, accent `#DF6951`, gold `#F1A501`)
- **13 real assets exported from Figma** — hero illustration, destination photos, logos, avatars
- **Fully functional interactions:**
  - Sticky navbar with scroll effect + mobile hamburger menu
  - Working testimonial carousel (arrows, dots, autoplay, keyboard accessible)
  - Subscribe form with email validation, error + success states
  - Scroll-reveal animations (framer-motion), floating cards, flying-plane decoration
- **Fully responsive** — mobile, tablet, desktop
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, focus states
- **Optimized** — self-hosted Google Fonts (`next/font`), 140 kB first-load JS

## 🛠️ Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 |
| Animations | framer-motion |
| Icons | lucide-react |
| Fonts | next/font (Volkhov, Poppins, Open Sans) |

## 📁 Project Structure

```
jadoo-landing/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Fonts + metadata
│   ├── page.tsx          # Section composition
│   └── globals.css       # Global styles
├── components/           # 9 section components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Destinations.tsx
│   ├── BookTrip.tsx
│   ├── Testimonials.tsx
│   ├── Logos.tsx
│   ├── Subscribe.tsx
│   └── Footer.tsx
├── public/assets/        # 13 exported Figma assets
└── tailwind.config.ts    # Design tokens → theme
```

## 🏃 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## 🎨 Figma → Code Pipeline

This project was built end-to-end from the Figma design via API:

1. **Extract** — file structure, frames, text, colors, typography via Figma REST API
2. **Tokenize** — colors/fonts/spacing → Tailwind theme (`tailwind.config.ts`)
3. **Export** — all image fills rendered at 2x → `public/assets/`
4. **Build** — 9 React components matching each design frame
5. **Verify** — TypeScript strict, production build, a11y check, secret scan

## 📄 License

Design: [Figma Community](https://www.figma.com/community) — for demonstration/learning. Code: MIT.
