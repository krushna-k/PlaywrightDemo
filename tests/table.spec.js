// import {test,expect} from '@playwright/test';

// test('handle table', async({page})=>{

//   await   page.goto("https://testautomationpractice.blogspot.com/");
//  const table= await page.locator("//table[@id='productTable']");
//   //total number of rows and column
//    const column=await table.locator('thead tr th');
//        console.log('number of colums:' , await column.count());

//        const rows=await table.locator('tbody tr')
//        console.log('Number of rows:', await rows.count())
//        expect(await rows.count()).toBe(5);
       
       //fetch the value from table and select the checkbox

     /*  const machedRow=rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
       })


      machedRow.locator('input').check();
*/

//select multiple checkbox product by using reusable function
//  await selectProduct(rows, page,'	Smartphone');
//  await selectProduct(rows, page,'	Laptop');
//  await selectProduct(rows, page,'	Smartwatch');
 


// async function selectProduct(rows,page,name){
//   const machedRow=rows.filter({
//         has: page.locator('td'),
//         hasText: 'Smartwatch'


  

   // await machedRow.locator('input').check()

   //await page.waitForTimeout(5000);
   
import {test,expect} from '@playwright/test';
 test('handle table', async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");
  const table=await page.locator('productTable') ////table[@id='productTable']
  //count the number of rows and column

  const columns= await table.locator('thead tr th')
  console.log('number of column:',await columns.count() )
  const rows= await table.locator('tbody tr')
  console.log('number of rows :',await rows.count());
  //expect(await columns.count()).toBe(4);

//   //select check box for smartwatch
//   const matchedRow= await rows.filter({
//    has: page.locator('td'),
//    hasText: 'Smartwatch'
//   })
//   matchedRow.locator('input').check();
//selecy multiple product
// await selectProduct(rows,page,'Laptop')
// await selectProduct(rows,page,'Tablet')
// await selectProduct(rows,page,'Wireless Earbuds')
//4 i want print all table data using loop
// for(let i=0; i<await rows.count();i++){

//    const row=rows.nth(i);
//    const tds=row.locator('td');
  

//    for(let j=0; j< await tds.count()-1; j++){
//       console.log(await tds.nth(j).textContent())

//    }
// }

const pages=await page.locator('.pagination li a')
console.log('Number of pages in the table:', await pages.count())
for(let p=0; p<await pages.count(); p++){
   if(p>0){
      await pages.nth(p).click()
   }
    for(let i=0; i<await rows.count();i++){

    const row=rows.nth(i);
    const tds=row.locator('td');
  

    for(let j=0; j< await tds.count()-1; j++){
       console.log(await tds.nth(j).textContent())

  }
 }
 await page.waitForTimeout()
}
  await page.waitForTimeout(5000);

 async function selectProduct(rows,page,name){
   const matchedRow=rows.filter({
      has: page.locator('td'),
      hasText:'Smartwatch'
         
      
   })
await matchedRow.locator('input').check();

}
await page.waitForTimeout(5000)
 })
