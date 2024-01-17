function pitPat(max) {
  let array = [];
  for (let i = 0; i <= max; i++) {
    if (i % 4 === 0 && i % 6 !== 0) {
      array.push(i);
    } else if (i % 6 === 0 && i % 4 !== 0) {
      array.push(i);
    }
  }
  return array;
};

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]
