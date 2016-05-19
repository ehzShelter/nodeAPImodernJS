// Your code here
var myArray;

myArray = ["Emrul Zawad", "EmrulHasanZawad"];

var cutName = function(arg){
  return arg.split(" ");
};

var myData = {};

myData = {
  fullName: cutName(myArray[0]),
  skype: myArray[1],
  github: "ehzShelter"
};
