var request = require("request");
var should = require("should");

var app = require("../server");

describe("xkcd proxy", function() {
    
    before(function() {
        app.start();
    });
    
    it("should return an image", function(done) {
        request.get("http://localhost:8888/", function(err, response, body) {
            response.statusCode.should.equal(200);
            body.should.include("<img src=");
            done();
        })
    });
    
});