import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: '/sen-conference', // change this when launching to custom domain
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
