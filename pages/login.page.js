export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#userName');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loggedInUsername = page.locator('#userName-value');
    // ISSUE: DemoQA uses 'Logout' on the profile page but 'Log out' on the books page - regex handles both
    this.logoutButton = page.getByRole('button', { name: /log\s?out/i });
  }

  async openLogin() {
    await this.loginButton.click();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getUsername() {
    return this.page.locator('#userName-value');
  }

  async logout() {
    await this.logoutButton.click({ force: true });
  }
}

