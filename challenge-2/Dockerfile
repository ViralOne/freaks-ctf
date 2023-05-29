# Use the official PHP 7.4 Apache base image
FROM php:7.4-apache

# Install MySQL client and other dependencies
RUN apt-get update && apt-get install -y \
    default-mysql-client \
    && rm -rf /var/lib/apt/lists/*

# Copy the web folder contents to the Apache document root
COPY web/ /var/www/html/

# Copy the SQL dump file
COPY web/db/dump.sql /tmp/

# Set MySQL root password and create a new user with all privileges
ENV MYSQL_ROOT_PASSWORD Passw0rd
ENV MYSQL_USER admindb
ENV MYSQL_PASSWORD Passw0rd

# Create a new database and import the SQL dump
ENV MYSQL_DATABASE workers
ADD dump.sql /docker-entrypoint-initdb.d/

# Expose ports 80 (Apache) and 3306 (MySQL)
EXPOSE 80
EXPOSE 3306

# Start both Apache and MySQL services
CMD service mysql start && apache2-foreground
