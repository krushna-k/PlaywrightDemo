import {test,expect} from '@playwright/test';

test('Handle Dropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    //await page.locator('#country').selectOption({label:'India'});
    //await page.locator('#contry').selectOption('India');
   // await page.locator('#country').selectOption({value:'uk'});
   //  await page.locator('#country').selectOption({index:2});
    
     //Assertions
     //check the number of option in dropdown
     //const options= await page.locator('#country option');
     //await expect(options).toHaveCount(10);
    
   // const options=page.$$('#country option')
    //
    // console.log("Nuber of option:", options.length)

    //3] to check wether the value of dropdown present or not

      //  const content=await page.locator('#country').textContent()
     //  await expect(content.includes('India')).toBeTruthy();

    //
   //
   // 
   // await page.waitForTimeout(5000);

   //to check whether dropdown option present or not

   const options=await page.$$('#country option')

   for(const option of options){
    console.log(await option.textContent())
   }

})