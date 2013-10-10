var http = require('http'),
    output = require('./output'),
    xkcd = require("./xkcdcontent");

function start() {

    function onRequest(request, response) {               
        xkcd.loadRaw(function(content) {            
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(output.render(xkcd.parse(content)));    
            response.end();
        })    
    }

    http.createServer(onRequest).listen(8888);
    console.log("I'm listening ...");
}

exports.start = start;