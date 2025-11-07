import{test, expect}  from '@playwright/test';
import { saucelogib12 } from '../pages/saucelogin12';
import { sauceAddTocart } from '../pages/sauceAddTocart12';

test ('login', async({page})=>{

    const userlog=new saucelogib12(page);

    await userlog.goto();
    await userlog.userlogin('standard_user', 'secret_sauce');
   // await page.waitForTimeout(5000)
await expect(page.locator('.title')).toHaveText('Products');

const productPage= new sauceAddTocart(page);

 await productPage.addProductToCart();
await productPage.addProductToCart('Sauce Labs Bike Light');
 await productPage.goToCart();
 await page.waitForTimeout(3000);
})