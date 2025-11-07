
 const {expect}=require ('@playwright/test');
class MOHomePage{

    constructor(page){

        this.page=page;
        this.manage="//h1[normalize-space()='Learn Automation Courses']";
        this.click="//img[@alt='menu']";
        this.signout="//button[normalize-space()='Sign out']";

    }
    async signOut(){

        await this.page.click(this.click);
        await this.page.click(this.signout);
    }
    async verifyButton(){

        await expect(this.page.locator(this.manage)).toBeVisible();

    }
}
module.exports=MOHomePage;