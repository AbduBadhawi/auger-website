# Base image
FROM node:22.13.0-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Increase Node.js memory limit
RUN node --max-old-space-size=4096 node_modules/.bin/vite build

# Build the app for production
RUN npm run build

# Use Nginx to serve app
FROM nginx:1.26.0-alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /var/www/html/index.nginx-debian.html

# Copy Nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app to Nginx web root
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]


