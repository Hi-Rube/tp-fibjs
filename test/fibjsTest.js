var fs = require('fs');
var test = require('test');
var module = require('../');

test.setup();

describe('fibjs run', function () {
  it('fibjs can be run', function () {
    var fibjs = 1;
    assert.equal(fibjs, 1);
  });

  it('fibjs module can be run', function () {
    assert.equal(module.intro(), 'Javascript templates engine');
  });
});

describe('tp engine run', function () {
  it('variable can be transformed', function () {
    var tp = fs.readFile('./templates/variable.tp');
    var html = fs.readFile('./templates/variable.html');
    var params = {
      rube: 'rubepass'
    };
    assert.equal(module.transform(tp, params), html);
  });

  it('TEMP_S and TEMP_E can be changed', function () {
    var tp = fs.readFile('./templates/TEMP_S-TEMP_E.tp');
    var html = fs.readFile('./templates/TEMP_S-TEMP_E.html');
    var params = {
      rube: 'rubepass'
    };
    var options = {
      TEMP_S: '{{',
      TEMP_E: '}}'
    };
    assert.equal(module.transform(tp, params, options), html);
  });

  it('Quotes can be used normally', function () {
    var tp = fs.readFile('./templates/quotes.tp');
    var html = fs.readFile('./templates/quotes.html');
    assert.equal(module.transform(tp), html);
  });
});

describe('statement transform', function () {
  it('simple statement can be transformed and no blank lines', function () {
    var tp = fs.readFile('./templates/simple-statement.tp');
    var html = fs.readFile('./templates/simple-statement.html');
    assert.equal(module.transform(tp), html);
  });

  it('complex statement can be transform and no blank line', function () {
    var tp = fs.readFile('./templates/complex-statement.tp');
    var html = fs.readFile('./templates/complex-statement.html');
    assert.equal(module.transform(tp), html);
  })
});

describe('Different types of variables', function () {
  it('support object', function () {
    var tp = fs.readFile('./templates/types-object.tp');
    var html = fs.readFile('./templates/types-object.html');
    var params = {
      rube: {
        a: 'rubepass1',
        b: 'rubepass2'
      }
    };
    assert.equal(module.transform(tp, params), html);
  });

  it('support execute function', function () {
    var tp = fs.readFile('./templates/types-function.tp');
    var html = fs.readFile('./templates/types-function.html');
    var params = {
      rube: {
        run: function () {
          return '<h1><a href="hirube.com">rubepass</a></h1>'
        },
        intro: 'rube'
      }
    };
    assert.equal(module.transform(tp, params), html);
  });
});

test.run();
