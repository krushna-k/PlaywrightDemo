import {test,expect, Locator} from '@playwright/test';

test("verify Locator", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

 const sum:Locator= await page.getByRole("button", {name:"start"});
   await sum.click();
 await expect(sum).toBeVisible();
  await page.waitForTimeout(2000);
    //await page.waitForTimeout(2000)

})
