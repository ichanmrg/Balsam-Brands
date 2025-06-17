import { Locator, Page } from "playwright/test";
import { BasePage } from "../base.page";

export class CartPage extends BasePage{
    
    public cardBodyDiv: Locator
    private cartContainerDiv: Locator
    public productDetailsContainerDiv: Locator
    private limitedTimeOfferDiv: Locator
    private noThanksButton: Locator

    constructor(public page: Page) {
        super(page)
        this.cardBodyDiv = this.page.locator('div[class^="card-body"]')
        this.cartContainerDiv = this.page.locator('div[class^="CartContainer"]')
        this.productDetailsContainerDiv = this.cartContainerDiv.locator('div[class^="cartProductDetailItem_product_details_container"]')
        this.limitedTimeOfferDiv = this.page.locator("div.z1-rto-banner-content")
        this.noThanksButton = this.limitedTimeOfferDiv.getByRole('button', { name: 'No Thanks' })
    }
    
    async open() {
        await this.cartIcon.click()
    }

    async closeOfferModal() {
        await this.limitedTimeOfferDiv.waitFor({ state: 'visible', timeout: 3000 }).catch(() => {});
        await this.noThanksButton.click({ timeout: 3000 }).catch(() => {});
    }

    async deleteFromCart(itemOrder: number) {
        const ele = this.cartContainerDiv.getByTestId(`cc-btn-remove-${itemOrder-1}`)
        await ele.scrollIntoViewIfNeeded()
        await ele.click()
    }
}