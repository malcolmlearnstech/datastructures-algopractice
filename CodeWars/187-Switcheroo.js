function switcheroo(x) {
  x = x.split('');
  for (let i = 0; i < x.length; i++) {
    let char = x[i];
    if (char === 'a') {
      x[i] = 'b';
      continue;
    }

    if (char === 'b') {
      x[i] = 'a';
      continue;
    }
  }
  return x.join('');
}
