# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the frontend port
EXPOSE 3000

# Start the frontend server
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = 'development' ]; then npm run dev; else npm start; fi"]