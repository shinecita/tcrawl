var Crawler = require("crawler").Crawler,
    prompt = require("prompt");


var c = new Crawler({
"maxConnections":2,

// This will be called for each crawled page
"callback":function(error,result, $) {
      console.log("asd2", error)
    // $ is a jQuery instance scoped to the server-side DOM of the page
    $("a[href^='http://twitter.com/']").each(function(index , a) {
        console.log("twitter user link", index,  a.href);
    });
   }
});

// Queue just one URL, with default callback

 prompt.start();
 
   prompt.get(['url'], function (err, result) {
    console.log(err, result);
    c.queue(result.url);
  });
 

