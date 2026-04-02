import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves from /menameds-web/ — set basePath to match the repo name
  basePath: "/menameds-web",
  images: {
    // Static export requires unoptimized images (no server to process them)
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
