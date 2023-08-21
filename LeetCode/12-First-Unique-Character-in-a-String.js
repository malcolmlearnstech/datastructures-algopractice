var firstUniqChar = function (s) {
  let frequency = {};
  let unique = 0;

  for (let i = 0; i < s.length; i++) {
    if (!frequency[s[i]]) {
      frequency[s[i]] = 1;
    } else {
      frequency[s[i]]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (frequency[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
