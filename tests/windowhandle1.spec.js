import {test, expect, chromium } from '@playwright/test';

test ('test', async()=>{

    const browser= await chromium.launch();
      const context =await browser.newContext();

      const page=await context.newPage();

      await page.goto



})
