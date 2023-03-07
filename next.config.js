/** @type {import('next').NextConfig} */

const nextConfig = {
 reactStrictMode: true,
}

module.exports = {
  i18n: {
    locales: ['en-Us', 'es'],
    defaultLocale: 'es',
  },
  withImages: require('next-images'),
}
module.exports = nextConfig

