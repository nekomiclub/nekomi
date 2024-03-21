/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: '*.animee.club'
    }, {
      hostname: '*.googleusercontent.com'
    }, {
      hostname: 'anitube.in.ua'
    }, {
      hostname: '*.myanimelist.net'
    }]
  },
  reactStrictMode: false
}

module.exports = nextConfig