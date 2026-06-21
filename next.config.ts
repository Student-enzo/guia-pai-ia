import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fixa a raiz do projeto (havia outro lockfile no home do usuário)
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
