exports.sauceDemo=

class sauceDemo{

    constructor(page){

        this.page=page;
        this.username1='#user-name';
        this.userPassword='#password';
        this.loginButton='#login-button';

    }

    async goto(){

        await this.page.goto('https://www.saucedemo.com/');
    }

     async Userlogin(username,password){

        await this.page.locator(this.username1).fill(username);

        await this.page.locator(this.userPassword).fill(password);

        await this.page.locator(this.loginButton).click();



     }
}
