/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export for Netlify
  output: 'export',
  // Images configuration for Netlify
  images: {
    unoptimized: true,
    domains: ['netlify.app'], // Allow Netlify domains for image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.netlify.app',
      },
    ],
  },
  // Trailing slashes for better compatibility
  trailingSlash: true,
  // Ignore TypeScript errors during build (for Netlify)
  typescript: {
    // Only ignore in production
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  // Ignore ESLint errors during build
  eslint: {
    // Only ignore in production
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  // Set the right asset prefix for Netlify
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Optimize builds for Netlify
  swcMinify: true,
  // Configure Netlify redirects
  async redirects() {
    return [];
  }
};

module.exports = nextConfig; 