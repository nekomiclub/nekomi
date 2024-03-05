/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'api.animee.club'
    }, {
      hostname: '*.googleusercontent.com'
    }]
  }
}

module.exports = nextConfig