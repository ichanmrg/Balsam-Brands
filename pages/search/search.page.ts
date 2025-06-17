import { Locator, Page } from "playwright/test";
import { BasePage } from "../base.page";

export class SearchPage extends BasePage {

    private resultsGridDiv: Locator
    private searchField: Locator

    constructor(public page: Page) {
        super(page)
        this.resultsGridDiv = this.page.getByTestId('results-grid')
        this.searchField = this.page.getByTestId('constructor-search-input')
    }

    async search(item: string) {
        await this.searchField.fill(item)
        await this.page.waitForResponse(response =>
                response.url().includes(`autocomplete`) &&
                response.request().method() === 'GET'
              );
        await this.page.keyboard.press('Enter')
    }
    
    async selectItem(itemOrder: number) {
        await this.resultsGridDiv.locator('div[class^="listingContainer"]').nth(itemOrder-1).click()
    }

}