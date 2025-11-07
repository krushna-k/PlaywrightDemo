import {test,expect} from '@playwright/test';


test ('Handle Multiple Dropdown', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

//how to handle multistrap down
const options=await page.$$('ul>li label')
for (let option of options ){
    const value=await option.textContent()
    if(value.includes('Angular'|| value.includes('java') ){
        await option.click();
    }  )
}
    await page.waitForTimeout(5000);
})
