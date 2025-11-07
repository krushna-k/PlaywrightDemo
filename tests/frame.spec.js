import {test,expect} from '@playwright/test';

test('Frame', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //total frame
    const allframes=await page.frames()
    console.log("number of frame:", allframes.length)

    //1) using name or url 
     // const frame1=await page.frame('name');
      //const frame1=await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});

    // await   frame1.fill("[name='mytext1']", 'krushna');
    //2) using frame locator

    const inputValue=await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")

inputValue.fill("krushna");


    await page.waitForTimeout(5000);
})