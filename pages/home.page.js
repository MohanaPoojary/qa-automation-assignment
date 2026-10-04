export class HomePage {
  constructor(page) {
    this.page = page;
    this.bookStoreApplication = page.getByText('Book Store Application', {
      exact: true
    });
  }

  async openBookStoreApplication() {
    await this.bookStoreApplication.click();
  }
}