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
    }, {
      hostname: '192.168.0.106'
    }, {
      hostname: '*.cdn-telegram.org'
    }]
  },
  reactStrictMode: false
}

module.exports = nextConfig