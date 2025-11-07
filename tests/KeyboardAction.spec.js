import {test,expect} from '@playwright/test';

test('handle Keyboard Action', async({page})=>{


    await page.goto("https://gotranscript.com/text-compare");
    await page.type('[name="text1"]', 'I love ypo ruchika');
   // control A selct text
   await page.keyboard.press('Control+A');
   //Control C copy text
   await page.keyboard.press('Control+C');
   //tab action
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    // Control V paste the action

    await page.keyboard.press('Control+V')
    await page.waitForTimeout(5000);


})