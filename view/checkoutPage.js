import { expect } from "@playwright/test";

export default class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkOutBtn = "#checkout";
    this.firstname = "#first-name";
    this.lastname = "#last-name";
    this.postalcode = "#postal-code";
    this.continueBtn = "#continue";
    this.finishBtn = "#finish";
    this.backHomeBtn = "#back-to-products";
    this.checkOutComplete = ".complete-header";
  }

  async completeCheckout(firstname, lastname, postalcode) {
    await this.page.locator(this.checkOutBtn).click();
    await this.page.locator(this.firstname).fill(firstname);
    await this.page.locator(this.lastname).fill(lastname);
    await this.page.locator(this.postalcode).fill(postalcode);
    await this.page.locator(this.continueBtn).click();
    await this.page.locator(this.finishBtn).click();
    await expect(this.page.locator(this.checkOutComplete)).toHaveText("Thank you for your order!");
    await this.page.locator(this.backHomeBtn).click();
  }
}