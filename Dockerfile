# Base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the test files to the container
COPY . .

# Copy env.sample to .env
RUN cp .env.sample .env

# Run the tests
CMD ["yarn", "test"]