import { test } from '@playwright/test';
import { SignUpPage } from '../../src/ui/pages/SignUpPage.js';

test.describe('Huntd Sign Up Page', () => {
  test('should display the full sign up page layout', async ({ page }) => {
    const signUpPage = new SignUpPage(page);

    await signUpPage.navigate();
    await signUpPage.verifyPageIsReady();
  });

  test('should allow filling the sign up form', async ({ page }) => {
    const signUpPage = new SignUpPage(page);

    await signUpPage.navigate();
    await signUpPage.registerAccount('candidate@example.com', 'Password123!');
    await signUpPage.signUpForm.verifyEmailFieldValue('candidate@example.com');
  });
});
