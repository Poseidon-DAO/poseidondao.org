/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "poseidondao.org",
      "unsplash.com",
      "expertphotography.b-cdn.net",
      "images.unsplash.com",
      "ipfs.moralis.io",
    ],
  },
};

module.exports = nextConfig;
