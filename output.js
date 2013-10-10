var fs = require('fs'),
    haml = require('hamljs');

function render(comic) {
    var options = {
        filename: 'index.haml',
        locals: {comic: comic}
    };
    
    return haml.render(fs.readFileSync("./index.haml"), options);
};

exports.render = render;