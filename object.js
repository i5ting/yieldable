require('log1')

module.exports = function () {
  return {
    1: Promise.resolve(1),
    2: Promise.resolve(2),
  };
}
