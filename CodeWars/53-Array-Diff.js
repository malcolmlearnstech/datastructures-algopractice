function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      a[i] = 'x';
    }
  }
  return a.filter((element) => element !== 'x');
}
