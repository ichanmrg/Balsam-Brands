import { Locator, Page } from "playwright/test";

export class BasePage {

    public cartIcon: Locator
    public cartIconCount: Locator

    constructor(public page: Page) {
        this.cartIcon = this.page.getByRole('link', { name: 'Cart' })
        this.cartIconCount = this.cartIcon.locator('span[class^="headerIcons_custom-badge"]')
    }

}