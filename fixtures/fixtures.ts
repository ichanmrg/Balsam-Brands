import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home/home.page';

type MyFixtures = {
  homePage: HomePage
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await use(homePage);
    // await homePage.page.close();
  },
});
export { expect } from '@playwright/test';
