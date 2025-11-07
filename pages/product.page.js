export class ProductPage{

constructor(page) {
  this.page=page;
  this.cartIcon='.shopping_cart_link';
  // list of product we want to add

  this.products=[{
    name:"Sauce Labs Backpack", locator:"//button[@id='add-to-cart-sauce-labs-backpack']"},

    {name:"Sauce Labs Bike Light", locator:"//button[@id='add-to-cart-sauce-labs-bike-light']"}

  ];
}

async AddProductToCart(){

  await this.page.locator(this.products).click();

}

async ClickOncartIcon(){

  await this.page.locator(this.cartIcon).click();
}
}