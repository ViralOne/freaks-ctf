#!/usr/bin/env bash

command -v docker >/dev/null 2>&1 || {
    echo "Docker is not running. Please start Docker and try again."
    exit 1
}

command -v jq >/dev/null 2>&1 || {
    echo "jq is not installed. Please install jq and try again."
    exit 1
}

DOCKER_IMAGES=(
  "challenge-1"
  "challenge-2"
  "challenge-3"
  "challenge-4"
  "challenge-5"
)


# Build function to build Docker images
build_images() {
  for directory in "${DOCKER_IMAGES[@]}"; do
    echo "Building image in $directory..."
    docker build -t "$directory" "$directory"
    echo "Image built in $directory"
    echo ""
  done
}

# Call the build_images function
build_images
