function isNumber(something) {
  return typeof something === 'number';
}

function isString(something) {
  return typeof something === 'string';
}

function isBoolean(something) {
  return typeof something === 'boolean';
}

module.exports = {
  isNumber,
  isString,
  isBoolean,
}
