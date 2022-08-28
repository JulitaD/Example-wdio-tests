const Page = require('./page');

class ResultsPage extends Page {

    get category () {
        return $('#gh-cat option:nth-child(1)');
    }
    
}

module.exports = new ResultsPage();