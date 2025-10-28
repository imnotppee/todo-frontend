/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // basePath: '/todo-frontend',
  // assetPrefix: '/todo-frontend/',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

console.log("✅ Loaded ENV from next.config.js:", process.env.NEXT_PUBLIC_API_URL);

module.exports = nextConfig;
