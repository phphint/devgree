// server.js
const express = require('express');
const path = require('path');
const compression = require('compression');
const botUserAgents = require('./botUserAgents'); // import the list of bot user agents

const app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  const userAgent = req.headers['user-agent'].toLowerCase();
  const isBot = botUserAgents.some(botAgent => userAgent.includes(botAgent));

  if (isBot) {
    // Serve static HTML for bots
    // Example: If the URL is '/about', serve 'about.html' from the 'rendered' directory
    const route = req.path === '/' ? 'home' : req.path.substring(1);
    res.sendFile(path.join(__dirname, 'rendered', `${route}.html`));
  } else {
    // Serve the standard React app for regular users
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
