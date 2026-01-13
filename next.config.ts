import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/recruitment",
        permanent: false, // Set to false for temporary redirect
      },
    ];
  },
};

export default nextConfig;
