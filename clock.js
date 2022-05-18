const { createClock } = require('./src/clockLib.js');
const fs = require('fs');
const InitialAngle = -90;

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

main(process.argv[2]);

exports.replaceHourDegree = replaceHourDegree;
exports.replaceMinDegree = replaceMinDegree;
