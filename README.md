# Asad Imran Shah | Portfolio Website

A professional portfolio website built with Next.js 14, showcasing AI-powered web development and SEO-optimized content writing services.

## Features

- 🎨 **Dark Theme Design** - Modern aesthetic with neon green accents
- ⚡ **High Performance** - Static export optimized for Netlify
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎭 **Smooth Animations** - Scroll reveals, morphing effects, and more
- 💬 **WhatsApp Integration** - Quick contact via floating button
- 📊 **Animated Stats** - Number counters triggered on scroll
- 🎠 **Testimonials Carousel** - Interactive client reviews
- 📝 **Contact Form** - Built-in form handling

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4
- **Typography**: Inter & Space Grotesk fonts
- **Language**: TypeScript
- **Deployment**: Netlify (static export)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment to Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`
4. The `netlify.toml` is already configured

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles & animations
│   │   ├── layout.tsx     # Root layout with fonts & SEO
│   │   └── page.tsx       # Homepage
│   └── components/
│       ├── Header.tsx          # Sticky navigation
│       ├── Hero.tsx            # Hero with particles
│       ├── ServicesMatrix.tsx  # 3-column services
│       ├── ProjectShowcase.tsx # Filterable portfolio
│       ├── ProcessTimeline.tsx # 3-step workflow
│       ├── StatsCounter.tsx    # Animated stats
│       ├── Experience.tsx      # Work history
│       ├── TestimonialsCarousel.tsx
│       ├── AboutSection.tsx    # Bio & skills
│       ├── BlogPreview.tsx     # Latest articles
│       ├── FAQAccordion.tsx    # Q&A section
│       ├── CTABanner.tsx       # Contact form
│       └── Footer.tsx          # Footer & WhatsApp
├── netlify.toml
└── package.json
```

## Contact

**Asad Imran Shah**
- Email: asadimran328@gmail.com
- WhatsApp: +92 304 6769150
- LinkedIn: [iasad12](https://pk.linkedin.com/in/iasad12)
