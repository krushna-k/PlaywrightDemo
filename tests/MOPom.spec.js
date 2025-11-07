import {test,expect} from '@playwright/test';

import { MOLogin } from '../pages/MOLogin';
import {MOHomePage} from '../pages/MOHomePage';

test('test', async({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const login=new MOLogin(page);

    await login.userLogin();
    await page.waitForTimeout(3000);

    const signOut1= new MOHomePage(page);

      await signOut1.signOut();
      await page.waitForTimeout(3000);
     await signOut1.verifyButton();
     

})