import {test,expect} from '@playwright/test';

test('first demo', async({page})=>{

    await page.goto("");

    await expect(page).toHaveTitle('Login');
    
    await page.waitForTimeout(3000);
    
})