function nthChar(words) {
  let string = '';

  if (words.length >= 1) {
    for (let i = 0; i < words.length; i++) {
      string += words[i][i];
    }
  }

  return string;
}
