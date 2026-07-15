# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/mainPageForEngineers.spec.js >> Huntd Homepage - Engineers Landing Page >> should allow entering an email for signup
- Location: tests/navigation/mainPageForEngineers.spec.js:22:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Sign In' })
Expected: visible
Error: strict mode violation: getByRole('link', { name: 'Sign In' }) resolved to 2 elements:
    1) <a href="/sign-in" class="HeaderAuthButtons_buttonSignIn__mpf3b HeaderAuthButtons_authButton__KFU7v buttons_button__G7MQk">Sign In</a> aka getByRole('banner').getByRole('link', { name: 'Sign In' })
    2) <a href="/sign-in" class="typography_link__5GPqf">Sign In</a> aka getByRole('paragraph').filter({ hasText: 'Already have an account? Sign' }).getByRole('link')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Sign In' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e5]:
        - link "Huntd" [ref=e7] [cursor=pointer]:
          - /url: /
          - img [ref=e8]
        - navigation [ref=e15]:
          - generic [ref=e16]:
            - link "Candidates" [ref=e17] [cursor=pointer]:
              - /url: /candidates
            - link "Jobs" [ref=e18] [cursor=pointer]:
              - /url: /jobs
        - generic [ref=e20]:
          - link "Sign In" [ref=e21] [cursor=pointer]:
            - /url: /sign-in
          - link "Sign up" [ref=e22] [cursor=pointer]:
            - /url: /sign-up
    - generic [ref=e26]:
      - heading "Welcome aboard!" [level=1] [ref=e27]
      - paragraph [ref=e28]: Create an account
      - generic [ref=e30]:
        - generic [ref=e31]:
          - generic [ref=e32]:
            - generic [ref=e33]: Email
            - textbox "Email" [active] [ref=e35]
          - generic [ref=e36]:
            - generic [ref=e37]: Password
            - generic [ref=e39]:
              - textbox "Password" [ref=e40]
              - generic "Toggle" [ref=e41] [cursor=pointer]:
                - img [ref=e42]
                - checkbox "Toggle" [ref=e44]
          - generic [ref=e45]:
            - generic [ref=e46]: Repeat password
            - generic [ref=e48]:
              - textbox "Repeat password" [ref=e49]
              - generic "Toggle" [ref=e50] [cursor=pointer]:
                - img [ref=e51]
                - checkbox "Toggle" [ref=e53]
          - button "Create account" [ref=e54] [cursor=pointer]
        - generic [ref=e57]:
          - paragraph [ref=e58]: Sign up with
          - generic [ref=e59]:
            - button "Sign in with" [ref=e60] [cursor=pointer]:
              - img [ref=e61]
            - button "Sign in with" [ref=e63] [cursor=pointer]:
              - img [ref=e64]
            - button "Sign in with" [ref=e68] [cursor=pointer]:
              - img [ref=e69]
      - paragraph [ref=e71]:
        - text: Already have an account?
        - link "Sign In" [ref=e72] [cursor=pointer]:
          - /url: /sign-in
    - contentinfo [ref=e73]:
      - generic [ref=e74]:
        - generic [ref=e75]:
          - generic [ref=e76]:
            - paragraph [ref=e77]: Join the future
            - heading "Top 100 web3 companies" [level=2] [ref=e78]
            - generic [ref=e79]:
              - generic [ref=e81]:
                - link "Coinbase" [ref=e82] [cursor=pointer]:
                  - /url: /jobs/company/coinbase
                  - generic [ref=e83]:
                    - img [ref=e85]
                    - img "Coinbase" [ref=e86]
                - heading "Coinbase" [level=3] [ref=e87]
              - generic [ref=e89]:
                - link "Binance" [ref=e90] [cursor=pointer]:
                  - /url: /jobs/company/binance
                  - generic [ref=e91]:
                    - img [ref=e93]
                    - img "Binance" [ref=e94]
                - heading "Binance" [level=3] [ref=e95]
              - generic [ref=e97]:
                - link "Near" [ref=e98] [cursor=pointer]:
                  - /url: /jobs/company/near
                  - generic [ref=e99]:
                    - img [ref=e101]
                    - img "Near" [ref=e102]
                - heading "Near" [level=3] [ref=e103]
              - generic [ref=e105]:
                - link "GlobalID" [ref=e106] [cursor=pointer]:
                  - /url: /jobs/company/globalid
                  - generic [ref=e107]:
                    - img [ref=e109]
                    - img "GlobalID" [ref=e110]
                - heading "GlobalID" [level=3] [ref=e111]
              - generic [ref=e113]:
                - link "Consensys" [ref=e114] [cursor=pointer]:
                  - /url: /jobs/company/consensys
                  - generic [ref=e115]:
                    - img [ref=e117]
                    - img "Consensys" [ref=e118]
                - heading "Consensys" [level=3] [ref=e119]
            - link "View top 100" [ref=e120] [cursor=pointer]:
              - /url: /web3-companies
              - generic [ref=e121]: View top 100
              - img [ref=e122]
          - generic [ref=e124]:
            - generic [ref=e125]:
              - heading "Hire Web3 Developer" [level=3] [ref=e126]
              - link "Hire Backend Web3 Developer" [ref=e127] [cursor=pointer]:
                - /url: /developers/web3-backend
              - link "Hire Frontend Web3 Developer" [ref=e128] [cursor=pointer]:
                - /url: /developers/web3-frontend
              - link "Hire Mobile Web3 Developer" [ref=e129] [cursor=pointer]:
                - /url: /developers/web3-mobile
              - link "Hire Full-Stack Web3 Developer" [ref=e130] [cursor=pointer]:
                - /url: /developers/web3-full-stack
              - link "Hire React Web3 Developer" [ref=e131] [cursor=pointer]:
                - /url: /developers/web3-react
              - link "Hire Blockchain Web3 Developer" [ref=e132] [cursor=pointer]:
                - /url: /developers/blockchain
              - link "Hire Defi Web3 Developer" [ref=e133] [cursor=pointer]:
                - /url: /developers/web3-defi
              - link "Hire Nft Web3 Developer" [ref=e134] [cursor=pointer]:
                - /url: /developers/web3-nft
              - link "Hire Smart Contract Web3 Developer" [ref=e135] [cursor=pointer]:
                - /url: /developers/web3-smart-contract
              - link "Hire Solidity Web3 Developer" [ref=e136] [cursor=pointer]:
                - /url: /developers/solidity
              - link "Hire Solana Web3 Developer" [ref=e137] [cursor=pointer]:
                - /url: /developers/solana
            - generic [ref=e140]:
              - heading "Remote Web3 jobs" [level=3] [ref=e141]
              - link "Backend Remote Web3 jobs" [ref=e142] [cursor=pointer]:
                - /url: /jobs/web3-backend
              - link "Frontend Remote Web3 jobs" [ref=e143] [cursor=pointer]:
                - /url: /jobs/web3-frontend
              - link "Mobile Remote Web3 jobs" [ref=e144] [cursor=pointer]:
                - /url: /jobs/web3-mobile
              - link "Full-Stack Remote Web3 jobs" [ref=e145] [cursor=pointer]:
                - /url: /jobs/web3-full-stack
              - link "React Remote Web3 jobs" [ref=e146] [cursor=pointer]:
                - /url: /jobs/web3-react
              - link "Defi Remote Web3 jobs" [ref=e147] [cursor=pointer]:
                - /url: /jobs/web3-defi
              - link "Nft Remote Web3 jobs" [ref=e148] [cursor=pointer]:
                - /url: /jobs/web3-nft
              - link "Javascript Remote Web3 jobs" [ref=e149] [cursor=pointer]:
                - /url: /jobs/web3-javascript
              - link "Smart Contract Remote Web3 jobs" [ref=e150] [cursor=pointer]:
                - /url: /jobs/web3-smart-contract
              - link "Solidity Remote Web3 jobs" [ref=e151] [cursor=pointer]:
                - /url: /jobs/web3-solidity
              - link "Solana Remote Web3 jobs" [ref=e152] [cursor=pointer]:
                - /url: /jobs/web3-solana
            - generic [ref=e155]:
              - heading "Remote Web3 Salaries" [level=3] [ref=e156]
              - link "Backend Remote Web3 Salaries" [ref=e157] [cursor=pointer]:
                - /url: /salaries/web3-backend
              - link "Frontend Remote Web3 Salaries" [ref=e158] [cursor=pointer]:
                - /url: /salaries/web3-frontend
              - link "Mobile Remote Web3 Salaries" [ref=e159] [cursor=pointer]:
                - /url: /salaries/web3-mobile
              - link "Full-Stack Remote Web3 Salaries" [ref=e160] [cursor=pointer]:
                - /url: /salaries/web3-full-stack
              - link "React Remote Web3 Salaries" [ref=e161] [cursor=pointer]:
                - /url: /salaries/web3-react
              - link "Defi Remote Web3 Salaries" [ref=e162] [cursor=pointer]:
                - /url: /salaries/web3-defi
              - link "Nft Remote Web3 Salaries" [ref=e163] [cursor=pointer]:
                - /url: /salaries/web3-nft
              - link "Javascript Remote Web3 Salaries" [ref=e164] [cursor=pointer]:
                - /url: /salaries/web3-javascript
              - link "Smart Contract Remote Web3 Salaries" [ref=e165] [cursor=pointer]:
                - /url: /salaries/web3-smart-contract
              - link "Solidity Remote Web3 Salaries" [ref=e166] [cursor=pointer]:
                - /url: /salaries/web3-solidity
              - link "Solana Remote Web3 Salaries" [ref=e167] [cursor=pointer]:
                - /url: /salaries/web3-solana
        - generic [ref=e168]:
          - generic [ref=e169]:
            - link "Huntd" [ref=e170] [cursor=pointer]:
              - /url: /
              - img [ref=e171]
            - generic [ref=e177]:
              - link "LinkedIn" [ref=e178] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/huntd-tech
                - img [ref=e179]
              - link "Facebook" [ref=e183] [cursor=pointer]:
                - /url: https://www.facebook.com/huntd.tech
                - img [ref=e184]
              - link "Twitter" [ref=e186] [cursor=pointer]:
                - /url: https://twitter.com/huntd_tech
                - img [ref=e187]
              - link "Instagram" [ref=e189] [cursor=pointer]:
                - /url: https://www.instagram.com/huntd.tech/
                - img [ref=e190]
          - generic [ref=e195]:
            - link "Terms of use" [ref=e196] [cursor=pointer]:
              - /url: /terms-of-use.pdf
            - link "Cookies policy" [ref=e197] [cursor=pointer]:
              - /url: /cookies-policy.pdf
            - link "Privacy policy" [ref=e198] [cursor=pointer]:
              - /url: /privacy-policy.pdf
          - generic [ref=e200]:
            - link "About us" [ref=e201] [cursor=pointer]:
              - /url: /about-us
            - link "FAQs" [ref=e202] [cursor=pointer]:
              - /url: /pricing#faq
            - link "Pricing" [ref=e203] [cursor=pointer]:
              - /url: /pricing
          - paragraph [ref=e206]: All rights reserved. 2026
  - alert [ref=e207]: Sign-up
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
  8  |     this.welcomeTitle = this.host.getByRole('heading', { name: 'Welcome aboard!' });
  9  |     this.formTitle = this.host.getByText('Create an account');
  10 |     this.emailInput = this.host.getByLabel('Email');
  11 |     this.passwordInput = this.host.getByRole('textbox', { name: 'Password', exact: true });
  12 |     this.repeatPasswordInput = this.host.getByRole('textbox', { name: 'Repeat password', exact: true });
  13 |     this.submitBtn = this.host.getByRole('button', { name: 'Create account' });
  14 |     this.socialSignUpSection = this.host.getByText('Sign up with');
  15 |     this.signInLink = this.host.getByRole('link', { name: 'Sign In' });
  16 |     this.topCompaniesTitle = this.host.getByRole('heading', { name: 'Top 100 web3 companies' });
  17 |     this.viewTop100Link = this.host.getByRole('link', { name: 'View top 100' });
  18 |     this.hireDeveloperTitle = this.host.getByRole('heading', { name: 'Hire Web3 Developer' });
  19 |     this.remoteJobsTitle = this.host.getByRole('heading', { name: 'Remote Web3 jobs' });
  20 |     this.remoteSalariesTitle = this.host.getByRole('heading', { name: 'Remote Web3 Salaries' });
  21 |   }
  22 | 
  23 |   async fillEmail(email) {
  24 |     await this.emailInput.fill(email);
  25 |   }
  26 | 
  27 |   async fillPassword(password) {
  28 |     await this.passwordInput.fill(password);
  29 |   }
  30 | 
  31 |   async fillRepeatPassword(password) {
  32 |     await this.repeatPasswordInput.fill(password);
  33 |   }
  34 | 
  35 |   async submitSignUpForm() {
  36 |     await this.submitBtn.click();
  37 |   }
  38 | 
  39 |   async signUpWithEmailAndPassword(email, password) {
  40 |     await this.fillEmail(email);
  41 |     await this.fillPassword(password);
  42 |     await this.fillRepeatPassword(password);
  43 |     await this.submitSignUpForm();
  44 |   }
  45 | 
  46 |   async verifyFormVisible() {
  47 |     await expect(this.formTitle).toBeVisible();
  48 |     await expect(this.emailInput).toBeVisible();
  49 |     await expect(this.passwordInput).toBeVisible();
  50 |     await expect(this.repeatPasswordInput).toBeVisible();
  51 |     await expect(this.submitBtn).toBeVisible();
  52 |   }
  53 | 
  54 |   async verifyEmailFieldVisible() {
  55 |     await expect(this.emailInput).toBeVisible();
  56 |   }
  57 | 
  58 |   async verifyEmailFieldValue(expectedEmail) {
  59 |     await expect(this.emailInput).toHaveValue(expectedEmail);
  60 |   }
  61 | 
  62 |   async verifySocialSectionVisible() {
  63 |     await expect(this.socialSignUpSection).toBeVisible();
> 64 |     await expect(this.signInLink).toBeVisible();
     |                                   ^ Error: expect(locator).toBeVisible() failed
  65 |   }
  66 | 
  67 |   async verifyContentBlocksVisible() {
  68 |     await expect(this.topCompaniesTitle).toBeVisible();
  69 |     await expect(this.viewTop100Link).toBeVisible();
  70 |     await expect(this.hireDeveloperTitle).toBeVisible();
  71 |     await expect(this.remoteJobsTitle).toBeVisible();
  72 |     await expect(this.remoteSalariesTitle).toBeVisible();
  73 |   }
  74 | }
  75 | 
```