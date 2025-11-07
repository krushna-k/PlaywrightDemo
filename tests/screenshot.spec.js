import {test,expect} from '@playwright/test';

test('page screenshot',async({page})=>{
  await page.goto('https://www.opencart.com/index.php?route=cms/demo');

await page.screenshot({path:'tests\screenshot' + Date.now() + 'HomePage.png'} );

})


test('full page screenshot',async({page})=>{
await page.goto('https://www.opencart.com/index.php?route=cms/demo');
    await page.screenshot({path:'tests\screenshot'+Date.now() + 'FullPage.png',fullPage:true});
})

test.only('element screenshot',async({page})=>{
await page.goto('https://www.opencart.com/index.php?route=cms/demo');
await page.locator("//a[@href='https://demo.opencart.com/']").screenshot({path:'tests\screenshot'+Date.now() + 'FullPage.png'});    
})