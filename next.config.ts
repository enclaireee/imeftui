import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/wip",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
