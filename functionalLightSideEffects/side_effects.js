var bar = function (x) {
  y = y * x;
  z = y * x;
}

var y = 2, z = 3;

bar(5);

console.log(y); // 10
console.log(z); // 50

bar(5);

console.log(y); // 50
console.log(z); // 250
