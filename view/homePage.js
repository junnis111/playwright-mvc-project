import { expect } from "@playwright/test";

export default class HomePage {
  constructor(page) {
    this.page = page;
    this.productList = "div.inventory_item_name";
    this.addToCartBtn = "//button[@id='add-to-cart']";
    this.cartIcon = "//span[@class='shopping_cart_badge']";
  }

  async addToCart(productName) {
    const products = await this.page.$$(this.productList);
    for (const product of products) {
      const name = await product.textContent();
      if (name === productName) {
        await product.click();
        break;
      }
    }
    await this.page.locator(this.addToCartBtn).click();
    await expect(this.page.locator(this.cartIcon)).toHaveText("1");
    await this.page.locator(this.cartIcon).click();
  }
}