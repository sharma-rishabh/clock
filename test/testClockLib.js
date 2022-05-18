const lib = require('../src/clockLib.js');
const { convertMinutesToAngle } = lib;
const { convertHoursToAngle } = lib;
const { createClock } = lib;
const assert = require('assert');

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

describe('createClock', () => {
  it('should convert given time to a clock object.', () => {
    return assert.deepStrictEqual(createClock('2:15'), { hour: 2, minutes: 15, hourHand: 67.5, minuteHand: 90 });
  })
  it('should convert to clock object if hour is more than 12.', () => {
    return assert.deepStrictEqual(createClock('13:20'), { hour: 13, minutes: 20, hourHand: 40, minuteHand: 120 });
  })
});
