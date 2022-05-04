const calculator = require('./calculator.js');

describe('calculator', () => {
  test('Addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('Subtraction', () => {
    expect(calculator.subtract(7, 3)).toBe(4);
  });

  test('Multiply', () => {
    expect(calculator.multiply(8, 2)).toBe(16);
  });

  test('Division', () => {
    expect(calculator.divide(12, 4)).toBe(3);
  });
});