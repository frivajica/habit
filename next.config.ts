import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    domain: process.env.NEXT_PUBLIC_DOMAIN,
  },
  /* config options here */
  images: {
    remotePatterns: [{protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
      port: '',
      // pathname: '/account123/**',
      search: '',
    }]
  }
};

export default nextConfig;
