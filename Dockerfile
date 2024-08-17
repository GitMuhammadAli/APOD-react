# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.15.0

FROM node:${NODE_VERSION}-alpine

# Set environment to development by default
ENV NODE_ENV development

WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the image
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# Run the application using the development command
CMD ["npm", "run", "dev"]
