import{test, expect} from '@playwright/test';

test('Assertions', async({page})=>{

await page.goto('https://demo.nopcommerce.com/register');
// radiobutton
 const MaleDropDown =await page.locator('#gender-male');
  await MaleDropDown.click();
  await expect(MaleDropDown).toBeChecked();

  //checkbox

 const checkbox=await page.locator("//input[@id='Newsletter']");
  await expect(checkBox).toBeChecked();
  



 "//input[@id='Newsletter"

})