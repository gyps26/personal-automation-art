# ---------- Build stage ----------
FROM oven/bun:1 AS build
WORKDIR /app

# Install dependencies (cached layer)
COPY package.json bun.lock* ./
COPY bunfig.toml ./
RUN bun install --frozen-lockfile

# Copy source and build (standalone Node server output for Docker)
COPY . .
ENV NITRO_PRESET=node-server
RUN bun run build

# ---------- Production stage ----------
FROM oven/bun:1-slim AS production
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=build /app/.output ./.output

EXPOSE 3000

CMD ["bun", ".output/server/index.mjs"]
