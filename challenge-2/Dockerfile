# Use the official PHP image as the base image
FROM php:7.4-apache

# Install necessary extensions
RUN docker-php-ext-install mysqli

# Copy files to the container
COPY ./WebApp/ /var/www/html/

# Set the working directory
WORKDIR /var/www/html

# Start Apache server
CMD ["apache2-foreground"]
