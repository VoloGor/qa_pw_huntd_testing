import { BaseComponent } from './BaseComponent.js';
import { expect } from '@playwright/test';

export class HeroBlock extends BaseComponent {
  constructor(page) {
    super(page, page.locator('.NewHeroBlock_heroBlockWrapper__qzZnD'));

    this.title = this.host.locator('.NewHeroBlock_title__uq9ZK');
    this.subtitle = this.host.locator('.NewHeroBlock_subtitle__aq5Un');
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

  async verifySubtitleContains(expectedText) {
    await expect(this.subtitle).toContainText(expectedText);
  }
}
