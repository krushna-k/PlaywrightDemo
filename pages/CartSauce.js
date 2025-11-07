exports.CartSauce=

class CartSauce{

    constructor(page){

        this.page=page;
        this.cartItenName="//div[@class='inventory_item_name']";


    }
    async ValidateProduct(expectedName){

        const cartItem=await this.page.locator(this.cartItenName).textContent();
        await expect(cartItem).toBe(expectedName)
    }
}