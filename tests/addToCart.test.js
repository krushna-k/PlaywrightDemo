import { test } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { ProductPage } from "../pages/product.page";
//import { CartPage } from "../pages/cart.page";

test("Add to cart and validate product - POM", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  //const cartPage = new CartPage(page);

  // Step 1: Go to login page
  await loginPage.gotoLoginPage();

  // Step 2: Login
  await loginPage.login("standard_user", "secret_sauce");

  // Step 3: Add product to cart
  await productPage.AddProductToCart();

  // Step 4: Go to cart
  await productPage.ClickOncartIcon();

  // Step 5: Validate product in cart
  //await cartPage.validateProduct(productPage.productName);
 // await cartPage.validateProduct(productPage.productName);

});
