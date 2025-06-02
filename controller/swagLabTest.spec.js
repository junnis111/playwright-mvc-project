import { test } from "@playwright/test";
import LoginPage from "../view/loginPage.js";
import HomePage from "../view/homePage.js";
import CheckoutPage from "../view/checkoutPage.js";
import { loginUser, checkoutInfo, productToAdd } from "../model/userData.js";

test("Swag Lab - Complete Order Flow", async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const checkout = new CheckoutPage(page);

  await login.goTo();
  await login.login(loginUser.username, loginUser.password);
  await home.addToCart(productToAdd);
  await checkout.completeCheckout(
    checkoutInfo.firstname,
    checkoutInfo.lastname,
    checkoutInfo.postalcode
  );
});