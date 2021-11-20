const { isNumber } = require('./index');

test(`it shouldn't disappoint me 🤞`, () => {
  expect(isNumber(1)).toBe(true);
  expect(isNumber('Rambo')).toBe(false);
});
