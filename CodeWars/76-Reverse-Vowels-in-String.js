function reverseVowels(str) {
  str = str.split('');
  let vowels = 'aeiouAEIOU';
  let strVowels = [];

  for (let i = str.length - 1; i >= 0; i--) {
    if (vowels.includes(str[i])) {
      strVowels.push(str[i]);
    }
  }

  let strVowelsIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      str[i] = strVowels[strVowelsIndex];
      strVowelsIndex++;
    }
  }
  return str.join('');
}
