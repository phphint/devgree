#!/bin/bash

# Log starting of Babel build
echo "Starting Babel build..."
npx babel src/ --out-dir server-build/components/UserPortfolio --copy-files
echo "Babel build completed."

# Log starting of client-side code build
echo "Building client-side code..."
npm run build
echo "Client-side code build completed."