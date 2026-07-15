import { test } from '@playwright/test';
import { MainPage } from '../../src/ui/pages/MainPage.js';
import { SignUpPage } from '../../src/ui/pages/SignUpPage.js';

test.describe('Huntd Homepage - Engineers Landing Page', () => {
  let mainPage;
  let signUpPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    signUpPage = new SignUpPage(page);
    await mainPage.navigate();
  });

  test('should display the core components on the main landing page', async () => {
    await mainPage.header.verifyHeaderVisible();
    await mainPage.header.verifyActiveView('engineers');
    await mainPage.heroBlock.verifyTitleContains('Let remote Web3 startups make you an offer');
    await mainPage.verifyEmailFieldVisible();
  });

  test('should allow entering an email for signup', async () => {
    const testEmail = `candidate_${Date.now()}@example.com`;
    await mainPage.fillEmailField(testEmail);
    await mainPage.verifyEmailFieldValue(testEmail);
    await mainPage.openSignUpPage();
    await signUpPage.waitForLoaded();
    await signUpPage.verifyPageIsReady();
  });
});
