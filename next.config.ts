import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["static.wixstatic.com"], // <-- add this
  },
};

export default nextConfig;
