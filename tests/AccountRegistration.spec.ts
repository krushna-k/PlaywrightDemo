import {test,expect} from '@playwright/test';
import { HomePageOpenKart } from '../pages/HomePageOpenKart';
import { TestConfig } from './test.config';

    let homePageOpenKart:HomePageOpenKart;
    let config:TestConfig;

test ('user registration page', async({page})=>{

    //let homePageOpenKart:HomePageOpenKart;
    config= new TestConfig();
    await page.goto(config.appUrl)
   // config= new TestConfig();
    homePageOpenKart= new HomePageOpenKart(page)
    await homePageOpenKart.ClickMyAccount()
    await homePageOpenKart.clickOnRegister();



})