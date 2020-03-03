//ES5
var funcES5 = function(a, b) {
  b = b === undefined ? 2 : b
  return a + b
}

//ES6
let funcES6 = (a, b = 2) => {
  return a + b
}