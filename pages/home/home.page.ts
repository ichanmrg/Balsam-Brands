import { Page } from "playwright/test";
import { BasePage } from "../base.page";

export class HomePage extends BasePage {
    constructor(public page: Page) {
        super(page)
    }

    async goto() {
        await this.page.goto("/")
        await this.page.waitForLoadState()
    }
}