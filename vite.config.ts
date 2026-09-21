// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Docker/self-hosting build: compile the Nitro server to a standalone Node
// server (instead of the default Cloudflare Workers target) when
// NITRO_PRESET=node-server is set (the Dockerfile/compose build sets it).
const nitroPreset = process.env["NITRO_PRESET"];

export default defineConfig({
  ...(nitroPreset
    ? {
        nitro: {
          preset: nitroPreset,
          output: {
            dir: "dist",
            publicDir: "dist/client",
            serverDir: "dist/server",
          },
        },
      }
    : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
