let request = require('request');
let config = require('./key.json');

let title = "Iron Man 3";
let query = encodeURI(title);

let options = {
    url: `http://www.omdbapi.com/?apikey=${config.apikey}&t=${query}"`
};

console.log('URL: ' + options.url);

request.get(options, function (err, res, body) {
    if (err) throw err;
    console.log(res.statusCode);
    console.log(body);
});