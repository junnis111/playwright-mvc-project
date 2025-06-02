import { expect } from "@playwright/test";

export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = "#user-name";
    this.password = "#password";
    this.loginButton = "#login-button";
    this.productName = ".title";
  }

  async goTo() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginButton).click();
    await expect(this.page.locator(this.productName)).toHaveText("Products");
  }
}