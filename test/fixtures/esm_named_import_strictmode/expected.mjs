import { default as loose } from "@gerhobbelt/power-assert";
const assert = loose.strict;

function add(a, b) {
  assert(!isNaN(a));
  assert.equal(typeof b, 'number');
  assert.ok(!isNaN(b));
  return a + b;
}