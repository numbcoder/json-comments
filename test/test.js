var JSONC =  require('../index');
var fs = require('fs');
var assert = require('assert');

var result = require('./comments');

var obj = {
  a: "far",
  b: 32,
  c: {
    url: "http://github.com",
    key: "ccdd"
  },
  list: ["first", 2]
};

console.log('parse comments json success!');

console.log(result);

assert.equal(result.a, obj.a, 'yes');

assert.deepEqual(result, obj, 'parse result is valid!');

var pkgStr = fs.readFileSync('./package.json', 'utf8');

var package = JSONC.parse(pkgStr);

assert.equal(package.name, 'json-comments', 'yes');

var pkgStr2 = JSONC.minify(pkgStr);
//console.log(pkgStr2);
var package2 = JSON.parse(pkgStr2);

assert.equal(package.name, package2.name, 'yes');

console.log(package);


