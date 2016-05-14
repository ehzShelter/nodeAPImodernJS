const assert = require('assert');

const obj1 = { a : { b : 1} };
const obj2 = { a : { b : 2} };
const obj3 = { a : { b : 3} };

const obj4 = Object.create(obj1);

// // this will throw assertion erro nonetheless
// assert.notDeepEqual(obj1, obj1);
//
assert.deepEqual(obj1, obj1);


