import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  // basePath: '/reviewswebsite', // Should match your repository name
  // assetPrefix: '/portfolio/', // Should match your repository name
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
