# Use ubuntu
FROM ubuntu:22.04

ARG DEBIAN_FRONTEND=noninteractive

# Install MySQL client and other dependencies
RUN apt update && apt install -y --no-install-recommends mysql-server php-mysql apache2 php libapache2-mod-php

# Copy the web folder contents to the Apache document root
COPY web/ /var/www/html/

# Copy Apache configuration file
COPY apache-config.conf /etc/apache2/sites-available/000-default.conf

# Add localhost to conf
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Set MySQL root password and create a new user with all privileges
ENV MYSQL_ROOT_PASSWORD Passw0rd
ENV MYSQL_USER admindb
ENV MYSQL_PASSWORD Passw0rd

# Create a new database and import the SQL dump
ENV MYSQL_DATABASE workers
COPY web/db/dump.sql /docker-entrypoint-initdb.d/
COPY my.cnf /etc/mysql/my.cnf

# Grant necessary permissions to the web server user
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html

# Expose ports 80 (Apache) and 3306 (MySQL)
EXPOSE 80 3306

# Start MySQL and Apache services
CMD service mysql start && \
    service apache2 start && \
    tail -f /var/log/apache2/error.log
