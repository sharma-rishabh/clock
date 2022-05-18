const fs = require('fs');
const InitialAngle = -90;
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

const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');
const writeFile = (filePath, content) =>
  fs.writeFileSync(filePath, content, 'utf8');

const replaceHourDegree = (cssFile, { hourHand }) => {
  const currentAngle = InitialAngle + hourHand;
  return cssFile.replace(/__hour__/, currentAngle);
};

const replaceMinDegree = (cssFile, { minuteHand }) => {
  const currentAngle = InitialAngle + minuteHand;
  return cssFile.replace(/__min__/, currentAngle);
};

const main = (time) => {
  let cssFile = readFile('src/template.css');
  const clock = createClock(time);
  cssFile = replaceHourDegree(cssFile, clock);
  cssFile = replaceMinDegree(cssFile, clock);
  writeFile('./styles.css', cssFile);
};

exports.convertMinutesToAngle = convertMinutesToAngle;
exports.convertHoursToAngle = convertHoursToAngle;
exports.createClock = createClock;
exports.replaceHourDegree = replaceHourDegree;
exports.replaceMinDegree = replaceMinDegree;
exports.main = main;

