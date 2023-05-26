FROM nginx:latest

# Copy the vulnerable web page files to the appropriate directory
COPY webpage /usr/share/nginx/html

# Expose the HTTP port
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]

