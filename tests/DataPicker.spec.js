import {test,expect} from '@playwright/test'

test('handle Data picker', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
   // await page.fill("#datepicker", '05/30/2024');
     
   const year="2026";
   const month="March";
   const date="20";
   await page.click("#datepicker");
   while(true){
    const currentMonth=await page.locator('.ui-datepicker-month').textContent();
    const currentYear=await page.locator('.ui-datepicker-year').textContent();
    if(currentMonth==month && currentYear==year){
        break;
    }
    await page.locator('[title="Next"]').click();
   }
// date selection with loop
//    const dates= await page.$$("//a[@class='ui-state-default']")
//      for(const dt of dates){
//         if(await dt.textContent()==date){
//             await dt.click();
//             break;
//         }
//      }

//date selection without loop
await page.click("//a[@class='ui-state-default'][test()='${date}']")
   
    await page.waitForTimeout(5000);
}

)