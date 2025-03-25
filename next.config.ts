import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // No basePath needed since this will be the root application
  trailingSlash: true,
  poweredByHeader: false,
};

export default nextConfig;
