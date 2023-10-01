# Build stage
FROM node:20.5.1 AS build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build

# Production stage
FROM node:20.5.1-alpine
WORKDIR /app
COPY package*.json ./
# Only install production dependencies
RUN npm pkg delete scripts.prepare
RUN npm i --omit=dev
# Copy built app from the previous stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
