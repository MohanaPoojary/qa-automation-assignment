export class BookStorePage {
  constructor(page) {
    this.page = page;

    this.bookStoreButton = page.getByRole('link', { name: 'Book Store', exact: true });
    this.searchInput = page.locator('#searchBox');
    this.searchButton = page.locator('button.btn-outline-secondary');

  }
  
  async openBookStore() {
    // DemoQA has an ad iframe overlay that occasionally blocks normal clicks.
    // evaluate() executes the click directly in the DOM, bypassing Playwright's hit-testing.
    await this.bookStoreButton.evaluate(b => b.click());
  }

  async searchBook(bookName) {
    await this.searchInput.fill(bookName);
  }

  getBook(bookName) {
    return this.page.getByText(bookName, { exact: true });
  }

  getBookRow(bookName) {
    return this.page.locator('tbody tr').filter({
      hasText: bookName
    });
  }

  async getBookDetails(bookName) {
    const bookRow = this.getBookRow(bookName);

    return {
      title: await bookRow.locator('td').nth(1).innerText(),
      author: await bookRow.locator('td').nth(2).innerText(),
      publisher: await bookRow.locator('td').nth(3).innerText()
    };
  }
}