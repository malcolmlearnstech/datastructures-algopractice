function disemvowel(str) {
  let newStr = '';
  let vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };

  for (let i = 0; i < str.length; i++) {
    if (!vowels[str[i].toLowerCase()]) {
      newStr += str[i];
    }
  }
  return newStr;
}
