import { test, expect } from '@playwright/test';
import { HomePage } from './utils/HomePage';

test.describe("24MX - Visual testing", () => {
    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.loadHomePage();
        await homePage.cookies.click();
        await page.waitForLoadState();
    });

    test('Full page without embedded video', async ({ page }) => {
        await expect(page).toHaveScreenshot("fullPage.png", {fullPage: true, maxDiffPixelRatio: 0.02, mask: [homePage.motocrossVideo]});
    });

    test('Interactivity of search field', async () => {
        await homePage.searchField.fill('This is a test. My test.');
        await expect(homePage.searchField).toHaveScreenshot("searchField.png");
    });

    test('Popular categories bar', async () => {
        await expect(homePage.popularCategories).toHaveScreenshot("popularCategories1.png");
        await homePage.popularCategoriesArrow.click();
        await expect(homePage.popularCategories).toHaveScreenshot("popularCategories2.png");
    });
});