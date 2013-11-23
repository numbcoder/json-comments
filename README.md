# json-comments

Make your json config support comments.

## Installation

    $ npm install json-comments

### Syntax:

```javascript
// require `json-comments` in your main module only once
require('json-comments');
```

### Examples:

`config.json`
```javascript
{
  // this is host
  "host" : "localhost",

  "port" : 3000, //port

  "url" : "https://github.com/numbcoder", /* url */

  /*
  * comments support for json
  */
  "username": "abc"
}
```

`app.js`
```javascript
require('json-comments');
var config = require('./config');

console.log(config);
// ...
```

####Parse JSON string
```js
var JSONC = require('json-comments');
var fs = require('fs');

var content = fs.readFileSync('./config.json', 'utf8');
// parse JSON String
var config = JSONC.parse(content);

console.log(config);
```

####Clean the JSON String
```js
var JSONC = require('json-comments');
var fs = require('fs');

var content = fs.readFileSync('./config.json', 'utf8');

// remove comments and spaces from JSON String
var JsonStr = JSONC.clean(content);
```

## License
MIT
