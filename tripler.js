function tripler(nums) {
  let tripled = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    tripled.push(num * 3);
  }
  return tripled;
};



console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]
