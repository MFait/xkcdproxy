var http = require("http");

function start() {

    function onRequest(request, response) {               
        response.writeHeader(200, {"Content-Type": "text/plain"});
        response.write("Hello!");   
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server starded.");
}

exports.start = start;