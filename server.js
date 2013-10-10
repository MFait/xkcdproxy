var http = require('http'),
    fs = require('fs'),
    haml = require('hamljs'),
    xkcd = require("./xkcdcontent");

function start() {

    function onRequest(request, response) {               
        xkcd.loadRaw(function(content) {
            
            var options = {
                filename: 'index.haml',
                locals: {
                    comic: xkcd.parse(content)
                }
            }
            
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(haml.render(fs.readFileSync("./index.haml"), options));    
            response.end();
        })    
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server starded.");
}


exports.start = start;