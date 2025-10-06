ARG NODE_VERSION=22

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

FROM base AS dev

ENV NODE_ENV=development
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

COPY . .

CMD ["npm", "run", "dev"]

FROM base AS build

# Install only prod deps for build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

# Copy all files and build
COPY . .
RUN npm run build

FROM node:${NODE_VERSION}-alpine AS prod
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=3000

COPY package.json ./

# Copy standalone build output
COPY --from=build /usr/src/app/.next/standalone ./
COPY --from=build /usr/src/app/.next/static ./.next/static
COPY --from=build /usr/src/app/public ./public

RUN mkdir -p /usr/src/app/.next/cache && \
    chown -R node:node /usr/src/app/.next

USER node
EXPOSE $PORT

CMD ["node", "server.js"]
