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

//REFACTORED VERSION OF ABOVE CODE

function longest(s1, s2) {
  //instead of looking at the elements of both strings separately, we put the strings together then pull the characters afterward
  let combo = s1.concat(s2).split('');
  let uniqueLetters = [];

  for (const element of combo) {
    if (!uniqueLetters.includes(element)) {
      uniqueLetters.push(element);
    }
  }
  //we do a final sort at the end to ensure characters are in proper order
  return uniqueLetters.sort().join('');
}
