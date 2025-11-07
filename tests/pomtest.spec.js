import {test,expect}from '@playwright/test';
import { LoginPage } from '../pages/Login';
import { HomePage } from '../pages/HomePage';
import { AddToCart } from '../pages/AddToCart';
//loginpage
test ('test', async({page})=>{

const login=new LoginPage(page);
await login.gotoLoginPage();
await login.login('krushnakhodape2000@gmail.com', 'Kru@1234');
await page.waitForTimeout(3000);

// home page
const home= new HomePage(page);
await home.AddToProductCart('Samsung galaxy s6');
await page.waitForTimeout(3000);
await home.GotoCart();

//aadd to cart

const cart= new AddToCart(page);
await page.waitForTimeout(3000);
const status=await cart.CheckProductIncart('Samsung galaxy s6');
expect(await status).toBe(true);

})