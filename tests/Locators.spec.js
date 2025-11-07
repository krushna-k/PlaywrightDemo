import {test, expect} from '@playwright/test';

test ('Locator', async({page})=>{

   await page.goto('https://demoblaze.com/');
   //  await page.locator('id=login2').click();
   //  await page.waitForSelector(2000);
   //  await page.locator('id=loginusername').fill('krushna');
    // await page.locator('id=loginpassword').fill('123456789');


    // handling multipe web element in web
     //const links =await page.$$('a');
     //for( const link of links){
       // const linktext= await link.textcontent();
        //console.log(linktext);


        const products =await page.$$('');
        for (const product of products){
             const productName =await product.textContent();
             console.log(productName);
        }
     }
     
)
    

