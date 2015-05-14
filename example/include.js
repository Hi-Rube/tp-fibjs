var fs = require('fs');
var tpMoudle = require('../lib/tp');
var tp = fs.readFile('../test/templates/complex-statement.tp');
var params = {
  p:function(){return 1}
};
console.log(tpMoudle.transform(tp, params));
