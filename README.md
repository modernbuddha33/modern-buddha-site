# The Modern Buddha

A modern, pixel art-inspired website for spiritual coaching and mindfulness. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Design Features

- **Pixel Art Aesthetic**: Retro 80s-90s video game style with pixelated fonts and borders
- **Dark Mode**: Full light/dark mode toggle with proper color transitions
- **Responsive Design**: Mobile-first approach with smooth animations
- **Zen Minimalism**: Clean, calm design with honey accent color (#F0C674)
- **Typography**: Google Silkscreen for headings, Inter for body text

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Add your logo**:
   - Save your logo image as `logo-original.png` in the project root
   - Run the logo generation script:
   ```bash
   pnpm generate-logos
   ```
   This will create all necessary logo variants (different sizes, white version for dark mode, favicons, etc.)

3. **Start development server**:
   ```bash
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Mobile Responsiveness

The site is fully responsive with:
- Mobile-first design approach
- Collapsible mobile navigation menu
- Responsive typography and spacing
- Touch-friendly buttons and interactions
- Optimized logo sizing for different screen sizes

## 🎯 Logo Requirements

Your logo should be:
- **Format**: PNG with transparent background
- **Size**: At least 128x128 pixels (larger is better)
- **Style**: Pixel art that matches the site's aesthetic
- **Colors**: Dark version for light mode, will be automatically inverted for dark mode

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO and theme provider
│   ├── page.tsx           # Homepage
│   ├── coaching/          # Coaching page
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── resources/         # Resources page
│   ├── testimonials/      # Testimonials page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── LogoPixel.tsx      # Logo component with responsive sizing
│   ├── Navbar.tsx         # Navigation with mobile menu
│   ├── Footer.tsx         # Footer with links
│   ├── ThemeProvider.tsx  # Dark mode provider
│   └── ThemeToggle.tsx    # Theme toggle button
└── globals.css           # Global styles and Tailwind imports
```

## 🛠️ Built With

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **next-themes** - Dark mode support
- **next-seo** - SEO optimization
- **Sharp** - Image processing for logo variants

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project for The Modern Buddha brand.
