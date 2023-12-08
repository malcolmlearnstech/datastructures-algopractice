function alphaSeq(str) {
  str = str.toLowerCase().split('').sort();

  let alphabet = ' abcdefghijklmnopqrstuvwxyz';
  let comeback = [];

  for (let i = 0; i < str.length; i++) {
    let string = '';
    string += str[i].toUpperCase();
    while (string.length < alphabet.indexOf(str[i])) {
      string += str[i];
    }
    comeback.push(string);
  }

  return comeback.join(',');
}
