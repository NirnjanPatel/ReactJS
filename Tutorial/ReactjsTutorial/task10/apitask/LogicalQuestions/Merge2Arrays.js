// Q6 merge two arrays and removes all duplicates elements.
var array1 = [1, 2, 3, 5, 8, 7];
var array2 = [2, 30, 1, 5, 10, 12, 8, 15, 20, 1, 2, 3, 5, 8, 7];

// array1.push(array2); // will push an array on a single index
const array3 = array1.concat(array2);
// console.log(array3);

// 1st method
// let uniqueArray = [...new Set(array3)];
// console.log(uniqueArray);

// 2nd method
let uniqueArray = array3.filter((c, index) => {
  return array3.indexOf(c) !== index;
});
console.log(uniqueArray);
