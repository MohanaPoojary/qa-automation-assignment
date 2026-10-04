import { expect } from "@playwright/test";
import { test } from "../../fixtures/test.fixture";
import { bookstoreData } from "../../test-data/bookstore.data";
import { writeBookDetails } from "../../utils/file.utils";

test('should search and validate a book in Book Store', async ({ page, homePage, loginPage, bookstorePage }) => {
  await page.goto('/');

  // Navigate to Book Store Application
  await homePage.openBookStoreApplication();

  // Navigate to login page
  await loginPage.openLogin();

  // login
  await loginPage.login(
  process.env.DEMOQA_USERNAME,
  process.env.DEMOQA_PASSWORD
  );

  // Validate username
  await expect(loginPage.loggedInUsername).toHaveText(
    process.env.DEMOQA_USERNAME
  );

  // validate logout button
  await expect(loginPage.logoutButton).toBeVisible();

  // Navigate to Book Store catalogue
  await bookstorePage.openBookStore();

  // search book
  await bookstorePage.searchBook(bookstoreData.searchBook);
  
  // validate result
  await expect(bookstorePage.getBook(bookstoreData.searchBook)).toBeVisible();

  // extract book details
  const bookDetails = await bookstorePage.getBookDetails(bookstoreData.searchBook);

  // write details to file
  writeBookDetails(bookDetails);

  // logout
  await loginPage.logout();
  await expect(loginPage.loginButton).toBeVisible();
});