const fs = require('fs');
const InitialAngle = -90;
const HourHandOneHour = 30;
const MinuteHandInOneHour = 0.5;
const MinuteHandInOneMinute = 6;
const HoursInAClock = 12;

const convertMinutesToAngle = (minutes) => minutes * MinuteHandInOneMinute;

const currentTime = () => {
  const date = new Date;
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return { hour, minutes, seconds };
};

const convertHoursToAngle = (hours, minutes) => {
  const actualHour = hours >= HoursInAClock ? hours - HoursInAClock : hours;
  const hourAngle = HourHandOneHour * actualHour;
  const minuteAngle = MinuteHandInOneHour * minutes;
  return hourAngle + minuteAngle;
};

const convertSecondsToAngle = (seconds) => {
  return MinuteHandInOneMinute * seconds;
};

const createClock = ({ hour, minutes, seconds }) => {
  const clock = {};

  clock.hour = hour;
  clock.minutes = minutes;
  clock.seconds = seconds;
  clock.hourHand = convertHoursToAngle(hour, minutes);
  clock.minuteHand = convertMinutesToAngle(minutes);
  clock.secondHand = convertSecondsToAngle(seconds);

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

const replaceSecDegree = (cssFile, { secondHand }) => {
  const currentAngle = InitialAngle + secondHand;
  return cssFile.replace(/__sec__/, currentAngle);
};

const main = () => {
  let cssFile = readFile('src/template.css');
  const time = currentTime();
  const clock = createClock(time);
  cssFile = replaceHourDegree(cssFile, clock);
  cssFile = replaceMinDegree(cssFile, clock);
  cssFile = replaceSecDegree(cssFile, clock);
  writeFile('./styles.css', cssFile);
};

exports.convertMinutesToAngle = convertMinutesToAngle;
exports.convertHoursToAngle = convertHoursToAngle;
exports.createClock = createClock;
exports.replaceHourDegree = replaceHourDegree;
exports.replaceMinDegree = replaceMinDegree;
exports.main = main;
