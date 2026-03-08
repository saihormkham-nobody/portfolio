import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  pageExtensions: ["tsx", "ts", "mdx"],
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
