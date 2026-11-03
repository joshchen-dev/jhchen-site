import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Mantine exports ~300 components from one entry point; this bundles only the ones the site imports.
  experimental: { optimizePackageImports: ["@mantine/core", "@mantine/hooks"] },
};

export default nextConfig;
