import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// GitHub Pages serves this site under /<repo-name> (https://mehtabsingh1.github.io/nextbites/).
// The deploy workflow sets PAGES_BASE_PATH=/nextbites; locally it is empty so the app stays at "/".
const basePath = process.env.PAGES_BASE_PATH ?? "";

export default function config(phase: string): NextConfig {
  return {
    // `npm run build` produces a fully static site in ./out (no Node.js server needed).
    // It's skipped for `next dev` only, because in export mode the dev server throws
    // for unknown ids (e.g. /recipe/does-not-exist) instead of showing not-found.tsx.
    output: phase === PHASE_DEVELOPMENT_SERVER ? undefined : "export",
    basePath,
    // Emit /recipe/miso-ramen/index.html so static hosts resolve every route.
    trailingSlash: true,
    // Note: cacheComponents / partialPrefetching were removed because Partial
    // Prerendering needs a server and is not supported with output: "export".
  };
}
