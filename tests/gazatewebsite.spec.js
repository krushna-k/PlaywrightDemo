import {test, expect} from '@playwright/test';

test ('gazate website', async({page})=>{


    await page.goto('https://egazzete.mahaonline.gov.in/Forms/GazetteSearch.aspx');

   // await page.locator('#CPH_ddldivision').click();
      await page.locator('#CPH_ddldivision').selectOption({value: '2'})
      // await page.locator('#CPH_ddldivision').selectOption({index:2});
      await page.locator('#CPH_ddlSection').selectOption({value: '5'});
      await page.locator('#CPH_txtfromDate').fill('11/11/2024');
      await page.locator('#CPH_txtToDate').fill('30/11/2024');
    await page.locator('#CPH_ddlGazetteType').selectOption({value: '0'});
    await page.locator('#CPH_btnSearch').click();
    const results = await page.locator('#ContentPlaceHolder1_gvGazette');
  await expect(results).toBeVisible();
});

     await page.waitForTimeout(5000);
    

