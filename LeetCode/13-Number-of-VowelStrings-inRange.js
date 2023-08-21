var vowelStrings = function (words, left, right) {
  let vowelStrings = 0;
  let vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };

  for (let i = left; i <= right; i++) {
    if (vowels[words[i][0]] && vowels[words[i][words[i].length - 1]]) {
      vowelStrings++;
    }
  }

  return vowelStrings;
};
