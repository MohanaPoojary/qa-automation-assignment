# QA Automation Assignment

Playwright-based UI and API automation framework created as part of the QA Automation Engineer assignment.

## Tech Stack

- **Automation:** Playwright
- **Language:** JavaScript
- **Test Runner:** Playwright Test
- **API Testing:** Playwright APIRequest
- **Assertions:** Playwright `expect`
- **CI/CD:** GitHub Actions
- **Environment Management:** dotenv
- **Version Control:** Git / GitHub

## Project Structure

```text
qa-automation-assignment/
├── tests/
│   ├── ui/
│   │   └── bookstore.spec.js
│   └── api/
│       └── users.spec.js
├── pages/
│   ├── home.page.js
│   ├── login.page.js
│   └── bookstore.page.js
├── fixtures/
│   └── test.fixture.js
├── utils/
│   └── file.utils.js
├── test-data/
│   └── bookstore.data.js
├── output/
├── playwright.config.js
├── package.json
├── .env
├── .env.example
├── .gitignore
└── README.md
```

## Framework Design

The framework follows the **Page Object Model (POM)** to keep test logic separate from page-specific locators and actions.

### Page Objects

- `HomePage` – Handles navigation from the DemoQA home page.
- `LoginPage` – Handles login, logout, and login-related validations.
- `BookStorePage` – Handles Book Store navigation, search, and book information extraction.

### Fixtures

Custom Playwright fixtures are used to initialize and provide Page Object instances to the tests.

This keeps the test cases clean and avoids repeatedly creating Page Object instances.

### Test Data

Application-specific test data is maintained separately under:

```text
test-data/bookstore.data.js
```

This avoids hardcoding test data directly inside Page Objects.

### Utilities

Reusable file-handling functionality is maintained under:

```text
utils/file.utils.js
```

The UI test uses this utility to write the retrieved book information to a text file.

---

# UI Automation

## Application

DemoQA Book Store Application

```text
https://demoqa.com/
```

## Automated Flow

The UI automation covers the following end-to-end workflow:

1. Navigate to the DemoQA website.
2. Navigate to **Book Store Application**.
3. Navigate to the Login page.
4. Login using the manually created DemoQA user.
5. Validate the logged-in username.
6. Validate that the Logout button is displayed.
7. Navigate/search for:
   **Learning JavaScript Design Patterns**
8. Validate that the book appears in the search results.
9. Extract:
   - Title
   - Author
   - Publisher
10. Write the extracted information to:
    ```text
    output/book-details.txt
    ```
11. Logout from the application.
12. Validate that the user has been logged out.

> User registration is intentionally not automated because the assignment requires the account to be created manually.

---

# API Automation

## API

ReqRes API

```text
https://reqres.in/
```

## Automated Flow

The API automation covers the following user lifecycle:

1. Create a new user.
2. Validate the HTTP response status.
3. Capture the generated `userId`.
4. Retrieve the created user using the stored ID.
5. Validate that the returned user details match the created user.
6. Update the user's name.
7. Validate the update response.
8. Validate that the updated name matches the requested value.

---

# Environment Configuration

DemoQA credentials are managed using environment variables instead of hardcoding credentials in the test code.

Create a `.env` file in the project root:

```env
DEMOQA_USERNAME=your_username
DEMOQA_PASSWORD=your_password
```

A `.env.example` file is included in the repository as a template.

> The `.env` file should not be committed to source control.

---

# Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Running Tests

## Run all tests

```bash
npm test
```

## Run UI tests

```bash
npm run test:ui
```

## Run API tests

```bash
npm run test:api
```

## Run tests in headed mode

```bash
npm run test:headed
```

## Run tests in debug mode

```bash
npm run test:debug
```

## View HTML Report

```bash
npm run report
```

---

# Test Artifacts

The UI automation generates the following file after a successful execution:

```text
output/book-details.txt
```

Example:

```text
Title: Learning JavaScript Design Patterns
Author: Addy Osmani
Publisher: O'Reilly Media
```

The `output/` directory is excluded from source control because it contains generated test artifacts.

Playwright reports, screenshots, videos, and traces are also generated according to the configuration when applicable.

---

# Locator Strategy

The framework primarily uses Playwright's user-facing locators such as:

```javascript
getByRole()
getByPlaceholder()
getByText()
```

Stable attributes such as IDs or CSS selectors are used when a suitable accessible locator is not available.

For example:

```javascript
page.getByRole('link', { name: 'Book Store' })
```

This approach improves locator readability and reduces unnecessary dependency on implementation-specific DOM structure.

---

# Design Considerations

### Page Object Model

Page-specific locators and actions are kept inside Page Objects, while the test file focuses on the business workflow and validations.

### Reusable Fixtures

Playwright fixtures provide the required Page Objects to tests, keeping test setup concise and maintainable.

### Environment Variables

Credentials are externalized using environment variables to avoid exposing sensitive information in source code.

### Single End-to-End Workflow

The UI assignment is implemented as a continuous end-to-end test because the steps depend on the same authenticated user session and represent one business workflow.

### Maintainability

Test data, page interactions, fixtures, and utility functions are separated so that changes can be made without unnecessarily modifying the test cases.

---

# Notes

- The DemoQA test account is created manually as required by the assignment.
- The credentials are not stored in the repository.
- The UI and API automation are maintained as separate test suites within the same Playwright project.
- The framework is designed to be extended with additional UI flows, API scenarios, and CI/CD execution.