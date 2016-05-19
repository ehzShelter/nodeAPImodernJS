function counter() {
  var n = 0;
  return {
    count: function() { return ++n; },
    reset: function() {
      n = 0;
      return n;
    }
  };
}

var myCounter = counter();

console.log(myCounter.count());
console.log(myCounter.count());
console.log(myCounter.count());
console.log(myCounter.count());
console.log(myCounter.count());

console.log(myCounter.reset());

console.log(myCounter.count());
console.log(myCounter.count());
