var capitals = function (word) {
  let result = [];
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < word.length; i++) {
    if (alphabet.includes(word[i])) {
      result.push(i);
    }
  }

  return result;
};

/*
REFACTORED SOLUTION -

If we wanted to optimize for time complexity, we can store 
the capitalized alphabet in an object and used bracket 
notation to check for existence of the letter. We also used 
map as an alternative to looping thru the input string.
*/

var capitals = function (word) {
  let result = [];
  let alphabet = {
    A: 1,
    B: 1,
    C: 1,
    D: 1,
    E: 1,
    F: 1,
    G: 1,
    H: 1,
    I: 1,
    J: 1,
    K: 1,
    L: 1,
    M: 1,
    N: 1,
    O: 1,
    P: 1,
    Q: 1,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 1,
    W: 1,
    X: 1,
    Y: 1,
    Z: 1,
  };

  word = word.split('');

  word.map((element, index) => {
    if (alphabet[element]) {
      result.push(index);
    }
  });

  return result;
};
