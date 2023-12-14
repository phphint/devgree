FROM node:20.9.0-slim

# Set working directory
WORKDIR /app 

# Argument for environment (with a default value)
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Install dependencies
COPY package*.json ./
RUN if [ "$NODE_ENV" = "development" ]; then \
        npm install; \
    else \
        npm install --only=production; \
    fi

# Change ownership of the app directory to the 'node' user
RUN chown -R node:node /app

# Switch to 'node' user
USER node

# Copy app source
COPY --chown=node:node . .

# Install Express server for serving the build in production
# This is done as root because global installs might need root access
USER root
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm install express; \
    fi

# Copy express server script
COPY --chown=node:node server.js ./

# Switch back to 'node' user to run the app
USER node

# Build app for production
RUN if [ "$NODE_ENV" = "production" ]; then \
        npm run build; \
    fi

# Start command
CMD if [ "$NODE_ENV" = "production" ]; then \
        node server.js; \
    else \
        npm start; \
    fi
