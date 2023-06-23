#!/bin/bash

# Display usage instructions
print_usage() {
  echo "Usage: $0 [options]"
  echo "Options:"
  echo "  -h, --help       : Show usage instructions"
  echo "  -b, --build      : Only build the Docker images"
  echo "  -p, --push       : Build and push the Docker images to DockerHub"
  echo "  -u, --username <username> : Set the DockerHub username"
}

FOLDERS=(
  "challenge-1"
  "challenge-2"
  "challenge-3"
  "challenge-4"
  "challenge-5"
  "challenge-check"
)

# Authenticate with Docker Hub with local credentials
docker_login() {
  docker login
}

# Build the Docker images
build_images() {
  for folder in "${FOLDERS[@]}"
  do
    dockerfiles=($(find "$folder" -type f -name "Dockerfile*"))
    for dockerfile in "${dockerfiles[@]}"
    do
      tag="${folder#*-}"
      additional_tag=""
      if [[ "$dockerfile" == *".web" ]]; then
        additional_tag="-web"
      elif [[ "$dockerfile" == *".db" ]]; then
        additional_tag="-db"
      elif [[ "$dockerfile" == *".ssh" ]]; then
        additional_tag="-ssh"
      fi
      image_tag="$USERNAME/challenge:$tag$additional_tag"
      docker build -t "$image_tag" -f "$dockerfile" "$folder"
    done
  done
}

# Push the Docker images
push_images() {
  for folder in "${FOLDERS[@]}"
  do
    dockerfiles=($(find "$folder" -type f -name "Dockerfile*"))
    for dockerfile in "${dockerfiles[@]}"
    do
      tag="${folder#*-}"
      additional_tag=""
      if [[ "$dockerfile" == *".web" ]]; then
        additional_tag="-web"
      elif [[ "$dockerfile" == *".db" ]]; then
        additional_tag="-db"
      elif [[ "$dockerfile" == *".ssh" ]]; then
        additional_tag="-ssh"
      fi
      image_tag="$USERNAME/challenge:$tag$additional_tag"
      docker push "$image_tag"
    done
  done
}

# Set username
while [[ "$#" -gt 0 ]]; do
  case $1 in
    -u|--username)
      USERNAME="$2"
      shift 2
      ;;
    -h|--help)
      print_usage
      exit 0
      ;;
    -p|--push)
      docker_login
      build_images
      push_images
      exit 0
      ;;
    -b|--build)
      build_images
      exit 0
      ;;
    *)
      echo "Invalid option: $1"
      print_usage
      exit 1
      ;;
  esac
done

# If no valid option is provided, print usage instructions
print_usage
