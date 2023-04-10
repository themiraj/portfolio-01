/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        domains: 'localhost',
        port: '3000',
        pathname: '/',
      },
    ],
  },

}

module.exports = nextConfig
