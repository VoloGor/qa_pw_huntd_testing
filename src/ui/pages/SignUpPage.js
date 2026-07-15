import { BasePage } from './BasePage.js';
import { Header } from '../components/Header.js';
import { SignUpForm } from '../components/SignUpForm.js';

export class SignUpPage extends BasePage {
  constructor(page) {
    super(page, '/sign-up');

    this.header = new Header(page);
    this.signUpForm = new SignUpForm(page);
  }

  async verifyPageIsReady() {
    await this.header.verifyHeaderVisible();
    await this.signUpForm.verifyFormVisible();
    await this.signUpForm.verifySocialSectionVisible();
    await this.signUpForm.verifyContentBlocksVisible();
  }

  async registerAccount(email, password) {
    await this.signUpForm.signUpWithEmailAndPassword(email, password);
  }
}
