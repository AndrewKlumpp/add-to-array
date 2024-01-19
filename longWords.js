function longWords(words) {
  let longs = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 5) {
      longs.push(word);
    }
  }
  return longs;
}



console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
