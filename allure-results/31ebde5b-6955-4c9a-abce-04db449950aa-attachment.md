# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/mainPageForEngineers.spec.js >> Huntd Homepage - Engineers Landing Page >> should display the core components on the main landing page
- Location: tests/navigation/mainPageForEngineers.spec.js:15:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Email')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByLabel('Email')

```

```yaml
- banner:
  - link "Huntd":
    - /url: /
    - img
  - navigation:
    - button "For companies"
    - button "For engineers"
    - link "Candidates":
      - /url: /candidates
    - link "Jobs":
      - /url: /jobs
  - link "Sign In":
    - /url: /sign-in
  - link "Sign up":
    - /url: /sign-up
- heading "Let remote Web3 startups make you an offer" [level=2]:
  - text: Let remote
  - strong: Web3
  - strong: startups
  - text: make you an offer
- paragraph: Create an anonymous profile, set your salary expectations and respond to offers Yes or No. Simple as that.
- heading "Get started" [level=2]
- button "Sign in with":
  - img
- button "Sign in with":
  - img
- button "Sign in with":
  - img
- img
- textbox "Email"
- button "Get offers"
- text: wherever you are
- img
- img
- text: Clubhouse Web3 Frontend Engineer $130k-$180k Remote
- img
- text: HealthRhythms Blockchain Engineer $140k-$180k Remote
- img
- text: CoinTracker Web3 Backend Engineer $120k-$170k Remote
- img
- text: Supernormal Full Stack Engineer $100k-$150k Remote
- heading "How it works" [level=2]
- text: 01. Create an anonymous profile 02. Receive connections & chat with startups 03. Hunt offers & earn pricey NFT as you're hired
- img
- heading "Backend Dev, 5+ years" [level=5]
- heading "$130k Remote Go, Java" [level=6]
- img
- heading "Blockchain Dev, 5+ years" [level=5]
- heading "$160k Remote Solidity, TS" [level=6]
- text: Hey, it's Vitalik! I'm looking for Web3 Backend engineer to join Ethereum. Let's chat? Hey! Sure Vitalik, let's talk Congrats on joining Ethereum ♦︎ Here is your bonus 💸 Choose the NFT you like!
- heading "Get $1k bonus as you're hired. Use it to buy the NFT of your choice" [level=2]
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- img "Non-fungible token example"
- heading "Your unicorn is waiting" [level=2]
- heading "Join the next Discord, OpenSea, Coinbase or Ethereum." [level=3]
- img
- img "company logo"
- heading "Layer3" [level=4]
- img
- heading "Senior Web3 Full-Stack Wizard" [level=3]
- list:
  - listitem: Worldwide
  - listitem: Full-time
  - listitem: 3-5 years
- text: $ 8300 - $ 12500
- button "Apply"
- img "company logo"
- heading "Q.xyz" [level=4]
- img
- heading "Smart Contract Developer" [level=3]
- list:
  - listitem: Worldwide
  - listitem: Full-time
  - listitem: 1-3 years
- text: $ 10000 - $ 16700
- button "Apply"
- img "company logo"
- heading "Webb" [level=4]
- img
- heading "Web3 Engineer (TS, React)" [level=3]
- list:
  - listitem: Worldwide
  - listitem: Full-time
  - listitem: 3-5 years
- text: $ 5900 - $ 12500
- button "Apply"
- img "company logo"
- heading "Dexible" [level=4]
- img
- heading "Lead Web3 Frontend Engineer" [level=3]
- list:
  - listitem: US timezones
  - listitem: Full-time
- text: $ 7500 - $ 10800
- button "Apply"
- heading "You're a web2 dev? Join web3 with your current skills!" [level=2]
- list:
  - listitem:
    - img
    - term: Pick from the right jobs
    - definition: Get web2-stack offers in web3 startups. Build with skills you have & learn web3 along the way
  - listitem:
    - img
    - term: Get a salary hike
    - definition: Web3 startups pay 31% higher salaries on average
  - listitem:
    - img
    - term: Build the future
    - definition: Web3 revolution disrupts most industries. Discover what others build and join
- link "Discover":
  - /url: /jobs
- img
- text: Web2
- img
- text: Web3
- heading "Engineers say about Huntd" [level=2]:
  - strong: Engineers say
  - text: about Huntd
- img
- paragraph: The most important is that I was able to look for a job anonymously without stress, without worrying that agencies are juggling my personal data.
- img "LucasFront-End Engineer"
- text: William Java Engineer
- img
- paragraph: The selection of web3 startups and their opportunities impressed me. I would definitely recommend Huntd!
- img "RosaFull stack Engineer"
- text: Stan Front-End Engineer
- img
- paragraph: I love that founders are reaching out to me by themselves. Got 5 relevant offers in just a week!
- img "RicardoFull stack Engineer"
- text: Lucas Front-End Engineer
- img
- paragraph: Thanks a lot for helping me to find the desired web3 job at startup!
- img "WilliamJava Engineer"
- text: Rosa Full stack Engineer
- img
- paragraph: It is really cool that I can receive web3 startup offers effortlessly and without wasting time. Thank you guys :)
- img "StanFront-End Engineer"
- text: Ricardo Full stack Engineer
- img
- paragraph: The most important is that I was able to look for a job anonymously without stress, without worrying that agencies are juggling my personal data.
- img "LucasFront-End Engineer"
- text: William Java Engineer
- img
- paragraph: The selection of web3 startups and their opportunities impressed me. I would definitely recommend Huntd!
- img "RosaFull stack Engineer"
- text: Stan Front-End Engineer
- img
- paragraph: I love that founders are reaching out to me by themselves. Got 5 relevant offers in just a week!
- img "LucasFront-End Engineer"
- text: Lucas Front-End Engineer
- img
- paragraph: Thanks a lot for helping me to find the desired web3 job at startup!
- img "RosaFull stack Engineer"
- text: Rosa Full stack Engineer
- img
- paragraph: It is really cool that I can receive web3 startup offers effortlessly and without wasting time. Thank you guys :)
- img "RicardoFull stack Engineer"
- text: Ricardo Full stack Engineer
- img
- paragraph: The most important is that I was able to look for a job anonymously without stress, without worrying that agencies are juggling my personal data.
- img "WilliamJava Engineer"
- text: William Java Engineer
- button:
  - img
- button:
  - img
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
  46 |     await expect(this.formTitle).toBeVisible();
  47 |     await expect(this.emailInput).toBeVisible();
  48 |     await expect(this.passwordInput).toBeVisible();
  49 |     await expect(this.repeatPasswordInput).toBeVisible();
  50 |     await expect(this.submitBtn).toBeVisible();
  51 |   }
  52 | 
  53 |   async verifyEmailFieldVisible() {
> 54 |     await expect(this.emailInput).toBeVisible();
     |                                   ^ Error: expect(locator).toBeVisible() failed
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