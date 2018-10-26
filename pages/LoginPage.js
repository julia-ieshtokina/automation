const Page = require('./PageModel');

class LoginPage extends Page {

    // page elements
    get username() {
        return browser.element('#username');
    }
    get password() {
        return browser.element('#password');
    }
    get loginBtn() {
        return browser.element('//button[@type="submit"]');
    }
    get flashMessage() {
        return browser.element('#flash');
    }

    // page services 
    navigate() {
        super.navigate('login');
    }
    submit() {
        this.loginBtn.click();
    }
}

module.exports = new LoginPage();