const HomePage = require('../pageobjects/home.page');
const ResultsPage = require('../pageobjects/results.page');

const searchText = 'laptop';
const categoryName = 'PC Laptops & Netbooks';

describe('Ebay Product Seach', () => {
    it('should open the main url and verify the title', async () => {
        await HomePage.open();
        await expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    });

    it('should search for a product and verify the search text value', async () => {
        await HomePage.search(searchText);
        await expect(HomePage.inputSearch).toHaveValue(searchText);
    });

    it('should redirect to a new page and verify the title', async () => {
        await expect(browser).toHaveTitle(searchText + ': Search Result | eBay');
    });

    it('should update the search category', async () => {
        await expect(ResultsPage.category).toHaveText(categoryName);
    });
}); 