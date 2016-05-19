// create your parent function
function checkScope() {
  // define some variables in the parent's local scope
  var innerVar = "local scope";

  // define a function insifr the parent function. we call this a child
  function innerFunc() {
    return innerVar;
  }

  // return that innerFunc from inside the parent function
  return innerFunc;
}

// execution part:

// run parent function and save to a varibale . This variable will hold whatever
// that function RETURNS
var holdingClosure = checkScope();

// optional: check waht that variable holds as its value
// Hint: it should be innerFunc
// holdingClosure;
// run the inner function
holdingClosure();
