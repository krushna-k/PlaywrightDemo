import {test,expect} from '@playwright/test';

// test('Upload single file', async({page})=>{

//     await page.goto("https://www.foundit.in/");
//     await page.waitForSelector('.mqfihd-upload');
//     (await page.waitForSelector('.mqfihd-upload')).click();

//     await page.locator('#file-upload').setInputFiles('tests\uploadfiles\testfile1.pdf');


//     await page.waitForTimeout(5000);



// })

test('uploadmultiple file',async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator('#filesToUpload').setInputFiles(['tests\krushna\voterid.pdf', 'tests\krushna\voterid2.pdf']);
    await page.waitForTimeout(5000);
    expect(await page.locator('#FileList li:nth-child(1)').toHaveText('voterid'));
expect(await page.locator('#FileList li:nth-child(1)').toHaveText('voterid2'));
await page.waitForTimeout(3000)
//removing files
await page.locator('#filesToUpload').setInputFiles([]);

})