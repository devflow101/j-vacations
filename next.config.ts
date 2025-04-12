import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Images are handled through Netlify's image optimization
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
