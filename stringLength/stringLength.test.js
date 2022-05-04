const stringLength = require('./stringLength.js');

describe('stringLength', () => {
  test('Input Type', () => {
    expect(typeof stringLength('sty44554')).toBe('number');
  });
  test('return a number', () => {
    expect(stringLength('string')).toBe(6);
  });

  test('return error', () => {
    expect(() => {
      stringLength('inspirational');
    }).toThrow('String must be between 1 and 10 characters long');
  });
});