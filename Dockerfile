# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container's working directory
COPY . .

# Expose the port your Node.js application listens on (change 3000 to your app's port)
EXPOSE 3000

# Define the command to start your Node.js application
CMD npm start
