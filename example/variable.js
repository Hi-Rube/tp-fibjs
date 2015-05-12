var fs = require('fs');
var tpMoudle = require('../lib/tp');
var tp = fs.readFile('../test/tp1.tp');
var params = {
  rube: 'rubepass'
};
var options = {
  TEMP_S:'{{',
  TEMP_E:'}}'
};
console.log(tpMoudle.transform(tp, params, options));
