FROM ubuntu:latest

# Install packages
RUN apt-get update && apt-get install -y \
    vulnerable-service \
    nginx \
    openssh-server

# Create user
USER mikel
WORKDIR /home/mikel

# Copy secret to pod
COPY ./notes/ .
COPY ./web/ /usr/share/nginx/html/

# Create the worker user
RUN useradd -m worker && \
    echo 'worker:enterpassword' | chpasswd

# Enable SSH
RUN mkdir /var/run/sshd && \
    echo 'PermitRootLogin no' >> /etc/ssh/sshd_config

# Set up the necessary network configuration and expose the vulnerable ports
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

# Start the vulnerable service and SSH service
CMD ["vulnerable-service", "&", "/usr/sbin/sshd", "-D"]
