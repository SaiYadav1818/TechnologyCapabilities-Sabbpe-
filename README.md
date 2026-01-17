# SabbPe - Fintech Website

A modern, desktop-first fintech website for **SabbPe**, featuring a Stripe-style mega menu navigation system built with Next.js, TypeScript, and Framer Motion.

## Features

- 🎨 **Modern UI/UX**: Clean, minimalist design inspired by top fintech platforms
- 📱 **Sticky Navigation**: Professional navbar with logo, centered menu items, and CTA button
- 🎯 **Mega Menus**: Full-width, hover-based mega menus for Products and Technology
  - Products: Offline Payments, Online Payments, Banking Suite, Payroll & HR
  - Technology: Technology Capabilities and Advanced Technologies
- ✨ **Smooth Animations**: Framer Motion animations for menu transitions and interactions
- 🎭 **Lottie Animations**: Interactive QR scan animation in Products mega menu
- ♿ **Accessible**: Built with Radix UI for accessibility and keyboard navigation
- 🎨 **Dark Mode Ready**: Neutral dark theme with customizable color variables

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **Styling**: CSS Modules + Sass
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Animations**: Lottie React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sabbpe/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── Navbar/          # Navigation components
│   │   ├── Hero/            # Hero section
│   │   └── BackgroundShapes/# Background decorative elements
│   └── assests/             # Static assets (Lottie animations)
├── public/                  # Public static files
└── package.json
```

## Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository directly on the [Vercel platform](https://vercel.com/new).

## Development

- Edit `src/app/page.tsx` to modify the homepage
- Navbar components are in `src/components/Navbar/`
- Global styles and theme variables in `src/app/globals.css`

## License

Private project - All rights reserved.
