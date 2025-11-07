import {test,expect} from '@playwright/test';

test('Handle Input Box',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
     await expect (await page.locator("//input[@id='name']")).toBeVisible();
     await expect (await page.locator("//input[@id='name']")).toBeEmpty();
      await expect (await page.locator("//input[@id='name']")).toBeEditable();

       await page.locator("//input[@id='name']").fill('krushna');

       await page.waitForTimeout(5000);
})


import test,{chromium} from '@playwright/test'

test (LargestContentfulPaint, async()=>{"
    const briwe=await chromium.launch();
    const conter
    "})