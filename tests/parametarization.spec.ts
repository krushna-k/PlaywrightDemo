import {test, expect} from '@playwright/test';
import fs from 'fs';

// test ("search test", async({page})=>{

//     await page.goto("https://demowebshop.tricentis.com/");

//     await page.locator('//a[text()="Log in"]').click();
//     await page.locator("#Email").fill("krushnakhodape2000@gmail.com");
//      await page.locator("#Password").fill("Kru@12345");
//       await page.locator("//input[@value='Log in']").click();


   const datapath="testdata\data.json";
   //read data from json path
   const loginData:any=JSON.parse(fs.readFileSync(datapath, "utf-8"));
 test.describe("login data", async()=>{
   for (const[email,password, validity] of loginData ){

   // test.describe("login data", async()=>{

        test(`login ${email} and ${password}`, async({page})=>{
            
    await page.goto("https://demowebshop.tricentis.com/");

    await page.locator('//a[text()="Log in"]').click();
    await page.locator("#Email").fill(email);
     await page.locator("#Password").fill(password);
      await page.locator("//input[@value='Log in']").click();

      if (validity.toLowerCase()==="valid"){
        const logoutLink=page.locator("//a[@class='ico-logout']");
       await  expect(logoutLink).toBeVisible({timeout:5000})



      }
      else{
        const errorMessage=page.locator("/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[1]/div/span");
        await expect(errorMessage).toBeVisible({timeout:5000})
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
      }


        })
    }
   


     

    

    

    

})