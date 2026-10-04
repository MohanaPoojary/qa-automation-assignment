# Playwright Automation Assignment

This project contains UI and API automation tests developed using **Playwright Test** with JavaScript.

## Tech Stack

- Playwright Test
- JavaScript
- Page Object Model (POM)
- Playwright APIRequest
- dotenv

## Project Structure

```text
├── tests/
│   ├── ui/
│   │   └── bookstore.spec.js
│   └── api/
│       └── users.spec.js
├── pages/
├── fixtures/
├── test-data/
├── utils/
├── output/
├── playwright.config.js
├── .env.example
└── package.json
```


## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Install Playwright browsers:**

   ```bash
   npx playwright install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the project root and add the required credentials:
   ```env
   DEMOQA_USERNAME=your_demoqa_username
   DEMOQA_PASSWORD=your_demoqa_password
   REQRES_API_KEY=your_reqres_api_key
   REQRES_PROJECT_ID=your_reqres_project_id
   ```
   *Note: A `.env.example` file is provided for reference. The actual DemoQA credentials and ReqRes API credentials are shared separately via email. The `.env` file is intentionally excluded from version control.*

## Run Tests

### UI Tests
Using Playwright:
```bash
npx playwright test tests/ui
```
Or using the npm script:
```bash
npm run test:ui
```

### API Tests
Using Playwright:
```bash
npx playwright test tests/api
```
Or using the npm script:
```bash
npm run test:api
```

### Run All Tests
```bash
npx playwright test
```
