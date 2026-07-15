import { expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent.js';

export class SignUpForm extends BaseComponent {
  constructor(page) {
    super(page, page);

    this.welcomeTitle = this.host.getByRole('heading', { name: 'Welcome aboard!' });
    this.formTitle = this.host.getByText('Create an account');
    this.emailInput = this.host.getByLabel('Email');
    this.passwordInput = this.host.getByRole('textbox', { name: 'Password', exact: true });
    this.repeatPasswordInput = this.host.getByRole('textbox', { name: 'Repeat password', exact: true });
    this.submitBtn = this.host.getByRole('button', { name: 'Create account' });
    this.socialSignUpSection = this.host.getByText('Sign up with');
    this.signUpWithGoogleBtn = this.host.locator('button').filter({
      has: this.host.locator('svg.icon-google'),
    });
    this.signUpWithLinkedinBtn = this.host.locator('button').filter({
      has: this.host.locator('svg.icon-linkedin'),
    });
    this.signUpWithGithubBtn = this.host.locator('button').filter({
      has: this.host.locator('svg.icon-github'),
    });
    this.topCompaniesTitle = this.host.getByRole('heading', { name: 'Top 100 web3 companies' });
    this.viewTop100Link = this.host.getByRole('link', { name: 'View top 100' });
    this.hireDeveloperTitle = this.host.getByRole('heading', { name: 'Hire Web3 Developer' });
    this.remoteJobsTitle = this.host.getByRole('heading', { name: 'Remote Web3 jobs' });
    this.remoteSalariesTitle = this.host.getByRole('heading', { name: 'Remote Web3 Salaries' });
  }

  async fillEmail(email) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async fillRepeatPassword(password) {
    await this.repeatPasswordInput.fill(password);
  }

  async submitSignUpForm() {
    await this.submitBtn.click();
  }

  async signUpWithEmailAndPassword(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.fillRepeatPassword(password);
    await this.submitSignUpForm();
  }

  async verifyFormVisible() {
    await expect(this.formTitle).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.repeatPasswordInput).toBeVisible();
    await expect(this.submitBtn).toBeVisible();
  }

  async verifyEmailFieldVisible() {
    await expect(this.emailInput).toBeVisible();
  }

  async verifyEmailFieldValue(expectedEmail) {
    await expect(this.emailInput).toHaveValue(expectedEmail);
  }

  async verifySocialSectionVisible() {
    await expect(this.socialSignUpSection).toBeVisible();
    await expect(this.signUpWithGoogleBtn).toBeVisible();
    await expect(this.signUpWithLinkedinBtn).toBeVisible();
    await expect(this.signUpWithGithubBtn).toBeVisible();
  }

  async verifyContentBlocksVisible() {
    await expect(this.topCompaniesTitle).toBeVisible();
    await expect(this.viewTop100Link).toBeVisible();
    await expect(this.hireDeveloperTitle).toBeVisible();
    await expect(this.remoteJobsTitle).toBeVisible();
    await expect(this.remoteSalariesTitle).toBeVisible();
  }
}
