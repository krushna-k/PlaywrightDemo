exports.saucelogib12=

class saucelogin12{

    constructor(page){
        this.page=page;
        this.enterusername='#user-name';
        this.enterpassword='#password';
        this.login='#login-button';


    }
    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    async userlogin(username, password){

      await this.page.locator(this.enterusername).fill(username);
      await this.page.locator(this.enterpassword).fill(password);
      await this.page.locator(this.login).click();
     
    }
}