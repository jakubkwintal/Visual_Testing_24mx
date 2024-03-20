import {expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly cookies: Locator;
    readonly popularCategories: Locator;
    readonly popularCategoriesArrow: Locator;
    readonly motocrossVideo: Locator;
    readonly searchField: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.cookies = page.locator("[id='CybotCookiebotDialogBodyLevelButtonAccept']");
        this.popularCategories = page.locator("//div[contains(@class,'o-startpage__wrapper--white')]/p-cms-dynamic-renderer[2]//div[contains(@class, 'm-carousel-container ng-star-inserted')]");
        this.popularCategoriesArrow = page.locator("//p-cms-dynamic-renderer[2]//div[2]//button[contains(@class, 'a-slider-button')]");
        this.motocrossVideo = page.locator("//div/div[contains(@class, 'm-video-embed')]");
        this.searchField = page.locator("[id='search-desktop']");
    }
    
    async loadHomePage() {
        await this.page.goto('https://www.24mx.pl/');
    }
}