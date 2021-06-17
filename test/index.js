const sum = require('../');
const assert = require('assert');

describe('Sum', () => {
  it('should handle positive numbers', () => {
    assert.equal(sum(3, 5), 8);
  });
  it('should handle negative numbers', () => {
    assert.equal(sum(3, -5), -2);
  });
  it('should handle decimals', () => {
    assert.equal(sum(4.5, 15.1), 20.6);
  });
});
