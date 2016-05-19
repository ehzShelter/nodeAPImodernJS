var sayAbrar = function () {
  var makeLog = function () {
    console.log(alice);
  };

  var alice = "Hello there, Abrar";

  return makeLog;
};

// function is lke data object
var what = sayAbrar();
what();
