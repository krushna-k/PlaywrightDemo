
import{test, expect} from '@playwright/test';
test ('redbus', async({page})=>{

  await page.goto('https://www.redbus.com/');
 // await page.locator('id="twotabsearchtextbox"').click();
 // type sear field
  await page.locator('#src').fill('Bengaluru');
  //wait until the suggestion appeared
  await page.waitForSelector("//li[contains(@class,'sc-iwskb')]");
  //get all suggestions
  const suggestions= await page.locator("//li[contains(@class, 'sc-iwskb')]//div//text[@class='placeHolderMainText']");

  //loop and pick the desired suggestions
  for (const i=0; i< await suggestions.count(); i++){
    const option =suggestions.nth(i);
    const text=await option.textContent();
    if (text.includes('Bejai')){
      await option.click();
      break;
    }
  }



})

import {test, expecr} from '@playwright/test';
test('redbus', async({page})=>{


  await page.goto('');
  await page.locator("").fill();

  await page.waitForSelector();
const suggestions=await page.locator("")

for (const i=0; i< await suggestions.count(); i++){
  const option=suggestions.nth(i);
  const text = await option.textContent();
  if(text.includes('Bejai')){
    
  }
}
})
