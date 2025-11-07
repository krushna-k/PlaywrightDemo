import {test,expect} from '@playwright/test';

test('handle drap and drop', async({page})=>{

    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
  const seoul=  await page.locator('#box5');
 const spain=await page.locator('#box107');
 //aaproch 1
//  await seoul.hover();
//  await page.mouse.down();
//  await spain.hover();
//  await page.mouse.up();

 await page.waitForTimeout(5000);
 //second approch
await seoul.dragTo(spain);

})