/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: '*.animee.club'
    }]
  },
  reactStrictMode: false
}

module.exports = nextConfig