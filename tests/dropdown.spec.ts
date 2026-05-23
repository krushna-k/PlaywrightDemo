import {test, expect} from '@playwright/test';

test('Handle drop doen', async({page})=>{

    await page.goto("https://egazzete.mahaonline.gov.in/FORMS/CitizenApplicationStatus.aspx");
    await page.locator('#ddlServiceName').selectOption("Change In Name");
    await page.locator("#txtApplicant").fill("2552141882239500008736");
    await page.locator("#btnSearch").click();
    const [download]=await Promise.all([
     page.waitForEvent('download'),
     page.click('#grdShowDetails_Name_lnkBatchNo_0')])
    
   // await page.waitForTimeout(20000)

         

})