FROM ubuntu:latest

# Install and configure the vulnerable service & nginx
RUN apt-get update && apt-get install -y vulnerable-service nginx

# Create user
USER mikel
WORKDIR /home/mikel

# Copy secret to pod
COPY top_secret_plans.txt .
COPY ./web/index.html /usr/share/nginx/html/

# Set up the necessary network configuration and expose the vulnerable port
EXPOSE 21

EXPOSE 80
EXPOSE 443
EXPOSE 22
EXPOSE 3306
EXPOSE 27017
EXPOSE 6379
EXPOSE 5432
EXPOSE 9200
EXPOSE 5601
EXPOSE 8080

# Start the vulnerable service
CMD ["vulnerable-service"]

