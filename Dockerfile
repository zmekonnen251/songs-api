# Use the official Node.js image.
FROM node:18

# Set the working directory in the container.
WORKDIR /usr/src/app

# Copy package.json and yarn.lock.
COPY package.json yarn.lock ./

# Install dependencies.
RUN yarn install

# Install PM2 globally.
RUN yarn global add pm2

# Copy the rest of the application code.
COPY . .

# Build the TypeScript code.
RUN yarn build

# Expose the port the app runs on.
EXPOSE 3000

# Use PM2 to start the application.
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
