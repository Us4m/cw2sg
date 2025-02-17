# Step 1: Use official Node.js image
FROM node:18 AS builder

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Step 4: Install dependencies using yarn
RUN yarn install

# Step 5: Copy the rest of the app's files
COPY . .

# Step 6: Build the Next.js app
RUN yarn build

# Step 7: Expose port 3000
EXPOSE 3000

# Step 8: Start the app in production mode
CMD ["yarn", "start"]
