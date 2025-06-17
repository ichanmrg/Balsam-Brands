import { Locator, Page } from "playwright/test";
import { BasePage } from "../base.page";

export class ProductPage extends BasePage {
    
    private addToCartButton: Locator
    public productDetailNameRatingDiv: Locator
    public productPrice: Locator
    public productDialogLocator: Locator
    private viewCartButton: Locator

    constructor(public page: Page) {
        super(page)
        this.addToCartButton = this.page.getByTestId('pdc-btn-addtocart').first()
        this.productPrice = this.page.getByTestId('produt-detail-container').getByLabel('$')
        this.productDialogLocator = this.page.getByRole('dialog')
        this.viewCartButton = this.productDialogLocator.getByTestId('pdc-add-to-cart-modal-btn-viewcart')
        this.productDetailNameRatingDiv = this.page.locator('div[class^="productDetailNameRating"]')
    }

    async addToCart() {
        await this.addToCartButton.click()
        await this.page.waitForResponse(response =>
                response.url().includes(`addProductToCart`) &&
                response.request().method() === 'POST'
              );
    }

    async viewCart() {
        await this.viewCartButton.click()
        await this.page.waitForLoadState()
    }
}