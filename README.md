# WalletWhisperer Website

A modern, professional website showcasing the WalletWhisperer AI-powered blockchain trading bot.

## Features

- **Hero Landing Page** - Engaging introduction with key metrics
- **About Section** - Detailed project explanation with workflow diagram
- **Demo Section** - Video showcase and command reference
- **Performance Dashboard** - Interactive charts and real trading results
- **Architecture Section** - Technical breakdown of system components
- **Updates/Blog** - Project logs and performance reports
- **Contact Form** - Get in touch functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Charts**: Chart.js + react-chartjs-2
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Customization

### Update Trading Data

Edit `src/data/trading-results.json` to update performance metrics and trade history.

### Update Blog Posts

Edit `src/data/blog-posts.json` to add or modify project updates.

### Update Contact Info

Edit `src/components/sections/ContactSection.tsx` to change email, phone, and social links.

### Add Demo Video

Replace the placeholder in `src/components/sections/DemoSection.tsx` with your video embed URL.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Project Structure

```
website/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── sections/     # Page sections
│   │   ├── charts/       # Chart components
│   │   └── tables/       # Table components
│   ├── data/             # JSON data files
│   └── lib/              # Utility functions
├── public/               # Static assets
└── package.json
```

## Performance

- Optimized for Core Web Vitals
- Lazy loading for images and components
- Minimal bundle size
- Fast page loads

## License

Personal project - All rights reserved
