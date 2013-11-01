Super Wrap
---

Super wrap wraps child & parent functions to create a proper `_super` chain. This allows you, within the child function, to call `this._super()` which points to the correct parent function.

This is primarily used in Ember.js, but would be useful as it's own library, instead of being in a mammoth of a framework.

## Install

NPM:
```bash
npm install super-wrap
```

Component:
```bash
component install thehydroimpulse/super-wrap
```

## Usage:

This module exports a single function:

```js
var wrap = require('super-wrap');
var assert = require('assert');

// The child/main function
var fn = function() {
  return this._super() + ' Child';
};

// The parent/super
function parent() {
  return 'Parent';
}

fn = wrap(fn, parent):

assert.equal(fn(), 'Parent Child');
```

## Test

```
mocha
```

## License

The MIT License (MIT)

Copyright (c) 2013 Daniel Fagnan <dnfagnan@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
