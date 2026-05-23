import {test,expect, Locator} from '@playwright/test';

test("checkbox", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
//     const inputBox:Locator=page.locator("#name");
//     await inputBox.fill("krushna");

//    // await page.waitForTimeout(2000);
//     const radiobutton=page.locator("#male");
//     expect(radiobutton).toBeEnabled();
//     expect(radiobutton).toBeVisible();

   // await radiobutton.check();
    //await radiobutton.uncheck();

    //await page.waitForTimeout(2000);
    const days:string[]=["Sunday", "Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];
     const checkboxes=  days.map(day=>page.getByLabel(day));
       for (const checkbox of checkboxes){

        await checkbox.check();
        await expect(checkbox).toBeChecked()
       }

       for (const checkbox of checkboxes.slice(-3)){

        await checkbox.uncheck()
        await expect(checkbox).not.toBeChecked()
       }

       for (const checkbox of checkboxes){

      if(await checkbox.isChecked()){

        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
        
        }
else{
  await checkbox.check();
  await expect(checkbox).toBeChecked();
}
      }

      //select by index
      const indexs=[1,3,6];
      for(const i of indexs){
        await checkboxes[i].check();
        await expect (checkboxes[i]).toBeChecked();
        
      }
       }


)