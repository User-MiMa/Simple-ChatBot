FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN corepack enable && pnpm install --prod
COPY public/ ./public/
COPY server/ ./server/
EXPOSE 3001
CMD ["node", "server/server.js"]