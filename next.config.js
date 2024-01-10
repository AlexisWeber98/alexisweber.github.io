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
        hostname: "instagram.faep6-2.fna.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
