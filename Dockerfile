# Use a Node.js base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables
# DB_HOST is the name of the database container
ENV DB_HOST=vero-db-container
ENV DB_PORT=5432
ENV DB_USER=postgres
ENV DB_PASSWORD=root
ENV DB_NAME=vero_db

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]