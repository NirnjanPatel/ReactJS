const array1 = [12, 20, 35, 55, 65, 70];
const array2 = [33, 44];
var newElements = 0;

array1.splice(2, 0, ...array2);

console.log("New elements = ");
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] == array2[j]) {
      newElements = array1[i];
      console.log(newElements + " - index - " + i);
    }
  }
}

// for (let element of array1) {
//   console.log(element);
// }

// const array3 = array1;
// const array2 = [33, 44];

// console.log("indexOf(55) = " + array1.indexOf(55));
// console.log("indexOf(65) = " + array1.indexOf(65));

// array1.splice(2, 0, ...array2);

// console.log("array1 = ", array1);
// console.log("array2 = ", array2);

// array1.concat(array2);
// console.log(array1.concat(array2));

// var newElements;

// for (let i of array1) {
//   for (let key of array2) {
//     if (array1 != array2) {
//       newElements = array2;
//       array1.concat(array2);
//       console.log(array1.indexOf(array1));
//     }
//   }
// }
// if (array2 != array1) {
//   console.log();
// }
// if (array1.indexOf(88) && array1.indexOf(99)) {
//   console.log("indexOf(88) = " + array1.indexOf(88));
//   console.log("indexOf(99) = " + array1.indexOf(99));
// }
