function consonantSolve(s) {
  let alphabet = ' abcdefghijklmnopqrstuvwxyz';
  let max = 0;
  s = s.split(/[aeiou]/g);
  s = s.filter((element) => element !== '');

  s.map((element) => {
    let sum = 0;

    for (let i = 0; i < element.length; i++) {
      sum += alphabet.indexOf(element[i]);
    }
    max = Math.max(max, sum);
  });

  return max;
}

/* 
REFACTORED SOLUTION -

Instead of storing the alphabet in a string and using indexOf to determine value, 
we can make an object with each letter having a corresponding value of its number 
position in the alphabet. Storing this information in an object, makes accessing 
the corresponding position number a lot easier. It is also less time complex, because 
we are not using indexOf to iterate thru alphabet string every time to find the value.
*/

function consonantSolve(s) {
  let alphabet = {
    b: 2,
    c: 3,
    d: 4,
    f: 6,
    g: 7,
    h: 8,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let max = 0;
  s = s.split(/[aeiou]/g);
  s = s.filter((element) => element !== '');

  s.map((element) => {
    let sum = 0;

    for (let i = 0; i < element.length; i++) {
      sum += alphabet[element[i]];
    }
    max = Math.max(max, sum);
  });

  return max;
}
