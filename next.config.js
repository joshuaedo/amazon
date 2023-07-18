/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "fakestoreapi.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "companieslogo.com",
      "images-na.ssl-images-amazon.com",
      "joshuaedo.sirv.com",
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
