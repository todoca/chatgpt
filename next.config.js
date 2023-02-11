/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "todoca.com.ve",
      "dl.todoca.com.ve",
      "firebasestorage.googleapis.com",
    ],
  },
  experimental: {
    appDir: true,
  },
};
