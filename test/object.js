import test from 'ava';
import co   from 'co';


const obj = require('../object')();

require('log1')

test.cb('array version', function (t) {
  //
  co(function *(){
    var res = yield obj;
    t.true(Object.keys(res).length === 2);
    t.end()
  }).catch(function onerror(err) {
    // log any uncaught errors
    // co will not throw any errors you do not handle!!!
    // HANDLE ALL YOUR ERRORS!!!
    console.log(err.stack);
  });
});