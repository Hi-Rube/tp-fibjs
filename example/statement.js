var fs = require('fs');
var tpMoudle = require('../lib/tp');
var tp = fs.readFile('../test/tp2.tp');
var params = {
  rube: 'rubepass1',
  rubedong:'rubepass2'
};

console.log(tpMoudle.transform(tp, params, {}));
