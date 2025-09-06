# Use Node.js 18 LTS as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 5173

# Set environment variable for production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]
