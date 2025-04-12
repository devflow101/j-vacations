/** @type {import('tailwindcss').Config} */
module.exports = {
  // Optimized content configuration for Next.js
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Add custom colors to match your design
      colors: {
        // Example blue from your site
        'primary': '#2196F3',
        'primary-dark': '#1a365d',
      }
    },
  },
  // Add plugins that are already in your package.json
  plugins: [],
  // Enable JIT mode for faster builds and smaller CSS
  mode: 'jit',
  // Optimize Tailwind for production
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  // Disable unused variants for better performance
  variants: {
    extend: {},
  },
} 