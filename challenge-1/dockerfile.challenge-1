FROM ubuntu:latest

# Install and configure the vulnerable service
RUN apt-get update && apt-get install -y vulnerable-service

# Create user
USER mikel
WORKDIR /home/mikel

# Copy secret to pod
COPY top_secret_plans.txt .

# Set up the necessary network configuration and expose the vulnerable port
EXPOSE 21

# Start the vulnerable service
CMD ["vulnerable-service"]

