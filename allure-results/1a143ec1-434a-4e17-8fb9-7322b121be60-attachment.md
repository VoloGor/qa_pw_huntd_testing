# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/signUpPage.spec.js >> Huntd Sign Up Page >> should display the full sign up page layout
- Location: tests/navigation/signUpPage.spec.js:5:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Create an account' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Create an account' })

```

```yaml
- banner:
  - link "Huntd":
    - /url: /
    - img
  - navigation:
    - link "Candidates":
      - /url: /candidates
    - link "Jobs":
      - /url: /jobs
  - link "Sign In":
    - /url: /sign-in
  - link "Sign up":
    - /url: /sign-up
- heading "Welcome aboard!" [level=1]
- paragraph: Create an account
- text: Email
- textbox "Email"
- text: Password
- textbox "Password"
- img
- checkbox "Toggle"
- text: Repeat password
- textbox "Repeat password"
- img
- checkbox "Toggle"
- button "Create account"
- paragraph: Sign up with
- button "Sign in with":
  - img
- button "Sign in with":
  - img
- button "Sign in with":
  - img
- paragraph:
  - text: Already have an account?
  - link "Sign In":
    - /url: /sign-in
- contentinfo:
  - paragraph: Join the future
  - heading "Top 100 web3 companies" [level=2]
  - link "Coinbase":
    - /url: /jobs/company/coinbase
    - img "Coinbase"
  - heading "Coinbase" [level=3]
  - link "Binance":
    - /url: /jobs/company/binance
    - img "Binance"
  - heading "Binance" [level=3]
  - link "Near":
    - /url: /jobs/company/near
    - img "Near"
  - heading "Near" [level=3]
  - link "GlobalID":
    - /url: /jobs/company/globalid
    - img "GlobalID"
  - heading "GlobalID" [level=3]
  - link "Consensys":
    - /url: /jobs/company/consensys
    - img "Consensys"
  - heading "Consensys" [level=3]
  - link "View top 100":
    - /url: /web3-companies
    - text: View top 100
    - img
  - heading "Hire Web3 Developer" [level=3]
  - link "Hire Backend Web3 Developer":
    - /url: /developers/web3-backend
  - link "Hire Frontend Web3 Developer":
    - /url: /developers/web3-frontend
  - link "Hire Mobile Web3 Developer":
    - /url: /developers/web3-mobile
  - link "Hire Full-Stack Web3 Developer":
    - /url: /developers/web3-full-stack
  - link "Hire React Web3 Developer":
    - /url: /developers/web3-react
  - link "Hire Blockchain Web3 Developer":
    - /url: /developers/blockchain
  - link "Hire Defi Web3 Developer":
    - /url: /developers/web3-defi
  - link "Hire Nft Web3 Developer":
    - /url: /developers/web3-nft
  - link "Hire Smart Contract Web3 Developer":
    - /url: /developers/web3-smart-contract
  - link "Hire Solidity Web3 Developer":
    - /url: /developers/solidity
  - link "Hire Solana Web3 Developer":
    - /url: /developers/solana
  - heading "Remote Web3 jobs" [level=3]
  - link "Backend Remote Web3 jobs":
    - /url: /jobs/web3-backend
  - link "Frontend Remote Web3 jobs":
    - /url: /jobs/web3-frontend
  - link "Mobile Remote Web3 jobs":
    - /url: /jobs/web3-mobile
  - link "Full-Stack Remote Web3 jobs":
    - /url: /jobs/web3-full-stack
  - link "React Remote Web3 jobs":
    - /url: /jobs/web3-react
  - link "Defi Remote Web3 jobs":
    - /url: /jobs/web3-defi
  - link "Nft Remote Web3 jobs":
    - /url: /jobs/web3-nft
  - link "Javascript Remote Web3 jobs":
    - /url: /jobs/web3-javascript
  - link "Smart Contract Remote Web3 jobs":
    - /url: /jobs/web3-smart-contract
  - link "Solidity Remote Web3 jobs":
    - /url: /jobs/web3-solidity
  - link "Solana Remote Web3 jobs":
    - /url: /jobs/web3-solana
  - heading "Remote Web3 Salaries" [level=3]
  - link "Backend Remote Web3 Salaries":
    - /url: /salaries/web3-backend
  - link "Frontend Remote Web3 Salaries":
    - /url: /salaries/web3-frontend
  - link "Mobile Remote Web3 Salaries":
    - /url: /salaries/web3-mobile
  - link "Full-Stack Remote Web3 Salaries":
    - /url: /salaries/web3-full-stack
  - link "React Remote Web3 Salaries":
    - /url: /salaries/web3-react
  - link "Defi Remote Web3 Salaries":
    - /url: /salaries/web3-defi
  - link "Nft Remote Web3 Salaries":
    - /url: /salaries/web3-nft
  - link "Javascript Remote Web3 Salaries":
    - /url: /salaries/web3-javascript
  - link "Smart Contract Remote Web3 Salaries":
    - /url: /salaries/web3-smart-contract
  - link "Solidity Remote Web3 Salaries":
    - /url: /salaries/web3-solidity
  - link "Solana Remote Web3 Salaries":
    - /url: /salaries/web3-solana
  - link "Huntd":
    - /url: /
    - img
  - link "LinkedIn":
    - /url: https://www.linkedin.com/company/huntd-tech
    - img
  - link "Facebook":
    - /url: https://www.facebook.com/huntd.tech
    - img
  - link "Twitter":
    - /url: https://twitter.com/huntd_tech
    - img
  - link "Instagram":
    - /url: https://www.instagram.com/huntd.tech/
    - img
  - link "Terms of use":
    - /url: /terms-of-use.pdf
  - link "Cookies policy":
    - /url: /cookies-policy.pdf
  - link "Privacy policy":
    - /url: /privacy-policy.pdf
  - link "About us":
    - /url: /about-us
  - link "FAQs":
    - /url: /pricing#faq
  - link "Pricing":
    - /url: /pricing
  - paragraph: All rights reserved. 2026
- alert
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import { BaseComponent } from './BaseComponent.js';
  3  | 
  4  | export class SignUpForm extends BaseComponent {
  5  |   constructor(page) {
  6  |     super(page, page);
  7  | 
  8  |     this.formTitle = this.host.getByRole('heading', { name: 'Create an account' });
  9  |     this.emailInput = this.host.getByLabel('Email');
  10 |     this.passwordInput = this.host.getByLabel('Password');
  11 |     this.repeatPasswordInput = this.host.getByLabel('Repeat password');
  12 |     this.submitBtn = this.host.getByRole('button', { name: 'Create account' });
  13 |     this.socialSignUpSection = this.host.getByText('Sign up with');
  14 |     this.signInLink = this.host.getByRole('link', { name: 'Sign In' });
  15 |     this.topCompaniesTitle = this.host.getByRole('heading', { name: 'Top 100 web3 companies' });
  16 |     this.viewTop100Link = this.host.getByRole('link', { name: 'View top 100' });
  17 |     this.hireDeveloperTitle = this.host.getByRole('heading', { name: 'Hire Web3 Developer' });
  18 |     this.remoteJobsTitle = this.host.getByRole('heading', { name: 'Remote Web3 jobs' });
  19 |     this.remoteSalariesTitle = this.host.getByRole('heading', { name: 'Remote Web3 Salaries' });
  20 |   }
  21 | 
  22 |   async fillEmail(email) {
  23 |     await this.emailInput.fill(email);
  24 |   }
  25 | 
  26 |   async fillPassword(password) {
  27 |     await this.passwordInput.fill(password);
  28 |   }
  29 | 
  30 |   async fillRepeatPassword(password) {
  31 |     await this.repeatPasswordInput.fill(password);
  32 |   }
  33 | 
  34 |   async submitSignUpForm() {
  35 |     await this.submitBtn.click();
  36 |   }
  37 | 
  38 |   async signUpWithEmailAndPassword(email, password) {
  39 |     await this.fillEmail(email);
  40 |     await this.fillPassword(password);
  41 |     await this.fillRepeatPassword(password);
  42 |     await this.submitSignUpForm();
  43 |   }
  44 | 
  45 |   async verifyFormVisible() {
> 46 |     await expect(this.formTitle).toBeVisible();
     |                                  ^ Error: expect(locator).toBeVisible() failed
  47 |     await expect(this.emailInput).toBeVisible();
  48 |     await expect(this.passwordInput).toBeVisible();
  49 |     await expect(this.repeatPasswordInput).toBeVisible();
  50 |     await expect(this.submitBtn).toBeVisible();
  51 |   }
  52 | 
  53 |   async verifyEmailFieldVisible() {
  54 |     await expect(this.emailInput).toBeVisible();
  55 |   }
  56 | 
  57 |   async verifyEmailFieldValue(expectedEmail) {
  58 |     await expect(this.emailInput).toHaveValue(expectedEmail);
  59 |   }
  60 | 
  61 |   async verifySocialSectionVisible() {
  62 |     await expect(this.socialSignUpSection).toBeVisible();
  63 |     await expect(this.signInLink).toBeVisible();
  64 |   }
  65 | 
  66 |   async verifyContentBlocksVisible() {
  67 |     await expect(this.topCompaniesTitle).toBeVisible();
  68 |     await expect(this.viewTop100Link).toBeVisible();
  69 |     await expect(this.hireDeveloperTitle).toBeVisible();
  70 |     await expect(this.remoteJobsTitle).toBeVisible();
  71 |     await expect(this.remoteSalariesTitle).toBeVisible();
  72 |   }
  73 | }
  74 | 
```