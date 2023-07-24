var capitals = function (word) {
  let result = [];
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < word.length; i++) {
    if (alphabet.includes(word[i])) {
      result.push(i);
    }
  }

  return result;
};
