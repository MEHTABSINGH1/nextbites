import type { NextConfig } from "next";

// GitHub Pages serves this site under /<repo-name> (https://mehtabsingh1.github.io/nextbites/).
// The deploy workflow sets PAGES_BASE_PATH=/nextbites; locally it is empty so `npm run dev` stays at "/".
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Build a fully static site into ./out (no Node.js server needed).
  output: "export",
  basePath,
  // Emit /recipe/miso-ramen/index.html so static hosts resolve every route.
  trailingSlash: true,
  // Note: cacheComponents / partialPrefetching were removed because Partial
  // Prerendering needs a server and is not supported with output: "export".
};

export default nextConfig;
