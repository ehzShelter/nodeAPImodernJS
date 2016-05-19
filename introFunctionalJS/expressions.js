var box = {};

box["material"] = "cardboard";

var func = function() {
  return "material";
};

// this will print the value of box object
console.log(box[func()]);
