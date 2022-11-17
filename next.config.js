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
      "pinata.cloud",
    ],
  },
  i18n: {
    locales: ["en", "es", "it", "fr", "de"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
