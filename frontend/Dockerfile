FROM node:20.9.0-slim

WORKDIR /app

# Copy package.json and package-lock.json
#COPY package*.json ./

# Install dependencies
#RUN npm install

# Copy other necessary files and directories (such as your server.js)
#COPY . .

# Your other Dockerfile commands...

CMD ["/bin/sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then ./build_script.sh && node server.js; else npm start; fi"]
