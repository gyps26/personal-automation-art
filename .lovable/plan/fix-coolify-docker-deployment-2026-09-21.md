# Fix Coolify Docker deployment

## Diagnosis

The deployment fails because the build stage does not create `/app/dist`, so the production stage cannot copy it.

The codebase does set `NITRO_PRESET=node-server`, but `vite.config.ts` passes the Nitro settings inside `tanstackStart`. The installed Lovable build package expects `nitro` as a top-level `defineConfig` option, so the intended self-hosted server output is not reliably configured. The Dockerfile then assumes `dist/server/index.mjs` exists.

## Changes

1. Move the conditional Nitro configuration to the supported top-level `nitro` option in `vite.config.ts`.
2. Pin the Docker build output directory so it matches the folder copied and launched by the Dockerfile.
3. Keep the regular Lovable build behavior unchanged when the Docker-only environment variable is absent.
4. Align the Dockerfile command and copy path with the verified Nitro output.
5. Review the Compose health check and service port against the final server command, changing them only if verification shows a mismatch.

## Verification

1. Build the image from a clean Docker context using the same Compose path Coolify uses.
2. Confirm the expected server entry exists in the production image.
3. Start the container and verify the homepage responds successfully on port 3000.
4. Confirm the health check reaches a healthy state.

## Result

Coolify will be able to build the production image without the `/app/dist: not found` error and run the portfolio through its proxy on port 3000.
