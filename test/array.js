import test from 'ava';
import co   from 'co';


const arr = require('../array')();

require('log1')

test.cb('array version', function (t) {
  //
  co(function *(){
    var res = yield arr;
    //
    // console.log(res);
    // // => [1, 2, 3]
    
    t.true(res.length === 3);
    t.end()
  }).catch(function onerror(err) {
    // log any uncaught errors
    // co will not throw any errors you do not handle!!!
    // HANDLE ALL YOUR ERRORS!!!
    console.log(err.stack);
  });
});