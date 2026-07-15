# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/mainPageForCompanies.spec.js >> Huntd Homepage - Companies Landing Page >> should allow switching between Engineers and Companies page views
- Location: tests/navigation/mainPageForCompanies.spec.js:6:7

# Error details

```
TypeError: companiesPage.hero.verifyTitleContains is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e5]:
        - link "Huntd" [ref=e7] [cursor=pointer]:
          - /url: /
          - img [ref=e8]
        - navigation [ref=e15]:
          - generic [ref=e16]:
            - button "For companies" [ref=e17] [cursor=pointer]
            - button "For engineers" [ref=e18] [cursor=pointer]
          - generic [ref=e19]:
            - link "Candidates" [ref=e20] [cursor=pointer]:
              - /url: /candidates
            - link "Jobs" [ref=e21] [cursor=pointer]:
              - /url: /jobs
        - generic [ref=e23]:
          - link "Sign In" [ref=e24] [cursor=pointer]:
            - /url: /sign-in
          - link "Free sign up" [ref=e25] [cursor=pointer]:
            - /url: /sign-up
    - generic [ref=e26]:
      - generic [ref=e27]:
        - generic [ref=e29]:
          - generic [ref=e30]:
            - heading "Hire handpicked A‑Player engineers across the globe" [level=2] [ref=e31]
            - paragraph [ref=e32]: Get instant access to the global pool of senior engineers looking for their next challenge
            - link "Hire engineers" [ref=e33] [cursor=pointer]:
              - /url: /candidates
          - generic [ref=e34]:
            - generic [ref=e35]:
              - img [ref=e37]
              - img [ref=e38]
              - paragraph [ref=e51]: My company
            - generic [ref=e52]:
              - generic [ref=e54]:
                - img [ref=e56]
                - img [ref=e57]
              - generic [ref=e58]:
                - paragraph [ref=e59]: Senior Frontend Engineer
                - generic [ref=e60]:
                  - img [ref=e61]
                  - generic [ref=e64]: Brasil
                  - generic [ref=e65]: 5+ years
                  - generic [ref=e66]: $80K
            - generic [ref=e67]:
              - generic [ref=e69]:
                - img [ref=e71]
                - img [ref=e72]
              - generic [ref=e73]:
                - paragraph [ref=e74]: Senior iOS Engineer
                - generic [ref=e75]:
                  - img [ref=e76]
                  - generic [ref=e79]: Poland
                  - generic [ref=e80]: 6+ years
                  - generic [ref=e81]: $96k
            - generic [ref=e82]:
              - generic [ref=e84]:
                - img [ref=e86]
                - img [ref=e87]
              - generic [ref=e88]:
                - paragraph [ref=e89]: Senior Backend Engineer
                - generic [ref=e90]:
                  - img [ref=e91]
                  - generic [ref=e94]: SF
                  - generic [ref=e95]: 5+ years
                  - generic [ref=e96]: $170k
        - generic [ref=e98]:
          - generic [ref=e99]:
            - generic [ref=e100]:
              - img [ref=e101]
              - img [ref=e103]
            - paragraph [ref=e105]: the hard thing about hard things
            - paragraph [ref=e106]: 7 out of 10 startups say hiring is their biggest challenge. At the same time, the wrong team is in the top 3 reasons why startups fail.
            - img [ref=e107]
          - generic [ref=e109]:
            - heading "We were there" [level=2] [ref=e110]
            - paragraph [ref=e111]: I’m Roman, I went through the challenges of hiring engineers multiple times during co-founding companies.
            - paragraph [ref=e113]: Even if you find time for it, you spend hours sourcing because of the right talent pool shortage. Much of it will feel like wasted effort involving a lot of dead ends and frustration.
            - paragraph [ref=e115]: Or you hire a recruiting agency that charges a huge fee of the annual salary. Using agencies always sucked up a lot of time with little ROI.
          - generic [ref=e116]:
            - img [ref=e119]
            - generic [ref=e120]:
              - paragraph [ref=e121]: Roman Apostol
              - paragraph [ref=e122]:
                - paragraph [ref=e124]: Ex Googler, CEO / Co-founder @ Huntd
          - paragraph [ref=e125]:
            - img [ref=e126]
            - text: "I’m on a mission to change how this process works: make hiring engineers for startups easy by giving quick access to a pool of vetted, highly-skilled engineers."
        - generic [ref=e129]:
          - heading "This is what hiring should really look like" [level=2] [ref=e130]
          - generic [ref=e131]:
            - generic [ref=e132]:
              - term [ref=e133]:
                - img [ref=e135]
                - text: Hidden gems only
              - definition [ref=e137]: Top talent is rarely on an active job hunt. Same for engineers at Huntd. Although all of them are available for the next challenge.
            - generic [ref=e138]:
              - term [ref=e139]:
                - img [ref=e141]
                - text: Highest tier quality
              - definition [ref=e144]: Each engineer is carefully vetted for qualifications before getting an invitation to join the platform.
            - generic [ref=e145]:
              - term [ref=e146]:
                - img [ref=e148]
                - text: Zero risk
              - definition [ref=e150]: If you don't hire, you don't pay. As well as a 60-day money-back guarantee to make it risk-free
            - generic [ref=e151]:
              - term [ref=e152]:
                - img [ref=e154]
                - text: Global talent pool
              - definition [ref=e156]: Hire without boundaries. Find remote engineers in a 1000x bigger talent pool. Most are ready to work in your timezone.
        - generic [ref=e158]:
          - generic [ref=e159]:
            - paragraph [ref=e161]: What if you could hire top engineers in days, not months?
            - heading "Save time spent on sourcing and pre-vetting - start interviewing right away" [level=3] [ref=e162]
          - generic [ref=e163]:
            - list [ref=e165]:
              - listitem [ref=e166]: Relevant candidates
              - listitem [ref=e167]: Time to hire
              - listitem [ref=e168]: Cost to hire
              - listitem [ref=e169]: Job posting fee
            - generic [ref=e170]:
              - generic:
                - generic:
                  - generic:
                    - heading "Huntd" [level=4]
                    - list:
                      - listitem:
                        - generic:
                          - img
                          - text: 70-90%
                      - listitem:
                        - generic:
                          - img
                          - text: 1-2 weeks
                      - listitem:
                        - generic:
                          - img
                          - text: 8%
                      - listitem:
                        - generic:
                          - img
                          - text: $0
                  - generic:
                    - heading "Job boards" [level=4]
                    - list:
                      - listitem:
                        - generic: 5-10%
                      - listitem:
                        - generic: 2-3 month
                      - listitem:
                        - generic: $4000-$6000
                      - listitem:
                        - generic: $600 / month
                  - generic:
                    - heading "Hiring agencies" [level=4]
                    - list:
                      - listitem:
                        - generic: 80%
                      - listitem:
                        - generic: 1-2 month
                      - listitem:
                        - generic: 20-40%
                      - listitem:
                        - generic: –
            - link "Hire top engineers" [ref=e171] [cursor=pointer]:
              - /url: /candidates
      - generic [ref=e175]:
        - generic [ref=e176]:
          - generic [ref=e177]:
            - img [ref=e178]
            - img [ref=e180]
          - img [ref=e182]
          - img [ref=e195]
          - img [ref=e197]
          - img [ref=e207]
          - img [ref=e209]
        - generic [ref=e215]:
          - img [ref=e216]
          - paragraph [ref=e218]: Startup enthusiasts are already hiring on Huntd, when will you?
          - paragraph [ref=e219]: Huntd is already helping teams just like yours hire A-player engineers
          - generic [ref=e220]:
            - generic [ref=e221]:
              - img [ref=e222]
              - paragraph [ref=e224]: Free platform with no risks
            - generic [ref=e225]:
              - img [ref=e226]
              - paragraph [ref=e228]: Pay only per successful hires
            - generic [ref=e229]:
              - img [ref=e230]
              - paragraph [ref=e232]: 100% money-back guarantee
        - link "Hire now" [ref=e233] [cursor=pointer]:
          - /url: /candidates
    - contentinfo [ref=e234]:
      - generic [ref=e235]:
        - generic [ref=e236]:
          - generic [ref=e237]:
            - paragraph [ref=e238]: Join the future
            - heading "Top 100 web3 companies" [level=2] [ref=e239]
            - generic [ref=e240]:
              - generic [ref=e242]:
                - link "Coinbase" [ref=e243] [cursor=pointer]:
                  - /url: /jobs/company/coinbase
                  - generic [ref=e244]:
                    - img [ref=e246]
                    - img "Coinbase" [ref=e247]
                - heading "Coinbase" [level=3] [ref=e248]
              - generic [ref=e250]:
                - link "Binance" [ref=e251] [cursor=pointer]:
                  - /url: /jobs/company/binance
                  - generic [ref=e252]:
                    - img [ref=e254]
                    - img "Binance" [ref=e255]
                - heading "Binance" [level=3] [ref=e256]
              - generic [ref=e258]:
                - link "Near" [ref=e259] [cursor=pointer]:
                  - /url: /jobs/company/near
                  - generic [ref=e260]:
                    - img [ref=e262]
                    - img "Near" [ref=e263]
                - heading "Near" [level=3] [ref=e264]
              - generic [ref=e266]:
                - link "GlobalID" [ref=e267] [cursor=pointer]:
                  - /url: /jobs/company/globalid
                  - generic [ref=e268]:
                    - img [ref=e270]
                    - img "GlobalID" [ref=e271]
                - heading "GlobalID" [level=3] [ref=e272]
              - generic [ref=e274]:
                - link "Consensys" [ref=e275] [cursor=pointer]:
                  - /url: /jobs/company/consensys
                  - generic [ref=e276]:
                    - img [ref=e278]
                    - img "Consensys" [ref=e279]
                - heading "Consensys" [level=3] [ref=e280]
            - link "View top 100" [ref=e281] [cursor=pointer]:
              - /url: /web3-companies
              - generic [ref=e282]: View top 100
              - img [ref=e283]
          - generic [ref=e285]:
            - generic [ref=e286]:
              - heading "Hire Web3 Developer" [level=3] [ref=e287]
              - link "Hire Backend Web3 Developer" [ref=e288] [cursor=pointer]:
                - /url: /developers/web3-backend
              - link "Hire Frontend Web3 Developer" [ref=e289] [cursor=pointer]:
                - /url: /developers/web3-frontend
              - link "Hire Mobile Web3 Developer" [ref=e290] [cursor=pointer]:
                - /url: /developers/web3-mobile
              - link "Hire Full-Stack Web3 Developer" [ref=e291] [cursor=pointer]:
                - /url: /developers/web3-full-stack
              - link "Hire React Web3 Developer" [ref=e292] [cursor=pointer]:
                - /url: /developers/web3-react
              - link "Hire Blockchain Web3 Developer" [ref=e293] [cursor=pointer]:
                - /url: /developers/blockchain
              - link "Hire Defi Web3 Developer" [ref=e294] [cursor=pointer]:
                - /url: /developers/web3-defi
              - link "Hire Nft Web3 Developer" [ref=e295] [cursor=pointer]:
                - /url: /developers/web3-nft
              - link "Hire Smart Contract Web3 Developer" [ref=e296] [cursor=pointer]:
                - /url: /developers/web3-smart-contract
              - link "Hire Solidity Web3 Developer" [ref=e297] [cursor=pointer]:
                - /url: /developers/solidity
              - link "Hire Solana Web3 Developer" [ref=e298] [cursor=pointer]:
                - /url: /developers/solana
            - generic [ref=e301]:
              - heading "Remote Web3 jobs" [level=3] [ref=e302]
              - link "Backend Remote Web3 jobs" [ref=e303] [cursor=pointer]:
                - /url: /jobs/web3-backend
              - link "Frontend Remote Web3 jobs" [ref=e304] [cursor=pointer]:
                - /url: /jobs/web3-frontend
              - link "Mobile Remote Web3 jobs" [ref=e305] [cursor=pointer]:
                - /url: /jobs/web3-mobile
              - link "Full-Stack Remote Web3 jobs" [ref=e306] [cursor=pointer]:
                - /url: /jobs/web3-full-stack
              - link "React Remote Web3 jobs" [ref=e307] [cursor=pointer]:
                - /url: /jobs/web3-react
              - link "Defi Remote Web3 jobs" [ref=e308] [cursor=pointer]:
                - /url: /jobs/web3-defi
              - link "Nft Remote Web3 jobs" [ref=e309] [cursor=pointer]:
                - /url: /jobs/web3-nft
              - link "Javascript Remote Web3 jobs" [ref=e310] [cursor=pointer]:
                - /url: /jobs/web3-javascript
              - link "Smart Contract Remote Web3 jobs" [ref=e311] [cursor=pointer]:
                - /url: /jobs/web3-smart-contract
              - link "Solidity Remote Web3 jobs" [ref=e312] [cursor=pointer]:
                - /url: /jobs/web3-solidity
              - link "Solana Remote Web3 jobs" [ref=e313] [cursor=pointer]:
                - /url: /jobs/web3-solana
            - generic [ref=e316]:
              - heading "Remote Web3 Salaries" [level=3] [ref=e317]
              - link "Backend Remote Web3 Salaries" [ref=e318] [cursor=pointer]:
                - /url: /salaries/web3-backend
              - link "Frontend Remote Web3 Salaries" [ref=e319] [cursor=pointer]:
                - /url: /salaries/web3-frontend
              - link "Mobile Remote Web3 Salaries" [ref=e320] [cursor=pointer]:
                - /url: /salaries/web3-mobile
              - link "Full-Stack Remote Web3 Salaries" [ref=e321] [cursor=pointer]:
                - /url: /salaries/web3-full-stack
              - link "React Remote Web3 Salaries" [ref=e322] [cursor=pointer]:
                - /url: /salaries/web3-react
              - link "Defi Remote Web3 Salaries" [ref=e323] [cursor=pointer]:
                - /url: /salaries/web3-defi
              - link "Nft Remote Web3 Salaries" [ref=e324] [cursor=pointer]:
                - /url: /salaries/web3-nft
              - link "Javascript Remote Web3 Salaries" [ref=e325] [cursor=pointer]:
                - /url: /salaries/web3-javascript
              - link "Smart Contract Remote Web3 Salaries" [ref=e326] [cursor=pointer]:
                - /url: /salaries/web3-smart-contract
              - link "Solidity Remote Web3 Salaries" [ref=e327] [cursor=pointer]:
                - /url: /salaries/web3-solidity
              - link "Solana Remote Web3 Salaries" [ref=e328] [cursor=pointer]:
                - /url: /salaries/web3-solana
        - generic [ref=e329]:
          - generic [ref=e330]:
            - link "Huntd" [ref=e331] [cursor=pointer]:
              - /url: /
              - img [ref=e332]
            - generic [ref=e338]:
              - link "LinkedIn" [ref=e339] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/huntd-tech
                - img [ref=e340]
              - link "Facebook" [ref=e344] [cursor=pointer]:
                - /url: https://www.facebook.com/huntd.tech
                - img [ref=e345]
              - link "Twitter" [ref=e347] [cursor=pointer]:
                - /url: https://twitter.com/huntd_tech
                - img [ref=e348]
              - link "Instagram" [ref=e350] [cursor=pointer]:
                - /url: https://www.instagram.com/huntd.tech/
                - img [ref=e351]
          - generic [ref=e356]:
            - link "Terms of use" [ref=e357] [cursor=pointer]:
              - /url: /terms-of-use.pdf
            - link "Cookies policy" [ref=e358] [cursor=pointer]:
              - /url: /cookies-policy.pdf
            - link "Privacy policy" [ref=e359] [cursor=pointer]:
              - /url: /privacy-policy.pdf
          - generic [ref=e361]:
            - link "About us" [ref=e362] [cursor=pointer]:
              - /url: /about-us
            - link "FAQs" [ref=e363] [cursor=pointer]:
              - /url: /pricing#faq
            - link "Pricing" [ref=e364] [cursor=pointer]:
              - /url: /pricing
          - paragraph [ref=e367]: All rights reserved. 2026
  - alert [ref=e368]: Huntd
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { MainPage } from '../../src/ui/pages/MainPage.js';
  3  | import { CompaniesPage } from '../../src/ui/pages/CompaniesPage.js';
  4  | 
  5  | test.describe('Huntd Homepage - Companies Landing Page', () => {
  6  |   test('should allow switching between Engineers and Companies page views', async ({ page }) => {
  7  |     const mainPage = new MainPage(page);
  8  |     const companiesPage = new CompaniesPage(page);
  9  | 
  10 |     await mainPage.navigate();
  11 |     await mainPage.header.verifyHeaderVisible();
  12 |     await mainPage.verifyEmailFieldVisible();
  13 | 
  14 |     await mainPage.header.selectForCompanies();
  15 | 
  16 |     await companiesPage.waitForLoaded();
  17 |     await companiesPage.verifyUrl();
  18 | 
  19 |     await companiesPage.header.verifyActiveView('companies');
> 20 |     await companiesPage.hero.verifyTitleContains('Hire handpicked A‑Player engineers across the globe');
     |                              ^ TypeError: companiesPage.hero.verifyTitleContains is not a function
  21 | 
  22 |     await companiesPage.hireEngineersAndOpenCandidates();
  23 |   });
  24 | });
  25 | 
```