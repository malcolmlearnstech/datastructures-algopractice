var encryptThis = function (text) {
  text = text.split(' ');
  let encrypted = [];

  text.forEach((word) => {
    let temp;
    word = word.split('');
    word[0] = word.join('').charCodeAt(0);
    if (word.length > 1) {
      temp = word[word.length - 1];
      word[word.length - 1] = word[1];
      word[1] = temp;
    }
    encrypted.push(word.join(''));
  });
  return encrypted.join(' ');
};
