function solve(str, idx) {
  if (str[idx] !== '(') {
    return -1;
  }

  let notation = 0;

  for (let i = idx; i < str.length; i++) {
    if (str[i] === '(') {
      notation++;
    }
    if (str[i] === ')') {
      notation--;
    }
    if (notation === 0) {
      return i;
    }
  }
}
