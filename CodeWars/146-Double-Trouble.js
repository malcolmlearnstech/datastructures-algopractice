function trouble(x, t) {
  let i = 0;

  while (i < x.length) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, i + 1);
    } else i++;
  }

  return x;
}
