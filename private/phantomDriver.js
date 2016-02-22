var page = require('webpage').create();

page.open('http://www.google.com/', function(status) {

    console.log(status)

    page.onLoadFinished = function() {
        // page.render('nextPage.png');
        console.log("yay");
        phantom.exit();
    }
    
    // page.evaluate(function() {
    //     document.getElementById('domain').value = 'yay';
    //     document.getElementById('form').submit();
    // })

});