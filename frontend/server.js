const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

// Use compression middleware to compress text responses
app.use(compression());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
