function hasUniqueChars(str) {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (!frequency[str[i]]) {
      frequency[str[i]] = 1;
    } else frequency[str[i]]++;
  }

  let isOne = (element) => element === 1;

  frequency = Object.values(frequency);

  return frequency.every(isOne) ? true : false;
}

/*
REFACTORED SOLUTION - 

Because the .every() method inherently returns true or false, using a ternary is not necessary.
*/

function hasUniqueChars(str) {
  let frequency = {};

  for (let i = 0; i < str.length; i++) {
    if (!frequency[str[i]]) {
      frequency[str[i]] = 1;
    } else frequency[str[i]]++;
  }

  frequency = Object.values(frequency);

  let isOne = (element) => element === 1;

  return frequency.every(isOne);
}
