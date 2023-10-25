FROM node:18

WORKDIR /app 

# Create a non-root user for Debian-based images
RUN groupadd app && useradd -r -g app -m app

COPY package*.json ./
RUN npm install
# Express would typically be installed via package.json, but this line is just to be explicit.
RUN npm install express

USER app

COPY . .

CMD ["npm", "start"]
