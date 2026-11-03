const nextConfig: import('next').NextConfig = {
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
  }
};

module.exports = nextConfig;