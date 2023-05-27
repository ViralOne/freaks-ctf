# Use a PHP base image
FROM php:7.4-apache

# Copy the PHP files to the Apache document root
COPY web/ /var/www/html/

# Enable Apache rewrite module for URL rewriting
RUN a2enmod rewrite

# Set the document root and enable .htaccess overrides
RUN sed -i 's|/var/www/html|/var/www/html/public|' /etc/apache2/sites-available/000-default.conf
RUN printf "<Directory \"/var/www/html/public\">\n\tAllowOverride All\n</Directory>\n" >> /etc/apache2/sites-available/000-default.conf

# Install PHP extensions required by the application
RUN apt-get update && apt-get install -y \
    libzip-dev \
    && docker-php-ext-install zip

# Set the timezone to match the application's timezone
RUN echo "date.timezone = UTC" > /usr/local/etc/php/conf.d/timezone.ini

# Start Apache
CMD ["apache2-foreground"]
