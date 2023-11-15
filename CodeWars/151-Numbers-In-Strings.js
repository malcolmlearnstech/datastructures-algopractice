function solve(s) {
  let letters = /[a-z]/g;
  let max = 0;

  s.split(letters).map((element) => {
    if (element !== null && Number(element) > max) {
      max = Number(element);
    }
  });

  return max;
}

/*
REFACTOR SOLUTION -

Because of using regex for all letters in the split 
returns some empty strings, we can employ filter to 
ensure that we are mapping thru an array of only number 
strings.
*/
