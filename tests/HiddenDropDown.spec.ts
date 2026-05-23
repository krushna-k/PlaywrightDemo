import {test,expect,Locator} from '@playwright/test';

test ("Hidden Drop down", async({page})=>{

    await page.goto("https://www.flipkart.com/");

await page.locator('input[name="q"]').fill("smart");

await page.waitForTimeout(5000);
const options:Locator= page.locator("ul>li");
const count= await options.count();
console.log(count);


console.log(await options.nth(5).innerText());

for (let i=0; i< count; i++){

    const text= await options.nth(i).innerText();
   // await page.waitForTimeout(2000)
    if( text==="smartphone"){
        options.nth(i).click();
        break;

    }
}
//select one option
await page.waitForTimeout(2000);
})