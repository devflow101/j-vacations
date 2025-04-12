/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export for Netlify
  output: 'export',
  // Images are handled through Netlify's image optimization
  images: {
    unoptimized: true,
  },
  // Enable trailing slashes for better compatibility
  trailingSlash: true
};

module.exports = nextConfig; 