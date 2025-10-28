/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ เปิดโหมด Static Export (แทนการใช้ "next export")
  output: 'export',

  // ✅ basePath และ assetPrefix ต้องตรงกับชื่อ repo (ถ้า deploy ใน imnotppee.github.io/todo-frontend)
  basePath: '/todo-frontend',
  assetPrefix: '/todo-frontend/',

  images: { unoptimized: true },

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

console.log("✅ Loaded ENV from next.config.js:", process.env.NEXT_PUBLIC_API_URL);

module.exports = nextConfig;
