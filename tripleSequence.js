function tripleSequence(start, length) {
  let array = [];

  if (length === 0) {
    return array;
  }

  array.push(start);

  for (let i = 1; i <= length - 1; i++) {
    array.push(array[i - 1] * 3);
 }
 return array;
}

console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
