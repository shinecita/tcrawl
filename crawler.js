var Crawler = require("crawler").Crawler,
    prompt = require("prompt");


var c = new Crawler({
"maxConnections":2,

// This will be called for each crawled page
"callback":function(error,result, $) {
      
      if (error) {
        console.log("Error", error)
        return;
      }
    // $ is a jQuery instance scoped to the server-side DOM of the page
   // $("a[href^='http://twitter.com/']").each(function(index , a) {
     $("a[href*='twitter.com/']").each(function(index , a) {
        console.log(index , "twitter user link: ",  a.href);
    });
   }
});

// Queue just one URL, with default callback

 prompt.start();
 
   prompt.get(['url'], function (err, result) {
    if (err) { return console.log(err)};
    c.queue(result.url);
  });
 

