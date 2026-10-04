const { test: base } = require('@playwright/test');

const { HomePage } = require('../pages/home.page');
const { LoginPage } = require('../pages/login.page');
const { BookStorePage } = require('../pages/bookstore.page');

const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  bookstorePage: async ({ page }, use) => {
    await use(new BookStorePage(page));
  }
});

module.exports = { test };