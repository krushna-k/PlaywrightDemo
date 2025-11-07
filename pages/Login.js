exports.LoginPage=
class LoginPage{
  

    constructor(page){

        this.page=page;
        this.loginLink='#login2';
        this.userNameInput='#loginusername';
        this.PassworsInput='#loginpassword';
        this.loginButton='//button[normalize-space()="Log in"]';




    }

    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/index.html');
    }
 async login(username,password){

    await this.page.locator(this.loginLink).click();
    await this.page.locator(this.userNameInput).fill(username);
    await this.page.locator(this.PassworsInput).fill(password);
    await this.page.locator(this.loginButton).click();

 }

}


exports.logon=

class login{

    constructor(page){
        this.page=page;
        this.loginLink='#login2';
        this.userNameInput='#loginusername';
        this.PassworsInput='#loginpassword';
        this.loginButton='//button[normalize-space()="Log in"]';

    }
    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/index.html');
    }
    async urLogin(username, passowrd){

        await this.page.locator(this.loginLink).click();
    await this.page.locator(this.userNameInput).fill(username);
    await this.page.locator(this.PassworsInput).fill(password);
    await this.page.locator(this.loginButton).click();
    }
}




