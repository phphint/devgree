// server.js
const express = require('express');
const cookieParser = require('cookie-parser');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const compression = require('compression');
const botUserAgents = require('./botUserAgents');
//const UserPortfolioContainer = require('./server-build/components/UserPortfolio/UserPortfolioContainer');
//const fetchDataForPortfolio = require('./server-build/components/UserPortfolio/userPortfolioThunks');

const buildPath = path.join(__dirname, 'build', 'static', 'js');
const jsFiles = fs.readdirSync(buildPath).filter(file => file.endsWith('.js'));

// Path to the asset-manifest.json file
// Path to the asset-manifest.json file
const manifestPath = path.join(__dirname, 'build', 'asset-manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));


// Function to replace asset paths in HTML content
function replaceAssetPaths(htmlContent, manifest) {
  // Replace CSS and JS paths
  Object.keys(manifest.files).forEach(key => {
    if (key.endsWith('.css') || key.endsWith('.js')) {
      const pattern = new RegExp(key, 'g');
      htmlContent = htmlContent.replace(pattern, manifest.files[key]);
    }
  });
  return htmlContent;
}



const app = express();
app.use(compression());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'build')));
// Path to the asset-manifest.json file



//app.get('/portfolio/:id', async (req, res) => {
//  const token = req.cookies.authToken; // Read token from cookies
//  const data = await fetchDataForPortfolio(req.params.id, token);
//  const React = require('react');
//  const reactComponent = ReactDOMServer.renderToString(
//    React.createElement(UserPortfolioContainer, { data: data })
//  );
  
  
  // ... Return the SSR HTML ...

  //res.send(`
 // <!doctype html>
 // <html>
 //   <head>
 //     <title>Portfolio</title>
//      ${cssFiles.map(file => `<link rel="stylesheet" href="/static/css/${file}">`).join('\n')}
////      ${jsFiles.map(file => `<script src="/static/js/${file}"></script>`).join('\n')}
 //   </head>
// //   <body>
 //     <div id="app">${reactComponent}</div>
  //  </body>
  //</html>
//`);


//});

app.get('*', (req, res) => {
  const userAgent = req.headers['user-agent'].toLowerCase();
  const isBot = botUserAgents.some(botAgent => userAgent.includes(botAgent));

  if (isBot) {
    const route = req.path === '/' ? 'home' : req.path.substring(1);
    const htmlFilePath = path.join(__dirname, 'rendered', `${route}.html`);
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
    htmlContent = replaceAssetPaths(htmlContent, manifest);
    res.send(htmlContent);
  } else {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
