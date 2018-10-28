const webdriverio  = require('webdriverio');
const url =	'http://the-internet.herokuapp.com/infinite_scroll';

const options = { desiredCapabilities: { browserName: 'chrome' } };
let browser = webdriverio.remote(options);

browser = browser.init().url(url);

function scrollInfinite(scrollTimes, count) { 
         
    setTimeout(function() { 		
        browser.waitForVisible('.jscroll-added')
               .element('.no-js').keys('\uE010');
		count++;
		if (count < scrollTimes) {
			scrollInfinite(scrollTimes, count);
		}
    }, 1000);
            
}

const scrollTimes = Math.ceil(Math.random() * 5);
console.log(`page will be scrolled ${scrollTimes} time(s)`);

scrollInfinite(scrollTimes, count = 0);
// browser.end();

module.exports = scrollInfinite;