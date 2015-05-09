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

test.run();