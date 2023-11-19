function scramble(str, arr) {
  let string = {};

  arr.map((element, index) => (string[element] = str[index]));

  return Object.values(string).join('');
}
