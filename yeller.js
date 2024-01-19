function yeller(words) {
  let yelled = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let yelledWord = word.toUpperCase() + "!";
    yelled.push(yelledWord);
  }
  return yelled;
};


console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
