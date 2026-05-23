import {test,expect,Locator,chromium} from '@playwright/test';

test ('test', async({browser})=>{

  //  const browser=chromium.launch();
    const context=(await browser).newContext();
     const page=(await context).newPage();
     (await page).goto("https://testautomationpractice.blogspot.com/");
(await page).waitForTimeout(2000);

     
})