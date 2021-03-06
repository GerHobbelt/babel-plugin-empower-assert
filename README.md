babel-plugin-empower-assert
================================

[![power-assert][power-assert-banner]][power-assert-url]

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Dependency Status][depstat-image]][depstat-url]
[![License][license-image]][license-url]


`babel-plugin-empower-assert` is a [Babel](https://babeljs.io/) plugin to convert [assert](https://nodejs.org/api/assert.html) to [power-assert](https://github.com/power-assert-js/power-assert) at compile time.


INSTALL
---------------------------------------

```
$ npm install --save-dev @gerhobbelt/babel-plugin-empower-assert @gerhobbelt/power-assert
```


CAUTION
---------------------------------------

Babel7 is incompatible with Babel6.

For Babel6, you need to use [the 1.x release of babel-plugin-empower-assert](https://github.com/power-assert-js/babel-plugin-empower-assert/tree/v1.4.0).

```
$ npm install --save-dev babel-plugin-empower-assert@1.4.0
```


HOW TO USE
---------------------------------------


### via [.babelrc](https://babeljs.io/docs/usage/babelrc/) (Recommended)

```javascript
{
  "presets": [
    ...
  ],
  "env": {
    "development": {
      "plugins": [
        "babel-plugin-empower-assert"
      ],
    }
  }
}
```

```
$ babel /path/to/src/target.js > /path/to/build/target.js
```


### via [Babel CLI](http://babeljs.io/docs/usage/cli/)

```
$ babel --plugins babel-plugin-empower-assert /path/to/src/target.js > /path/to/build/target.js
```

or shortly,

```
$ babel --plugins empower-assert /path/to/src/target.js > /path/to/build/target.js
```


### via [Babel API](http://babeljs.io/docs/usage/api/)

```javascript
var babel = require('@gerhobbelt/babel-core');
var jsCode = fs.readFileSync('/path/to/src/target.js');
var transformed = babel.transform(jsCode, {
    presets: [...],
    plugins: ['babel-plugin-empower-assert']
});
console.log(transformed.code);
```


EXAMPLE
---------------------------------------

For given `math.js` below,

```javascript
'use strict';

var assert = require('assert');

function add (a, b) {
    assert(!isNaN(a));
    assert.equal(typeof b, 'number');
    assert.ok(!isNaN(b));
    return a + b;
}
```

Run `babel` with `--plugins empower-assert` to transform code.

```
$ babel --plugins empower-assert /path/to/demo/math.js > /path/to/build/math.js
```

You will see `assert` is converted to `power-assert`.

```javascript
'use strict';

var assert = require('@gerhobbelt/power-assert');

function add(a, b) {
    assert(!isNaN(a));
    assert.equal(typeof b, 'number');
    assert.ok(!isNaN(b));
    return a + b;
}
```


AUTHOR
---------------------------------------
* [Takuto Wada](https://github.com/twada)


LICENSE
---------------------------------------
Licensed under the [MIT](https://github.com/GerHobbelt/babel-plugin-empower-assert/blob/master/LICENSE) license.


[power-assert-url]: https://github.com/GerHobbelt/power-assert
[power-assert-banner]: https://raw.githubusercontent.com/power-assert-js/power-assert-js-logo/master/banner/banner-official-fullcolor.png

[travis-url]: https://travis-ci.org/GerHobbelt/babel-plugin-empower-assert
[travis-image]: https://secure.travis-ci.org/GerHobbelt/babel-plugin-empower-assert.svg?branch=master

[npm-url]: https://npmjs.org/package/@gerhobbelt/babel-plugin-empower-assert
[npm-image]: https://badge.fury.io/js/%40gerhobbelt%2Fbabel-plugin-empower-assert.svg

[depstat-url]: https://gemnasium.com/GerHobbelt/babel-plugin-empower-assert
[depstat-image]: https://gemnasium.com/GerHobbelt/babel-plugin-empower-assert.svg

[license-url]: https://github.com/GerHobbelt/babel-plugin-empower-assert/blob/master/LICENSE
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg
