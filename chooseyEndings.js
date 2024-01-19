function chooseyEndings(words, ending) {
  let array = [];

  if (!Array.isArray(words)) {
    return [];
  }

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.endsWith(ending)) {
      array.push(word);
    }
  }
  return array;
};

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// [ 'hound', 'bond' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// [ 'simplicity', 'felicity' ]

console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// [ ]

console.log(chooseyEndings(17, 'ily'));
// [ ]
