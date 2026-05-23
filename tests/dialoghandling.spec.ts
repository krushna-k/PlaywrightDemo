import {test, expect} from '@playwright/test';

test ("handle dailog" ,async({page})=>{

  page.on('dialog',async (dialog)=>{
console.log("dialogmessahe:", dialog.message())
await dialog.accept("my input");
 await dialog.dismiss();


 })
 await page.goto("");


})