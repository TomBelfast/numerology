# Use Node.js 18 LTS as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Install curl for health check
RUN apk add --no-cache curl

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 5173

# Set environment variables for production
ENV NODE_ENV=production
ENV VITE_GEMINI_API_KEY=""

# Add health check and better logging
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5173 || exit 1

# Start the application
CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "5173"]
