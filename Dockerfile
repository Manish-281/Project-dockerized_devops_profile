# Base image: Node 18 (lightweight alpine version)
FROM node:18-alpine

# Working directory of Container
WORKDIR /app

# Copy package.json (For Cache)
COPY package.json .

# For Installation of dependencies in Production
RUN npm install --production

# For copy application code
COPY app.js .

COPY public/ ./public/

# Container listens on port 5000 
EXPOSE 5000

# Command which run after Container starting
CMD ["node", "app.js"]
