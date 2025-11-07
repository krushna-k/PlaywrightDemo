exports.MOLogin=

class MOLogin{

    constructor(page){

        this.page=page;
        this.username='#email1';
        this.password='#password1';
        this.login='.submit-btn';



    }

    async userLogin(){

        await this.page.fill(this.username, 'krushnakhodape2000@gmail.com');
        await this.page.fill(this.password,'Kru@12345');
        await this.page.click(this.login);
        //await this.page.locator(this.logon).click();
    }

}