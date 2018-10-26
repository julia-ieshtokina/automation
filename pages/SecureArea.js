const Page = require('./PageModel');

class SecureArea extends Page {

    // page elements
    get flashMessage() {
        return browser.element('#flash');
    }

    get logoutBtn() {
        return browser.element('//a[@href="/logout"]');
    }

    // page services 
    logout() {
        this.logoutBtn.click();
    }
}

module.exports = new SecureArea();