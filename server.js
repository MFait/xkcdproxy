var http = require("http");
var xkcd = require("./xkcdcontent");

function start() {

    function onRequest(request, response) {               


        xkcd.loadRaw(function(content) {
            var comic = xkcd.parse(content);
            
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write("<html><body><img src='" + comic.source + "'/></body></html>");    
            response.end();
        })    
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server starded.");
}


exports.start = start;