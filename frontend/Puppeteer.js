const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function renderPage(url) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  
  
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const content = await page.content();
  await browser.close();
  return content;
}

async function saveRenderedPages(baseURL, routes) {
    for (const route of routes) {
      // Check if the route is for the home page
      const pageURL = route === 'home' ? baseURL : `${baseURL}/${route}`;
      const content = await renderPage(pageURL);
      const fileName = route === 'home' ? 'index.html' : `${route}.html`;
      fs.writeFileSync(path.join(__dirname, 'rendered', fileName), content);
    }
  }
  
  const baseURL = 'http://www.devgree.com:3000'; // Your app's URL
  const routes = ['home', 'about', 'privacy', 'features', 'terms']; // 'home' represents the root route '/'
  

saveRenderedPages(baseURL, routes).then(() => console.log('Pages rendered successfully'));
