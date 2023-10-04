function validateWord(s) {
  s = s.toLowerCase();
  let occurences = {};

  for (let i = 0; i < s.length; i++) {
    let character = s[i];
    if (!occurences[character]) {
      occurences[character] = 1;
    } else {
      occurences[character] += 1;
    }
  }

  let comparison = occurences[s[0]];
  let occurenceValues = Object.values(occurences);

  for (let i = 0; i < occurenceValues.length; i++) {
    if (occurenceValues[i] !== comparison) {
      return false;
    }
  }

  return true;
}
