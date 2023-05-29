# Base image
FROM ubuntu:latest

# Install necessary packages
RUN apt-get update \
    && apt-get install -y \
        apache2 \
        vsftpd \
        openssh-server

# Configure Apache for HTTP server
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Copy web folder to Apache HTTP folder
COPY ./web /var/www/html

# Configure vsftpd for FTP server
RUN sed -i 's/anonymous_enable=NO/anonymous_enable=YES/' /etc/vsftpd.conf

RUN useradd worker

# Configure SSH server
RUN echo 'worker:enterpassword' | chpasswd
RUN mkdir /var/run/sshd

# Copy local folder to container
COPY ./notes /home/worker/notes

# Expose ports for HTTP (80), FTP (20-21), and SSH (22)
EXPOSE 80 20-21 22 443 3306 27017 6379 5432 9200 5601 8080

# Start the services
CMD service apache2 start && service vsftpd start && /usr/sbin/sshd -D
