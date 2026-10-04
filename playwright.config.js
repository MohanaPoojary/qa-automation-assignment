// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  projects: [
    // UI Tests
    {
      name: 'chromium',
      testMatch: '**/ui/**/*.spec.js',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://demoqa.com',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        headless: true
      },
    },

    // API Tests
    {
      name: 'api',
      testMatch: '**/api/**/*.spec.js',
      use: {
        baseURL: 'https://reqres.in',
        extraHTTPHeaders: {
          'x-api-key': process.env.REQRES_API_KEY,
          'X-Reqres-Env': 'prod'
        },
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});