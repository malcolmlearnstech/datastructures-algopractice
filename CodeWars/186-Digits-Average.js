function digitsAverage(input) {
  input = String(input).split('');

  while (input.length > 1) {
    let tier = [];

    for (let i = 0; i < input.length - 1; i++) {
      tier.push(
        Math.ceil((Number(input[i]) + Number(input[i + 1])) / 2).toString()
      );
    }

    input = tier.join('');
  }
  return Number(input[0]);
}

/*
REFACTORED SOLUTION -

Because the elements are converted into numbers within the tier push scoped 
in the for-loop, using toString is not necessary. Additionally, within the 
for loop, we do not need to use the "join" method when we redefine input, 
because the numbers will not be push into the "tier" array as strings. At 
the very end of our function, we can make use of "number" and "join" to avoid 
hard coding the return of the first element of the input array returned as output.
*/

function digitsAverage(input) {
  input = String(input).split('');

  while (input.length > 1) {
    let tier = [];

    for (let i = 0; i < input.length - 1; i++) {
      tier.push(Math.ceil((Number(input[i]) + Number(input[i + 1])) / 2));
    }

    input = tier;
  }
  return Number(input.join(''));
}
