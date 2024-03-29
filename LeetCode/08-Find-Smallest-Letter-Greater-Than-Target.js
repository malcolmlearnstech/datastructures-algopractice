var nextGreatestLetter = function (letters, target) {
  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let distance = Infinity;
  let shortestLetter;

  target = alphabet[target];

  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];

    if (alphabet[currentLetter] > target) {
      if (alphabet[currentLetter] - target < distance) {
        distance = alphabet[currentLetter] - target;
        shortestLetter = currentLetter;
      }
    }
  }

  if (shortestLetter === undefined) {
    return letters[0];
  } else {
    return shortestLetter;
  }
};

/*
REFACTORED SOLUTION -

As string letters have their own native placement within javascript, 
we can use the loop to simply iterate thru the "letters" array and 
define the answer as the first iterated letter which exists in 
placement after the "target" 
*/

var nextGreatestLetter = function (letters, target) {
  let shortestLetter;

  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];

    if (currentLetter > target) {
      shortestLetter = currentLetter;
      break;
    }
  }

  if (shortestLetter === undefined) {
    return letters[0];
  } else {
    return shortestLetter;
  }
};
