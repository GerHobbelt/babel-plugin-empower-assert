'use strict';

var add, assert;
assert = require("@gerhobbelt/power-assert");

add = function (a, b) {
  assert(!isNaN(a));
  assert.equal(typeof b, 'number');
  assert.ok(!isNaN(b));
  return a + b;
};