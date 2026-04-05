import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@repo/ui'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
