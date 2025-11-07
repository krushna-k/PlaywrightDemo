import {test, expect} from '@playwright/test';

test('handle checkbox' ,async({page})=>{

    page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='monday' and @type='checkbox']").check();
    await expect( await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked();
     await expect( await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy();
      await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy();
     await page.waitForTimeout(5000);

     //mutiple check box

     const MultipleLocator=[
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='tuesday' and @type='checkbox']"

     ];
     for (const locator of MultipleLocator){
        await page.locator(locator).check();

     }
       for (const locator of MultipleLocator){
        if (await page.locator(locator).isChecked())
        await page.locator(locator).uncheck();

       }
       await page.waitForTimeout(5000);
})

