import { BasePage } from './BasePage.js';
import { Header } from '../components/Header.js';
import { CompaniesHero } from '../components/CompaniesHero.js';

export class CompaniesPage extends BasePage {
  constructor(page) {
    super(page, '/for-companies');

    this.header = new Header(page);
    this.hero = new CompaniesHero(page);
  }

  async hireEngineers() {
    await this.hero.clickHireEngineers();
  }

  async hireEngineersAndOpenCandidates() {
    await this.hireEngineers();
    await this.page.waitForURL(/.*\/candidates/);
  }
}
