# Use a Node.js base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port on which the app listens
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]
