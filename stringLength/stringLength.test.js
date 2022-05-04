const stringLength = require ('./stringLength');

test('return a number', () => {
    expect(stringLength('string')).toBe(6);
});