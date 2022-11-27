/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "shalamanya-space.sgp1.digitaloceanspaces.com",
      },
    ],
  },
};
