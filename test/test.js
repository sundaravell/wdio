
describe("Launch Application", function(){

    it ("Launch 1", function(){

        browser.url('/');
        //expect(browser.getTitle).toHaveText('Getting Started · WebdriverIO')
        expect(browser.getTitle).toBeExisting()
    });

    it ("Launch 2", function(){

        browser.url('/');
       // expect(browser.getTitle).toHaveText('IO')
       expect(browser.getTitle).toBeExisting()
        browser.maximizeWindow();
    })

})