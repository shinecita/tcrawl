var Crawler = require("crawler").Crawler;


var c = new Crawler({
"maxConnections":2,

// This will be called for each crawled page
"callback":function(error,result, $) {
      console.log("asd2", error)
    // $ is a jQuery instance scoped to the server-side DOM of the page
    $("a[href^='https://twitter.com/']").each(function(index , a) {
        console.log("ASD", index,  a.href);
    });
   }
});

// Queue just one URL, with default callback
c.queue("http://www.abc.com.py");
