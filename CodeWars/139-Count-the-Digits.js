function nbDig(n, d) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    let current = String(i * i);

    for (let j = 0; j < current.length; j++) {
      if (Number(current[j]) === d) {
        count++;
      }
    }
  }
  return count;
}

/* REFACTORED SOLUTION */

function nbDig(n, d) {
  let count = '';
  let regex = RegExp(d, 'g');

  for (let i = 0; i <= n; i++) {
    count += String(Math.pow(i, 2));
  }

  return count.match(regex).length;
}
