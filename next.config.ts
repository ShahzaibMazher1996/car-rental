import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    ignoreDuringBuilds: true, // ⛔ disables build blocking on lint errors
  },
    images: {
    domains: ['img.freepik.com', 'cdn.prod.website-files.com',  // For your video thumbnail
      'substackcdn.com',
      'i.pinimg.com',
      'mir-s3-cdn-cf.behance.net',],
  },
};

export default nextConfig;
