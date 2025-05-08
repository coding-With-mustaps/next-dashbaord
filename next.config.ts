import type { NextConfig } from "next";
import { truncate } from "node:fs/promises";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
