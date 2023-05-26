FROM python:latest

# Copy the necessary Python scripts and resources to the container
COPY social_engineering.py /app/social_engineering.py
COPY resources /app/resources

# Set the working directory
WORKDIR /app

# Install required dependencies
RUN pip install requests

# Run the social engineering Python script
CMD ["python", "social_engineering.py"]

