function camelCase(string) {
  string = string.split('');

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      string.splice(i, 0, ' ');
      i += 2;
    }
  }
  return string.join('');
}
