
describe("Launch Application", function(){

    it ("Launch 1", function(){

        browser.url('/');
        expect(browser.getTitle).toHaveText('Getting Started · WebdriverIO')
    });

    it ("Launch 2", function(){

        browser.url('/');
        expect(browser.getTitle).toHaveText('IO')
        browser.maximizeWindow();
    })

})