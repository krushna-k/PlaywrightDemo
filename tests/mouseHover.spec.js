import {test,expect} from '@playwright/test'

test('handle mouse over', async({page})=>{
     await page.goto("https://demo.opencart.com.gr/");
    const desktop= await page.locator("//a[normalize-space()='Desktops']");
    const mac1= await page.locator("//a[normalize-space()='Mac (1)']");

      await desktop.hover();
      await mac1.hover();

      await page.waitForTimeout(5000);

      
    

})