import {test, expect,Locator, Page} from '@playwright/test';

export class testAutomation{

    readonly page:Page;
    readonly VeriftTitle:Locator;
    readonly FillName:Locator;
    readonly FillEmail:Locator;
    readonly ClickButton:Locator;


    constructor(page:Page){

        this.page=page;
        this.VeriftTitle=page.locator(".title");
        this.FillName=page.locator("#name");
        this.FillEmail=page.locator("#email");
        this.ClickButton=page.locator('//button[@name="start"]')

    }

    async veriFyTitle(){

        let title:string=await this.page.title();
        if(title){
            return true;

        }
        else{
            return false;
        }



    }
    async InputName(FName:string){
       await  this.FillName.fill(FName)

    }
    async InputEmail(Email:string){
       await  this.FillEmail.fill(Email)
    }
async ClickBtton(){

    await this.ClickButton.click()
}



}