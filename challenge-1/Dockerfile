# Base image
FROM ubuntu:latest

# Install necessary packages
RUN apt-get update \
    && apt-get install -y \
        apache2 \
        vsftpd \
        openssh-server \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Configure vsftpd for FTP server
RUN sed -i 's/anonymous_enable=NO/anonymous_enable=YES/' /etc/vsftpd.conf

# Configure Apache for HTTP server
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Copy web folder to Apache HTTP folder
COPY ./web /var/www/html

RUN useradd worker

# Configure SSH server
RUN echo 'worker:enterpassword' | chpasswd
RUN mkdir /var/run/sshd
RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd
COPY ./ssh/motd /etc/motd

WORKDIR /home/worker

# Copy local folder to container
COPY ./ssh/notes ./notes
COPY ./ssh/welcome.txt .

# Expose ports for HTTP (80), FTP (20-21), and SSH (22)
EXPOSE 80 20-21 22 2222 8080

# Start the services
CMD service apache2 start && service vsftpd start && /usr/sbin/sshd -D
