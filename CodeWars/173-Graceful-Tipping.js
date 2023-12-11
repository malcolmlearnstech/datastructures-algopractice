function gracefulTipping(bill) {
  let final = bill + bill * 0.15;

  if (final < 10) {
    return Math.ceil(final);
  } else if (final > 10 && final < 99.99) {
    return Math.ceil(final / 5) * 5;
  } else if (final > 100 && final < 999.99) {
    return Math.ceil(final / 50) * 50;
  } else if (final > 1000 && final < 9999.99) {
    return Math.ceil(final / 500) * 500;
  } else if (final > 10000 && final < 99999.99) {
    return Math.ceil(final / 5000) * 5000;
  } else if (final > 100000 && final < 999999.99) {
    return Math.ceil(final / 50000) * 50000;
  } else if (final > 1000000 && final < 9999999.99) {
    return Math.ceil(final / 500000) * 500000;
  } else if (final > 10000000 && final < 99999999.99) {
    return Math.ceil(final / 5000000) * 5000000;
  } else if (final > 100000000 && final < 999999999.99) {
    return Math.ceil(final / 50000000) * 50000000;
  }
}

/*
REFACTORED SOLUTION - 

Obviously building out all conditionals to reach the amounts 
given in the test cases DOES work, but its inconvenient. A more 
programmatic approach is to figure out how many zeros to divide 
and multiply by. We make use of the Math.pow method, then 
multiply by 5 as the rounding indicated in the challenge prompt 
increases by powers 5 times exponential 10.
*/

function gracefulTipping(bill) {
  let final = bill + bill * 0.15;
  let multiplier = Math.ceil(
    5 * Math.pow(10, Math.floor(Math.log10(final) - 1))
  );

  return Math.ceil(final / multiplier) * multiplier;
}
