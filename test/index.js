var assert = require('assert');
var superWrapper = require('..');

describe('super wrapper', function() {

  it('should return a function', function() {
    assert.equal('function', typeof superWrapper);
  });

  it('should wrap super', function() {
    var functionHasBeenCalled = false;
    var superHasBeenCalled = false;

    var fn = function() {
      functionHasBeenCalled = true;
      this._super();
    }

    function _super() {
      superHasBeenCalled = true;
    }

    // Wrap it.
    fn = superWrapper(fn, _super);

    fn();

    assert.equal(functionHasBeenCalled, true);
    assert.equal(superHasBeenCalled, true);

  });

});