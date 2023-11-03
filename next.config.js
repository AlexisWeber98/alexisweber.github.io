/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    remotePatterns: [
        {
            hostname: "imgs.search.brave.com"
        },
        {
            hostname: "craftbeer-team.netlify.app"
        }
    ]
 }
};

module.exports = nextConfig;
