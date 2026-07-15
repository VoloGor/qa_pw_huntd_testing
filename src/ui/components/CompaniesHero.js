import { BaseComponent } from './BaseComponent.js';
import { expect } from '@playwright/test';

export class CompaniesHero extends BaseComponent {
  constructor(page) {
    super(page, page.locator('.CompaniesLanding_section__TBYlA'));

    this.title = this.host.getByRole('heading', {
      name: /Hire handpicked A.?Player engineers across the globe/,
    });
    this.subtitle = this.host.locator('p.typography_alertText__XN7_r');
    this.hireEngineersBtn = this.host.locator('a.GlobeBlock_heroButton__L_MEL');
  }

  async getTitleText() {
    return await this.title.textContent();
  }

  async getSubtitleText() {
    return await this.subtitle.textContent();
  }

  async verifyTitleContains(expectedText) {
    await expect(this.title).toContainText(expectedText);
  }

  async clickHireEngineers() {
    await this.hireEngineersBtn.click();
  }
}
