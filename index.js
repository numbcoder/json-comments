var fs = require('fs');

function stripBOM(content) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

//remove comments
function removeComments(str) {
  str = str || "";
 
  str = str.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\//g, "");
  // Everything after '//'
  str = str.replace(/\/\/[^\n\r]*/g, ""); 
 
  return str;
}

// Override extension for .json
require.extensions['.json'] = function(module, filename) {
  var content = fs.readFileSync(filename, 'utf8');
  try {
    module.exports = JSON.parse(removeComments(stripBOM(content)));
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};