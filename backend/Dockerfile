FROM node:20.9.0

# Set the working directory in the container
WORKDIR /app 

# Create app group and user for running the application
RUN groupadd -r app && useradd -m -r -g app app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
# No need to explicitly install Express if it's in package.json
# RUN npm install express

# Create the uploads directory and set the correct permissions
# Create it in the /app directory, which will be owned by the app user
RUN mkdir /app/uploads && chown app:app /app/uploads

# Switch to your non-root user
USER app

# Copy the rest of your application source code
COPY . .

# Start the application
CMD ["npm", "start"]
