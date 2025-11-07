import {expect, test} from '@playwright/test';
import { sauceDemo } from '../pages/sauceDemo';
import { sauceverify } from '../pages/sauceverify';
import {Products} from '../pages/Products';
import { CheckOutInformation } from '../pages/CheckOutInformation'; 
import { CartSauce } from '../pages/CartSauce';
//import { CartSauce } from '../pages/CartSauce';

test('test', async({page})=>{


    const login=new sauceDemo(page);

     await login.goto();
     await login.Userlogin('standard_user', 'secret_sauce');
      const verify= new sauceverify(page);

      await verify.VerifyTitle();

      const Add= new Products(page);
         await Add.AddToProductInCart();
         await Add.CheckOut();

         const kk= new CheckOutInformation(page);

         await kk.FillAllInfo();
         
        

        //const cartPage=  new CartSauce(page);
        //cartPage.ValidateProduct(Products.Product1)
await page.waitForTimeout(3000);
})

