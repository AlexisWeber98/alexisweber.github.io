/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "imgs.search.brave.com",
      },
      {
        hostname: "craftbeer-team.netlify.app",
      },
      {
        hostname: "world-of-dogs.netlify.app",
      },
      {
        hostname: "play-lh.googleusercontent.com",
      },
      {
        hostname: "docs.expo.dev",
      },
      {
        hostname: "www.southsolutions.tech",
      },
    ],
  },
};

module.exports = nextConfig;
