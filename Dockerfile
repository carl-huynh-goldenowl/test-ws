# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

COPY --chown=node:node package*.json ./

# A wildcard is utsed to entsure the package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3000

# Start the server using the production build
CMD ["node", "dist/main.js"]
