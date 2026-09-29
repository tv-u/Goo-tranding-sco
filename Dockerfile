# ==============================================================
# GOO-TRANDING: Multi-Stage Production Dockerfile
# Optimized for minimum image size, security, and high performance
# ==============================================================

# Stage 1: Build & Dependencies
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies needed for native modules
RUN apk add --no-cache python3 make g++

# Copy package descriptors
COPY package*.json ./

# Install full dependencies for build
RUN npm ci

# Copy full application source
COPY . .

# Build client SPA into /app/dist
RUN npm run build

# Prune dev dependencies for lean final runtime
RUN npm prune --production

# Stage 2: Minimal Production Runtime
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Create unprivileged user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy built distribution artifacts & production node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/server.ts ./server.ts
COPY --from=builder /app/src ./src
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Expose assets and public static files
RUN chown -R appuser:appgroup /app

USER appuser

# Expose default HTTP port
EXPOSE 3000

# Container healthcheck for Kubernetes / Docker Swarm / Cloud Run
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Start the full-stack server
CMD ["node", "--loader", "tsx", "server.ts"]
