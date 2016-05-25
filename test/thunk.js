import test from 'ava';

global.log = console.log;

const sleep = require('../thunk');


test('thunk version', function * (t) {
  var now = Date.now();
    // wait for 100 ms
    yield sleep(100);

    t.true((Date.now() - now) > 100);
});