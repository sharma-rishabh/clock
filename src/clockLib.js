const HourHandOneHour = 30;
const MinuteHandInOneHour = 0.5;
const MinuteHandInOneMinute = 6;
const HoursInAClock = 12;
const ZERO = 0;
const ONE = 1;

const convertMinutesToAngle = (minutes) => minutes * MinuteHandInOneMinute;

const getHour = (timeAsArray) => +timeAsArray[ZERO];

const getMinutes = (timeAsArray) => +timeAsArray[ONE];

const convertHoursToAngle = (hours, minutes) => {
  const actualHour = hours >= HoursInAClock ? hours - HoursInAClock : hours;
  const hourAngle = HourHandOneHour * actualHour;
  const minuteAngle = MinuteHandInOneHour * minutes;
  return hourAngle + minuteAngle;
};

const createClock = (time) => {
  const timeAsArray = time.split(':');
  const hour = getHour(timeAsArray);
  const minutes = getMinutes(timeAsArray);
  const clock = {};

  clock.hour = hour;
  clock.minutes = minutes;
  clock.hourHand = convertHoursToAngle(hour, minutes);
  clock.minuteHand = convertMinutesToAngle(minutes);

  return clock;
};

exports.convertMinutesToAngle = convertMinutesToAngle;
exports.convertHoursToAngle = convertHoursToAngle;
exports.createClock = createClock;

