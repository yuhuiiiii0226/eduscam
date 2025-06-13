/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3010'],
    }
  },
  typescript: {
    // 忽略构建时报的所有 TS 错误
    ignoreBuildErrors: true,
  },
  eslint: {
    // 彻底跳过 ESLint
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 