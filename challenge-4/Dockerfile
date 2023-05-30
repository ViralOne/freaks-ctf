# Use a Node.js base image
FROM node:20-alpine

# Set the working directory in the container
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

# Copy the rest of the application code
COPY web/package.json ./

USER node

# Install app dependencies
RUN npm i

COPY --chown=node:node web/ .

# Expose the port on which the app listens
EXPOSE 8085

# Start the Node.js application
CMD ["node", "app.js"]
