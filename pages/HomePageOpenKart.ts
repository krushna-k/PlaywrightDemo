import {Page,expect, Locator} from '@playwright/test';

export class HomePageOpenKart{

//locator
    private readonly page:Page;
    private readonly lnkMyAccount:Locator;
    private readonly lnkRegister:Locator;
    private readonly linkLogin :Locator;
    private readonly textSearchBox:Locator;
    private readonly btnSearch:Locator;
// constructor
constructor(page:Page){

    this.page=page;
    this.lnkMyAccount=page.locator('')
    this.lnkRegister=page.locator('')
    this.linkLogin=page.locator('')
    this.textSearchBox=page.locator('')
    this.btnSearch=page.locator("")

}
//action method
//check if hoem page exist
async isHomePageExists(){
    let tittle:string=await this.page.title();
    if(tittle){
        return true

    }
    return false;
}
//click My account Link
async ClickMyAccount(){
    try{

    await this.lnkMyAccount.click()
}catch(error){
    
    console.log(`exception occrued while clicking'My Account': ${error}`)
    throw error;
}   
}
//click on register link
async clickOnRegister(){
    try{
        await this.lnkRegister.click()
    }
    catch(error){
        console.log(`exception accured while clicking 'regsiter':{error}`);
        throw error;
    }
}
 // Click "Login" link
    async clickLogin(){
        try {
            await this.linkLogin.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw error;
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
        try {
            await this.textSearchBox.fill(pName);
        } catch (error) {
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    // Click the search button
    async clickSearch(){
        try {
            await this.btnSearch.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }
    

} 

