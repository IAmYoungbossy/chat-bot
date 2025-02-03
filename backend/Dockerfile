# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production && npm install -g typescript

# Copy the rest of the application code
COPY . .

# Build the TypeScript project
RUN npm run build

# Expose the backend port
EXPOSE 5000

# Start the backend server (including migrations)
CMD ["npm", "start"]