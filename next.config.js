/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: '*.nekomi.club'
    }, {
      hostname: '*.animee.club'
    }, {
      hostname: '192.168.0.106'
    }]
  },
  reactStrictMode: false
}

module.exports = nextConfig