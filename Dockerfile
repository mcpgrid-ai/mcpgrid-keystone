# Multi-stage build with Debian base
FROM node:20-slim AS builder

# Set working directory
WORKDIR /usr/src/app

# Enable Corepack to use Yarn
RUN corepack enable

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY env.d.ts ./
COPY tsconfig*.json ./
COPY keystone.ts ./
COPY src ./src
COPY migrations ./migrations
COPY schema.prisma ./
COPY schema.graphql ./

# Build the application
RUN yarn build

# Remove dev dependencies
RUN yarn install --frozen-lockfile --production && yarn cache clean

# Production stage
FROM node:20-slim AS production

# Install dumb-init for proper signal handling
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Create non-root user
RUN groupadd --gid 1001 --system nodejs && \
    useradd --uid 1001 --system --gid nodejs --shell /bin/bash --create-home keystone

# Copy built application and production dependencies from builder stage
COPY --from=builder --chown=keystone:nodejs /usr/src/app/.keystone ./.keystone
COPY --from=builder --chown=keystone:nodejs /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=keystone:nodejs /usr/src/app/package.json ./package.json
COPY --from=builder --chown=keystone:nodejs /usr/src/app/migrations ./migrations
COPY --from=builder --chown=keystone:nodejs /usr/src/app/schema.prisma ./schema.prisma
COPY --from=builder --chown=keystone:nodejs /usr/src/app/schema.graphql ./schema.graphql

# Switch to non-root user
USER keystone

# Expose port
EXPOSE 8080

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["yarn", "start"]