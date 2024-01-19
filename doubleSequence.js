function doubleSequence(base, length) {
  let array = [];

  if (length === 0) {
    return array;
  }

  array.push(base);

  for (let i = 1; i <= length - 1; i++) {
    array.push(array[i - 1] * 2);
 }
 return array;
}

console.log(doubleSequence(7, 3));  // [7, 14, 28]
console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
console.log(doubleSequence(5, 3));  // [5, 10, 20]
console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
console.log(doubleSequence(5, 0));  // [ ]
