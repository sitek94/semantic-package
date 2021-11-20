function isNumber(something) {
  return typeof something === 'number';
}

function isString(something) {
  return typeof something === 'string';
}

function isBoolean(something) {
  // Let's fix it later 🙈🙈🙈
  return typeof something === false;
}

module.exports = {
  isNumber,
  isString,
  isBoolean,
}
