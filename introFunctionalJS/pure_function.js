function bar(x, y, z) {

  foo(x);
  return [y, z];

  function foo(x) {
    y = y * x;
    z = y * x;
  }
}

console.log(bar(5, 2, 3));
console.log(bar(5, 10, 15));
