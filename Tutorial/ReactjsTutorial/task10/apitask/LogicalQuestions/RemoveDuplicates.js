// Q1. Remove the duplicate Object from array and also do the sorting of the array.
// Use the Array.filter() method to filter the array of objects.
// We can also use a Set object to remove all duplicates from an array of objects.

// sorting of the array
const array = [77, 4, 55, 11, 52, 55, 11, 4, 44];
// const ascendingOrder = array.sort(); // not the currect method to sort an array
const ascendingOrder = array.sort((a, b) => {
  return a - b;
});
console.log("ascendingOrder = ", ascendingOrder);
const descendingOrder = array.sort((a, b) => {
  return b - a;
});

console.log("descendingOrder = ", descendingOrder);

// Remove the duplicate Object from array
const empData = [
  {
    Name: "mukesh",
    uuid: "@123SASDAaaaxxzs",
  },
  {
    Name: "Raj",
    uuid: "@123SASDAaaawwwzs",
  },
  {
    Name: "mukesh",
    uuid: "@123SASDAaaaxxzs",
  },
  {
    Name: "Mohit",
    uuid: "@123SwwwAaaaxxzs",
  },
  {
    Name: "Mohit",
    uuid: "@123SwwwAaaaxxzs",
  },
];
const newArray = [];
const filteredData = empData.filter((data) => {
  const isDuplicate = newArray.includes(data.Name);
  if (!isDuplicate) {
    newArray.push(data.Name);
    return true;
  }
  return false;
});

console.log(filteredData);
