# Use a Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY ./web/package*.json ./

# Install project dependencies
RUN npm install

# Copy the application code
COPY ./web .
COPY ./ssh /secret-data-do-not-look

# Expose the port your application will listen on
EXPOSE 5000

# Set the command to run your Node.js application
CMD ["node", "server.js"]
