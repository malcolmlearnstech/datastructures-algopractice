var reverseVowels = function (s) {
  s = s.split('');

  let vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (vowels[s[left]] && vowels[s[right]]) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      right--;
      left++;
    }

    if (!vowels[s[left]]) {
      left++;
    }

    if (!vowels[s[right]]) {
      right--;
    }
  }

  return s.join('');
};
