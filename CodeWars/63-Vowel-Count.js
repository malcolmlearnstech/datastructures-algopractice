function getCount(str) {
  let vowels = 'aeiou';
  let count = 0;
  str = str.split('');
  for (element of str) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}
