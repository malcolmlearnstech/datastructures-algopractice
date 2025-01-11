function nbYear(p0, percent, aug, p) {
  let yearCount = 0;
  percent = percent / 100;

  while (p0 < p) {
    yearCount++;
    p0 += Math.floor(p0 * percent) + aug;
  }

  return yearCount;
}
