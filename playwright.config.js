import { defineConfig, devices } from '@playwright/test';
import {
  loadEnvFile,
  throwMissinEnvTypeError,
} from './src/common/helpers/loadEnvFile';

const envType = process.env.ENV_TYPE || throwMissinEnvTypeError();

loadEnvFile(envType);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [['list'], ['allure-playwright']],
  use: {
    baseURL: process.env.BASE_URL || 'https://huntd.tech/',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
