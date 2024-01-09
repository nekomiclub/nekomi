/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'api.animee.club'
    }]
  }
}

module.exports = nextConfig