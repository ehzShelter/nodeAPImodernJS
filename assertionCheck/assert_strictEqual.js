// triple equal ===
const assert = require('assert');

// this will assert fail
// assert.strictEqual(1, 2);

assert.strictEqual(1, 1);
// this will assert fail
// assert.strictEqual(1, '1');
assert.notStrictEqual(1, '1');

assert.strictEqual("closing", "closing", "third parameter is always optional");

assert.ok(true); // OK
assert.ok(1); // OK
// assert.ok(false);
// throws "AssertionError: false == true"
// assert.ok(0);
// throws "AssertionError: 0 == true"
// assert.ok(false, 'it\'s false');
// throws "AssertionError: it's false"
//

// // there are three types of custom validation
// 1. Validate instanceof using constructor
// 2. Validate error message using RegExp
// 3. Validate using custom error validation

// INSTANCEOF using constructor
assert.throws(() => {
  throw new Error('Wrong value');
}, Error);
// using RegExp
assert.throws(() => {
  throw new Error('Wrong value');
}, /regex/);
// custom error validation
assert.throws(() => {
    throw new Error('Wrong value');
  },
  function(err) {
    if ((err instanceof Error) && /regex/.test(err)) {
      return true;
    }
  },
  'unexpected error'
);

// REMEMBER SECOND ARGUMENT IS NOT A STRING
// THIS IS A MISTAKE! DO NOT DO THIS!
assert.throws(myFunction, 'missing foo', 'did not throw with expected message');

// Do this instead.
assert.throws(myFunction, /missing foo/, 'did not throw with expected message');
