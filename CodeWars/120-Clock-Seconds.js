function past(h, m, s) {
  let milliseconds = 0;

  milliseconds += s * 1000;
  milliseconds += m * 60000;
  milliseconds += h * 3600000;

  return milliseconds;
}
