module.exports = function (ms) {
  return function (cb) {
    setTimeout(cb, ms);
  };
}
