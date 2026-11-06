import bundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import path from 'path';



const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{
      hostname: '*.nekomi.club'
    }, {
      hostname: '127.0.0.1'
    }]
  },
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
  devIndicators: false,
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb'
    }
  },
  // Docker build
  output: 'standalone',
  outputFileTracingRoot: path.join(import.meta.dirname, '../../'),
};

export default withBundleAnalyzer(nextConfig);