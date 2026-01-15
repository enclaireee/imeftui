import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/recruitment",
        permanent: false, // Temporary redirect (302) - use true for permanent (301)
      },
    ];
  },
};

export default nextConfig;
