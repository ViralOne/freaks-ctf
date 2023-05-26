FROM node:latest

# Copy the JavaScript decryption code to the container
COPY decryption.js /app/decryption.js

# Set the working directory
WORKDIR /app

# Install required dependencies
RUN npm install crypto-js

# Run the JavaScript decryption code
CMD ["node", "decryption.js"]

