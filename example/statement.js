var fs = require('fs');
var tpMoudle = require('../lib/tp');
var tp = fs.readFile('../test/templates/simple-statement.tp');
var params = {
  rube: 'rubepass1',
  rubedong: 'rubepass2'
};

var time1 = new Date().getTime();
tpMoudle.transform(tp, params, {});
var time2 = new Date().getTime();
console.log(time2 - time1);
