import type { NextConfig } from "next";
import path from "path";

const BASE_PATH = "/menameds-web";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  // Expose basePath so next/image srcs can be prefixed manually at build time
  // (next/image with unoptimized:true does not auto-apply basePath to public assets)
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
