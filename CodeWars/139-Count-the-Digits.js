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
