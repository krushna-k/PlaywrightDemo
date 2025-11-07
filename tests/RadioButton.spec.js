import {test,expect} from '@playwright/test';

test('Radio button',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('id=male').check();//male

    await expect(await page.locator('id=male')).toBeChecked();
    await expect(await page.loactor('id=male')).toBeChecked().toBeTruthy();
    await page.waitForTimeout(4000);
    await expect(await page.locator('id=female')).toBeChecked().toBeFalsy();


       await page.waitForTimeout(7000);
})