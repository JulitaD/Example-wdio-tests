const Page = require('./page');

class HomePage extends Page {

    get inputSearch () {
        return $('#gh-ac');
    }

    get btnSearch () {
        return $('#gh-btn');
    }

    async search (searchText) {
        await this.inputSearch.addValue(searchText);
        await this.btnSearch.click();
    }
}

module.exports = new HomePage();