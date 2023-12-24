// server.js
const express = require('express');
const cookieParser = require('cookie-parser');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const botUserAgents = require('./botUserAgents');
const UserPortfolioContainer = require('./src/components/UserPortfolio/UserPortfolioContainer');
const fetchDataForPortfolio = require('./src/components/UserPortfolio/userPortfolioThunks');

const buildPath = path.join(__dirname, 'build', 'static', 'js');
const jsFiles = fs.readdirSync(buildPath).filter(file => file.endsWith('.js'));


const app = express();
app.use(compression());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'build')));
const cssFiles = fs.readdirSync(path.join(__dirname, 'build', 'static', 'css')).filter(file => file.endsWith('.css'));


app.get('/portfolio/:id', async (req, res) => {
  const token = req.cookies.authToken; // Read token from cookies
  const data = await fetchDataForPortfolio(req.params.id, token);
  const reactComponent = ReactDOMServer.renderToString(
    <UserPortfolioContainer data={data} />
  );
  
  // ... Return the SSR HTML ...

  res.send(`
  <!doctype html>
  <html>
    <head>
      <title>Portfolio</title>
      ${cssFiles.map(file => `<link rel="stylesheet" href="/static/css/${file}">`).join('\n')}
      ${jsFiles.map(file => `<script src="/static/js/${file}"></script>`).join('\n')}
    </head>
    <body>
      <div id="app">${reactComponent}</div>
    </body>
  </html>
`);


});

app.get('*', (req, res) => {
  const userAgent = req.headers['user-agent'].toLowerCase();
  console.log("User Agent: ", userAgent); // This line will log the user agent
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
