// import { test } from '@playwright/test';
// import { CheckboxPage } from '../pages/checkbox.page';

// test('Handle Checkbox with POM', async ({ page }) => {
//   const checkboxPage = new CheckboxPage(page);

//   // Open site
//   await checkboxPage.open();

//   // Single checkbox actions
//   await checkboxPage.checkMonday();
//   await checkboxPage.verifyMondayChecked();
//   await checkboxPage.verifyMondayTruthy();
//   await checkboxPage.verifySundayFalsy();

//   // Multiple checkbox actions
//   await checkboxPage.handleMultipleCheckboxes();

//   await page.waitForTimeout(5000);
// });


import  {test,expect} from '@playwright/test';
import { CheckBoxPage1 } from '../pages/CheckboxPage1';

test ('test', async({page})=>{

    const checkBoxPage= new CheckBoxPage1(page);

    await checkBoxPage.open();
    await checkBoxPage.ClickOnCheckBox();
    await checkBoxPage.ValidateChcekBox();
    await checkBoxPage.validatecheckBoxBytrithy();
    await page.waitForTimeout();

    

})