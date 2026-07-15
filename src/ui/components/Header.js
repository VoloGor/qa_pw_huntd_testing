import { expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent.js';

export class Header extends BaseComponent {
  constructor(page) {
    super(page, page.locator('header.Header_header__kCly7'));

    this.logo = this.host.locator('a.Logo_logo__HjdDJ');
    this.switcher = this.host.locator('.Switcher_switcher___sCX2');
    this.forCompaniesBtn = this.switcher.locator('button:has-text("For companies")');
    this.forEngineersBtn = this.switcher.locator('button:has-text("For engineers")');
    this.candidatesLink = this.host.locator('a[href="/candidates"]');
    this.jobsLink = this.host.locator('a[href="/jobs"]');
    this.signInBtn = this.host.locator('a[href="/sign-in"]');
    this.signUpBtn = this.host.locator('a[href="/sign-up"]');
  }

  async selectForCompanies() {
    await this.forCompaniesBtn.click();
  }

  async selectForEngineers() {
    await this.forEngineersBtn.click();
  }

  async clickSignIn() {
    await this.signInBtn.click();
  }

  async clickSignUp() {
    await this.signUpBtn.click();
  }

  // Verification methods
  async verifyHeaderVisible() {
    await expect(this.logo).toBeVisible();
    await expect(this.signInBtn).toBeVisible();
    await expect(this.signUpBtn).toBeVisible();
  }

  async verifyActiveView(view) {
    if (view === 'companies') {
      await expect(this.forCompaniesBtn).toHaveClass(/is-active/);
      await expect(this.forEngineersBtn).not.toHaveClass(/is-active/);
    } else if (view === 'engineers') {
      await expect(this.forEngineersBtn).toHaveClass(/is-active/);
      await expect(this.forCompaniesBtn).not.toHaveClass(/is-active/);
    }
  }
}
