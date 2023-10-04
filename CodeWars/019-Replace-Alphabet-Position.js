function alphabetPosition(text) {
  text = text.toLowerCase();
  let newString = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < text.length; i++) {
    if (alphabet.includes(text[i])) {
      newString.push(alphabet.indexOf(text[i]) + 1);
    }
  }
  return newString.join(' ');
}
