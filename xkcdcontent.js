var request = require('request');
var cheerio = require('cheerio');

function validResponse(error, response) {
    return !error && response.statusCode == 200;
}

function loadRaw(handleContent) {
 
    request('http://www.xkcd.com/', function (error, response, body) {
        handleContent( validResponse(error, response) ? body : error);
    });
    
}

function parse(raw) {
    $ = cheerio.load(raw);
    
    var img = $("#comic img")[0].attribs;
    
    return {
        source: img.src 
    };
}

exports.loadRaw = loadRaw;
exports.parse = parse;