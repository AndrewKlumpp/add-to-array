function summationSequence(start, length) {
  let seq = [start];
  for (let i = 1; i < length; i++) {
    seq.push(summation(seq[i - 1]));
  }
  return seq;
};

function summation(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total = total + i;
  }
  return total;
};

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
