# Base image
FROM node:16

# Set the working directory in the container
WORKDIR /app
COPY . .

# Install dependencies
RUN yarn install

# Copy env.sample to .env
RUN cp .env.sample .env

# Run the tests
CMD ["yarn", "test"]