import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // No basePath needed since this will be the root application
  trailingSlash: true,
  poweredByHeader: false,
  // Get asset prefix from environment or use empty string
  assetPrefix: process.env.NEXT_ASSET_PREFIX,
  // Root for file tracing
  outputFileTracingRoot: process.cwd(),
  // Ensure images are properly handled
  images: {
    unoptimized: true,
  },
  // Configure experimental options
  experimental: {
    // Disable esmExternals for better browser compatibility
    esmExternals: false,
  },
};

export default nextConfig;
