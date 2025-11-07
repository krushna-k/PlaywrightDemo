import {test, expect} from '@playwright/test';

test('handle hooks', async({page})=>{

    await page.goto("https://demoblaze.com/index.html");
    //login
    await page.locator("#login2").click();

    await page.locator("#loginusername").fill('krushnakhodape2000@gmail.com');
    await page.locator("#loginpassword").fill('Kru@1234');
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.waitForTimeout(5000);


    //test1 home page
    const products=await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    // test2 add product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog' , async dailog=>{
     expect(dailog.message()).toContain('Product added.')
     dailog.accept();
    })
    

//logout
await page.locator('#logout2').click();
})
