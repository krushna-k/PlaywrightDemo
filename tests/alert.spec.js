import {test,expect} from '@playwright/test';

test.skip ('HANDLE alert', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //enbaling alert handle
    page.on('dailog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();


    })
    await page.locator("#alertBtn").click();

    await page.waitForTimeout(5000);

})
test.skip ('HANDLE confirm ok and cancel button', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //enbaling alert handle
    await page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button');
        await dialog.accept();
       // await dialog.dismiss();




   })


    
    await page.locator("#confirmBtn").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('You Pressed OK!');
    await page.waitForSelector(5000);


   // await page.waitForTimeout(5000);
    
})
test('HANDLE prompt alert', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //enbaling alert handle
    await page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')

        await dialog.accept('john');
       // await dialog.dismiss();




   })


    
    await page.locator("#promptBtn").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Harry Potter! How are you today?');
    await page.waitForSelector(5000);


   // await page.waitForTimeout(5000);
    
})