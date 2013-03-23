require('../index');
var assert = require('assert');

var result = require('./comments');

var obj = {
  a: "far",
  b: 32,
  c: {
    key: "ccdd"
  },
  list: ["first", 2]
}

console.log('parse comments json success!');

console.log(result);

assert.equal(result.a, obj.a, 'yes');

assert.deepEqual(result, obj, 'parse result is valid!');

