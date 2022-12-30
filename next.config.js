/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'productionß'
})

const nextConfig = withPWA({
  // next config
})
module.exports = nextConfig
