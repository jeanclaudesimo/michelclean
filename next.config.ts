import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Erforderlich für Docker
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'portal.digitalssolutions.de',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'portal.digitalssolutions.de',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
