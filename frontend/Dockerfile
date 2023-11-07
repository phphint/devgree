# Use a specific version of node
FROM node:20.9.0-slim

WORKDIR /app 

# Create a non-root user and give necessary permissions
RUN groupadd app && useradd -r -g app -m app && chown -R app:app /app

# Copy package files
COPY package*.json ./

# Install all dependencies from package.json
RUN npm install

# Switch to non-root user
USER app

# Copy the rest of your app (as the non-root user)
COPY --chown=app:app . .

CMD ["npm", "start"]
