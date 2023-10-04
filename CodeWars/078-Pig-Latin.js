function pigIt(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let separatedWords = [];
  str = str.split(' ');
  str = str.forEach((element) => {
    separatedWords.push(element.split(''));
  });
  let allLetters = (character) => alphabet.includes(character.toLowerCase());

  for (let element of separatedWords) {
    if (element.every(allLetters)) {
      let firstLetter = element.shift();
      element.push(firstLetter);
      element.push('ay');
      element = element.join('');
    }
  }

  separatedWords.map(
    (element, index) => (separatedWords[index] = element.join(''))
  );

  return separatedWords.join(' ');
}
