import {test, expect}  from '@playwright/test';
import { Login1 } from '../pages/pages1/Login1';
import { HomePage1 } from '../pages/pages1/HomePage1';

test ('test', async({page})=>{
// login page
    const login= new Login1(page);
      await login.GotoLogin();
      await login.userLogin('krushnakhodape2000@gmail.com', 'Kru@1234');

      await page.waitForTimeout(3000);
// home page 1
const home=new HomePage1(page);
await home.SelectProductList('Samsung galaxy s6');
await home.Gotocart();
await page.waitForTimeout(3000);


})