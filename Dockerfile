FROM node:16.20 as builder

WORKDIR /build

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g --quiet pnpm@8.10.2 && pnpm install --ignore-scripts

COPY . ./
RUN pnpm prisma generate && pnpm build

# app
FROM node:16.20 as app
WORKDIR /app
#COPY . ./
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/dist ./dist
ENTRYPOINT ["node", "dist/apps/api/main.js"]