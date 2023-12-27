// server.js
const express = require("express");
const cookieParser = require("cookie-parser");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");
const path = require("path");
const compression = require("compression");
const botUserAgents = require("./botUserAgents");
const { exec } = require("child_process");

//const UserPortfolioContainer = require('./server-build/components/UserPortfolio/UserPortfolioContainer');
//const fetchDataForPortfolio = require('./server-build/components/UserPortfolio/userPortfolioThunks');

const buildPath = path.join(__dirname, "build", "static", "js");
const jsFiles = fs
  .readdirSync(buildPath)
  .filter((file) => file.endsWith(".js"));

// Path to the asset-manifest.json file
// Path to the asset-manifest.json file
const manifestPath = path.join(__dirname, "build", "asset-manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

// Function to replace asset paths in HTML content
function replaceAssetPaths(htmlContent, manifest) {
  console.log("replaceAssetPaths called");
  console.log("Manifest files:", manifest.files);

  // Regular expression patterns for main.js and main.css
  const jsPattern = /\/static\/js\/main\.[a-z0-9]+\.js/g;
  const cssPattern = /\/static\/css\/main\.[a-z0-9]+\.css/g;

  // Replace js and css paths
  htmlContent = htmlContent.replace(jsPattern, manifest.files["main.js"]);
  htmlContent = htmlContent.replace(cssPattern, manifest.files["main.css"]);

  return htmlContent;
}

const app = express();
app.use(compression());
app.use(cookieParser());

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

app.use(express.static(path.join(__dirname, "build")));
app.use("/static", express.static(path.join(__dirname, "build", "static")));

app.get("*", (req, res) => {
  console.log(`Wildcard handler hit for path: ${req.path}`);

  const userAgent = req.headers["user-agent"].toLowerCase();
  console.log(`User Agent: ${userAgent}`);

  const isBot = botUserAgents.some((botAgent) => userAgent.includes(botAgent));

  if (!isBot) {
    const route = req.path === "/" ? "home" : req.path.substring(1);
    console.log(`Serving pre-rendered file for route: ${route}`);

    const htmlFilePath = path.join(__dirname, "rendered", `${route}.html`);
    console.log(`HTML File Path: ${htmlFilePath}`);

    if (fs.existsSync(htmlFilePath)) {
      console.log(`HTML file exists: ${htmlFilePath}`);

      let htmlContent = fs.readFileSync(htmlFilePath, "utf8");
      //console.log("Original HTML Content: ", htmlContent); // Log original content

      htmlContent = replaceAssetPaths(htmlContent, manifest);
      //console.log("Modified HTML Content: ", htmlContent); // Log modified content

      res.send(htmlContent);
    } else {
      console.error(`HTML file does not exist: ${htmlFilePath}`);

      res.status(404).send("Page not found");
    }
  } else {
    console.log(`Serving index.html for non-bot user.`);

    res.sendFile(path.join(__dirname, "build", "index.html"));
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Function to run build_script_puppeteer.sh
function runPuppeteerScript() {
  exec("./build_script_puppeteer.sh", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      return;
    }
    console.log(`Script output: ${stdout}`);
  });
}

// You can call this function at the appropriate place in your server.js
runPuppeteerScript();
