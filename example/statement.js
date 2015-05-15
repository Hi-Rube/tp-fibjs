var fs = require('fs');
var tpMoudle = require('../lib/tp');
var tp = fs.readFile('../test/templates/CACHE-TEST.tp');
var params = {
  a: 'ruberuberuberuberuberuberuberuberuberube',
  a1: 'ruberuberuberuberuberuberuberuberuberube',
  a2: 'ruberuberuberuberuberuberuberuberuberube',
  a3: 'ruberuberuberuberuberuberuberuberuberube',
  a4: 'ruberuberuberuberuberuberuberuberuberube',
  a5: 'ruberuberuberuberuberuberuberuberuberube',
  a6: 'ruberuberuberuberuberuberuberuberuberube',
  a7: 'ruberuberuberuberuberuberuberuberuberube',
  a8: 'ruberuberuberuberuberuberuberuberuberube',
  a9: 'ruberuberuberuberuberuberuberuberuberube'
};

var time1 = new Date().getTime();
tpMoudle.transform(tp, params, {tpName:'statement'});
var time2 = new Date().getTime();
console.log(time2 - time1);

var time1 = new Date().getTime();
tpMoudle.transform(tp, params, {tpName:'statement'});
var time2 = new Date().getTime();
console.log(time2 - time1);
