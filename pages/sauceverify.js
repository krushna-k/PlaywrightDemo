const {expect,test}=require ('@playwright/test')
exports.sauceverify=

class sauceverify{

    constructor(page){

        this.page=page;
        this.title="//div[@class='app_logo']";


    }

    async VerifyTitle(){

        await expect(this.page.locator(this.title)).toBeVisible();

    }
}

