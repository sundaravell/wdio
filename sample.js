describe("Sample Test file", function(){

    it.skip ("Launch url & get the URL value", function(){
        
        browser.url('/');
        console.log('Browser URL is:',browser.getUrl());
        
    });

    it("Launch url & get the URL value", function(){
        
        browser.url('/');
        console.log('Browser URL is:',browser.getUrl());
        
    });

    it.skip ("Test Drive",function(){


    })
});