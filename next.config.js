/** @type {import('next').NextConfig} */

const nextConfig = {
 reactStrictMode: true,
}

module.exports = {
  locale: {
    locales: ['en-US', 'es'],
    locale:'en-US',
    defaultLocale: 'en-US',
  },
  withImages: require('next-images'),
}
module.exports = nextConfig

