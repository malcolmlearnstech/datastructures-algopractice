function checkVowel(string, position) {
  if (position > string.length - 1 || position < 0) {
    return false;
  }
  return string[position].match(/[aeiou]/gi) ? true : false;
}
