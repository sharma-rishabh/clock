const lib = require('../clock.js');
const { replaceHourDegree } = lib;
const { replaceMinDegree } = lib;
const assert = require('assert');

describe('replaceHourDegree', () => {
  it('should replace hour in the css file.', () => {
    return assert.strictEqual(replaceHourDegree('(__hour__deg)', { hourHand: 90 }), '(0deg)');
  })
});

describe('replaceMinDegree', () => {
  it('should replace min in the css file.', () => {
    return assert.strictEqual(replaceMinDegree('(__min__deg)', { minuteHand: 90 }), '(0deg)');
  })
});