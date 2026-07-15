import { test } from '@playwright/test';
import { MainPage } from '../../src/ui/pages/MainPage.js';
import { CompaniesPage } from '../../src/ui/pages/CompaniesPage.js';

test.describe('Huntd Homepage - Companies Landing Page', () => {
  test('should allow switching between Engineers and Companies page views', async ({ page }) => {
    const mainPage = new MainPage(page);
    const companiesPage = new CompaniesPage(page);

    await mainPage.navigate();
    await mainPage.header.verifyHeaderVisible();
    await mainPage.verifyEmailFieldVisible();

    await mainPage.header.selectForCompanies();

    await companiesPage.waitForLoaded();
    await companiesPage.verifyUrl();

    await companiesPage.header.verifyActiveView('companies');
    await companiesPage.hero.verifyTitleContains('Hire handpicked A‑Player engineers across the globe');

    await companiesPage.hireEngineersAndOpenCandidates();
  });
});
