# Maison Élégance — Luxury Fashion Brand Website

A world-class, award-winning luxury fashion brand website built with React, Vite, Tailwind CSS, and Framer Motion.

## Overview

Maison Élégance is a premium female luxury fashion and accessories brand website featuring:
- **Clothing** — Evening gowns, coats, blazers, dresses
- **Fragrances** — Signature scents and limited editions
- **Handbags** — Totes, clutches, crossbody bags
- **Jewelry** — Necklaces, earrings, rings, bangles

Orders are placed exclusively through WhatsApp — no traditional e-commerce checkout.

## Design Philosophy

The website embodies:
- **Luxurious** — Gold accents, dark elegance, premium typography
- **Editorial** — Fashion-magazine inspired layouts
- **Cinematic** — Full-screen heroes, smooth transitions
- **Immersive** — Parallax effects, floating elements, 3D motion
- **Premium** — Every detail refined and intentional

Inspired by: Zara, House of CB, Jacquemus, Awwwards-level design

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Advanced animations |
| React Router DOM | Client-side routing |
| Lucide React | Premium icons |

## Project Structure

```
luxury-fashion-brand/
├── index.html              # Entry HTML with Google Fonts
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── postcss.config.js       # PostCSS with Tailwind
├── tailwind.config.js      # Custom design system
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Root component with routing
│   ├── index.css           # Global styles & custom utilities
│   ├── components/         # Reusable components
│   │   ├── AnimatedLoader.jsx      # Cinematic loading screen
│   │   ├── AnimatedButton.jsx      # Magnetic button with hover effects
│   │   ├── FloatingWhatsApp.jsx    # Floating WhatsApp CTA
│   │   ├── Footer.jsx              # Premium footer
│   │   ├── HeroSection.jsx         # Fullscreen cinematic hero with slider
│   │   ├── Navbar.jsx              # Animated navbar with mobile menu
│   │   ├── ProductCard.jsx         # Animated product card
│   │   ├── ScrollProgress.jsx      # Top scroll indicator
│   │   ├── SectionReveal.jsx       # Scroll-triggered reveal wrapper
│   │   ├── TextReveal.jsx          # Word-by-word text animation
│   │   ├── FeaturedCollections.jsx # Asymmetrical collection grid
│   │   ├── NewArrivals.jsx         # New products section
│   │   ├── BestSellers.jsx         # Bestseller products section
│   │   ├── Testimonials.jsx        # Animated testimonial carousel
│   │   ├── InstagramGallery.jsx    # Social media grid
│   │   └── Newsletter.jsx          # Email subscription section
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx            # Landing page
│   │   ├── ShopPage.jsx            # Product catalog with filters
│   │   ├── ProductDetailsPage.jsx  # Immersive product view
│   │   ├── AboutPage.jsx           # Brand story & team
│   │   └── ContactPage.jsx         # Contact form & boutiques
│   ├── data/               # Static data
│   │   ├── products.js             # Product catalog
│   │   ├── aboutData.js            # About page content
│   │   └── contactData.js          # Contact information
│   └── hooks/              # Custom React hooks
│       ├── useInView.js            # Intersection Observer hook
│       ├── useMousePosition.js     # Mouse tracking hook
│       └── useScrollProgress.js    # Scroll percentage hook
```

## Pages

### 1. Home Page
- Fullscreen cinematic hero with auto-sliding carousel
- Featured collections with hover overlays
- New arrivals grid
- Best sellers grid
- Testimonial carousel with quote animations
- Instagram-style gallery
- Newsletter subscription

### 2. Shop Page
- Category filtering (All, Clothing, Fragrances, Handbags, Jewelry)
- Real-time search functionality
- Sort options (Featured, Newest, Price)
- Animated product grid with staggered reveals
- Product tags (New Arrival, Bestseller, Limited Edition)

### 3. Product Details Page
- Large immersive image gallery with thumbnails
- Color and size selectors
- "Order on WhatsApp" button with pre-filled message
- Wishlist and share functionality
- Related products section

### 4. About Page
- Cinematic hero with brand imagery
- Brand story with editorial typography
- Core values with icon cards
- Team member profiles
- Animated timeline of milestones

### 5. Contact Page
- Contact information with icons
- WhatsApp CTA card
- Elegant contact form
- Boutique locations with images

## Design System

### Colors
- `luxury-black` (#0a0a0a) — Primary background
- `luxury-dark` (#111111) — Secondary background
- `luxury-charcoal` (#1a1a1a) — Card backgrounds
- `luxury-white` (#faf9f7) — Primary text
- `luxury-cream` (#f5f0e8) — Light section backgrounds
- `luxury-gold` (#c9a96e) — Primary accent
- `luxury-gold-light` (#e0c995) — Hover accent
- `luxury-brown` (#3d2b1f) — Deep accent

### Typography
- **Playfair Display** — Display headings (elegant serif)
- **Cormorant Garamond** — Subtitles and quotes (refined serif)
- **Inter** — Body text and UI (clean sans-serif)

### Spacing
- Editorial whitespace throughout
- Large section padding (py-24 to py-40)
- Generous gaps between elements
- Max-width 1440px container

## Animation Features

- **Cinematic hero transitions** — Slide-based with directional awareness
- **Staggered text reveals** — Word-by-word entrance animations
- **Smooth image parallax** — Scale and translate on hover
- **Floating motion effects** — Continuous subtle animations
- **Magnetic buttons** — Scale and lift on interaction
- **Animated gradients** — Gold shimmer effects
- **Hover distortions** — Overlay reveals and opacity shifts
- **Reveal-on-scroll** — Intersection Observer triggered animations
- **Layered motion effects** — Multiple simultaneous transforms
- **Luxury scrolling** — Smooth scroll progress indicator
- **Animated section transitions** — Fade and slide entrances
- **Smooth opacity transitions** — Elegant state changes
- **Elegant page transitions** — Route-based animations
- **Image scale interactions** — Zoom on hover with overflow hidden
- **Soft floating glow effects** — Subtle ambient animations
- **Interactive mouse movement** — Cursor tracking capabilities
- **3D motion effects** — Perspective and preserve-3d transforms

## WhatsApp Integration

Every product features an "Order on WhatsApp" button that:
1. Opens WhatsApp with the business number
2. Pre-fills a message including the product name, selected color, and size
3. Example: *"Hi Maison Élégance, I'm interested in ordering the Noir Silk Evening Gown (Noir, Size: M). Could you please assist me with this order?"*

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd luxury-fashion-brand

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
The dev server runs on `http://localhost:5173` by default.

## Key Features

- **Fully Responsive** — Mobile-first design with breakpoints for tablet and desktop
- **Performance Optimized** — Lazy loading, efficient animations, minimal re-renders
- **SEO Friendly** — Semantic HTML, meta tags, proper heading hierarchy
- **Accessible** — ARIA labels, keyboard navigation, focus states
- **Clean Architecture** — Reusable components, custom hooks, separated data
- **Premium UX** — Every interaction feels intentional and luxurious

## Customization

### Adding Products
Edit `src/data/products.js` and add new product objects following the existing schema:
```javascript
{
  id: 17,
  name: "Product Name",
  category: "clothes|perfumes|bags|jewelry",
  price: 999,
  description: "Product description...",
  sizes: ["S", "M", "L"],
  colors: ["Color1", "Color2"],
  images: ["url1", "url2"],
  isNew: true,
  isBestseller: false,
  tag: "New Arrival",
}
```

### Changing Brand Colors
Edit `tailwind.config.js` in the `colors` section under `theme.extend`.

### Updating WhatsApp Number
Edit `src/data/contactData.js` and `src/pages/ProductDetailsPage.jsx`.

## License

This project is created for demonstration purposes.

---

**Maison Élégance** — *Where timeless elegance meets modern luxury.*
