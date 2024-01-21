function gimmeTheLetters(sp) {
  let output = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let endpoints = sp.split('-').map((element) => element.toLowerCase());
  let idx = alphabet.indexOf(endpoints[0]);

  while (idx <= alphabet.indexOf(endpoints[1])) {
    output += alphabet[idx];
    idx++;
  }

  return sp[0] === sp[0].toLowerCase() ? output : output.toUpperCase();
}
