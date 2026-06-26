# SUPRA ElectroWeld India — Corporate Website

Premium corporate manufacturing website for **SUPRA ElectroWeld India**, maker of mild steel
welding electrodes. _Spark of Strength._

## Tech Stack

- React 18 + Vite
- Tailwind CSS (custom brand palette)
- Framer Motion (scroll reveals, counters, page transition)
- Swiper.js (Applications carousel)
- React Hook Form (validated contact / enquiry form)
- Lucide React (icons)

## Brand System

| Token         | Value     | Use                      |
| ------------- | --------- | ------------------------ |
| `cream`       | `#F8F2D8` | Primary background       |
| `light-cream` | `#FFF8E7` | Alternating sections     |
| `brand`       | `#4A61B8` | Primary brand blue       |
| `brand-dark`  | `#354A8A` | Dark blue / footer       |
| `yellow`      | `#F4B400` | Packaging accent         |
| `ink`         | `#3A3A3A` | Body text                |

- **Headings:** Bebas Neue (fallback Anton)
- **Body:** Poppins (fallback Manrope)

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Sections

Hero (live product mockup + certifications) · About · Why Choose SUPRA · Product Range ·
Common Electrode Types · Specifications · Applications · Manufacturing Quality ·
Certifications · Gallery · Contact · Wordmark · Footer.

## Assets

Brand images live in `public/assets/` (`logo.jpeg`, `product-box.png`, `brochure.jpeg`).
Replace these with higher-resolution renders as they become available — file names are
referenced directly in the components.

## Notes

- The contact form currently logs submissions to the console (`Contact.jsx`). Wire the
  `onSubmit` handler to your backend or an email service (e.g. Formspree, Resend).
- Phone / WhatsApp / email placeholders are in `Contact.jsx` and `Footer.jsx`.
