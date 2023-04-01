function sumDigPow(a, b) {
  let start = a;
  let array = [];

  while (start < b) {
    let startSplit = String(start).split('');
    let sum = 0;

    for (let i = 0; i < startSplit.length; i++) {
      sum += Math.pow(Number(startSplit[i]), i + 1);
    }

    if (sum < b && sum === start) {
      array.push(start);
    }
    start++;
  }

  return array;
}
