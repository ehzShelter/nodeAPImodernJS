const add = function (Cvalue) {
  const sum = function (numberPassedIn) {
    return Cvalue + numberPassedIn;
  };

  return sum;
};

const foo = add(5);

console.log(foo(11));
console.log(foo(15));
