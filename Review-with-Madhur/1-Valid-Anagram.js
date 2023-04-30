function validAnagram(str, target) {
  if (str.length !== target.length) {
    return false;
  }
  str = str.split('').sort();
  target = target.split('').sort();

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== target[i]) {
      return false;
    }
  }
  return true;
}
