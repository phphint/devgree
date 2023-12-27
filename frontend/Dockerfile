FROM node:20.9.0-slim

WORKDIR /app

# These dependencies are necessary for Puppeteer to run in a slim Debian container
RUN apt-get update && apt-get install -y \
    wget gnupg ca-certificates \
    procps \
    libxss1 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxtst6 \
    libnss3 \
    libcups2 \
    libxrandr2 \
    libasound2 \
    libpangocairo-1.0-0 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libgbm1 \
    --no-install-recommends && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
#COPY package*.json ./

# Install dependencies
#RUN npm install

# Copy other necessary files and directories (such as your server.js)
#COPY . .

# Your other Dockerfile commands...

CMD ["/bin/sh", "-c", "if [ \"$NODE_ENV\" = 'production' ]; then ./build_script.sh && node server.js; else npm start; fi"]
