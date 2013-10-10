var http = require("http");
var xkcd = require("./xkcdcontent");

function start() {

    function onRequest(request, response) {               
        response.writeHeader(200, {"Content-Type": "text/plain"});
        
        // get xkcd page
        // parse title, alt, ...
        // download image
        // build html
        
        // response.write(xkcd.raw());   
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server starded.");
}


exports.start = start;