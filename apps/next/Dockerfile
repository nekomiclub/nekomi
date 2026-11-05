ARG NODE_VERSION=24
ARG APP_NAME=@nekomi/next
ARG APP_DIR=apps/next

# ---- 1. Prune the monorepo down to what the app needs ----
FROM node:${NODE_VERSION}-alpine AS pruner
ARG APP_NAME
RUN apk add --no-cache libc6-compat
WORKDIR /repo
RUN npm install -g turbo@2
COPY . .
RUN turbo prune ${APP_NAME} --docker

# ---- 2. Install deps + build ----
FROM node:${NODE_VERSION}-alpine AS builder
ARG APP_NAME
RUN apk add --no-cache libc6-compat
RUN corepack enable
WORKDIR /repo

# Lockfile + package.json files only, so this layer caches until deps change
COPY --from=pruner /repo/out/json/ .
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
  pnpm install --frozen-lockfile

# Now the sources
COPY --from=pruner /repo/out/full/ .

ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_NEKOMI_API_URL
ENV NEXT_PUBLIC_NEKOMI_API_URL=$NEXT_PUBLIC_NEKOMI_API_URL
RUN pnpm turbo run build --filter=${APP_NAME}

# ---- 3. Minimal runtime image ----
FROM node:${NODE_VERSION}-alpine AS runner
ARG APP_DIR
RUN apk add --no-cache libc6-compat
WORKDIR /app

ARG GIT_SHA=unknown
ARG APP_VERSION=v0.0.0
ENV NEXT_PUBLIC_GIT_SHA=$GIT_SHA \
  NEXT_PUBLIC_APP_VERSION=$APP_VERSION

ENV NODE_ENV=production \
  NEXT_TELEMETRY_DISABLED=1 \
  HOSTNAME=0.0.0.0 \
  PORT=3000

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Requires `output: "standalone"` in next.config. In a monorepo the standalone
# output keeps the workspace layout, so server.js lives at ${APP_DIR}/server.js
COPY --from=builder --chown=nextjs:nodejs /repo/${APP_DIR}/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /repo/${APP_DIR}/.next/static ./${APP_DIR}/.next/static
COPY --from=builder --chown=nextjs:nodejs /repo/${APP_DIR}/public ./${APP_DIR}/public

USER nextjs
EXPOSE 3000

# ARG isn't available at runtime, so the path is fixed here; keep in sync with APP_DIR
CMD ["node", "apps/next/server.js"]