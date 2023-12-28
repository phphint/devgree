// server.js
const express = require("express");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const path = require("path");
const compression = require("compression");
const botUserAgents = require("./botUserAgents");
const { exec } = require("child_process");

// Import userPortfolioThunks
const { fetchPortfolioData } = require('./portfolioService');


const isSSREnabled = process.env.FORCE_SSR === "true"; // Check if FORCE_SSR environment variable is set to 'true'

const buildPath = path.join(__dirname, "build", "static", "js");
const jsFiles = fs
  .readdirSync(buildPath)
  .filter((file) => file.endsWith(".js"));

const cssFiles = fs
  .readdirSync(buildPath)
  .filter((file) => file.endsWith(".css"));

// Path to the asset-manifest.json file
const manifestPath = path.join(__dirname, "build", "asset-manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

// Function to replace asset paths in HTML content
function replaceAssetPaths(htmlContent, manifest) {
  // Replace paths for all script and link tags
  Object.keys(manifest.files).forEach(key => {
    if (key.endsWith('.js')) {
      htmlContent = htmlContent.replace(new RegExp(`/static/js/${key}`, 'g'), manifest.files[key]);
    }
    if (key.endsWith('.css')) {
      htmlContent = htmlContent.replace(new RegExp(`/static/css/${key}`, 'g'), manifest.files[key]);
    }
  });
  return htmlContent;
}


const app = express();
app.use(compression());
app.use(cookieParser());

app.get("/portfolio/:id", async (req, res) => {
  if (isSSREnabled) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Assuming format: Authorization: Bearer <token>
    let profileData;

    try {
      // Fetch data and assign it to profileData variable
      profileData = await fetchPortfolioData(req.params.id, token);
      console.log('Fetched profile data:', profileData); // Temporary log for debugging
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      return res.status(500).send('Error fetching portfolio data'); // Error response
    }

  

    // SSR logic when FORCE_SSR is enabled
    const generateMetaTags = (profileData) => {
      const description = `Portfolio of ${profileData.profile.fullName}`;
      const keywords = "portfolio, skills, achievements, testimonials";
      return `
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        <meta property="og:title" content="${profileData.profile.fullName}'s Portfolio">
        <meta property="og:description" content="${description}">
        <meta property="og:type" content="website">
        <meta property="og:url" content="${req.originalUrl}">
        <meta property="og:image" content="/static/logo512.png"> <!-- Replace with actual image path -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${profileData.profile.fullName}'s Portfolio">
        <meta name="twitter:description" content="${description}">
        <meta name="twitter:image" content="/static/logo512.png"> <!-- Replace with actual image path -->
      `;
    };

    // ... Generate minimal HTML with meta tags ...
    let htmlContent = `
    <!doctype html>
    <html>
    <head>
      <title>Portfolio - ${profileData.profile.fullName}</title>
      ${generateMetaTags(profileData)}
      ${Object.keys(manifest.files).filter(key => key.endsWith('.css')).map(key => `<link rel="stylesheet" href="${manifest.files[key]}">`).join('\n')}
    </head>
    <body>
      <div id="root"></div>
      ${Object.keys(manifest.files).filter(key => key.endsWith('.js')).map(key => `<script src="${manifest.files[key]}"></script>`).join('\n')}
    </body>
    </html>
  `;

  htmlContent = replaceAssetPaths(htmlContent, manifest);
  res.send(htmlContent);
  } else {
    // Serve the standard single-page app version
    res.sendFile(path.join(__dirname, "build", "index.html"));
  }
});

app.use(express.static(path.join(__dirname, "build")));
app.use("/static", express.static(path.join(__dirname, "build", "static")));

app.get("*", (req, res) => {
  console.log(`Wildcard handler hit for path: ${req.path}`);

  const userAgent = req.headers["user-agent"].toLowerCase();
  console.log(`User Agent: ${userAgent}`);

  const isBot = botUserAgents.some((botAgent) => userAgent.includes(botAgent));

  if (isBot || isSSREnabled) {
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

      // res.status(404).send("Page not found");
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
