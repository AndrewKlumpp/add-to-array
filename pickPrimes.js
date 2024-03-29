function pickPrimes(array) {
  let primes = [];
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
};

let isPrime = function(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};


console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
