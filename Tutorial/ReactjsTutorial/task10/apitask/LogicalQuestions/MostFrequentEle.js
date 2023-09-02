var arr1 = [3, "a", "a", "a", 2, "a", 3, "a", 2, 4, 9, 3];
var mostFrequent = 0;
var vbl = 0;
var element = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      vbl++;
    }
    if (mostFrequent < vbl) {
      mostFrequent = vbl;
      element = arr1[i];
    }
  }
  vbl = 0;
}

console.log("element = ", element + "\n" + "Frequent = " + mostFrequent);
