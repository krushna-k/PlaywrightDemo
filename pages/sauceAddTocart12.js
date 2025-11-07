exports.sauceAddTocart=

class sauceAddTocart{

    constructor(page){

        this.page=page;
        this.cartItom='.shopping_cart_link';

    }
async addProductToCart(ProductName){

    const productbutton= this.page.locator(`xpath=//div[text()='${ProductName}']/ancestor:://div[@class='inventory_item']//button`);

    await productbutton.click();

     

}
async goToCart(){

    await this.page.locator(this.cartItom).click()
}
    
}