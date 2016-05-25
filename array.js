require('log1')

module.exports = function () {
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  
  log([a, b, c])
  log('sssss')
  return [a, b, c];
}
 