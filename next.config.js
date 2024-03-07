/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: '*.animee.club'
    }, {
      hostname: '*.googleusercontent.com'
    }]
  }
}

module.exports = nextConfig