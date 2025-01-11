function nbYear(p0, percent, aug, p) {
  let yearCount = 0;
  percent = percent / 100;

  while (p0 < p) {
    yearCount++;
    p0 += Math.floor(p0 * percent) + aug;
  }

  return yearCount;
}

/*
REFACTORED SOLUTION -

Try out implementing pretty much the same logic but using a for-loop instead.
*/

function nbYear(p0, percent, aug, p) {
  let yearCount = 0;
  for (let i = yearCount; p0 < p; yearCount++) {
    p0 = p0 + Math.floor(p0 * (percent / 100)) + aug;
  }
  return yearCount;
}
