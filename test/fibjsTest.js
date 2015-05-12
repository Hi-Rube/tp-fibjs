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
  it('variable can be transformed', function () {
    var module = require('../');
    var tp = fs.readFile('./tp1.tp');
    var html = fs.readFile('./tp1.html');
    var params = {
      rube: 'rubepass'
    };
    assert.equal(module.transform(tp, params), html);
  });

  it('TEMP_S and TEMP_E can be changed', function () {
    var module = require('../');
    var tp = fs.readFile('./tp4.tp');
    var html = fs.readFile('./tp4.html');
    var params = {
      rube: 'rubepass'
    };
    var options = {
      TEMP_S: '{{',
      TEMP_E: '}}'
    };
    assert.equal(module.transform(tp, params, options), html);
  });

  it('statement can be transformed and no blank lines', function () {
    var module = require('../');
    var tp = fs.readFile('./tp2.tp');
    var html = fs.readFile('./tp2.html');
    assert.equal(module.transform(tp), html);
  });

  it('Quotes can be used normally', function () {
    var module = require('../');
    var tp = fs.readFile('./tp3.tp');
    var html = fs.readFile('./tp3.html');
    assert.equal(module.transform(tp), html);
  });
});

test.run();
