import {test, expect} from '@playwright/test';

test('automation testig practic' ,async({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

await page.locator('#name').fill("krushna ramdas khodape");
await page.locator('#email').fill("krushnakhodape2000@gmail.com");
await page.locator('#phone').fill('9657078554');
await page.locator("//textarea[@id='textarea']").fill('at post neri bk tal jamner dist jalgaon');

//await page.waitForTimeout(5000);
//radiobutton
await page.locator("//label[normalize-space()='Male']").check();
await expect (await page.locator("//input[@id='female']")).toBeChecked();
await page.waitForTimeout(5000);
 //await expect(await page.locator('id=male')).toBeChecked();
//await page.waitForTimeout(5000);



})