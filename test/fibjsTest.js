var fs = require('fs');
var test = require('test');
test.setup();

describe('fibjs run', function () {
  it('fibjs can be run', function () {
    var fibjs = 1;
    assert.equal(fibjs, 1);
  });

  it('fibjs module can be run', function () {
    var module = require('../');
    assert.equal(module.intro(), 'fibjs templates engine');
  });
});

describe('tp engine run', function () {
  it('variable can be transform', function () {
    var module = require('../');
    var tp = fs.readFile('./tp1.tp');
    var html = fs.readFile('./tp1.html');
    var params = {
      rube: 'rubepass'
    };
    var options = {
      TEMP_S:'{{',
      TEMP_E:'}}'
    };
    assert.equal(module.transform(tp, params, options), html);
  })
});

test.run();
