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
