/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: '*.nekomi.club'
    }, {
      hostname: '192.168.0.106'
    }]
  },
  reactStrictMode: false,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
}

module.exports = nextConfig