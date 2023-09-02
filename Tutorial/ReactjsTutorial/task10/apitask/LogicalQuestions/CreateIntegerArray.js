// Q8. generate an array of specified length, filled with integer numbers, increase by one from starting position.
var array = [];
const arrLength = 10;
var element = 10;
console.log("array = ");
for (let i = 0; i < arrLength; i++) {
  array.push(element);
  element++;
}
console.log(array);
