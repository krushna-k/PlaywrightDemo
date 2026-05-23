import {test,expect,Page,Locator} from '@playwright/test';
import { testAutomation } from '../pages/testAutomation';

test ("test Automation", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

   let  test = new testAutomation(page);
   
//await page.waitForTimeout(2000)
    await test.veriFyTitle();
    await test.InputName("krushna");
    await test.InputEmail("krushnaskhodape2000@gmail.com")
    await test.ClickBtton();

    await page.waitForTimeout(2000);


})