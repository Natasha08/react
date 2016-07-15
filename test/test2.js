
var assert = require('chai').assert;

describe('Object', function() {
  it('should start null', function() {
    var obj = {};

    assert.equal(obj.length, null);
  });
});


describe('Object', function() {
  it('should start undefined', function() {
    var obj = {};

    assert.equal(obj.length, undefined);
  });
});

describe('Object', function() {
  it('should have a length of 3', function() {
    var obj = {
    	property1: 'some string',
    	property2: 'some other string',
    	property3: 'another string'    	
    };

    assert.equal(Object.keys(obj).length, 3);
  });
});

describe('Object', function() {
  it('should be a number', function() {
 
 //adding test here

    assert.equal();
  });
});
