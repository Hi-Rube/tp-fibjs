var fs = require('fs');
var tpMoudle = require('../lib/tp');
var tp = fs.readFile('../test/quotes.tp');
console.log(tpMoudle.transform(tp));