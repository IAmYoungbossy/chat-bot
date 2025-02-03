# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --omit=optional

# Copy the rest of the application code
COPY . .

# Generate Prisma client during build
RUN npx prisma generate

# Build the TypeScript project
RUN npm run build

# Remove devDependencies after building
RUN npm prune --production

# Expose the backend port
EXPOSE 5000

# Start the backend server (including migrations)
CMD ["npm", "start"]