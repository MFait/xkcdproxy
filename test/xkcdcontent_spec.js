var should = require('should');
var nock = require('nock');
var xkcd = require("../xkcdcontent");

describe("xkcd content", function() {
    
    it("should fetch content from the xkcd website", function(done) {
        nock("http://www.xkcd.com").get("/").reply(200, "awesome comic");        

        xkcd.loadRaw(function(content) {
            content.should.equal("awesome comic");
            done();
        })
    });
    
    it("should extract the image source from the raw content", function(done) {
        var raw= 
            '<html>' +
            '<body>' + 
            '<div id="comic">' + 
            '<img src="http://imgs.xkcd.com/path/the-image.png" title="the title" alt="the alt text">' +
            '</div>' + 
            '</body>' +
            '</html>';
        
        var comic = xkcd.parse(raw)    
            
        comic.source.should.equal("http://imgs.xkcd.com/path/the-image.png");
        done();
    })
    
});