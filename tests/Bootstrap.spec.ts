import {test, expect,Locator} from '@playwright/test';

test ("bootstap drop", async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()
    await page.waitForTimeout(3000);
    await page.getByText("PIM").click();

await page.waitForTimeout(3000);

await page.locator("form i").nth(2).click();
await page.waitForTimeout(2000);
 const options:Locator=page.locator("div[role='listbox'] span");
     const count= await options.count();

    console.log(  await options.allTextContents());

    for (let i=0; i<count; i++){
       const text= await options.nth(i).innerText();
       console.log(text);
       


    }



    

})