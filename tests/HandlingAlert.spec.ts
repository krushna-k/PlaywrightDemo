import {test,expect, Locator} from '@playwright/test';

test("handling alert", async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");
    
    page.on("dialog", dialog=>{

        console.log("dialog type:", dialog.type());
         expect(dialog.type()).toContain("prompt");
        console.log("type message:", dialog.message())
        expect (dialog.message()).toContain("Please enter your name:");


        dialog.accept("john");
    })
    
    await page.locator("#promptBtn").click();

          const printmsg:string= await page.locator("#demo").innerText();
          console.log('print msg', printmsg);



          //await expect(pritmsg).toHaveText("You pressed OK!");

await page.waitForTimeout(5000)
})

