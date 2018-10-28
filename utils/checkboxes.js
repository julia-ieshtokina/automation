const webdriverio  = require('webdriverio');
const url =	'http://the-internet.herokuapp.com/checkboxes';

const options = { desiredCapabilities: { browserName: 'chrome' } };
let browser = webdriverio.remote(options);

browser = browser.init().url(url);

function clickCheckboxes() { 
         
    const times1 = Math.ceil(Math.random() * 10);
    const times2 = Math.ceil(Math.random() * 10);

    const checkbox1 = browser.element('//input[@type="checkbox"][1]')
                    .then((box) => box);
    const checkbox2 = browser.element('//input[@type="checkbox"][2]')
                    .then((box) => box);
    console.log(`checkbox 1 is clicked ${times1} times, checkbox 2 is clicked ${times2} times`);
    
    for(let i = 0; i < times1; i++) {
        checkbox1.click();
    }

    for(let j = 0; j < times2; j++) {
        checkbox2.click();
    }          
}

clickCheckboxes();
setTimeout(() => browser.end(), 5000);

module.exports = clickCheckboxes;