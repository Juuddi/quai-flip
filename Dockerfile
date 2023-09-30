# Use the official Node.js image as the base image
FROM node:20.5.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 (or any other port your app might run on)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
