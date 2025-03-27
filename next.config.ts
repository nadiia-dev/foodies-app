import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  serverActions: {
    bodySizeLimit: "5mb",
  },
};

export default nextConfig;
