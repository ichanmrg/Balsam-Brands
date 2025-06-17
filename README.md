
# Balsam Brands Test Suite

This repository contains end-to-end tests for the Balsam Hill website, built with the **Playwright** testing framework. The suite covers searching for products, managing the cart, and checking out. This ensure these core features work correctly.

---

## Getting Started

Here’s how to set up the project and run the tests locally.

### 1. Clone the repository

```bash
git clone https://github.com/ichanmrg/Balsam-Brands.git
cd Balsam-Brands
```

### 2. Install required packages

Ensure you have [Node.js](https://nodejs.org/) installed.

```bash
npm install
```

### 3. Install Playwright browser binaries

```bash
npx playwright install
```

---

## Running the Tests

Run all tests with:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test tests/checkout.spec.ts
```

To view a detailed test report:

```bash
npx playwright show-report
```

---

## What’s Covered

### `tests/checkout.spec.ts` simulates:

- Searching for an item (e.g., “Christmas Tree”)  
- Selecting a product from the search results  
- Adding the product to the shopping cart  
- Checking the cart for correct item and price  
- Removing the item from the cart  
- Handling pop-ups or modals (ex. offers)

Each step is wrapped in `test.step()`.

---

## What to Expect

- Tests are executed in both **Chromium** and **Firefox**
- Outputs include:
  - A summary of passed and failed tests  
  - HTML reports and trace files for failed tests  
  - Detailed logs showing each test step  

Example:
```
Running 2 tests using 2 workers
  2 passed (56.2s)

To open last HTML report run:

  npx playwright show-report
```
