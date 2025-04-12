/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export for Netlify
  output: 'export',
  // Images are handled through Netlify's image optimization
  images: {
    unoptimized: true,
  },
  // Enable trailing slashes for better compatibility
  trailingSlash: true,
  // Ignore TypeScript errors during build (for Netlify)
  typescript: {
    ignoreBuildErrors: true
  },
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig; 