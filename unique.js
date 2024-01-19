function unique(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (!array.includes(char)) {
      array.push(char);
    }
  }
  return array;
};


console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
