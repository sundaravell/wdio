
describe("Launch Application", function(){

    it ("Launch 1", function(){

        browser.url('/');
        browser.pause(3000);
    });

    it ("Launch 2", function(){

        browser.url('/');
        browser.pause(3000);
        browser.maximizeWindow();
    })

})