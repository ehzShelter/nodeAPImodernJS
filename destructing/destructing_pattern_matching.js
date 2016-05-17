// list matching
var [a, , b] = [1, 2, 3]

// Can be used in parameter position
function g({name: x}) {
  console.log(x);
}
g({name: 5})

// if not found than it will be undefined
function g({name: x}) {
  console.log(x);
}
g({shit: 5})

// Fail-soft destructuring
var [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
var [a = 1] = [];
a === 1;
