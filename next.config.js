/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    // domains:['www.webriderz.com'],
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: 'webriderz.com',
      },
    ],
  },
}

