import { expect, test } from '../fixtures/fixtures';
import { CartPage } from '../pages/cart/cart.page';
import { ProductPage } from '../pages/product/product.page';
import { SearchPage } from '../pages/search/search.page';

let searchPage: SearchPage
let productPage: ProductPage
let cartPage: CartPage

let price: string | null
let productName: string | null

const itemToSearch = "Christmas Tree"
const itemOrder = 3

test.beforeEach(async ({ homePage }) => {
  searchPage = new SearchPage(homePage.page)
  productPage = new ProductPage(homePage.page)
  cartPage = new CartPage(homePage.page)
});

test.describe(`Checkout Flow`, () => {
  test(`Buy Item: ${itemToSearch}`, async ({  }) => {

    await test.step(`Add item to cart: ${itemToSearch}`, async () => {
      await searchPage.search(itemToSearch)
    })

    await test.step(`Select nth item: ${itemOrder}`, async () => {
      await searchPage.selectItem(itemOrder)
      price = await productPage.productPrice.textContent()
    })
    
    await test.step(`Add item to cart`, async () => {
      await productPage.addToCart()
      await expect(productPage.productDialogLocator.getByLabel(price as string)).toBeVisible
    })

    await test.step(`View cart`, async () => {
      await productPage.viewCart()
      await expect(cartPage.cardBodyDiv.locator('div').filter({ hasText: "Total" }).getByLabel(price as string)).toBeVisible
    })

    await test.step(`Check cart icon number`, async () => {
      await expect(await cartPage.cartIconCount.textContent()).toBe("1")
    })

    await test.step(`Remove item`, async () => {
      productName = await cartPage.productDetailsContainerDiv.getByRole('link').textContent()
      await cartPage.closeOfferModal()
      await cartPage.deleteFromCart(1)
      await expect(cartPage.page.locator('a').filter({ hasText: `${productName} has been removed.` })).toBeVisible()
    })
  })
})

