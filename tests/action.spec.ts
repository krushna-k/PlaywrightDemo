import {test, expect} from "@playwright/test";

test("actions", async({page})=>{

    await page.goto("");
    const actions=await page.locator("");
    await expect(actions).toBeEnabled();
    await expect(actions).toBeEnabled();


    // Radio button handling
//     expect(await maleRadio.isChecked()).toBe(false); 
 
// await maleRadio.check(); 
// await expect(maleRadio).toBeChecked();

// checkBox handling
//Checkboxes allow selecting multiple options. You can check, uncheck, or toggle them. 
  // Scenarios Covered: 
//1.  Select a specific checkbox 

const sundayCheckbox = page.getByLabel('Sunday'); 
await sundayCheckbox.check(); 
await expect(sundayCheckbox).toBeChecked(); 
//2.  Select all checkboxes 
const days = ['Sunday', 'Monday', ...]; 
const checkboxes = days.map(day => page.getByLabel(day)); 
for (const checkbox of checkboxes) { 
  await checkbox.check(); 
  await expect(checkbox).toBeChecked(); 
} 
//3. Uncheck last 3 checkboxes 
for (const checkbox of checkboxes.slice(-3)) { 
  await checkbox.uncheck(); 

  
  await expect(checkbox).not.toBeChecked(); 
} 
//4.  Toggle checkboxes 
for (const checkbox of checkboxes) { 
  if (await checkbox.isChecked()) { 
    await checkbox.uncheck(); 
    await expect(checkbox).not.toBeChecked(); 
  } else { 
    await checkbox.check(); 
    await expect(checkbox).toBeChecked(); 
  } 
} 
//https://www.pavanonlinetrainings.com   https://www.youtube.com/@sdetpavan 
//5.  Select by specific indexes (e.g. 1, 3, 6) 
const indexes = [1, 3, 6]; 
for (const i of indexes) { 
  await checkboxes[i].check(); 
  await expect(checkboxes[i]).toBeChecked(); 
} 
///6.  Select checkbox by label name 
const weekname = "Friday"; 
for (const label of days) { 
  if (label.toLowerCase() === weekname.toLowerCase()) { 
    const checkbox = page.getByLabel(label); 
    await checkbox.check(); 
    await expect(checkbox).toBeChecked(); 
  } 
} 
})