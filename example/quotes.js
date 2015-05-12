var fs = require('fs');
var tpMoudle = require('../lib/tp');
var tp = fs.readFile('../test/tp3.tp');
console.log(tpMoudle.transform(tp));