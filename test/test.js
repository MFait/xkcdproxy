var request = require("request");
var should = require("should");

describe("xkcd proxy", function() {
    
    it("should return a 200", function(done) {
        request.get("http://www.google.com", function(err, response, body) {
            response.statusCode.should.equal(200);
            done();
        })
    });
    
});