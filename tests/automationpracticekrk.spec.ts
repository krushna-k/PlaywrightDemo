import {test,expect} from '@playwright/test';

test("test",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByPlaceholder("Enter Name").fill("krushna ");
    const dropdown:any=await page.locator("#male").click();
    await expect(page.locator("#male")).toBeChecked();

    const days=['Sunday','Monday', 'Tuesday', 'Wednesday']
    const checkboxs=days.map(day=>page.getByLabel(day));
    for (const checkbox of checkboxs ){

        await checkbox.check();
    }


    await page.locator("#country").selectOption(['usa','canada','uk']);

          //const options = page.locator('#country > option'); 
//await expect(options).toHaveCount(10); 

const options=await page.locator("#country > option").allTextContents();
 for (const text of options){

    console.log(text)
 }

 page.on("dialog", dialog=>dialog.accept())

 //page.on('dialog', dialog => dialog.accept());
await page.locator('#promptBtn').click();

//file upload
await page.locator("#singleFileInput").setInputFiles("tests/krushna/voterid.pdf");

// drag and drop in playwright

await page.getByText("Drag me to my target").dragTo(await page.locator("#droppable"));


// slider range
const slider= await page.locator("//ui-slider-handle ui-corner-all ui-state-default']");

await slider.fill('80');




    
    await page.waitForTimeout(2000);

})
