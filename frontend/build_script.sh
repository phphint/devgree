#!/bin/bash

# Log starting of Babel build
echo "Starting Babel build..."
npx babel src/ --out-dir server-build/components/UserPortfolio --copy-files
echo "Babel build completed."

# Log starting of client-side code build
echo "Building client-side code..."
npm run build
echo "Client-side code build completed."

# Removing existing Puppeteer installation if present
echo "Removing existing Puppeteer installation..."
npm uninstall puppeteer
echo "Existing Puppeteer installation removed."

# Log starting of Puppeteer installation
echo "Installing Puppeteer..."
npm install puppeteer
echo "Puppeteer installation completed."

# Log starting of Puppeteer browser installation
echo "Installing required version of Chrome for Puppeteer..."
npx puppeteer install
echo "Chrome installation for Puppeteer completed."

# Log starting of Puppeteer script execution
echo "Running Puppeteer script..."
node Puppeteer.js
echo "Puppeteer script execution completed."
