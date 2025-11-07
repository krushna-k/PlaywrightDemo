import {test,expect} from '@playwright/test'

test('handle hidden Dropdown', async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill('admin');
    await page.locator("input[placeholder='Password']").fill('admin123');
    await page.locator("//button[normalize-space()='Login']").click();

    await page.locator("//a[@class='oxd-main-menu-item active']//*[name()='svg']").click();


     //click on drop down
     await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[1]");
     await page.waitForTimeout(3000);
      const options= await page.$$("//div(@role='listbox']//span")
      for(const option of options){
        const jobTitle=await option.textContent();
        console.log(jobTitle);
      }

    await page.waitForTimeout(3000);




})