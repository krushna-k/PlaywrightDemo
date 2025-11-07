import {test,expect} from '@playwright/test';
test('inner frame' , async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3=await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});

    //frame3.locator("input[name='mytext3']").fill("krushna");
    const childframe=await frame3.childFrames()
    await childframe[0].locator("//html").check();


    await page.waitForSelector(5000);

})