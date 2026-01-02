const nextConfig: import('next').NextConfig = {
  images: {
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
};

module.exports = nextConfig;