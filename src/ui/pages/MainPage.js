import { expect } from '@playwright/test';
import { BasePage } from './BasePage.js';
import { Header } from '../components/Header.js';
import { HeroBlock } from '../components/HeroBlock.js';

export class MainPage extends BasePage {
  constructor(page) {
    // Navigate to the root homepage
    super(page, '/');

    // Aggregate sub-components (Composition)
    this.header = new Header(page);
    this.heroBlock = new HeroBlock(page);
    this.emailInput = this.page.getByRole('textbox', { name: 'Email' });
  }

  // Page-level action methods
  async fillEmailField(email) {
    await this.emailInput.fill(email);
  }

  async openSignUpPage() {
    await this.header.clickSignUp();
  }

  async verifyEmailFieldVisible() {
    await expect(this.emailInput).toBeVisible();
  }

  async verifyEmailFieldValue(email) {
    await expect(this.emailInput).toHaveValue(email);
  }

}
