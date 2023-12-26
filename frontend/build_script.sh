#!/bin/bash

npx babel src/ --out-dir server-build/components/UserPortfolio --copy-files

# Build client-side code
npm run build

#node Puppeteer.js