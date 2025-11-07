import {test,expect} from '@playwright/test';


test ('Handle Multiple Dropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.selectOption('#colors',['Blue','Red','Yellow']);

    //assertions to check number of option in dropdown
    const options=await page.$$('#colors option')
    console.log("number of option", options.length)

    await page.waitForTimeout(5000);
})
