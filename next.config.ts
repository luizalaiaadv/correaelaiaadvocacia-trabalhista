import type { NextConfig } from 'next';

const config: NextConfig = {
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
    formats: ['image/webp'],
    qualities: [75],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ['motion', 'lucide-react'],
  },
};

export default config;
