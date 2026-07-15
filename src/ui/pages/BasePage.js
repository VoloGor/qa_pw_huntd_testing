import { expect } from '@playwright/test';

export class BasePage {
  constructor(page, url) {
    this.page = page;
    this.url = url;
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async waitForLoaded() {
    await this.page.waitForURL(this.url);
  }

  async verifyUrl() {
    await expect(this.page).toHaveURL(new RegExp(this.url));
  }
}
