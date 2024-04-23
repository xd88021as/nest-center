FROM node:16.20

WORKDIR /app

COPY package*.json ./

RUN npm install -g --quiet pnpm@8.10.2 && pnpm install --ignore-scripts

COPY . ./
RUN pnpm prisma generate && pnpm build
