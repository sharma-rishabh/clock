const generateAttributes = (attribute, value) => {
  return attribute + '="' + value + '"';
};

const openingTag = (tagName, attributes = '') =>
  attributes ? '<' + tagName + ' ' + attributes + '>' : '<' + tagName + '>';

const generateTag = (tagName, content = '', attributes = '') => {
  return openingTag(tagName, attributes) + content + '</' + tagName + '>';
};

const makeLine = () => {
  const attribute = generateAttributes('class', 'line');
  return generateTag('div', '', attribute);
};

exports.generateAttributes = generateAttributes;
exports.generateTag = generateTag;
exports.openingTag = openingTag;
exports.makeLine = makeLine;

// const time = '2:35';

// const clock = {
//   hour: 2,
//   minute: 35,
//   minuteHand: 27,
//   hourHand: 50
// };
