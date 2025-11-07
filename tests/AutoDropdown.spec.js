import { test, expect } from '@playwright/test';

test("Auto Drop down", async ({ page }) => {

  await page.goto('https://www.redbus.com/');

  // Fill the source city
  await page.locator('#src').fill('Delhi');

  // Wait for the dropdown options to appear
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]//div");

  // Get all the dropdown options
  const OptionOfDropdown = await page.$$(" //li[contains(@class,'sc-iwsKbI')]//div");

  for (let option of OptionOfDropdown) {
    const value = await option.textContent();
    console.log(value);

    if (value && value.includes('Anand Vihar')) {
      await option.click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});