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

## License
MIT