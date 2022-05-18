const library = require('../src/generateHtml.js');
const { generateAttributes, generateTag, openingTag, makeLine } = library;
const assert = require('assert');

describe('generateAttribute', () => {
  it('should create an attribute with the given name and value.', () => {
    return assert.strictEqual(generateAttributes('class', 'line'), 'class="line"');
  })
  it('should create attribute with multiple values.', () => {
    return assert.strictEqual(generateAttributes('class', 'hour clock'), 'class="hour clock"');
  })
  it('should create reference property.', () => {
    return assert.strictEqual(generateAttributes('href', 'http://google.com'), 'href="http://google.com"');
  })
});

describe('generateTag', () => {
  it('should create and empty tag', () => {
    return assert.strictEqual(generateTag('div'), '<div></div>');
  })
  it('it should wrap content with given tag', () => {
    return assert.strictEqual(generateTag('div', 'string'), '<div>string</div>');
  })
  it('it should generate tag with attributes', () => {
    return assert.strictEqual(generateTag('div', '', 'class="link"'), '<div class="link"></div>');
  })
});

describe('openingTag', () => {
  it('should create and opening tag', () => {
    return assert.strictEqual(openingTag('div'), '<div>');
  })
  it('should create and opening tag with given attributes', () => {
    return assert.strictEqual(openingTag('div', 'class="link"'), '<div class="link">');
  })
});

describe('makeLine', () => {
  it('should make a div with class as line.', () => {
    return assert.strictEqual(makeLine(), '<div class="line"></div>');
  })
});
