function count(string) {
  string = string.split('');
  let charCount = {};

  string.forEach((element) => {
    if (!charCount[element]) {
      charCount[element] = 1;
    } else charCount[element] += 1;
  });

  return charCount;
}
