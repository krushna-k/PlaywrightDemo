import { expect } from "@playwright/test";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItemName = ".inventory_item_name";
  }
 async validateProduct (expectedProduct){

    const validatecartProduct= await this.page.locator(this.cartItemName).textContent();

    await expect (validatecartProduct).toBe(expectedProduct)
 }
}