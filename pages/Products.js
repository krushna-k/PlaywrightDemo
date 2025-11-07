exports.Products=

class Products{

    constructor(page){

        this.page=page;

        this.Product1='#add-to-cart-sauce-labs-backpack';
        this.Product2='#add-to-cart-sauce-labs-bolt-t-shirt';
        this.cartButton='.shopping_cart_link';
        this.Checkout="#checkout";
       




    }
    async AddToProductInCart(){

        await this.page.locator(this.Product1).click();
         await this.page.locator(this.Product2).click();
          await this.page.locator(this.cartButton).click();



    }
    async CheckOut(){

        await this.page.locator(this.Checkout).click();
    }
}