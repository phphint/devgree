const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function renderPage(url) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  try {
    console.log(`Navigating to ${url}`);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 12000 }); // 60 seconds
    console.log(`Page loaded: ${url}`);
    const content = await page.content();
    await browser.close();
    return content;
  } catch (error) {
    console.error(`Error while navigating to ${url}: ${error.message}`);
    await browser.close();
    throw error; // Rethrow the error to handle it in the calling function
  }
}

async function saveRenderedPages(baseURL, routes) {
  for (const route of routes) {
    const pageURL = route === 'home' ? baseURL : `${baseURL}/${route}`;
    try {
      const content = await renderPage(pageURL);
      const fileName = route === 'home' ? 'index.html' : `${route}.html`;
      fs.writeFileSync(path.join(__dirname, 'rendered', fileName), content);
      console.log(`Page saved: ${fileName}`);
    } catch (error) {
      console.error(`Failed to save page ${pageURL}: ${error.message}`);
      // Optionally, handle the error further or continue to the next iteration
    }
  }
}

const baseURL = 'http://localhost:3000';
const routes = ['home', 'about', 'privacy', 'features', 'terms'];

saveRenderedPages(baseURL, routes).then(() => console.log('Pages rendered successfully'));
