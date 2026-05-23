import {Page,Locator,test,expect} from '@playwright/test';

export class orangeLoginA{

         page:Page;
         uername:Locator;
         password:Locator;
         //button[@type="submit"]
         login:Locator;


         constructor(page:Page){
            this.page=page;
            this.uername=page.getByPlaceholder('Username');
            this.password=page.getByPlaceholder("Password");
            this.login=page.locator('//button[@type="submit"]');





         }
         async goto(){
            await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
         }
         async LoginMethod(username:string, password:any){
              await this.uername.fill(username)
              await this.password.fill(password)

         }
         async loginClick(){
            await this.login.click();
         }
}