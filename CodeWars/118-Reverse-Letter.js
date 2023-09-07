function reverseLetter(str) {
  str = str
    .replace(/[^a-z]/g, '')
    .split('')
    .reverse()
    .join('');

  return str;
}
