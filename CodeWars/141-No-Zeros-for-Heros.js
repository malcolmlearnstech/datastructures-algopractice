function noBoringZeros(n) {
  n = String(n).split('');

  for (let i = n.length - 1; n[i] === '0'; i--) {
    n[i] = '';
  }

  return Number(n.join(''));
}
