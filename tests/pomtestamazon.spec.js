import {test,expect} from '@playwright/test';

import { HomePageAmazon } from '../pages/pages1/HomePageAmazon';

test('test', async({page})=>{

    const homeamazon= new HomePageAmazon();
     await page.goto('https://www.amazon.com/');
    //await homeamazon.gotoMethod();
    await homeamazon.searchProduct();
    await homeamazon.firstProduct();
    await page.waitForTimeout(3000);
})