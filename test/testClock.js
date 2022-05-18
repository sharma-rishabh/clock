const lib = require('../src/clock.js');
const { convertMinutesToAngle } = lib;
const { convertHoursToAngle } = lib;
const assert = require('assert');
const { DESTRUCTION } = require('dns');

describe('convertMinutesToAngle', () => {
  it('should convert given zero minutes to angles.', () => {
    return assert.strictEqual(convertMinutesToAngle(0), 0);
  })
  it('should convert given 5 minutes to angles.', () => {
    return assert.strictEqual(convertMinutesToAngle(5), 30);
  })
});

describe('convertHoursToAngle', () => {
  it('should convert given minutes and hours to angles.', () => {
    return assert.strictEqual(convertHoursToAngle(1, 2), 31);
  })
  it('should convert to angles if hour is 12.', () => {
    return assert.strictEqual(convertHoursToAngle(12, 2), 1);
  })
  it('should convert to angles if hour is more than 12.', () => {
    return assert.strictEqual(convertHoursToAngle(15, 2), 91);
  })
});
