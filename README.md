# J Vacations - Travel Agency Website

A modern, SEO-optimized travel agency website built with Next.js and TailwindCSS.

## 🌟 Features

- Responsive design that works on all devices
- SEO optimized with meta tags and structured data
- Modern UI with smooth animations
- Easy-to-update content structure
- Accessibility compliant
- Performance optimized

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **SEO:** Built-in meta tags and JSON-LD
- **Images:** Next.js Image Optimization

## 📁 Project Structure

```
j-vacations/
├── src/
│   ├── app/              # Next.js app router files
│   │   ├── layout.tsx    # Root layout with metadata
│   │   └── page.tsx      # Homepage component
│   ├── components/       # Reusable components
│   │   ├── DestinationCard.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── ImageWithFallback.tsx
│   │   └── JsonLd.tsx    # SEO structured data
│   └── types/           # TypeScript type definitions
├── public/
│   └── images/          # Static images
└── package.json         # Project dependencies
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone [repository-url]
cd j-vacations
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 📝 Making Changes

### Adding New Destinations

Add new destinations in `src/app/page.tsx`:

```typescript
const destinations = [
  {
    title: "New Destination",
    image: "/images/destinations/new-destination.jpg",
    description: "Description of the new destination",
    duration: "X Nights / Y Days",
    price: "Contact for Price"
  },
  // ... existing destinations
]
```

### Updating Services

Modify services in `src/app/page.tsx`:

```typescript
const services = [
  {
    title: "New Service",
    description: "Description of the new service",
    icon: "🎯"
  },
  // ... existing services
]
```

## 🎨 Customizing Colors

The website uses the following brand colors:
- Primary Blue: #2196F3 (Wave)
- Navy: #1a365d (Text)
- Gold: #FFD700 (Sun)

To modify colors, update the color classes in the components or add new colors in `tailwind.config.js`.

## 📱 Responsive Design

The website is responsive with the following breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO Configuration

SEO settings can be modified in:
- `src/app/layout.tsx` - Meta tags and general SEO
- `src/components/JsonLd.tsx` - Structured data

## 📈 Performance Optimization

- Images are optimized using Next.js Image component
- Fonts are preloaded
- Components use proper lazy loading
- CSS is purged in production

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

[Your License Here]

## 📞 Contact

For any queries, contact:
- Phone: +91 77078 12574
- Instagram: @j_vacations2023
