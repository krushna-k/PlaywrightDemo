const {test, expect}=require('@playwright/test');

exports.CheckOutInformation=


class CheckOutInformation{
      constructor(page) {

      
    this.page=page;
    this.firstName='#first-name';
    this.lastName='#last-name';
    this.postalCode='#postal-code';
    this.continue='#continue';
 this.finish='#finish';

      }

      async FillAllInfo(){

        await this.page.locator(this.firstName).fill('Krushna');
        await this.page.locator(this.lastName).fill('kodape');
        await this.page.locator(this.postalCode).fill('425114');
        await this.page.locator(this.continue).click();
        await this.page.locator(this.finish).click();
        

      }

      
    
}