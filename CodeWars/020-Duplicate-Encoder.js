function duplicateEncode(word) {
  let letters = word.toLowerCase().split('');
  let translate = [];

  letters.forEach((element) => {
    if (letters.indexOf(element) != letters.lastIndexOf(element)) {
      translate.push(')');
    } else {
      translate.push('(');
    }
  });
  return translate.join('');
}
