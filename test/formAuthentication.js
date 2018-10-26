const expect = require('chai').expect;
const LoginPage = require('../pages/LoginPage');
const SecureArea = require('../pages/SecureArea');
const { validUsername, validPassword } = require('../data/dataProvider');

describe('Login Page Test', function () {

    before(() => {
        LoginPage.navigate();
    });

    describe('Login with valid credentials', () => {
        it('user should be able to login with correct username and password', () => {

            LoginPage.username.setValue(validUsername);
            LoginPage.password.setValue(validPassword);
            LoginPage.submit();
            const message = SecureArea.flashMessage.getText();

            expect(message).to.contain('You logged into a secure area!');
        });
    
        it('user should be able to logout', () => {
            SecureArea.logout();
            const message = LoginPage.flashMessage.getText();

            expect(message).to.contain('You logged out of the secure area!');
        });
    });

    
});