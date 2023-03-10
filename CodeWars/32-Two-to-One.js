function longest(s1, s2) {
  let newString1 = s1.split('').sort();
  let newString2 = s2.split('').sort();
  let returnString = [];

  for (const element of newString1) {
    if (!newString2.includes(element) && !returnString.includes(element)) {
      returnString.push(element);
    }
  }

  for (const element of newString2) {
    if (!returnString.includes(element)) {
      returnString.push(element);
    }
  }

  return returnString.sort().join('');
}
