# Use the official PHP image as the base image
FROM php:7.4-apache

# Install necessary extensions
RUN docker-php-ext-install mysqli

# Install MySQL server
RUN apt-get update && apt-get install -y \
    default-mysql-server

# Copy PHP files to the container
COPY ./WebApp/ /var/www/html/

# Copy MySQL configuration file
COPY my.cnf /etc/mysql/my.cnf
COPY db/ /docker-entrypoint-initdb.d/

# Set the working directory
WORKDIR /var/www/html

# Start Apache server
CMD ["apache2-foreground"]
