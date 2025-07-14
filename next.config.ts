import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true, // ⛔ disables build blocking on lint errors
  },
};

export default nextConfig;
