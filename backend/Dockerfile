FROM node:20.9.0-slim

# Set the working directory in the container
WORKDIR /app

# Install Python, pip, and additional dependencies for OpenCV
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libmagic1  # Add this line to install libmagic

# Install Python packages globally
# Use the latest versions of the packages
RUN pip3 install \
    numpy \
    pandas \
    requests \
    python-dateutil \
    python-magic \
    transformers \
    tokenizers \
    pdfminer.six \
    PyPDF2 \
    bleach \
    torch --break-system-packages


# Create app group and user for running the application
RUN groupadd -r app && useradd -m -r -g app app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Create the uploads directory and set permissions
RUN mkdir /app/uploads 

# Change ownership of the entire /app directory recursively to the app user and group
RUN chown -R app:app /app

# Switch to the non-root user
USER app

# Copy the rest of your application source code
COPY . .

 
USER app

# Start the application
CMD ["npm", "start"]
