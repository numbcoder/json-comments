var fs = require('fs');
var JSONC = require('./lib/jsonc'); 

function stripBOM(content) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

// Override extension for .json
require.extensions['.json'] = function(module, filename) {
  var content = fs.readFileSync(filename, 'utf8');
  try {
    module.exports = JSON.parse(JSONC.minify(stripBOM(content)));
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};

// expose clean method
exports.minify = JSONC.minify;

// parse a JSON string which contain comments
exports.parse = function(jsonStr) {
  return JSON.parse(JSONC.minify(jsonStr));
}
