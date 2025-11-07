const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch({ headless: false }); // set to true for headless mode
  const page = await browser.newPage();

  // Navigate to a webpage
  await page.goto('https://example.com');

  // Take a screenshot
  await page.screenshot({ path: 'example.png' });

  // Print page title
  const title = await page.title();
  console.log(`Page title: ${title}`);

  // Close browser
  await browser.close();
})();
