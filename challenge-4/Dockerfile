FROM ubuntu:latest

# Install OpenSSH server
RUN apt-get update && apt-get install -y openssh-server

# Install Python
RUN apt-get install -y python3

# Configure SSH server
RUN mkdir /var/run/sshd
RUN echo 'root:passwordisnotvalid' | chpasswd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# Expose SSH port
EXPOSE 22

# Add the Python script to the image
COPY chat.py /root/chat.py

# Set the Python script as the entry point
ENTRYPOINT ["python3", "/root/chat.py"]

# Start the SSH server
CMD ["/usr/sbin/sshd", "-D"]
